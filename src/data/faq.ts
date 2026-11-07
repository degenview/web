export const faq: { q: string; a: string }[] = [
  {
    q: 'Is DegenView a free TradingView alternative?',
    a: 'Yes. DegenView is a free, open source desktop app for crypto, stocks and prediction markets, with multi-chart layouts, a local Pine Script v6 engine, alerts, bar replay and portfolio tracking. It is independent of TradingView and does not replace everything TradingView offers. See the comparison page for the details.',
  },
  {
    q: 'Is DegenView open source?',
    a: 'Yes. The source code is public on GitHub under the GPL-3.0-only license, and the release builds come from a public workflow.',
  },
  {
    q: 'Can I run my TradingView Pine Scripts in DegenView?',
    a: 'Yes. DegenView runs its own engine for Pine Script v6, locally. It is an independent implementation, so very exotic scripts may behave differently from TradingView.',
  },
  {
    q: 'Does DegenView work offline?',
    a: 'The app, your scripts and your data live on your machine. Live prices still come from the data providers, so you need an internet connection for market data.',
  },
  {
    q: 'Is DegenView really free?',
    a: 'Yes. DegenView is free and open source under the GPL-3.0. There are no paid tiers and no feature gates.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. There is nothing to sign up for. Alerts, portfolios, paper trading and Pine Script all run locally on your machine.',
  },
  {
    q: 'Can I connect an AI assistant?',
    a: 'Yes. DegenView has an optional MCP server, so AI assistants and automation tools can work with your charts, alerts and Pine scripts. It’s off by default, and you choose what each connection is allowed to do.',
  },
  {
    q: 'Where do my Pine Scripts go?',
    a: 'Nowhere. Scripts run on your computer, and the source never leaves your device.',
  },
  {
    q: 'How do I get stock data?',
    a: 'US stocks come from Alpaca’s free IEX feed. Just add your free Alpaca API keys in Settings. Crypto, prediction markets and CoinMarketCap indices need no keys at all.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'macOS (Apple Silicon and Intel), Windows (x64 and ARM64) and Linux (x64 and ARM64, as a tarball or Flatpak). A few extras are macOS-only: native tabs and windows, and background alerts.',
  },
  {
    q: 'Windows shows a SmartScreen warning. Is it safe?',
    a: 'The Windows build is not code-signed yet, so SmartScreen may warn on first launch. The source and the build workflow are public on GitHub. Choose “More info” → “Run anyway”. The macOS app is signed.',
  },
  {
    q: 'Is it affiliated with TradingView or the data providers?',
    a: 'No. DegenView is an independent project. Pine Script is a TradingView language, and DegenView runs its own engine for scripts written in it. All trademarks belong to their owners.',
  },
];
