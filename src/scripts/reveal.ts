/**
 * Reveal on enter: every `[data-reveal]` element gets `.is-in` the first time it scrolls into view, and the CSS
 * (global.css, "Reveal on enter") does the rest with a time-based transform/opacity transition. One IntersectionObserver
 * for the whole page, each element is unobserved right after it is revealed. Nothing runs per scroll frame, so it is
 * smooth in every browser (Firefox included): the transition is driven by the compositor, not by scroll position.
 *
 * Elements start hidden only while `html.js-reveal` is set (inline script in Base.astro). If this script never runs, a
 * timeout in that inline script removes the class again, so content can never stay invisible.
 */
const root = document.documentElement;
const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
const w = window as unknown as { __dvReveal?: boolean };
w.__dvReveal = true;

if (root.classList.contains('js-reveal') && targets.length > 0) {
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      },
      // A little before the bottom edge, so things are on their way in rather than already half-visible.
      { rootMargin: '0px 0px -6% 0px', threshold: 0.1 },
    );
    targets.forEach((el) => io.observe(el));
  }
}
