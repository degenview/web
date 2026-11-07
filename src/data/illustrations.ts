/**
 * Small inline SVG illustrations (320x200) shared by the home page cards and the FAQ.
 * They only use the site's color tokens, so they follow the light and dark themes.
 */

// Small seeded PRNG so the candles in the "tools" picture are the same on every build.
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const f = (n: number) => +n.toFixed(1);

// Candles for the charting-tools picture: a pullback, then a climb.
const rand = rng(11);
let px = 100;
const candleSvg = Array.from({ length: 17 }, (_, i) => {
  const o = px;
  px += (i < 6 ? -1.6 : 2.4) + (rand() - 0.5) * 5;
  const c = px, h = Math.max(o, c) + rand() * 3, l = Math.min(o, c) - rand() * 3;
  const y = (v: number) => f(176 - (v - 84) * 3.1);
  const x = f(50 + i * 14.5), col = c >= o ? 'var(--up)' : 'var(--down)';
  return `<path d="M${x} ${y(h)}V${y(l)}" stroke="${col}" stroke-width="1.2"/><rect x="${f(Number(x) - 3.4)}" y="${y(Math.max(o, c))}" width="6.8" height="${Math.max(2, f(Math.abs(y(o) - y(c))))}" rx="1" fill="${col}"/>`;
}).join('');

const MONO = "font-family=\"'JetBrains Mono Variable', ui-monospace, monospace\"";
const GRAD = 'style="stop-color:var(--purple)"';

export const art: Record<string, string> = {
  // A signup form, struck through, and the one button you actually need.
  'no-account': `
    <defs><linearGradient id="mf-na" x1="0" x2="1"><stop offset="0" stop-color="#2962ff"/><stop offset="1" ${GRAD}/></linearGradient></defs>
    <g opacity=".6">
      <rect x="48" y="24" width="150" height="126" rx="12" fill="var(--surface)" stroke="var(--border)"/>
      <rect x="64" y="40" width="58" height="8" rx="4" fill="var(--chrome)"/>
      <text x="64" y="66" font-size="7" fill="var(--muted)">Email</text>
      <rect x="64" y="70" width="118" height="16" rx="5" fill="none" stroke="var(--border)"/>
      <text x="64" y="102" font-size="7" fill="var(--muted)">Password</text>
      <rect x="64" y="106" width="118" height="16" rx="5" fill="none" stroke="var(--border)"/>
      <rect x="64" y="130" width="118" height="12" rx="6" fill="var(--chrome)"/>
    </g>
    <path d="M40 154 214 22" stroke="var(--down)" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="204" cy="28" r="13" fill="var(--down)"/>
    <path d="m198.5 22.5 11 11m0-11-11 11" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
    <g style="filter:drop-shadow(0 8px 14px rgb(41 98 255/.55))">
      <rect x="152" y="142" width="136" height="38" rx="19" fill="url(#mf-na)"/>
      <text x="213" y="165.5" font-size="12.5" font-weight="600" fill="#fff" text-anchor="middle">Just open it</text>
    </g>
    <path d="m268 160 0 20 5-4.5 3.5 7 3-1.5-3.5-7 7-.5z" fill="#fff" stroke="#000" stroke-width="1.2" stroke-linejoin="round"/>`,

  // Lists behind lists, and the symbol that matters.
  watchlists: `
    <defs><linearGradient id="mf-wl" x1="0" x2="1"><stop offset="0" stop-color="#2962ff"/><stop offset="1" ${GRAD}/></linearGradient></defs>
    <rect x="86" y="18" width="164" height="150" rx="12" fill="var(--surface)" stroke="var(--border)" opacity=".35"/>
    <rect x="72" y="30" width="178" height="150" rx="12" fill="var(--surface)" stroke="var(--border)" opacity=".6"/>
    <rect x="56" y="42" width="200" height="136" rx="12" fill="var(--surface)" stroke="var(--border)"/>
    <text x="72" y="63" font-size="9" font-weight="600" fill="var(--muted)">Watchlist 7</text>
    <rect x="206" y="53" width="40" height="15" rx="7.5" fill="var(--chrome)"/>
    <text x="226" y="63.4" font-size="8" fill="var(--fg)" text-anchor="middle">+ New</text>
    ${[
      ['BTC', '#f7931a', '0,12 12,8 24,10 36,2 48,5 60,-3', '+2.1%', 84],
      ['ETH', '#627eea', '0,2 12,6 24,0 36,3 48,-5 60,-8', '+0.8%', 104],
      ['SOL', '#9945ff', '0,10 12,6 24,9 36,3 48,6 60,-4', '+4.6%', 124],
      ['ZEC', '#f4b728', '0,12 12,7 24,9 36,0 48,2 60,-6', '+9.3%', 144],
    ].map(([t, c, pts, pct, y]) => `
      <circle cx="76" cy="${Number(y) + 10}" r="4.5" fill="${c}"/>
      <text x="88" y="${Number(y) + 13.3}" font-size="9.5" font-weight="600" fill="var(--fg)">${t}</text>
      <polyline points="${pts}" transform="translate(142 ${Number(y) + 8})" fill="none" stroke="var(--up)" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
      <text x="244" y="${Number(y) + 13.3}" font-size="9" font-weight="600" fill="var(--up)" text-anchor="end">${pct}</text>`).join('')}
    <text x="288" y="112" font-size="62" font-weight="600" text-anchor="middle" fill="url(#mf-wl)" style="filter:drop-shadow(0 0 12px rgb(110 80 255/.55))">∞</text>`,

  // Candles, a trend line, a Fib retracement and a ruler: the usual suspects.
  tools: `
    <rect x="10" y="30" width="24" height="124" rx="8" fill="var(--surface)" stroke="var(--border)"/>
    <g stroke="var(--muted)" stroke-width="1.4" fill="none" stroke-linecap="round">
      <path d="M17 44h10M22 39v10"/><path d="m17 66 10-9"/><path d="M17 86h10M17 91h6M17 81h10"/><path d="M17 112h10m-5-5v10"/><rect x="17" y="128" width="10" height="5" rx="1.5"/>
    </g>
    <rect x="96" y="70" width="196" height="40" fill="#2962ff" fill-opacity=".07"/>
    <g stroke="var(--muted)" stroke-width=".7" stroke-dasharray="3 3" opacity=".8">
      <path d="M96 70H292M96 90H292M96 110H292"/>
    </g>
    <g font-size="7" fill="var(--muted)"><text x="296" y="72" text-anchor="end" opacity="0">.</text><text x="100" y="67">0.382</text><text x="100" y="87">0.5</text><text x="100" y="107">0.618</text></g>
    ${candleSvg}
    <path d="M62 176 250 56" stroke="var(--purple)" stroke-width="2" stroke-linecap="round" style="filter:drop-shadow(0 0 5px var(--purple))"/>
    <circle cx="62" cy="176" r="3.6" fill="var(--bg)" stroke="var(--purple)" stroke-width="1.6"/><circle cx="250" cy="56" r="3.6" fill="var(--bg)" stroke="var(--purple)" stroke-width="1.6"/>
    <g>
      <path d="M270 150V62" stroke="var(--fg)" stroke-width="1" stroke-dasharray="2 2"/>
      <path d="m266 66 4-5 4 5M266 146l4 5 4-5" fill="none" stroke="var(--fg)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="246" y="98" width="48" height="16" rx="8" fill="var(--up)"/><text x="270" y="108.8" font-size="8.5" font-weight="700" fill="#000" text-anchor="middle">+14.8%</text>
    </g>`,

  // Panes stacked on a chart, and a CPU that is starting to sweat.
  indicators: `
    <defs><linearGradient id="mf-ix" x1="0" x2="1"><stop offset="0" style="stop-color:var(--up)"/><stop offset="1" style="stop-color:var(--down)"/></linearGradient></defs>
    <rect x="14" y="14" width="214" height="172" rx="10" fill="var(--surface)" stroke="var(--border)"/>
    <path d="M26 54 52 44 76 50 100 36 124 42 150 30 174 36 198 26 218 22 218 72 198 76 174 86 150 80 124 92 100 86 76 98 52 94 26 104Z" fill="var(--accent)" fill-opacity=".1"/>
    <path d="M26 80 52 70 76 76 100 60 124 66 150 52 174 58 198 46 218 42" fill="none" stroke="var(--up)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M26 86 52 80 76 80 100 70 124 70 150 62 174 62 198 54 218 50" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-linecap="round" style="filter:drop-shadow(0 0 4px var(--accent))"/>
    <path d="M26 92 52 88 76 86 100 80 124 78 150 72 174 70 198 64 218 60" fill="none" stroke="var(--purple)" stroke-width="1.4" stroke-linecap="round" style="filter:drop-shadow(0 0 4px var(--purple))"/>
    <path d="M14 112H228M14 150H228" stroke="var(--border)"/>
    <g stroke="var(--muted)" stroke-width=".6" stroke-dasharray="3 3" opacity=".7"><path d="M26 120H218M26 140H218"/></g>
    <text x="22" y="124" font-size="6.5" fill="var(--muted)">RSI</text>
    <path d="M26 134 44 128 62 138 80 124 98 132 116 120 134 130 152 122 170 134 188 126 206 118 218 122" fill="none" stroke="var(--accent-text)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
    <text x="22" y="161" font-size="6.5" fill="var(--muted)">MACD</text>
    ${Array.from({ length: 24 }, (_, i) => {
      const v = Math.sin(i / 3.2) * 9, up = v >= 0, x = 30 + i * 7.8;
      return `<rect x="${x.toFixed(1)}" y="${(up ? 168 - v : 168).toFixed(1)}" width="5" height="${Math.max(1, Math.abs(v)).toFixed(1)}" rx="1" fill="${up ? 'var(--up)' : 'var(--down)'}"/>`;
    }).join('')}
    <g style="filter:drop-shadow(0 0 12px rgb(41 98 255/.6))">
      <g stroke="var(--accent)" stroke-width="2" stroke-linecap="round">
        ${[0, 1, 2, 3].map((i) => `<path d="M${252 + i * 12} 38v6M${252 + i * 12} 94v6M238 ${52 + i * 12}h6M294 ${52 + i * 12}h6"/>`).join('')}
      </g>
      <rect x="244" y="44" width="56" height="56" rx="9" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.8"/>
      <rect x="254" y="54" width="36" height="36" rx="5" fill="var(--bg)" stroke="var(--border)"/>
      <text x="272" y="76.5" font-size="11" font-weight="800" fill="var(--accent-text)" text-anchor="middle" letter-spacing=".5">CPU</text>
    </g>
    <rect x="238" y="122" width="68" height="9" rx="4.5" fill="var(--chrome)"/>
    <rect x="238" y="122" width="52" height="9" rx="4.5" fill="url(#mf-ix)"/>
    <text x="238" y="147" font-size="8" fill="var(--muted)">load</text><text x="306" y="147" font-size="8.5" font-weight="700" fill="var(--down)" text-anchor="end">77%</text>
    <text x="238" y="170" font-size="8" fill="var(--muted)">indicators</text><text x="306" y="170" font-size="8.5" font-weight="700" fill="var(--fg)" text-anchor="end">42</text>`,

  // Price crosses a level, a toast pops up.
  alerts: `
    <path d="M30 156 60 144 90 148 120 126 150 118 180 100 200 88 225 76 255 62 288 46" fill="none" stroke="var(--up)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 6px rgb(34 171 148/.55))"/>
    <path d="M14 94H306" stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="4 4"/>
    <rect x="262" y="84" width="46" height="16" rx="8" fill="var(--accent)"/><text x="285" y="94.8" font-size="8.5" font-weight="700" fill="#fff" text-anchor="middle">76,000</text>
    <circle cx="190" cy="94" r="14" fill="none" stroke="var(--accent)" stroke-opacity=".25"/><circle cx="190" cy="94" r="8" fill="none" stroke="var(--accent)" stroke-opacity=".5"/><circle cx="190" cy="94" r="3.8" fill="#fff" stroke="var(--accent)" stroke-width="2"/>
    <g style="filter:drop-shadow(0 8px 14px rgb(0 0 0/.45))">
      <rect x="24" y="22" width="160" height="42" rx="11" fill="var(--surface)" stroke="var(--border)"/>
      <circle cx="46" cy="43" r="12" fill="var(--accent)"/>
      <path d="M46 36.5a5 5 0 0 0-5 5v3.2l-1.4 2.3h12.8L51 44.7v-3.2a5 5 0 0 0-5-5zm-1.6 12.3a1.7 1.7 0 0 0 3.2 0" fill="#fff"/>
      <text x="66" y="40" font-size="9.5" font-weight="700" fill="var(--fg)">BTC/USDT</text>
      <text x="66" y="53" font-size="8.5" fill="var(--muted)">Crossed above 76,000</text>
    </g>`,

  // Alert fires, a request leaves, something on the other end does a thing.
  webhooks: `
    <defs><marker id="mf-wh" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 8 4 0 8z" fill="var(--accent)"/></marker></defs>
    <circle cx="44" cy="100" r="22" fill="var(--accent)" style="filter:drop-shadow(0 0 14px rgb(41 98 255/.7))"/>
    <path d="M44 88.5a8.6 8.6 0 0 0-8.6 8.6v5.5l-2.4 4h22l-2.4-4v-5.5a8.6 8.6 0 0 0-8.6-8.6zm-3 21a3 3 0 0 0 6 0" fill="#fff"/>
    <path d="M70 100H108" stroke="var(--accent)" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#mf-wh)"/>
    <g style="filter:drop-shadow(0 8px 14px rgb(0 0 0/.4))">
      <rect x="112" y="54" width="110" height="92" rx="10" fill="var(--surface)" stroke="var(--border)"/>
      <text x="124" y="72" ${MONO} font-size="8.5" font-weight="700" fill="var(--accent-text)">POST /hook</text>
      <path d="M112 80H222" stroke="var(--border)"/>
      <g ${MONO} font-size="8.5" fill="var(--muted)">
        <text x="124" y="97">{</text>
        <text x="132" y="110"><tspan fill="var(--up)">"alert"</tspan>: "BTC",</text>
        <text x="132" y="122"><tspan fill="var(--up)">"price"</tspan>: 76012</text>
        <text x="124" y="135">}</text>
      </g>
    </g>
    <path d="M222 100C240 100 244 52 262 52M222 100H262M222 100C240 100 244 148 262 148" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-dasharray="4 3" marker-end="url(#mf-wh)"/>
    <g fill="var(--surface)" stroke="var(--border)">
      <rect x="264" y="36" width="34" height="34" rx="9"/><rect x="264" y="83" width="34" height="34" rx="9"/><rect x="264" y="131" width="34" height="34" rx="9"/>
    </g>
    <g fill="none" stroke="var(--fg)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M273 47h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-5 4v-4h-3a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"/>
      <rect x="273" y="95" width="16" height="12" rx="3"/><path d="M281 95v-5M277.5 100.5v.1M284.5 100.5v.1"/>
      <rect x="272" y="140" width="18" height="6" rx="2"/><rect x="272" y="150" width="18" height="6" rx="2"/><path d="M276 143v.1M276 153v.1"/>
    </g>`,

  // An editor, a ghost suggestion, a polite robot.
  ai: `
    <defs><linearGradient id="mf-ai" x1="0" x2="1"><stop offset="0" stop-color="#2962ff"/><stop offset="1" ${GRAD}/></linearGradient></defs>
    <rect x="20" y="16" width="280" height="168" rx="11" fill="var(--surface)" stroke="var(--border)"/>
    <path d="M20 40H300" stroke="var(--border)"/>
    <circle cx="34" cy="28" r="3.2" fill="var(--chrome)"/><circle cx="45" cy="28" r="3.2" fill="var(--chrome)"/><circle cx="56" cy="28" r="3.2" fill="var(--chrome)"/>
    <text x="150" y="31" font-size="8" fill="var(--muted)" text-anchor="middle" opacity=".9">rsi_cross.pine</text>
    <g ${MONO} font-size="9">
      <g fill="var(--muted)" opacity=".6"><text x="32" y="60">1</text><text x="32" y="75">2</text><text x="32" y="90">3</text><text x="32" y="105">4</text><text x="32" y="120">5</text><text x="32" y="135">6</text></g>
      <text x="50" y="60" fill="var(--muted)">//@version=6</text>
      <text x="50" y="75" fill="var(--fg)"><tspan fill="var(--purple)">indicator</tspan>(<tspan fill="var(--up)">"RSI cross"</tspan>)</text>
      <text x="50" y="90" fill="var(--fg)">r = ta.<tspan fill="var(--accent-text)">rsi</tspan>(close, 14)</text>
      <rect x="44" y="109" width="248" height="31" rx="4" fill="var(--accent)" fill-opacity=".12"/><rect x="44" y="109" width="2.5" height="31" rx="1" fill="var(--accent)"/>
      <text x="50" y="120" fill="var(--accent-text)"><tspan fill="var(--purple)">if</tspan> ta.crossover(r, 30)</text>
      <text x="50" y="135" fill="var(--accent-text)">    alert(<tspan fill="var(--up)">"RSI oversold"</tspan>)</text>
    </g>
    <g style="filter:drop-shadow(0 8px 16px rgb(110 80 255/.5))">
      <rect x="168" y="146" width="124" height="30" rx="15" fill="url(#mf-ai)"/>
      <path d="m186 161 2.2-5.2 2.2 5.2 5.2 2.2-5.2 2.2-2.2 5.2-2.2-5.2-5.2-2.2z" fill="#fff"/>
      <text x="200" y="164.5" font-size="9.5" font-weight="600" fill="#fff">Add an RSI alert</text>
    </g>`,

  // Two Macs, one cloud, no server of ours in sight.
  icloud: `
    <defs><marker id="mf-ic" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 8 4 0 8z" fill="var(--accent)"/></marker></defs>
    <path d="M126 88H196A24 24 0 0 0 198 40A34 34 0 0 0 138 34A27 27 0 0 0 126 88Z" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.6" style="filter:drop-shadow(0 0 12px rgb(41 98 255/.6))"/>
    <g fill="none" stroke="var(--accent-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M150 58a14 14 0 0 1 24-3m1 0v-6m0 6h-6"/><path d="M174 68a14 14 0 0 1-24 3m-1 0v6m0-6h6"/>
    </g>
    <path d="M86 118C86 102 110 96 128 84M234 118C234 102 210 96 192 84" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3" marker-start="url(#mf-ic)" marker-end="url(#mf-ic)"/>
    ${[40, 190].map((x) => `
      <rect x="${x}" y="120" width="90" height="54" rx="6" fill="var(--surface)" stroke="var(--border)"/>
      <rect x="${x + 5}" y="125" width="80" height="44" rx="3" fill="var(--bg)"/>
      <path d="M${x + 12} 160 ${x + 26} 148 ${x + 38} 153 ${x + 52} 138 ${x + 64} 144 ${x + 78} 130" fill="none" stroke="var(--up)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M${x - 8} 178H${x + 98}" stroke="var(--muted)" stroke-width="3" stroke-linecap="round"/>`).join('')}`,
  // FAQ: the price tag that says $0 and the two chips that explain why.
  free: `
    <defs><linearGradient id="fq-fr" x1="0" x2="1"><stop offset="0" stop-color="#2962ff"/><stop offset="1" ${GRAD}/></linearGradient></defs>
    <rect x="62" y="36" width="196" height="130" rx="20" fill="var(--surface)" stroke="var(--border)"/>
    <text x="160" y="116" font-size="70" font-weight="700" text-anchor="middle" fill="url(#fq-fr)" style="filter:drop-shadow(0 0 14px rgb(110 80 255/.45))">$0</text>
    <text x="160" y="143" font-size="11" text-anchor="middle" fill="var(--muted)">forever</text>
    <rect x="30" y="20" width="108" height="28" rx="14" fill="var(--accent)" style="filter:drop-shadow(0 6px 12px rgb(41 98 255/.5))"/>
    <text x="84" y="38.5" ${MONO} font-size="11" font-weight="700" fill="#fff" text-anchor="middle">&lt;/&gt; GPL-3.0</text>
    <rect x="186" y="150" width="106" height="28" rx="14" fill="var(--surface)" stroke="var(--border)"/>
    <path d="m200 164 5 5 9-10" fill="none" stroke="var(--up)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="256" y="168" font-size="10.5" font-weight="600" fill="var(--fg)" text-anchor="middle">No account</text>`,

  // FAQ: a shield, and a short list of things the app does not do.
  shield: `
    <defs><linearGradient id="fq-sh" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2962ff"/><stop offset="1" ${GRAD}/></linearGradient></defs>
    <path d="M160 18 242 50V108C242 150 208 174 160 192 112 174 78 150 78 108V50Z" fill="var(--surface)" stroke="url(#fq-sh)" stroke-width="5" stroke-linejoin="round" style="filter:drop-shadow(0 0 14px rgb(110 80 255/.4))"/>
    <path d="m126 108 24 24 44-52" fill="none" stroke="var(--up)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    ${[['No analytics', 6, 58], ['No telemetry', 222, 100], ['No account', 6, 142]].map(([t, x, y]) => `
    <rect x="${x}" y="${y}" width="92" height="28" rx="14" fill="var(--surface)" stroke="var(--border)"/>
    <circle cx="${Number(x) + 15}" cy="${Number(y) + 14}" r="4" fill="var(--up)"/>
    <text x="${Number(x) + 56}" y="${Number(y) + 18}" font-size="10.5" font-weight="600" fill="var(--fg)" text-anchor="middle">${t}</text>`).join('')}`,

  // FAQ: one window per platform, each with the file you download.
  platforms: `
    ${[['macOS', '.dmg', 14], ['Windows', '.exe', 114], ['Linux', '.tar.gz', 214]].map(([n, e, x]) => `
    <rect x="${x}" y="24" width="92" height="118" rx="10" fill="var(--surface)" stroke="var(--border)"/>
    <path d="M${x} 46H${Number(x) + 92}" stroke="var(--border)"/>
    <circle cx="${Number(x) + 12}" cy="35" r="3" fill="var(--chrome)"/><circle cx="${Number(x) + 23}" cy="35" r="3" fill="var(--chrome)"/><circle cx="${Number(x) + 34}" cy="35" r="3" fill="var(--chrome)"/>
    <path d="M${Number(x) + 46} 62v18m-7-7 7 7 7-7" fill="none" stroke="var(--accent-text)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="${Number(x) + 46}" y="106" font-size="13" font-weight="700" text-anchor="middle" fill="var(--fg)">${n}</text>
    <rect x="${Number(x) + 14}" y="152" width="64" height="24" rx="12" fill="var(--chrome)"/>
    <text x="${Number(x) + 46}" y="168" ${MONO} font-size="10.5" fill="var(--muted)" text-anchor="middle">${e}</text>`).join('')}`,

  // FAQ: the dialog you will meet on Windows, with the button to press.
  smartscreen: `
    <rect x="34" y="14" width="252" height="172" rx="6" fill="#1565c0" style="filter:drop-shadow(0 12px 24px rgb(0 0 0/.45))"/>
    <text x="52" y="44" font-size="13.5" font-weight="700" fill="#fff">Windows protected your PC</text>
    <rect x="52" y="58" width="214" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="52" y="72" width="196" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="52" y="86" width="150" height="6" rx="3" fill="#fff" opacity=".6"/>
    <text x="52" y="124" font-size="11" fill="#fff" text-decoration="underline">More info</text>
    <rect x="174" y="146" width="96" height="28" rx="4" fill="#fff"/>
    <text x="222" y="164.5" font-size="11.5" font-weight="700" fill="#1565c0" text-anchor="middle">Run anyway</text>
    <rect x="170" y="142" width="104" height="36" rx="7" fill="none" stroke="var(--up)" stroke-width="3" stroke-dasharray="6 4"/>
    <path d="m266 168 0 20 5-4.500 3.600 7.200 3.200-1.600-3.600-7.200 6.400-.5z" fill="#fff" stroke="#000" stroke-width="1.200" stroke-linejoin="round"/>`,

  // FAQ: where the market data comes from.
  sources: `
    <defs><linearGradient id="fq-so" x1="0" x2="1"><stop offset="0" stop-color="#2962ff"/><stop offset="1" ${GRAD}/></linearGradient></defs>
    ${[['B', 160, 22], ['C', 262, 50], ['G', 292, 108], ['D', 262, 166], ['P', 160, 184], ['K', 58, 166], ['M', 28, 108], ['A', 58, 50]].map(([, x, y]) => `
    <path d="M160 102L${x} ${y}" stroke="var(--border)" stroke-width="1.4" stroke-dasharray="3 3"/>`).join('')}
    ${[['B', 160, 22], ['C', 262, 50], ['G', 292, 108], ['D', 262, 166], ['P', 160, 184], ['K', 58, 166], ['M', 28, 108], ['A', 58, 50]].map(([l, x, y]) => `
    <circle cx="${x}" cy="${y}" r="17" fill="var(--surface)" stroke="var(--border)"/>
    <text x="${x}" y="${Number(y) + 4.500}" font-size="13" font-weight="700" text-anchor="middle" fill="var(--fg)">${l}</text>`).join('')}
    <rect x="116" y="82" width="88" height="40" rx="12" fill="url(#fq-so)" style="filter:drop-shadow(0 0 14px rgb(110 80 255/.55))"/>
    <text x="160" y="106" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">DegenView</text>`,
};
