export type FaqGroupId = 'basics' | 'scripts' | 'data' | 'install';

export interface FaqGroup {
  id: FaqGroupId;
  title: string;
  intro: string;
  /** Key into `art` in `illustrations.ts`, shown beside the group heading. */
  art?: string;
}

export interface FaqItem {
  group: FaqGroupId;
  q: string;
  /** Plain text. Also used for the FAQPage structured data. */
  a: string;
  /** Follow-up links shown under the answer. */
  links?: [label: string, href: string][];
  /** Key into `art` in `illustrations.ts`, shown beside this answer. */
  art?: string;
}

export const faqGroups: FaqGroup[] = [
  { id: 'basics', title: 'The basics', intro: 'What it costs, who is behind it, and what it isn’t.', art: 'free' },
  { id: 'scripts', title: 'Pine Script and AI', intro: 'Running scripts, and where they and your charts can go.' },
  { id: 'data', title: 'Data and privacy', intro: 'Where prices come from and what we know about you (very little).', art: 'shield' },
  { id: 'install', title: 'Install and platforms', intro: 'What runs where, and what to do on first launch.', art: 'platforms' },
];

export const faq: FaqItem[] = [
  {
    group: 'basics',
    q: 'Is DegenView really free?',
    a: 'Yes. DegenView is free and open source under the GPL-3.0. There are no paid tiers and no feature gates.',
  },
  {
    group: 'basics',
    q: 'Is DegenView a free TradingView alternative?',
    a: 'Yes. DegenView is a free, open source desktop app for crypto, stocks and prediction markets, with multi-chart layouts, a local Pine Script v6 engine, alerts, bar replay and portfolio tracking. It is independent of TradingView and does not replace everything TradingView offers.',
    links: [['See the comparison', '/tradingview-alternative/']],
  },
  {
    group: 'basics',
    q: 'Is DegenView open source?',
    a: 'Yes. The source code is public on GitHub under the GPL-3.0-only license, and the release builds come from a public workflow.',
  },
  {
    group: 'basics',
    q: 'Do I need an account?',
    a: 'No. There is nothing to sign up for. Alerts, portfolios, paper trading and Pine Script all run locally on your machine.',
  },
  {
    group: 'basics',
    q: 'Is it affiliated with TradingView or the data providers?',
    a: 'No. DegenView is an independent project. Pine Script and TradingView are trademarks of TradingView, Inc. Pine Script is TradingView’s language, and DegenView runs its own engine for scripts written in it. All other trademarks belong to their owners.',
  },
  {
    group: 'scripts',
    q: 'Can I run my TradingView Pine Scripts in DegenView?',
    a: 'Yes. DegenView runs its own engine for Pine Script v6, locally. It is an independent implementation, so very exotic scripts may behave differently from TradingView.',
  },
  {
    group: 'scripts',
    q: 'Where do my Pine Scripts go?',
    a: 'Nowhere by default. Scripts run on your computer, and the source stays there unless you choose to send it somewhere yourself, for example to an AI provider you set up for the assistant.',
  },
  {
    group: 'scripts',
    q: 'Can I connect an AI assistant?',
    a: 'Yes. DegenView has an optional MCP server, so AI assistants and automation tools can work with your charts, alerts and Pine scripts. It’s off by default, and you choose what each connection is allowed to do.',
  },
  {
    group: 'data',
    q: 'How do I get stock data?',
    a: 'US stocks come from Alpaca’s free IEX feed. Just add your free Alpaca API keys in Settings. Crypto, prediction markets and CoinMarketCap indices need no keys at all.',
    art: 'sources',
    links: [['See every data source', '/privacy-policy/#app-h']],
  },
  {
    group: 'data',
    q: 'Does DegenView collect my data?',
    a: 'The desktop app has no analytics or telemetry and needs no account. This website only sets analytics cookies if you accept them. The privacy policy lists every service the app connects to.',
    links: [['Read the privacy policy', '/privacy-policy/']],
  },
  {
    group: 'data',
    q: 'Does DegenView work offline?',
    a: 'The app, your scripts and your data live on your machine. Live prices still come from the data providers, so you need an internet connection for market data.',
  },
  {
    group: 'install',
    q: 'Which platforms are supported?',
    a: 'macOS (Apple Silicon and Intel), Windows (x64 and ARM64) and Linux (x64 and ARM64, as a tarball or Flatpak). A few extras are macOS-only: native tabs and windows, and background alerts.',
    links: [['Go to downloads', '/download/']],
  },
  {
    group: 'install',
    q: 'Windows shows a SmartScreen warning. Is it safe?',
    a: 'The Windows build is not code-signed yet, so SmartScreen may warn on first launch. The source and the build workflow are public on GitHub, and every release lists a SHA-256 checksum you can compare. Choose “More info”, then “Run anyway”. The macOS app is signed.',
    art: 'smartscreen',
    links: [['Verify your download', '/download/#verify']],
  },
  {
    group: 'install',
    q: 'Does DegenView update itself?',
    a: 'Yes on macOS, on Windows (installer and portable zip) and for the Linux tarball in a folder you own. A Flatpak bundle has no remote, so it does not update itself.',
  },
  {
    group: 'install',
    q: 'Which download should I pick?',
    a: 'On a Mac, Apple menu, About This Mac: “Apple M…” means Apple Silicon, “Intel” means Intel. On Windows, choose x64 unless you have a Windows on ARM machine. On Linux, the tarball suits most distros and the Flatpak suits older ones.',
    links: [['Go to downloads', '/download/']],
  },
];
