export type Theme = 'system' | 'light' | 'dark';
const KEY = 'theme';

export function getTheme(): Theme {
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'light' || v === 'dark' || v === 'system') return v;
  } catch {}
  return 'dark'; // dark unless the visitor picked otherwise
}

export function applyTheme(theme: Theme) {
  const dark = theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = theme;
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {}
  applyTheme(theme);
}

export function initThemeToggle() {
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-option]');
  const sync = () => {
    const t = getTheme();
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.themeOption === t)));
  };
  buttons.forEach((b) => b.addEventListener('click', () => { setTheme(b.dataset.themeOption as Theme); sync(); }));
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getTheme() === 'system') applyTheme('system');
  });
  sync();
}
