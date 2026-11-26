export const home = {
  meta: {
    title: 'DegenView – Free, Open Source TradingView Alternative',
    description:
      'A free, open source TradingView alternative for desktop: multi-chart layouts, local Pine Script v6, alerts, replay and portfolios. macOS, Windows, Linux.',
  },

  jsonLd: {
    alternateNames: ['DegenView – open source TradingView alternative', 'DegenView Charts'],
  },

  hero: {
    eyebrow: 'Free & open source',
    eyebrowLink: 'TradingView alternative',
    // Features TradingView paywalls. The first one is the static, no-JS headline.
    phrases: ['multiple watchlists', 'unlimited indicators', 'multi-chart layouts', 'unlimited price alerts', 'more than 30 symbols', 'multiple drawings'],
    // Headline = headlineBefore + rotating phrase + headlineMiddle + headlineEmphasis (gradient).
    headlineBefore: 'Where',
    headlineMiddle: 'is',
    headlineEmphasis: 'not a premium feature.',
    lead: 'The free, open source TradingView alternative for your desktop: crypto, stocks and prediction markets in multi-chart layouts, with local Pine Script, alerts and replay. No account, and it runs on your machine.',
    screenshotAlt: 'DegenView dashboard with multiple live charts in a grid layout',
  },

  // Labels around the quotes in src/data/testimonials.ts (the quotes themselves are verbatim and never translated).
  testimonials: {
    eyebrow: 'feedback',
    heading: 'What people are <span class="gradient-text">saying</span>',
    author: 'User feedback',
    tags: { debugger: 'Debugger', pine: 'Pine Script', impression: 'First impression' },
  },

  sources: {
    heading: 'Data from the sources you already use',
  },

  features: {
    heading: 'Everything a market dashboard <span class="gradient-text">should have</span>',
    eyebrow: 'features',
    markets: {
      eyebrow: 'Markets & live data',
      title: 'Every market, one screen.',
      blurb:
        'Search Binance, Coinbase, OKX, Kraken, Bybit, Gate.io, MEXC, CoinGecko and DEXScreener side by side, add US stocks, and chart Polymarket and Kalshi as probabilities.',
      bullets: [
        'Live prices from Binance, OKX, Kraken, Bybit, Gate.io, MEXC and Coinbase',
        'US stocks via Alpaca’s free IEX feed',
        'No API key for most sources',
      ],
      alt: 'DegenView with BTC, ETH and SOL charts and a Polymarket probability chart in one multi-chart layout',
    },
    'pine-script': {
      eyebrow: 'Local Pine Script v6 engine',
      title: 'Write Pine Script. Run it locally.',
      blurb:
        'Write TradingView-compatible scripts and run them on your machine. No account, and your source never leaves your device.',
      bullets: [
        'Vibe code with your AI assistant over MCP',
        'Step debugger with breakpoints and watches',
        'Built-in profiler shows where time goes',
      ],
      alt: 'DegenView Pine Studio with a Pine Script editor and live preview chart',
      linkLabel: 'Explore Pine Studio',
    },
    mcp: {
      eyebrow: 'MCP server',
      title: 'Let your AI work your charts.',
      blurb:
        'Connect an AI assistant to DegenView through MCP. Say “draw support and resistance” and watch it land on your live chart.',
      bullets: [
        'Add charts and indicators',
        'Create, edit and pause price alerts',
        'Read and edit your Pine scripts',
      ],
      alt: 'An AI assistant in a terminal drawing support and resistance levels on a DegenView chart through MCP',
    },
    portfolio: {
      eyebrow: 'Portfolio tracking',
      title: 'Multiple portfolios. Real P&L.',
      blurb:
        'Track as many portfolios as you like, with a transaction ledger and weighted-average cost accounting.',
      bullets: [
        'Allocation, 24h move, realized and unrealized P&L',
        'Report in USD, EUR, GBP, JPY, CHF or BTC',
        'CSV import and export, CoinMarketCap included',
      ],
      alt: 'DegenView portfolio overview with value chart, allocation donut, P&L cards and top holdings',
    },
    'paper-trading': {
      eyebrow: 'Paper trading',
      title: 'Fake money. Real charts.',
      blurb:
        'A local, persistent simulator with market, limit and stop orders and net-position tracking. Paper orders never touch a live exchange.',
      bullets: [
        'Weighted-average cost per position',
        'Order and position markers on the chart',
        'Survives restarts, stays on your device',
      ],
      alt: 'DegenView paper trading with a long BTC position marked on the chart and the positions table below',
    },
    replay: {
      eyebrow: 'Bar replay',
      title: 'Rewind the market, bar by bar.',
      blurb:
        'Pick any moment in history and replay it at your speed, with zero lookahead, on every chart at once.',
      bullets: [
        'Start at any candle or exact time',
        'One shared clock keeps every chart in sync',
        'Practice entries with the paper-trading ticket',
      ],
      alt: 'Bar replay controls with a timeline scrubber and speed selector over a historical chart',
    },
  },

  // Cards under "and while you're here". A trailing * marks the title that carries `note`.
  extras: {
    eyebrow: 'and while you’re here',
    heading: 'The rest of the <span class="gradient-text">good stuff</span>',
    intro: 'Not every feature earns a screenshot. These earned an illustration.',
    illustrationAria: '{title} illustration',
    'no-account': {
      tag: 'Privacy',
      title: 'No account. No signup.*',
      text: 'Open the app and use it. There’s no email to verify, no trial to start, and no “welcome back!” to dismiss.',
      note: 'Alpaca is the exception: its free US stock data needs an Alpaca account and your own API keys. That’s their rule, not ours.',
    },
    watchlists: {
      tag: 'Lists',
      title: 'Unlimited watchlists',
      text: 'Make as many as you like. “Upgrade to add another list” was never a feature.',
    },
    tools: {
      tag: 'Drawing',
      title: 'The charting tools you already love',
      text: 'The drawing toolbox TradingView users have muscle memory for, minus the plan comparison table.',
    },
    indicators: {
      tag: 'Indicators',
      title: 'As many indicators as your CPU can handle',
      text: 'Volume, RSI, EMA, Bollinger Bands, Supertrend and your own Pine scripts. Keep stacking them until your fans file a complaint.',
    },
    alerts: {
      tag: 'Alerts',
      title: 'Price alerts',
      text: 'A market app that tells you when the price moves. Revolutionary, we know.',
    },
    webhooks: {
      tag: 'Webhooks',
      title: 'Webhook alerts',
      text: 'Price alerts and Pine alert() calls can hit a webhook you configure. Wire them to a bot, Discord, or whatever you’re into.',
    },
    ai: {
      tag: 'Pine',
      title: 'AI help for Pine Script',
      text: 'A built-in coding assistant for your scripts. It writes the first draft, you take the credit.',
    },
    icloud: {
      tag: 'macOS',
      title: 'iCloud sync on macOS',
      text: 'Opt in and your setup follows you between Macs through your own iCloud, not a server of ours.',
    },
  },

  download: {
    heading: 'Get DegenView. <span class="gradient-text block">It’s free.</span>',
    // {version} is replaced with the release tag (rendered in monospace).
    latest: 'Latest release {version}. No account, no trial, no catch.',
    languages: 'The app speaks English, Spanish, German, Russian and Simplified Chinese.',
    allDownloads: 'All downloads',
    faq: 'FAQ',
    freeForever: 'Free forever. If it earns a spot on your screen:',
  },

  // Text inside the inline SVG illustrations (SVG text does not wrap: keep these short).
  // Also used by the FAQ illustrations (free, shield, smartscreen).
  illustrations: {
    noAccount: { email: 'Email', password: 'Password', cta: 'Just open it' },
    watchlists: { title: 'Watchlist 7', newButton: '+ New' },
    indicators: { load: 'load', indicators: 'indicators' },
    alerts: { crossedAbove: 'Crossed above 76,000' },
    ai: { suggestion: 'Add an RSI alert' },
    free: { forever: 'forever', noAccount: 'No account' },
    shield: { noAnalytics: 'No analytics', noTelemetry: 'No telemetry', noAccount: 'No account' },
    smartscreen: { title: 'Windows protected your PC', moreInfo: 'More info', runAnyway: 'Run anyway' },
  },
};
