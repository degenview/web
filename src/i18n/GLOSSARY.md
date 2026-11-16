# Translation glossary & style

Source of truth: `src/i18n/en/*.ts`. Every other locale mirrors the same keys (`satisfies`-checked by `npm run check`).

## Never translate
DegenView, Pine Script, Pine Studio, TradingView, GitHub, macOS, Windows, Linux, file names, code, CLI commands, keyboard keys, version strings, product/feature names that are literal UI labels in the (English) app screenshots.

## Register
- es: informal *tú*
- fr: *vous*
- de: *du*
- hi: polite-informal *आप*; common English tech nouns (watchlist, alert, chart, replay, download) are kept in Latin script or transliterated, as in Indian tech marketing.

## Rules
- Keep `{placeholders}`, HTML tags/attributes and entities exactly as in English.
- Keep typographic punctuation of the target language (fr: non-breaking space before `: ; ! ?` as `&nbsp;`/U+00A0 and « »; de: „…“).
- Meta titles ≈ ≤60 chars, descriptions ≈ ≤160 chars; keep local search keywords ("alternativa a TradingView", "TradingView-Alternative", "TradingView का विकल्प", "alternative à TradingView").
- Headlines may be reshaped for the language, but keep length close to English so layouts hold (de/fr run ~20–30% longer; avoid very long compound words in headlines).
