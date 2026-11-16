import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://degenview.app',
  trailingSlash: 'always',
  redirects: { '/why-free': '/' },
  i18n: { defaultLocale: 'en', locales: ['en', 'es', 'fr', 'hi', 'de'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es', fr: 'fr', hi: 'hi', de: 'de' } } })],
  vite: { plugins: [tailwindcss()] },
});
