/**
 * One requestAnimationFrame loop for everything on the page that follows the scroll position (the candle-city camera,
 * the section nav, the scroll meter). Each frame it reads `scrollY` exactly once and hands the same value to every
 * subscriber, so all effects agree on where the page is within a frame.
 *
 * Why not one `scroll` listener per effect: Firefox scrolls on the compositor (APZ) and delivers `scroll` events
 * asynchronously, so effects driven from the events land a frame apart from each other and from the pixels the user sees.
 * Polling once per frame from rAF keeps them in lockstep and there is only ever one rAF callback to schedule.
 *
 * The loop runs only while something needs it: it is woken by scroll / wheel / touch / key input (and by a subscriber
 * calling `invalidate()` or `animate(true)`), and it stops again once `scrollY` has not changed for IDLE_MS and no
 * subscriber is animating. Subscribers run in `order` (small first): DOM writes before WebGL submission.
 */

export type Frame = (scrollY: number, now: number) => void;

export interface Subscription {
  /** Run this subscriber on the next frame even though scrollY did not change (sizes or layout changed). */
  invalidate(): void;
  /** While on, the subscriber runs every frame (the loop never idles), e.g. a time-based animation. */
  animate(on: boolean): void;
  unsubscribe(): void;
}

interface Sub {
  fn: Frame;
  order: number;
  always: boolean;
  dirty: boolean;
}

const IDLE_MS = 200;
const subs: Sub[] = [];
let raf = 0;
let lastY = NaN;
let lastMove = 0;
let wired = false;

const tick = (now: number): void => {
  raf = 0;
  const y = scrollY; // the only scroll read of the frame
  const moved = y !== lastY;
  if (moved) {
    lastY = y;
    lastMove = now;
  }
  let busy = false;
  // Iterate over a copy: a subscriber may unsubscribe (or subscribe another) while it runs.
  for (const s of subs.slice()) {
    if (s.always) busy = true;
    if (!(s.always || moved || s.dirty)) continue;
    s.dirty = false;
    try {
      s.fn(y, now);
    } catch (err) {
      console.error(err);
    }
  }
  if (!busy) busy = subs.some((s) => s.always || s.dirty);
  if (busy || now - lastMove < IDLE_MS) raf = requestAnimationFrame(tick);
};

const wake = (): void => {
  lastMove = performance.now(); // keep polling for IDLE_MS: a scroll that has not changed scrollY yet is about to
  if (!raf && subs.length > 0) raf = requestAnimationFrame(tick);
};

const wire = (): void => {
  if (wired) return;
  wired = true;
  // Passive and write-free: they only make sure the loop is awake. The values come from scrollY in the frame.
  for (const type of ['scroll', 'wheel', 'touchstart', 'touchmove', 'keydown', 'resize'] as const) {
    addEventListener(type, wake, { passive: true });
  }
};

export function subscribe(fn: Frame, { order = 0 }: { order?: number } = {}): Subscription {
  const sub: Sub = { fn, order, always: false, dirty: true };
  const at = subs.findIndex((s) => s.order > order);
  if (at < 0) subs.push(sub);
  else subs.splice(at, 0, sub);
  wire();
  wake();
  return {
    invalidate() {
      sub.dirty = true;
      wake();
    },
    animate(on) {
      sub.always = on;
      if (on) wake();
    },
    unsubscribe() {
      const i = subs.indexOf(sub);
      if (i >= 0) subs.splice(i, 1);
    },
  };
}
