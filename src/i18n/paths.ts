import { defaultLocale, locales } from './locales';

/**
 * Shared getStaticPaths for every page under src/pages/[...lang]/.
 * English is unprefixed (lang = undefined), the rest live under /<lang>/.
 * In a page:  import { getStaticPaths as paths } from '../../i18n/paths'; export const getStaticPaths = paths;
 */
export const getStaticPaths = () => locales.map((l) => ({ params: { lang: l === defaultLocale ? undefined : l } }));
