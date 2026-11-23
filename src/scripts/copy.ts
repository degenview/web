/**
 * Click-to-copy for any `<button data-copy="text">`. The button label flips to the "copied" text for a moment.
 * Labels come from a `[data-copy-labels]` element on the page (`data-copied`, `data-copy-failed`), so they stay translated;
 * an optional `[data-copy-status]` live region repeats the result for screen readers.
 */
export function initCopy(): void {
  document.addEventListener('click', async (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('[data-copy]');
    if (!btn) return;
    const original = btn.textContent;
    const labels = document.querySelector<HTMLElement>('[data-copy-labels]');
    const status = document.querySelector<HTMLElement>('[data-copy-status]');
    let message: string;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      message = labels?.dataset.copied ?? 'Copied';
    } catch {
      message = labels?.dataset.copyFailed ?? 'Press ⌘/Ctrl+C';
    }
    btn.textContent = message;
    if (status) status.textContent = message;
    setTimeout(() => {
      btn.textContent = original;
      if (status) status.textContent = '';
    }, 1800);
  });
}
