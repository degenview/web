export const locales = ['en', 'es', 'fr', 'hi', 'de'] as const;
export type Lang = (typeof locales)[number];
export const defaultLocale: Lang = 'en';

export interface LocaleMeta {
  /** Name in its own language, shown in the switcher. */
  name: string;
  /** BCP 47 tag for <html lang> and hreflang. */
  htmlLang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Country flag file in src/assets/flags (without extension). */
  flag: string;
  /** BCP 47 tag for Intl formatting. */
  intl: string;
}

export const localeMeta: Record<Lang, LocaleMeta> = {
  en: { name: 'English', htmlLang: 'en', ogLocale: 'en_US', flag: 'gb', intl: 'en-US' },
  es: { name: 'Español', htmlLang: 'es', ogLocale: 'es_ES', flag: 'es', intl: 'es-ES' },
  fr: { name: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR', flag: 'fr', intl: 'fr-FR' },
  hi: { name: 'हिन्दी', htmlLang: 'hi', ogLocale: 'hi_IN', flag: 'in', intl: 'hi-IN' },
  de: { name: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE', flag: 'de', intl: 'de-DE' },
};
