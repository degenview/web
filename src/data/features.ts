export interface Feature {
  slug: string;
  eyebrow: string;
  title: string;
  blurb: string;
  bullets: string[];
  /** What the screenshot should show (also used as alt text). */
  alt: string;
  /** A call to action under the bullets, for features with their own page. */
  link?: { label: string; href: string };
  /** The screenshot is a full app window with its own title bar and rounded corners: skip the site's card frame. */
  framed?: boolean;
}

export const features: Feature[] = [
  {
    slug: 'markets',
    eyebrow: 'Markets & live data',
    title: 'Crypto, stocks and prediction markets. One screen.',
    blurb:
      'Search Binance, Coinbase, CoinGecko and DEXScreener side by side, add US equities, and chart Polymarket and Kalshi events as probabilities. No key needed for most of it.',
    bullets: [
      'Live streaming prices for Binance and Coinbase',
      'Stocks through Alpaca’s free IEX feed',
      'Polymarket + Kalshi, plus CoinMarketCap Fear & Greed and Altcoin Season',
      'Same symbol from different sources? Both stay. 1H to 1Y timeframes',
    ],
    alt: 'DegenView with BTC, ETH and SOL charts and a Polymarket probability chart in one multi-chart layout',
    framed: true,
  },
  {
    slug: 'pine-script',
    eyebrow: 'Local Pine Script v6 engine',
    title: 'Write Pine Script. Run it on your own machine.',
    blurb:
      'Write TradingView-compatible scripts and run them right on your machine. No account needed, and your source never leaves your device.',
    bullets: [
      'Made for vibe coding: clear diagnostics and an MCP server let your AI assistant write, check and fix scripts with you',
      'A real step debugger with breakpoints, watches and a call stack. No more debugging Pine scripts like a caveman with log.info()',
      'Built-in profiler that shows where your script spends its time',
    ],
    alt: 'DegenView Pine Studio with a Pine Script editor and live preview chart',
    link: { label: 'Explore Pine Studio', href: '/pine-studio/' },
  },
  {
    slug: 'mcp',
    eyebrow: 'MCP server',
    title: 'Let your AI assistant work your charts.',
    blurb:
      'Connect an AI assistant or automation tool to DegenView through MCP.',
    bullets: [
      'Say “draw support and resistance levels” and watch them land on your live chart. Your assistant can even snapshot the chart to check its own work',
      'List your workspaces and charts, and add new charts and indicators',
      'Create, edit, pause and delete price alerts',
      'Read your Pine scripts, diagnostics and reports, and edit script source',
    ],
    alt: 'An AI assistant in a terminal drawing support and resistance levels on a DegenView chart through MCP',
  },
  {
    slug: 'portfolio',
    eyebrow: 'Portfolio tracking',
    title: 'Multiple portfolios. Real P&L.',
    blurb:
      'Track as many portfolios as you want with a transaction ledger and weighted-average accounting, and see what’s actually working.',
    bullets: [
      'Value, allocation, 24h movement, cost basis, realized and unrealized P&L',
      'Report in USD, EUR, GBP, JPY, CHF or BTC',
      'Portfolio history from 1D to ALL',
      'CSV import/export, including CoinMarketCap exports',
    ],
    alt: 'DegenView portfolio overview with value chart, allocation donut, P&L cards and top holdings',
  },
  {
    slug: 'paper-trading',
    eyebrow: 'Paper trading',
    title: 'Practice with fake money, real charts.',
    blurb:
      'A local, persistent simulator with an order ticket, market, limit and stop orders, and net-position tracking. Paper orders never touch a live exchange.',
    bullets: [
      'Weighted-average cost per position',
      'Position and order markers drawn on the chart',
      'Survives restarts, stays on your device',
    ],
    alt: 'DegenView paper trading with a long BTC position marked on the chart and the positions table below',
    framed: true,
  },
  {
    slug: 'replay',
    eyebrow: 'Bar replay',
    title: 'Hit rewind on the market. Replay it bar by bar.',
    blurb:
      'Watch how price action actually unfolded. Pick any moment in history and replay it at the speed you want, with zero lookahead, on every chart at once. Review your calls, test your read, learn from the tape.',
    bullets: [
      'Start anywhere: click a candle on the chart or pick an exact date and time',
      'Multiple speeds, with selectable replay intervals',
      'One shared clock keeps every chart in the tab moving together',
      'Practice entries with the paper-trading ticket against the replayed price',
    ],
    alt: 'Bar replay controls with a timeline scrubber and speed selector over a historical chart',
  },
];

/** Features without a screenshot of their own: a short list under the showcase sections. */
export interface Extra {
  /** Picks the illustration in MoreFeatures. */
  slug: 'no-account' | 'watchlists' | 'tools' | 'indicators' | 'alerts' | 'webhooks' | 'ai' | 'icloud';
  title: string;
  text: string;
  /** Shown as a footnote under the list when the item carries an asterisk. */
  note?: string;
}

export const extras: Extra[] = [
  {
    slug: 'no-account',
    title: 'No account. No signup.*',
    text: 'Open the app and use it. There’s no email to verify, no trial to start, and no “welcome back!” to dismiss.',
    note: 'Alpaca is the exception: its free US stock data needs an Alpaca account and your own API keys. That’s their rule, not ours.',
  },
  {
    slug: 'watchlists',
    title: 'Unlimited watchlists',
    text: 'Make as many as you like. “Upgrade to add another list” was never a feature.',
  },
  {
    slug: 'tools',
    title: 'The charting tools you already love',
    text: 'The drawing toolbox TradingView users have muscle memory for, minus the plan comparison table.',
  },
  {
    slug: 'indicators',
    title: 'As many indicators as your CPU can handle',
    text: 'Volume, RSI, EMA, Bollinger Bands, Supertrend and your own Pine scripts. Keep stacking them until your fans file a complaint.',
  },
  {
    slug: 'alerts',
    title: 'Price alerts',
    text: 'A market app that tells you when the price moves. Revolutionary, we know.',
  },
  {
    slug: 'webhooks',
    title: 'Webhook alerts',
    text: 'Price alerts and Pine alert() calls can hit a webhook you configure. Wire them to a bot, Discord, or whatever you’re into.',
  },
  {
    slug: 'ai',
    title: 'AI help for Pine Script',
    text: 'A built-in coding assistant for your scripts. It writes the first draft, you take the credit.',
  },
  {
    slug: 'icloud',
    title: 'iCloud sync on macOS',
    text: 'Opt in and your setup follows you between Macs through your own iCloud, not a server of ours.',
  },
];
