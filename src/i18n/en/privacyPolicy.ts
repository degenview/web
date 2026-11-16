export const privacyPolicy = {
  meta: {
    title: 'Privacy Policy – DegenView',
    description:
      'How degenview.app handles cookies and analytics: nothing is tracked without your consent, and the DegenView desktop app has no analytics or telemetry.',
    breadcrumb: 'Privacy policy',
  },

  /** Shown on translated pages only. */
  notice: 'This is a translation for convenience. The English version is legally binding.',

  hero: {
    eyebrow: 'your privacy',
    title: 'Cookies &amp; <span class="gradient-text">analytics</span>',
    lead: 'This website doesn’t collect or store personal data from visitors itself. If you allow it, it uses cookies and similar technologies to understand how the site is used.',
    lastUpdated: 'Last updated: {date}',
  },

  opensNewTab: ' (opens in a new tab)',

  storage: {
    title: 'Types of storage we use',
    necessary: {
      title: 'Strictly necessary',
      body: 'Needed for the site to work the way you set it up: your theme and your cookie choice. This is stored in your browser only.',
      badge: 'No consent required',
    },
    analytics: {
      title: 'Analytics (optional)',
      body: 'Used to measure traffic and understand how visitors use the site. If you accept, they may process IP addresses, device and browser information, and which pages you view.',
      badge: 'Off until you accept',
    },
    table: {
      caption: 'What is stored in your browser',
      name: 'Name',
      purpose: 'Purpose',
      duration: 'Duration',
      // Storage keys `theme` and `dv_analytics_consent` stay in the page code.
      themePurpose: 'Remembers whether you picked light, dark or system.',
      themeDuration: 'Local storage, until you clear it',
      consentPurpose: 'Remembers whether you accepted or declined analytics.',
      consentDuration: 'Local storage, until you clear it',
      googleName: 'Google cookies',
      googlePurpose: 'Only if you accept analytics: set by Google Tag Manager and the tags in it to measure visits.',
      googleDuration: 'Set by Google, see their policy',
    },
  },

  legal: {
    title: 'Legal bases for processing',
    body: [
      'Where the law requires it, such as in the EEA and the UK, analytics are only used with your consent. Elsewhere they may rest on legitimate interests or on your consent. Analytics are switched off by default.',
    ],
  },

  consent: {
    title: 'How consent works',
    // Order matters: icons are set in the page code.
    steps: [
      'You can accept or decline analytics on your first visit.',
      'No analytics cookies are used and nothing from Google loads without your consent.',
      'Your choice is stored on your device so we can remember it.',
      'If you decline, no analytics tracking takes place.',
    ],
  },

  manage: {
    title: 'Managing preferences',
    body: 'You can change or withdraw your consent at any time.',
    button: 'Open cookie settings',
  },

  third: {
    title: 'Third-party services',
    body: [
      'Analytics, if you accept them, are handled by Google through Google Tag Manager under Google’s own privacy policy, and your data may be processed outside your country.',
      'This site is hosted on GitHub Pages. To serve it, and to show the current version on the download buttons and fetch the download files, your browser talks to GitHub (github.com and api.github.com), which can see technical data such as your IP address under GitHub’s privacy statement. Fonts and images are served from this site itself, not from Google or other third parties.',
    ],
  },

  retention: {
    title: 'Data retention and your rights',
    body: [
      'We don’t keep personal data about visitors ourselves. Analytics data is kept by Google for the period set in our Google configuration and is deleted or anonymized when no longer needed.',
      'Depending on where you live, you may have the right to access, correct or delete personal data, to object to processing, and to withdraw consent at any time. Because this site doesn’t store personal data itself, you may need to contact Google or GitHub for requests about data they process. You can also lodge a complaint with your data protection authority.',
    ],
  },

  app: {
    title: 'The DegenView desktop app',
    body: [
      'This policy covers this website. The DegenView desktop app has no analytics or telemetry and needs no account. To do its job, it connects directly from your computer to the services listed below. Your watchlists, portfolios and Pine scripts stay on your device unless you send them somewhere yourself, for example to an AI provider you set up.',
      'These services are run by other companies, not by us. When you use DegenView you use their data and services, and by doing so you agree to their terms of service and privacy policies. We don’t control them and aren’t responsible for how they handle data. Some need an account or API key of your own, such as Alpaca and the AI providers.',
      'If you use the AI assistant, the text you send, which can include your script, goes to the provider you chose. Providers you run yourself, such as a local model, keep it on your machine.',
    ],
    table: {
      caption: 'Services the desktop app connects to, with their terms and privacy policies',
      service: 'Service',
      usedFor: 'Used for',
      terms: 'Terms',
      privacy: 'Privacy',
      termsSr: ' of {name} (opens in a new tab)',
      privacySr: ' policy of {name} (opens in a new tab)',
      siteLink: 'Terms and privacy on {host}',
      groups: {
        marketData: 'Market data',
        other: 'Services you switch on or use',
      },
    },
    /** What each service is used for, keyed by the provider id used in the page code. */
    uses: {
      binance: 'Crypto prices and charts',
      coinbase: 'Crypto prices and charts',
      coingecko: 'Coin lists, prices and charts',
      geckoterminal: 'DEX pool charts. Operated by CoinGecko, whose terms apply',
      dexscreener: 'DEX pairs and prices',
      coinmarketcap: 'Market indices such as Fear & Greed. Optional API key',
      polymarket: 'Prediction markets',
      kalshi: 'Prediction markets',
      alpaca: 'US stocks, with your own free API keys',
      bitstamp: 'Bitcoin price history for currency conversion',
      github: 'Checking for and downloading updates',
      x: 'Previews of X posts you add as cards',
      openai: 'AI assistant, only if you add your own API key',
      anthropic: 'AI assistant, only if you add your own API key',
      openrouter: 'AI assistant, only if you add your own API key',
      icloud: 'Optional sync between your Macs',
    },
  },

  contact: {
    title: 'Contact and updates',
    intro: 'DegenView is an open source project by Nico Oelgart. For questions about this policy, <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">open an issue on the project’s GitHub page<span class="sr-only"> (opens in a new tab)</span></a>.',
    body: [
      'We may update this policy when the law or the site changes. The date at the top shows when it last changed, and updates are posted on this page.',
    ],
    button: 'Open a GitHub issue',
  },
};
