import { defaultLocale, localeMeta, locales, type Lang } from './locales';
import { en, type Dict } from './en';
import { es } from './es';
import { fr } from './fr';
import { hi } from './hi';
import { de } from './de';

export { defaultLocale, localeMeta, locales, type Lang };
export type { Dict };

export const SITE = 'https://degenview.app';

const dicts: Record<Lang, Dict> = { en, es, fr, hi, de };

/** Dictionary for a language. */
export const useT = (lang: Lang): Dict => dicts[lang];

const prefixed = locales.filter((l) => l !== defaultLocale);

/** Language of the page being rendered, from its URL (/es/faq/ → 'es', /faq/ → 'en'). */
export function getLang(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (prefixed as readonly string[]).includes(seg) ? (seg as Lang) : defaultLocale;
}

/** Path without the locale prefix: '/es/faq/' → '/faq/'. */
export function stripLocale(pathname: string): string {
  const m = pathname.match(/^\/([^/]+)(\/.*)?$/);
  if (m && (prefixed as readonly string[]).includes(m[1])) return m[2] ?? '/';
  return pathname;
}

/**
 * Locale-aware internal link. `path` is the English path ('/faq/', '/#features', '/').
 * External URLs (http, mailto…) pass through unchanged.
 */
export function localePath(lang: Lang, path: string): string {
  if (lang === defaultLocale || !path.startsWith('/')) return path;
  return `/${lang}${path}`;
}

/** hreflang alternates (absolute URLs) for a locale-agnostic path. */
export function alternates(path: string): { lang: Lang; hreflang: string; href: string }[] {
  return locales.map((l) => ({ lang: l, hreflang: localeMeta[l].htmlLang, href: new URL(localePath(l, path), SITE).href }));
}

/** Replace {name} placeholders: fmt('Hi {n}', { n: 'Ana' }). */
export function fmt(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
