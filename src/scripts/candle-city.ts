/**
 * Page background: a neon wireframe city of 3D candlesticks (bodies + wicks, red = down, green = up) that the camera flies
 * through forever, along a winding street and weaving between median candles, rising and swinging round as the
 * page scrolls. Raw WebGL2, one instanced unit cube. Each candle's z is wrapped in the vertex shader
 * (`mod(z + track, depth)`), so there is no CPU work per frame and the wrap happens out of sight:
 * far away inside the fog on one end, behind the camera on the other.
 *
 * The canvas has no CSS opacity: a full-viewport layer with `opacity` costs the browser an extra compositing group every
 * frame (Firefox/WebRender in particular), so the page-level opacity (`--city-alpha`, per theme) is applied inside the
 * blend instead, see `readColors` and the blend setup in `initCandleCity`.
 * Look: faces are nearly transparent, the edges are bright lines of constant screen width with a soft glow band around
 * them (distance to the nearest edge, measured in world units and sized per pixel with fwidth, so the lines stay crisp
 * and the same width from near to far). Two glowing "moving average" ribbons (brand blue and purple) thread through the
 * street: chains of thin boxes whose vertices follow the road and a slow vertical wave, drawn by the same instanced draw.
 * The frame itself is driven by the shared scroll loop (./scroll-loop): one rAF for the whole page, one scrollY read per frame.
 */

import { subscribe } from './scroll-loop';

type Rgb = [number, number, number];

const DEPTH = 150; // length of the looping street
const BEHIND = 20; // how far behind the camera candles travel before wrapping
const SPEED = 7; // units per second along the track
const FLOATS = 7; // offset(3) + scale(3) + isUp(1)
const TAU = Math.PI * 2;

// Flight path. S is the absolute track position (forward distance, wraps every DEPTH). Every harmonic fits a whole
// number of times into DEPTH, so the path is seamless across the mod wrap. The street centre is road(S); the
// camera flies at road(S) + weave(S). road() is duplicated in the vertex shader from the same table (ROAD_GLSL),
// so shader and camera cannot drift apart. weave() and the derivatives only run on the CPU.
interface Harmonic {
  amp: number; // world units
  waves: number; // full periods per DEPTH
  phase: number; // radians
}
const ROAD: Harmonic[] = [
  { amp: 7, waves: 1, phase: 0.7 }, // long S-bend, 150 units
  { amp: 2, waves: 3, phase: 1 }, // wobble, 50 units
];
const WEAVE: Harmonic[] = [{ amp: 2.8, waves: 4, phase: 2 }]; // slalom, 37.5 units (5.4 s)
const SLALOM = WEAVE[0]; // medians go where this peaks, so the camera passes them on alternating sides
const LOOK = 30; // aim at the path this far ahead
const EYE_NOISE = 0.25; // organic sideways drift on top of the path
const MAX_BANK = (8 * Math.PI) / 180; // roll into turns, clamped
const BANK_SCALE = 0.07; // path acceleration (units per unit^2) that gives ~76% of MAX_BANK
const BANK_LEAD = 2; // bank slightly ahead of the current curvature
const BANK_DAMP = 3; // 1/s, smoothing of the roll

// Lanes sit at +-(LANE0 + 3.2 * lane) from the street centre, medians (OBSTACLE_W wide) on it.
// Clearance, camera to nearest candle edge, worst case over the whole loop (numerically scanned; includes lane jitter
// +-0.25, EYE_NOISE and the street shifting sideways while the camera passes a candle's 0.8 half depth):
//   side lanes: inner edge 6 - 0.25 - 0.8 = 4.95 from the street centre, camera at most 2.8 + 0.25 off it: >= 1.5
//   medians:    half width 0.55, camera 2.8 - 0.25 off the centre at the peak: >= 1.5
const LANE0 = 6;
const OBSTACLE_W = 1.1;

// Derivative `order` of a harmonic sum: each derivative multiplies by the angular frequency and shifts the phase by 90 degrees.
const wave = (hs: Harmonic[], s: number, order = 0): number =>
  hs.reduce((sum, h) => {
    const w = (TAU * h.waves) / DEPTH;
    return sum + h.amp * w ** order * Math.sin(w * s + h.phase + (order * Math.PI) / 2);
  }, 0);
const road = (s: number): number => wave(ROAD, s);
const weave = (s: number): number => wave(WEAVE, s);
const path = (s: number, order = 0): number => wave(ROAD, s, order) + wave(WEAVE, s, order);

const ROAD_GLSL = ROAD.map((h) => `${h.amp.toFixed(3)} * sin(s * ${((TAU * h.waves) / DEPTH).toPrecision(9)} + ${h.phase.toFixed(3)})`).join(' + ');

// Moving-average ribbons: lateral offset from the street centre and height as a function of the track position s. Every
// wave count is a whole number per DEPTH, so they are seamless across the wrap. Kind 0 = blue, 1 = purple.
const K = TAU / DEPTH;
const RIBBON_GLSL = `
float ribLat(float s, float k) {
  return mix(5.2 * sin(s * ${(K * 2).toPrecision(9)} + 0.6), -4.4 * sin(s * ${(K * 3).toPrecision(9)} + 2.4), k);
}
float ribY(float s, float k) {
  return mix(5.5 + 2.6 * sin(s * ${(K * 3).toPrecision(9)} + 1.2) + 0.8 * sin(s * ${(K * 7).toPrecision(9)}),
             8.5 + 2.8 * sin(s * ${(K * 2).toPrecision(9)} + 3.0) + 1.0 * sin(s * ${(K * 5).toPrecision(9)} + 0.4), k);
}`;
const RIB_CORE = 0.09; // ribbon thickness, world units
const RIB_HALO = 0.42; // soft outer tube
const RIB_KIND = 2; // aUp >= RIB_KIND marks a ribbon instance: 2 + kind + 2 * halo

const VERT = `#version 300 es
layout(location = 0) in vec3 aPos;      // unit cube, -0.5..0.5
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec3 aOffset;   // box centre, x relative to the street centre
layout(location = 3) in vec3 aScale;
layout(location = 4) in float aUp;      // 0 down candle, 1 up candle, >= 2 ribbon segment (2 + kind + 2 * halo)
uniform mat4 uViewProj;
uniform vec3 uEye;
uniform float uTrack, uRoadCam, uDepth, uBehind; // uTrack = camera S (mod depth), uRoadCam = road(uTrack)
out vec3 vNormal;
out vec3 vLocal;
out vec3 vScale;
out float vUp;
out float vFade;
out float vBody;
out float vRib;   // 0 candle, 1 blue ribbon, 2 purple ribbon
out float vHalo;
float road(float s) { return ${ROAD_GLSL}; }   // generated from ROAD
${RIBBON_GLSL}
void main() {
  vec3 c = aOffset;
  // Candles travel towards the camera, pass behind it (uBehind) and re-enter at the far end inside the fog.
  c.z = mod(aOffset.z + uTrack, uDepth) - uDepth + uBehind;
  vec3 world;
  float rib = step(${(RIB_KIND - 0.5).toFixed(1)}, aUp);
  if (rib > 0.5) {
    // Ribbon: each vertex follows the road and the wave at its own track position, so the chain of short boxes bends smoothly.
    float k = aUp - ${RIB_KIND.toFixed(1)};
    float halo = step(1.5, k);
    float kind = k - 2.0 * halo;
    float z = c.z + aPos.z * aScale.z;
    float sv = uTrack - z;
    world = vec3(road(sv) - uRoadCam + ribLat(sv, kind), ribY(sv, kind), z) + vec3(aPos.xy * aScale.xy, 0.0);
    vRib = 1.0 + kind;
    vHalo = halo;
  } else {
    // Absolute track position of this candle; follow the street, expressed relative to the camera.
    float s = uTrack - c.z;
    c.x += road(s) - uRoadCam;
    world = c + aPos * aScale;
    vRib = 0.0;
    vHalo = 0.0;
  }
  float d = distance(world, uEye);
  // Fog starts further out the higher the eye is, so an aerial view still shows the city.
  vFade = (1.0 - smoothstep(uDepth * 0.3 + uEye.y, uDepth - uBehind - 25.0, d)) * smoothstep(1.5, 5.0, d);
  vNormal = aNormal;
  vLocal = aPos;
  vScale = aScale;
  vUp = aUp;
  vBody = step(0.5, aScale.x);
  gl_Position = uViewProj * vec4(world, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;
in vec3 vNormal;
in vec3 vLocal;
in vec3 vScale;
in float vUp;
in float vFade;
in float vBody;
in float vRib;
in float vHalo;
uniform vec3 uUp, uDown;
uniform float uDark; // 1 on the dark theme: neon lines are brightened; 0 on light: they are deepened to stay visible on white
out vec4 outColor;
// Wireframe look: nearly clear faces, bright edge lines with a soft glow band around them. Over-blending keeps
// stacked layers bounded (alpha never exceeds 1).
const float WALL_A = 0.09;  // body faces
const float ROOF_A = 0.17;  // body roof, lit a little more
const float LINE_A = 0.95;  // edge lines
const float GLOW_A = 0.34;  // soft band next to the lines
const float WICK_A = 0.85;  // wicks are thin lines themselves
const float BACK_A = 0.8;   // far walls, relative to front faces
const float BACK_DIM = 0.7; // far walls, colour
const vec3 RIB_A = vec3(0.27, 0.52, 1.0);
const vec3 RIB_B = vec3(0.84, 0.3, 1.0);
void main() {
  bool front = gl_FrontFacing;
  if (vRib > 0.5) {
    vec3 rc = vRib < 1.5 ? RIB_A : RIB_B;
    float ra = vHalo > 0.5 ? 0.15 : 0.95;
    ra *= vFade;
    outColor = vec4(rc * ra, ra);
    return;
  }
  vec3 n = normalize(vNormal) * (front ? 1.0 : -1.0);                    // inside of a far wall faces the viewer
  vec3 base = mix(uDown, uUp, vUp);
  float lambert = max(dot(n, normalize(vec3(-0.35, 0.75, 0.55))), 0.0);
  float roof = step(0.5, vNormal.y);                                     // the roof face, seen from either side
  vec3 face = base * (0.5 + 0.6 * lambert);
  vec3 neon = mix(base * 0.85, mix(base, vec3(1.0), 0.3) * 1.3, uDark);
  // Distance (world units) to the nearest edge of this face, normal axis excluded; px = world size of one pixel here.
  vec3 d = (0.5 - abs(vLocal)) * vScale + abs(vNormal) * 1000.0;
  float dm = min(d.x, min(d.y, d.z));
  float px = fwidth(dm);
  float line = 1.0 - smoothstep(0.0, px * 1.7, dm);                      // ~1.7 px line at any distance
  float glow = 1.0 - smoothstep(0.0, clamp(px * 8.0, 0.05, 0.5), dm);    // soft band, 8 px (capped in world units)
  float lit = mix(max(line, glow * 0.55), 1.0, 1.0 - vBody);             // a wick is all line
  vec3 col = mix(face, neon, lit);
  float a = mix(WICK_A, WALL_A, vBody);
  a = max(a, ROOF_A * roof * vBody);
  a = max(a, LINE_A * line * vBody);
  a = max(a, GLOW_A * glow * vBody);
  if (!front) {
    col *= BACK_DIM;
    a *= BACK_A;
  }
  a *= vFade;
  outColor = vec4(col * a, a);                                           // premultiplied alpha
}`;

const DEFAULT_UP: Rgb = [0.03, 0.6, 0.51];
const DEFAULT_DOWN: Rgb = [0.95, 0.21, 0.27];
const DEFAULT_ALPHA = 0.44; // --city-alpha, dark theme

// Scroll-driven camera (s = eased scroll progress, 0 top .. 1 bottom).
const SCROLL_EASE = 4; // 1/s, exponential damping towards the real scroll position
const RISE = 22; // eye height gained at the bottom (clears every roof and wick, ~20)
const GLIDE_DAMP = 0.6; // share of the 30 s height glide removed at the bottom
const TILT = 28; // look-at point drops this far below the eye at the bottom...
const AIM_Z = 12; // ...and moves this much closer (LOOK -> LOOK - 12 ahead): about 57 degrees down
const YAW = Math.PI / 6; // view swings 30 degrees around the vertical axis

function parseColor(value: string, fallback: Rgb): Rgb {
  const v = value.trim();
  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(v);
  if (hex) {
    const h = hex[1].length === 3 ? [...hex[1]].map((c) => c + c).join('') : hex[1];
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255) as Rgb;
  }
  const rgb = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(v);
  if (rgb) return [Number(rgb[1]) / 255, Number(rgb[2]) / 255, Number(rgb[3]) / 255];
  return fallback;
}

/** Unit cube, 36 vertices, interleaved position + normal. */
function cubeVertices(): Float32Array {
  const out: number[] = [];
  const faces: [number[], number[], number[]][] = [
    [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
    [[-1, 0, 0], [0, 0, 1], [0, 1, 0]],
    [[0, 1, 0], [0, 0, 1], [1, 0, 0]],
    [[0, -1, 0], [1, 0, 0], [0, 0, 1]],
    [[0, 0, 1], [1, 0, 0], [0, 1, 0]],
    [[0, 0, -1], [0, 1, 0], [1, 0, 0]],
  ];
  for (const [n, u, v] of faces) {
    for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]]) {
      for (let k = 0; k < 3; k++) out.push(0.5 * n[k] + 0.5 * a * u[k] + 0.5 * b * v[k]);
      out.push(...n);
    }
  }
  return new Float32Array(out);
}

/** Streets along -z with an empty central avenue (x relative to the road) and slalom medians on it. */
function buildCity(candles: number, lanes: number, ribbonStep: number): { data: Float32Array; count: number } {
  const rows = Math.max(1, Math.round(candles / (lanes * 2)));
  const rowGap = DEPTH / rows;
  const medians = 2 * SLALOM.waves;
  const segments = Math.round(DEPTH / ribbonStep);
  const data = new Float32Array(((rows * lanes * 2 + medians) * 2 + segments * 4) * FLOATS);
  let n = 0;
  const put = (x: number, y: number, z: number, sx: number, sy: number, sz: number, up: number): void => {
    data.set([x, y, z, sx, sy, sz, up], n * FLOATS);
    n++;
  };
  // One candle (body + wick) on a lot.
  const lot = (x: number, z: number, width: number): void => {
    const up = Math.random() < 0.55 ? 1 : 0;
    const bottom = Math.random() * 2;
    const height = 2 + Math.pow(Math.random(), 1.6) * 12;
    const wickLow = Math.max(0, bottom - Math.random() * 1.5);
    const wickHigh = bottom + height + 0.5 + Math.random() * 4;
    put(x, bottom + height / 2, z, width, height, width, up); // body
    put(x, (wickLow + wickHigh) / 2, z, 0.12, wickHigh - wickLow, 0.12, up); // wick
  };
  for (let r = 0; r < rows; r++) {
    for (let l = 0; l < lanes; l++) {
      for (const side of [-1, 1]) {
        lot(side * (LANE0 + l * 3.2) + (Math.random() - 0.5) * 0.5, r * rowGap + (Math.random() - 0.5) * rowGap * 0.5, 1.6);
      }
    }
  }
  // Medians at the street centre, exactly where |weave| peaks (sin = +-1), so the camera passes them on alternating sides.
  // A candle with offset z sits at track position S = -z - BEHIND (mod DEPTH), see the vertex shader.
  for (let m = 0; m < medians; m++) {
    const s = (DEPTH / medians) * (m + 0.5 - SLALOM.phase / Math.PI);
    lot(0, (((-s - BEHIND) % DEPTH) + DEPTH) % DEPTH, OBSTACLE_W);
  }
  // Moving-average ribbons: a thin core and a soft halo per colour, one box per segment (the shader bends them along the road).
  for (let i = 0; i < segments; i++) {
    const z = (i + 0.5) * ribbonStep;
    for (let kind = 0; kind < 2; kind++) {
      put(0, 0, z, RIB_CORE, RIB_CORE, ribbonStep, RIB_KIND + kind);
      put(0, 0, z, RIB_HALO, RIB_HALO, ribbonStep, RIB_KIND + kind + 2);
    }
  }
  return { data, count: n };
}

type Mat = Float32Array;

function perspective(fovY: number, aspect: number, near: number, far: number): Mat {
  const f = 1 / Math.tan(fovY / 2);
  const m = new Float32Array(16);
  m[0] = f / aspect;
  m[5] = f;
  m[10] = (far + near) / (near - far);
  m[11] = -1;
  m[14] = (2 * far * near) / (near - far);
  return m;
}

function lookAt(eye: Rgb, target: Rgb, up: Rgb): Mat {
  const sub = (a: Rgb, b: Rgb): Rgb => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const norm = (a: Rgb): Rgb => {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    return [a[0] / l, a[1] / l, a[2] / l];
  };
  const cross = (a: Rgb, b: Rgb): Rgb => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const dot = (a: Rgb, b: Rgb): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const z = norm(sub(eye, target));
  const x = norm(cross(up, z));
  const y = cross(z, x);
  return new Float32Array([x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x, eye), -dot(y, eye), -dot(z, eye), 1]);
}

function multiply(a: Mat, b: Mat): Mat {
  const out = new Float32Array(16);
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      let s = 0;
      for (let k = 0; k < 4; k++) s += a[k * 4 + r] * b[c * 4 + k];
      out[c * 4 + r] = s;
    }
  }
  return out;
}

export function initCandleCity(canvas: HTMLCanvasElement): void {
  // No depth buffer (it is only ever tested against the cleared value and never written), and prefer the integrated GPU:
  // this is a background decoration shown at low opacity, it must not wake the discrete GPU on dual-GPU laptops.
  // MSAA stays on: the wicks are only 0.12 units wide and drop below a pixel with distance, without coverage
  // antialiasing they would shimmer as the camera moves (shader-drawn edges are aliased either way). On tile-based
  // GPUs the 4x resolve is nearly free.
  const gl = canvas.getContext('webgl2', { antialias: true, alpha: true, premultipliedAlpha: true, depth: false, powerPreference: 'low-power' });
  if (!gl) return;

  const compile = (type: number, src: string): WebGLShader | null => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  const program = gl.createProgram();
  if (!vs || !fs || !program) return;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  const loc = (name: string): WebGLUniformLocation | null => gl.getUniformLocation(program, name);
  const uViewProj = loc('uViewProj');
  const uEye = loc('uEye');
  gl.uniform1f(loc('uDepth'), DEPTH);
  gl.uniform1f(loc('uBehind'), BEHIND);
  const uTrack = loc('uTrack');
  const uRoadCam = loc('uRoadCam');
  const uUp = loc('uUp');
  const uDown = loc('uDown');
  const uDark = loc('uDark');

  // Geometry: static cube + per-instance buffer (divisor 1).
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const cube = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cube);
  gl.bufferData(gl.ARRAY_BUFFER, cubeVertices(), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 0);
  gl.enableVertexAttribArray(1);
  gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12);

  const inst = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, inst);
  const stride = FLOATS * 4;
  [[2, 3, 0], [3, 3, 12], [4, 1, 24]].forEach(([index, size, offset]) => {
    gl.enableVertexAttribArray(index);
    gl.vertexAttribPointer(index, size, gl.FLOAT, false, stride, offset);
    gl.vertexAttribDivisor(index, 1);
  });

  // Translucent pass: premultiplied over-blending, no depth test or write, so candles don't hide each other.
  // The page opacity o (blend colour alpha, see readColors) is folded into the blend: dst' = o * src + (1 - src.a) * dst.
  // By induction the buffer always holds o * (the plain over-composite), which is exactly what CSS `opacity: o` on the
  // finished canvas produced, without the compositor having to group and fade a full-screen layer every frame.
  // (Scaling each fragment's alpha instead would be wrong: stacked layers would no longer saturate before the fade.)
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.CONSTANT_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.enable(gl.CULL_FACE);
  gl.clearColor(0, 0, 0, 0);

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let instances = 0;
  let tier = '';
  let aspect = 1;
  let time = reduced.matches ? 6 : 0;
  let progress = 0; // real scroll position, 0..1
  let maxScroll = 1; // scrollHeight - innerHeight, cached: measured on resize / page height changes, never while scrolling
  const clamp01 = (v: number): number => Math.min(1, Math.max(0, v));
  let eased = 0; // what the camera uses
  let bank = 0; // smoothed roll, radians
  let step = 0; // seconds since the previous frame (0 for static renders)

  const readColors = (): void => {
    const css = getComputedStyle(document.documentElement);
    gl.useProgram(program);
    gl.uniform3fv(uUp, parseColor(css.getPropertyValue('--up'), DEFAULT_UP));
    gl.uniform3fv(uDown, parseColor(css.getPropertyValue('--down'), DEFAULT_DOWN));
    gl.uniform1f(uDark, document.documentElement.classList.contains('dark') ? 1 : 0);
    const alpha = parseFloat(css.getPropertyValue('--city-alpha'));
    gl.blendColor(0, 0, 0, Number.isFinite(alpha) ? clamp01(alpha) : DEFAULT_ALPHA);
  };

  const render = (): void => {
    const s = eased;
    const sway = Math.sin(time * 0.21);
    const track = (time * SPEED) % DEPTH; // camera S; the shader's mod() takes the same value
    // Glide between street level (~1.5) and rooftop height (~11) over a 30 s cycle, starting low.
    // The exponent keeps it hugging the street a little longer than a plain cosine would.
    const lift = Math.pow(0.5 - 0.5 * Math.cos(time * ((Math.PI * 2) / 30)), 1.4);
    const timeY = 1.5 + lift * 9.5 * (1 - GLIDE_DAMP * s) + Math.sin(time * 0.71) * 0.3;
    const eyeY = timeY + s * RISE;
    // The scene is expressed relative to the street centre at the camera, so the eye sits at weave(S) there.
    const eye: Rgb = [weave(track) + sway * EYE_NOISE, eyeY, 0];
    // Aim at the path LOOK ahead (less when high up) so the view leads into the bends.
    const ahead = LOOK - AIM_Z * s;
    const bend = path(track + ahead) - path(track);
    // Looking ahead at the top (target follows partway so it pitches down when high), steeply down at the bottom.
    const aimY = (4.2 + (timeY - 3) * 0.5) * (1 - s) + (eyeY - TILT) * s;
    const aim: Rgb = [eye[0] + bend + Math.sin(time * 0.13) * 0.5, aimY, -ahead];
    // Swing the eye -> target direction around the vertical axis (scroll yaw on top of the path heading).
    const yaw = -YAW * s;
    const dx = aim[0] - eye[0];
    const dz = aim[2] - eye[2];
    const target: Rgb = [
      eye[0] + dx * Math.cos(yaw) + dz * Math.sin(yaw),
      aim[1],
      eye[2] - dx * Math.sin(yaw) + dz * Math.cos(yaw),
    ];
    // Bank into the turn: lateral acceleration is path'', and a left turn (negative) tips the up vector left.
    const goal = MAX_BANK * Math.tanh(path(track + BANK_LEAD, 2) / BANK_SCALE);
    bank += (goal - bank) * (running ? 1 - Math.exp(-step * BANK_DAMP) : 1);
    const hx = target[0] - eye[0];
    const hz = target[2] - eye[2];
    const hl = Math.hypot(hx, hz) || 1;
    const roll = Math.tan(bank) + Math.sin(time * 0.17) * 0.03; // sideways tilt of the up vector
    const up: Rgb = [(-hz / hl) * roll, 1, (hx / hl) * roll]; // roll * camera-right
    const viewProj = multiply(perspective(Math.PI / 3, aspect, 0.1, DEPTH + 10), lookAt(eye, target, up));
    gl.clear(gl.COLOR_BUFFER_BIT); // no depth buffer
    gl.uniformMatrix4fv(uViewProj, false, viewProj);
    gl.uniform3fv(uEye, eye);
    gl.uniform1f(uTrack, track);
    gl.uniform1f(uRoadCam, road(track));
    // Far walls first, then near walls, so each candle composites back to front.
    gl.cullFace(gl.FRONT);
    gl.drawArraysInstanced(gl.TRIANGLES, 0, 36, instances);
    gl.cullFace(gl.BACK);
    gl.drawArraysInstanced(gl.TRIANGLES, 0, 36, instances);
  };

  const resize = (): void => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    // The canvas is shown at 30-50% opacity behind the content and stretched by CSS, so it never needs more than CSS
    // pixels (DPR capped at 1), and on wide screens (the most pixels to fill) a quarter fewer per axis.
    const scale = w >= 1440 ? 0.75 : 1;
    const cw = Math.round(w * scale);
    const ch = Math.round(h * scale);
    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }
    gl.viewport(0, 0, cw, ch);
    aspect = w / h;
    const next = w < 640 ? 'sm' : w < 1024 ? 'md' : 'lg';
    if (next !== tier) {
      tier = next;
      const city = buildCity(next === 'sm' ? 140 : next === 'md' ? 240 : 340, next === 'sm' ? 4 : 6, next === 'sm' ? 1 : 0.75);
      gl.bindBuffer(gl.ARRAY_BUFFER, inst);
      gl.bufferData(gl.ARRAY_BUFFER, city.data, gl.STATIC_DRAW);
      instances = city.count;
    }
    if (!running) render();
  };

  // The only layout reads besides resize(): run when the viewport or the page height changes, not per scroll event.
  const measure = (): void => {
    maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    progress = clamp01(scrollY / maxScroll);
    loop.invalidate(); // a static (reduced motion) canvas re-renders with the new progress on the next frame
  };

  // Called by the shared scroll loop. While animating it runs every vsync and is throttled here; without animation
  // (reduced motion) it only runs when the scroll position (or the page size) changed.
  let running = false;
  let last = 0;
  const MIN_FRAME_MS = 15; // cap at ~60 fps: on 120/144 Hz displays this renders every other (or third) vsync
  const frame = (y: number, now: number): void => {
    progress = clamp01(y / maxScroll);
    if (!running) {
      eased = progress; // no animation loop (reduced motion): follow scroll directly
      render();
      return;
    }
    if (now - last < MIN_FRAME_MS) return;
    const dt = Math.min((now - last) / 1000, 0.1);
    time += dt;
    step = dt;
    eased += (progress - eased) * (1 - Math.exp(-dt * SCROLL_EASE));
    last = now;
    render();
  };
  // order 2: after the DOM-writing subscribers (section nav, scroll meter), so the GL work is submitted last in the frame.
  const loop = subscribe(frame, { order: 2 });

  // Animate only while the tab is visible and motion is allowed.
  const sync = (): void => {
    const want = !document.hidden && !reduced.matches;
    if (want && !running) {
      running = true;
      last = performance.now();
    } else if (!want && running) {
      running = false;
    }
    loop.animate(running);
  };

  readColors();
  measure();
  eased = progress;
  resize();
  render();

  addEventListener('resize', measure, { passive: true });
  new ResizeObserver(resize).observe(canvas);
  new ResizeObserver(measure).observe(document.body); // page height changes (images, fonts, accordions)
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  new MutationObserver(() => {
    readColors();
    if (!running) render();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  sync();
}
