interface Entry {
  /** Question. Also the accordion summary. */
  q: string;
  /** Answer. Plain text (no HTML): it is also used verbatim for the FAQPage structured data. */
  a: string;
  /** Labels of the follow-up links under the answer, in the order of the links in `src/data/faq.ts`. */
  links?: string[];
}
const entry = (e: Entry): Entry => e;

export const faq = {
  meta: {
    title: 'DegenView FAQ – Free, Open Source TradingView Alternative',
    description:
      'Answers about DegenView, the free, open source TradingView alternative: accounts, Pine Script, stock data, supported platforms and first-launch warnings.',
  },
  breadcrumbs: { home: 'Home', faq: 'FAQ' },
  hero: {
    eyebrow: 'faq',
    title: 'Questions, <span class="gradient-text">answered</span>',
    lead: 'Everything people ask before they download. If it isn’t here, ask on GitHub.',
    searchLabel: 'Search the questions',
    /** {count} = number of questions. */
    searchPlaceholder: 'Search {count} questions',
    /** Result count while searching, by plural category ({count} = matches). Add the categories your language needs (zero, one, two, few, many, other). */
    found: {
      one: '{count} question found',
      other: '{count} questions found',
    } as Record<string, string>,
  },
  nav: {
    label: 'Topics',
    heading: 'Topics',
  },
  groups: {
    basics: { title: 'The basics', intro: 'What it costs, who is behind it, and what it isn’t.' },
    scripts: { title: 'Pine Script and AI', intro: 'Running scripts, and where they and your charts can go.' },
    data: { title: 'Data and privacy', intro: 'Where prices come from and what we know about you (very little).' },
    install: { title: 'Install and platforms', intro: 'What runs where, and what to do on first launch.' },
  },
  /** Alt text of a topic illustration. {title} = topic title. */
  groupArtLabel: '{title} illustration',
  /** Alt text of an answer illustration. {question} = the question. */
  itemArtLabel: 'Illustration: {question}',
  empty:
    'No question matches that. <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">Ask on GitHub<span class="sr-only"> (opens in a new tab)</span></a> and we’ll add it.',
  cta: {
    title: 'Still have <span class="gradient-text">a question?</span>',
    lead: 'Open an issue and we’ll answer it. Or just download DegenView and see for yourself.',
    download: 'Download for free',
    ask: 'Ask on GitHub',
  },
  items: {
    free: entry({
      q: 'Is DegenView really free?',
      a: 'Yes. DegenView is free and open source under the GPL-3.0. There are no paid tiers and no feature gates.',
    }),
    alternative: entry({
      q: 'Is DegenView a free TradingView alternative?',
      a: 'Yes. DegenView is a free, open source desktop app for crypto, stocks and prediction markets, with multi-chart layouts, a local Pine Script v6 engine, alerts, bar replay and portfolio tracking. It is independent of TradingView and does not replace everything TradingView offers.',
      links: ['See the comparison'],
    }),
    openSource: entry({
      q: 'Is DegenView open source?',
      a: 'Yes. The source code is public on GitHub under the GPL-3.0-only license, and the release builds come from a public workflow.',
    }),
    account: entry({
      q: 'Do I need an account?',
      a: 'No. There is nothing to sign up for. Alerts, portfolios, paper trading and Pine Script all run locally on your machine.',
    }),
    affiliation: entry({
      q: 'Is it affiliated with TradingView or the data providers?',
      a: 'No. DegenView is an independent project. Pine Script and TradingView are trademarks of TradingView, Inc. Pine Script is TradingView’s language, and DegenView runs its own engine for scripts written in it. All other trademarks belong to their owners.',
    }),
    runPine: entry({
      q: 'Can I run my TradingView Pine Scripts in DegenView?',
      a: 'Yes. DegenView runs its own engine for Pine Script v6, locally. It is an independent implementation, so very exotic scripts may behave differently from TradingView.',
    }),
    pinePrivacy: entry({
      q: 'Where do my Pine Scripts go?',
      a: 'Nowhere by default. Scripts run on your computer, and the source stays there unless you choose to send it somewhere yourself, for example to an AI provider you set up for the assistant.',
    }),
    aiAssistant: entry({
      q: 'Can I connect an AI assistant?',
      a: 'Yes. DegenView has an optional MCP server, so AI assistants and automation tools can work with your charts, alerts and Pine scripts. It’s off by default, and you choose what each connection is allowed to do.',
    }),
    stockData: entry({
      q: 'How do I get stock data?',
      a: 'US stocks come from Alpaca’s free IEX feed. Just add your free Alpaca API keys in Settings. Crypto, prediction markets and CoinMarketCap indices need no keys at all.',
      links: ['See every data source'],
    }),
    dataCollection: entry({
      q: 'Does DegenView collect my data?',
      a: 'The desktop app has no analytics or telemetry and needs no account. This website only sets analytics cookies if you accept them. The privacy policy lists every service the app connects to.',
      links: ['Read the privacy policy'],
    }),
    offline: entry({
      q: 'Does DegenView work offline?',
      a: 'The app, your scripts and your data live on your machine. Live prices still come from the data providers, so you need an internet connection for market data.',
    }),
    platforms: entry({
      q: 'Which platforms are supported?',
      a: 'macOS (Apple Silicon and Intel), Windows (x64 and ARM64) and Linux (x64 and ARM64, as a tarball or Flatpak). A few extras are macOS-only: native tabs and windows, and background alerts.',
      links: ['Go to downloads'],
    }),
    smartscreen: entry({
      q: 'Windows shows a SmartScreen warning. Is it safe?',
      a: 'The Windows build is not code-signed yet, so SmartScreen may warn on first launch. The source and the build workflow are public on GitHub, and every release lists a SHA-256 checksum you can compare. Choose “More info”, then “Run anyway”. The macOS app is signed.',
      links: ['Verify your download'],
    }),
    autoUpdate: entry({
      q: 'Does DegenView update itself?',
      a: 'Yes on macOS, on Windows and for the Linux tarball in a folder you own. A Flatpak bundle has no remote, so it does not update itself.',
    }),
    homebrew: entry({
      q: 'Can I install DegenView with Homebrew?',
      a: 'Yes, on macOS: brew install --cask degenview/degenview/degenview@rc. It installs the same signed app into Applications from the DegenView tap. The name without @rc is for the latest final release and exists once one is published. The app updates itself, so brew upgrade skips it.',
      links: ['Go to downloads'],
    }),
    whichDownload: entry({
      q: 'Which download should I pick?',
      a: 'On a Mac, Apple menu, About This Mac: “Apple M…” means Apple Silicon, “Intel” means Intel. On Windows, choose x64 unless you have a Windows on ARM machine. On Linux, the tarball suits most distros and the Flatpak suits older ones.',
      links: ['Go to downloads'],
    }),
  },
};
