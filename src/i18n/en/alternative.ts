export const alternative = {
  meta: {
    title: 'DegenView vs TradingView: the Free, Open Source Alternative',
    description:
      'DegenView vs TradingView: a free, open source desktop alternative with local Pine Script v6, unlimited watchlists, alerts and replay. macOS, Windows, Linux.',
    breadcrumb: 'TradingView alternative',
  },

  hero: {
    eyebrow: 'TradingView alternative',
    title: 'The free, open source <span class="gradient-text block">TradingView alternative</span>',
    lead: 'A desktop app for crypto, stocks and prediction markets, with Pine Script that runs on your own machine.',
    chips: ['Open source · GPL-3.0', 'No account', 'macOS · Windows · Linux'],
    priceCard: {
      forever: 'forever',
      download: 'Download for free',
      note: 'No account. No credit card. No trial clock.',
      platformsAria: 'Available for macOS, Windows and Linux',
    },
  },

  ladder: {
    eyebrow: 'pricing',
    title: 'How much do you want <span class="gradient-text">to pay?</span>',
    lead: 'TradingView has a ladder. DegenView has a floor, and it’s free.',
    freeBadge: 'Free',
    perMonthForever: 'per month, forever',
    planName: 'TradingView {name}',
    perMonthBilledAnnually: 'per month, billed annually',
    perYear: '≈ {amount} a year',
    note: 'Prices are TradingView’s, in euros, as listed on its <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="nofollow noopener noreferrer">pricing page<span class="sr-only"> (opens in a new tab)</span></a> in {date}. They change and vary by region, so check there before you decide.',
  },

  freeVsFree: {
    eyebrow: 'free vs free',
    title: 'What you get <span class="gradient-text">without paying</span>',
    lead: 'Both are free to start. Only one stays that way.',
    degenview: {
      subtitle: 'Free and open source',
      // Order matters: one entry per row.
      items: [
        'Unlimited watchlists',
        'As many indicators as your CPU can handle',
        'Multi-chart layouts',
        'Price alerts with no plan limit',
        'Pine Script v6 engine that runs on your machine',
        'Bar replay, paper trading and portfolio tracking',
        'Open source (GPL-3.0)',
        'No account needed',
      ],
      download: 'Download for free',
    },
    tradingview: {
      subtitle: 'Free (Basic) plan',
      // Order matters: the ✓ / – / ✗ marker of each row is set in the page code.
      items: [
        '2 indicators per chart',
        '1 chart per tab',
        '1 watchlist, up to 30 symbols',
        '3 active price alerts',
        'Pine Script runs on TradingView’s servers',
        'Web, desktop and mobile apps',
        'Huge community and script library',
        'Closed source',
      ],
      plans: 'See TradingView’s plans',
    },
    sr: {
      included: 'Included: ',
      limited: 'Limited: ',
      notAvailable: 'Not available: ',
      opensNewTab: ' (opens in a new tab)',
    },
    legendLimit: 'Limit on the free plan',
    checked: 'TradingView figures last checked {date}',
  },

  better: {
    eyebrow: 'to be fair',
    title: 'What TradingView <span class="gradient-text">still does better</span>',
    lead: 'We’d rather you pick the right tool than the loudest one.',
    // Order matters: icons are set in the page code.
    items: [
      { title: 'Apps everywhere', description: 'Web and mobile apps: your charts follow you to any browser or phone.' },
      { title: 'Wider markets', description: 'Stocks, futures, forex, bonds and economic data beyond crypto, US stocks and prediction markets.' },
      { title: 'A big community', description: 'Published ideas and a public library of other people’s scripts.' },
      { title: 'Trade from the chart', description: 'Place orders through connected brokers without leaving the chart.' },
    ],
    closing:
      'Rely on those? Keep TradingView alongside. Mostly want fast charts, indicators, alerts and replay with no plan to manage? This is the free one.',
  },

  comingFrom: {
    eyebrow: 'moving over',
    title: 'Coming from <span class="gradient-text">TradingView</span>',
    items: [
      { title: 'Pine Script v6', description: 'Paste your script into Pine Studio and run it locally, with a step debugger and a profiler.' },
      { title: 'Familiar tools', description: 'Trend lines, Fibonacci retracements, a ruler, and 18 chart types from candles to Renko and Kagi.' },
      { title: 'More than charts', description: 'Bar replay, paper trading, portfolio tracking, alerts with webhooks, and an optional MCP server for AI assistants.' },
    ],
  },

  cta: {
    title: 'Free today. <span class="gradient-text block">Free forever.</span>',
    lead: 'No account, no trial, no catch. macOS, Windows and Linux.',
    disclaimer:
      'DegenView is an independent project and is not affiliated with, endorsed by or sponsored by TradingView. TradingView and Pine Script are trademarks of TradingView, Inc., named here only to describe what DegenView is an alternative to and compatible with.',
  },
};
