<div align="center">

<img src="src/assets/brand/logo.png" alt="DegenView" width="96" height="96" />

# degenview.app

**The marketing site for [DegenView](https://github.com/degenview/degenview): the free, open source TradingView alternative for your desktop.**

[![Website](https://img.shields.io/badge/degenview.app-2962ff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://degenview.app)
[![App](https://img.shields.io/badge/the_app-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/degenview/degenview)
[![Docs](https://img.shields.io/badge/docs-b600d6?style=for-the-badge&logo=readthedocs&logoColor=white)](https://docs.degenview.app)

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white)
![License](https://img.shields.io/badge/license-GPL--3.0-089981?style=flat-square)

</div>

---

## ✨ What's inside

| Page | What it's for |
| :-- | :-- |
| [**Home**](https://degenview.app) | The pitch: multi-chart layouts, local Pine Script, MCP, portfolios, paper trading, replay and 18 chart types |
| [**Pine Studio**](https://degenview.app/pine-studio/) | The Pine Script v6 editor with a real step debugger, profiler and AI help |
| [**Download**](https://degenview.app/download/) | Installers for macOS, Windows and Linux, with checksums and install steps |
| [**TradingView alternative**](https://degenview.app/tradingview-alternative/) | An honest free-vs-free comparison |
| [**FAQ**](https://degenview.app/faq/) | Searchable answers, grouped by topic |
| [**Support**](https://degenview.app/support/) | Ways to keep DegenView free: coffee, crypto, a GitHub star, bug reports, translations |
| [**Privacy policy**](https://degenview.app/privacy-policy/) | Cookies and analytics, opt-in only |

## 🌍 Languages

English (default, unprefixed), [Español](https://degenview.app/es/), [Deutsch](https://degenview.app/de/), [Français](https://degenview.app/fr/), [हिन्दी](https://degenview.app/hi/) and [简体中文](https://degenview.app/zh/). Every page lives at the same path under a language prefix (`/faq/` → `/es/faq/`), with a canonical URL and `hreflang` alternates per page. There is no automatic redirect by browser language; the flag menu in the header and footer switches language.

Copy lives in `src/i18n/<lang>/*.ts`, with `src/i18n/en/` as the source of truth: a missing or extra key fails `npm run check`. `npm run i18n:check` verifies the built site (lang, canonical, hreflang, locale links). To fix or add a translation, edit the matching file under `src/i18n/<lang>/` and follow `src/i18n/GLOSSARY.md`; a new language also needs an entry in `src/i18n/locales.ts` and `astro.config.mjs`. Translations are machine-assisted, and native-speaker fixes are very welcome.

Flags are from [flag-icons](https://github.com/lipis/flag-icons) (MIT).

## 🎨 Design

- **Dark-first, light-ready.** True-black canvas, neutral greys and a royal blue that fades into magenta, with a system / light / dark toggle.
- **Phone-friendly.** Checked at 375px in every language: no sideways scrolling, 40px-ish touch targets and a hamburger menu under `lg`.
- **Fast and light.** Static HTML, self-hosted fonts and no client framework; the few scripts that exist are small and progressive.
- **Accessible.** Skip link, keyboard-friendly menus and carousels, visible focus rings and reduced-motion support.

## 🔄 Always-current downloads

The Download buttons read the newest GitHub release of `degenview/degenview` at build time and re-check in the browser on load. They detect your OS and highlight the right installer. While the latest release is an RC or pre-release, a notice says so.

## 🔒 Privacy first

Nothing from Google loads until a visitor says yes. Consent is stored locally, and "Cookie settings" in the footer reopens the choice.

## 🤝 Contributing

Found a typo, a broken layout or a phone-size glitch? [Open an issue](https://github.com/degenview/web/issues) or send a pull request.

## ☕ Support

DegenView is free forever. If it earns a spot on your screen, you can [support it](https://degenview.app/support/): buy the maintainer a coffee, send crypto, star the repo or spread the word.

---

<div align="center">

<sub>Pine Script and TradingView are trademarks of TradingView, Inc. DegenView is not affiliated with or endorsed by TradingView.</sub>

</div>
