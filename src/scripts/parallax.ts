// Lightweight scroll parallax. Elements opt in with:
//   data-parallax="0.2"      translateY = offset * speed (positive lags the scroll, negative rushes ahead)
//   data-parallax-scroll     offset = scrollY (for hero layers) instead of distance from viewport center
//   data-parallax-fade       also fade out over the first ~70% of the viewport height (scroll mode)
const MAX = 140;

export function initParallax() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const items = [...document.querySelectorAll<HTMLElement>('[data-parallax]')].map((el) => ({
    el,
    speed: Number(el.dataset.parallax) || 0,
    scroll: el.hasAttribute('data-parallax-scroll'),
    fade: el.hasAttribute('data-parallax-fade'),
    ty: 0,
    visible: false,
  }));
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const item = items.find((i) => i.el === e.target)!;
        item.visible = e.isIntersecting;
        item.el.style.willChange = e.isIntersecting ? 'transform' : '';
      }
      schedule();
    },
    { rootMargin: '25% 0px' },
  );
  items.forEach((i) => io.observe(i.el));

  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }

  function update() {
    queued = false;
    const vh = innerHeight;
    for (const it of items) {
      if (!it.visible) continue;
      let offset: number;
      if (it.scroll) {
        offset = scrollY;
      } else {
        const r = it.el.getBoundingClientRect();
        offset = r.top - it.ty + r.height / 2 - vh / 2;
      }
      it.ty = Math.max(-MAX, Math.min(MAX, offset * it.speed));
      it.el.style.transform = `translate3d(0, ${it.ty.toFixed(1)}px, 0)`;
      if (it.fade) it.el.style.opacity = String(Math.max(0, 1 - scrollY / (vh * 0.7)));
    }
  }

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  schedule();
}
