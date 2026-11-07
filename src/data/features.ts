export interface Feature {
  slug: string;
  eyebrow: string;
  title: string;
  blurb: string;
  bullets: string[];
  /** What the screenshot should show (also used as alt text). */
  alt: string;
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
    alt: 'DegenView charting BTC, a US stock and a Polymarket event side by side',
  },
  {
    slug: 'pine-script',
    eyebrow: 'Pine Script v6',
    title: 'Write Pine Script. Run it on your own machine.',
    blurb:
      'Write TradingView-style scripts and run them right on your machine. No account needed, and your source never leaves your device.',
    bullets: [
      'Plots, shapes, backgrounds and candle colors rendered right on the chart',
      'Typed input.* controls that re-run the script live',
      'Script Manager with editor, diagnostics and a live preview chart',
      'alert() fires real alerts on live bars',
    ],
    alt: 'DegenView Script Manager with a Pine Script editor and live preview chart',
  },
  {
    slug: 'charts',
    eyebrow: 'Charts & analysis',
    title: 'Hand-drawn candles. Zero chart-library baggage.',
    blurb:
      'Fast, crisp candles with all the tools you need to mark them up.',
    bullets: [
      'Volume, RSI, EMA, Bollinger Bands and Supertrend',
      'Trend lines, Fibonacci retracements and brush strokes with undo/redo',
      'Ruler for percent, price, duration and bar count',
      'Crosshair synced across every chart in a tab, drag the Y-axis to rescale',
    ],
    alt: 'Candlestick chart with RSI, Bollinger Bands, a Fibonacci retracement and a trend line',
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
    alt: 'Portfolio view with allocation chart, P&L and transaction ledger',
  },
  {
    slug: 'alerts',
    eyebrow: 'Alerts',
    title: 'Alerts that don’t need a subscription.',
    blurb:
      'Absolute or percentage crosses, once or repeating, evaluated locally. No account and no remote service in the loop.',
    bullets: [
      'Price alerts plus Pine Script alert() notifications',
      'In-app banners and desktop notifications, independently configurable',
      'macOS: signed bundles keep price alerts and webhooks running after you quit',
      'Alerts center with search and filters for active, triggered and paused',
    ],
    alt: 'Alerts center listing active and triggered price alerts',
  },
  {
    slug: 'mcp',
    eyebrow: 'MCP server',
    title: 'Let your AI assistant work your charts.',
    blurb:
      'Connect an AI assistant or automation tool to DegenView through MCP. It’s optional, off by default, and you decide exactly what each connection can do.',
    bullets: [
      'List your workspaces and charts, and add new charts and indicators',
      'Create, edit, pause and delete price alerts',
      'Read your Pine scripts, diagnostics and reports, and edit script source',
      'Read and Write permissions you set per connection, revocable any time',
    ],
    alt: 'DegenView MCP server settings with connected clients and their permissions',
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
    alt: 'Order ticket and paper positions with markers on a chart',
  },
  {
    slug: 'replay',
    eyebrow: 'Bar replay',
    title: 'Hit rewind on the market. Replay it bar by bar.',
    blurb:
      'Watch how price action actually unfolded. Pick any moment in history and replay it at the speed you want, with zero lookahead, on every chart at once. Review your calls, test your read, learn from the tape.',
    bullets: [
      'Start anywhere: click a candle on the chart or pick an exact date and time',
      'Autoplay, pause or step one bar at a time, and scrub the timeline to jump around',
      'Multiple speeds, with selectable replay intervals',
      'One shared clock keeps every chart in the tab moving together',
      'Practice entries with the paper-trading ticket against the replayed price',
    ],
    alt: 'Bar replay controls with a timeline scrubber and speed selector over a historical chart',
  },
  {
    slug: 'layouts',
    eyebrow: 'Dashboard',
    title: 'Your layout. Every time you open it.',
    blurb:
      'Stack charts vertically or tile them in columns, save named views, keep a favorites watchlist, and pick up exactly where you left off.',
    bullets: [
      'Vertical stacks or multi-column grids with drag-to-reorder',
      'Saved views remember tickers, timeframe, zoom, indicators and appearance',
      'App-wide, reorderable favorites sidebar, plus as many named saved views as you like',
      'macOS: native tabs and windows you can drag, detach and merge',
    ],
    alt: 'Multi-column chart grid with favorites sidebar and saved views',
  },
  {
    slug: 'themes',
    eyebrow: 'Appearance',
    title: 'Light, dark, or whatever your OS says.',
    blurb: 'System, Light and Dark themes, because your eyes (and your 3 a.m. charts) deserve options.',
    bullets: ['Follows your system appearance automatically', 'Charts, editors and sheets all re-skin together'],
    alt: 'DegenView in light and dark themes side by side',
  },
];

export const notPremium: { name: string; note?: string }[] = [
  { name: 'Multiple watchlists' },
  { name: 'Multi-chart layouts' },
  { name: 'Indicators', note: 'RSI, EMA, Bollinger, Supertrend' },
  { name: 'Price alerts' },
  { name: 'Bar replay', note: 'Multiple speeds, synced charts' },
  { name: 'Scripting engine', note: 'Pine Script, local' },
  { name: 'Portfolio tracking' },
  { name: 'Paper trading' },
];

export const altTaglines = [
  'Where alerts don’t need a subscription.',
  'Where your scripts never leave your laptop.',
  'Where indicators don’t come with a price tag.',
  'Where replay is not a paid add-on.',
  'Where your data isn’t someone else’s product.',
];
