export const support = {
  meta: {
    title: 'Support DegenView – Keep It Free and Open Source',
    description:
      'DegenView is free, open source and built by one person. Buy a coffee, send crypto, star the project or spread the word to keep it going.',
  },
  breadcrumbs: { home: 'Home', support: 'Support' },

  hero: {
    eyebrow: 'support',
    title: 'Keep it <span class="gradient-text">free</span>',
    lead: 'No ads, no paywall, and one person behind it. If DegenView earns a spot on your screen, here is how to help it keep going.',
    star: 'Star on GitHub',
    note: 'No pressure. Using DegenView already helps, and everything stays free either way.',
  },

  /** Paid ways: the coffee and the crypto cards. */
  chipIn: {
    eyebrow: 'chip in',
    title: 'Fuel the <span class="gradient-text">work</span>',
    lead: 'Support goes straight to the maintainer and buys more time for DegenView. Any amount is welcome, none is expected.',
    coffee: {
      tag: 'Any amount',
      title: 'Buy me a coffee',
      body: 'The quickest way to say thanks: a one-off coffee through Buy Me a Coffee, done in a minute.',
    },
    crypto: {
      tag: 'On-chain',
      title: 'Send crypto',
      body: 'Prefer a wallet? Copy an address and send it directly. No middleman, no fees beyond the network’s.',
      button: 'Show addresses',
    },
  },

  supporters: {
    title: 'Recent <span class="gradient-text">supporters</span>',
    lead: 'Thank you for chipping in and helping keep DegenView free.',
    anonymous: 'Anonymous supporter',
  },

  crypto: {
    eyebrow: 'crypto',
    title: 'On-chain <span class="gradient-text">thanks</span>',
    lead: 'Copy the address for your network. Funds sent on the wrong network can’t be recovered, so check it before you send.',
    list: 'Crypto addresses',
    copy: 'Copy',
    /** {name} = asset name, e.g. "Bitcoin". */
    copyAria: 'Copy {name} address',
    copied: 'Copied',
    copyFailed: 'Press ⌘/Ctrl+C',
    /** `{ticker}` and `{network}` are replaced by the asset's ticker and network. */
    network: 'Send {ticker} on the {network} network only.',
    /** `{name}` = asset name. Screen-reader label of the address text. */
    addressLabel: '{name} address',
    safety: 'Only copy addresses from this page, and compare the first and last characters after you paste.',
  },

  /** Free ways. */
  free: {
    eyebrow: 'free ways',
    title: 'No wallet? <span class="gradient-text">No problem</span>',
    lead: 'These help just as much, and each takes about a minute.',
    badge: 'Free',
    star: {
      title: 'Star the project',
      body: 'Stars are how people find open source projects. One click helps more traders discover DegenView.',
      button: 'Star on GitHub',
      /** `{count}` = formatted number of stars. */
      count: '{count} stars',
    },
    share: {
      title: 'Spread the word',
      body: 'Tell a trader friend, post a screenshot, or answer a “free TradingView alternative?” thread. The community hangs out on Reddit.',
      x: 'Share on X',
      /** Pre-filled post text. The page URL is appended by X. */
      xText: 'DegenView: a free, open source TradingView alternative for your desktop.',
    },
    feedback: {
      title: 'Report bugs, share ideas',
      body: 'Every rough edge you report gets fixed for everyone. Tell us what you hit, or what you’d like to see next.',
      button: 'Open an issue',
    },
    contribute: {
      title: 'Contribute',
      body: 'Code, docs or translations. DegenView speaks six languages, and fixes from native speakers are very welcome.',
      code: 'Source code',
      translations: 'Translations',
      docs: 'Docs',
    },
  },

  /** Short promises, rendered as rows: `claim` is the big line, `text` the explanation. */
  good: {
    eyebrow: 'good to know',
    title: 'The <span class="gradient-text">fine print</span>',
    items: [
      { claim: 'Nothing is locked', text: 'Every feature is free for everyone. Support is a thank-you, not a purchase, and it unlocks nothing.' },
      { claim: 'Goes to the maintainer', text: 'Your support pays for the time it takes to build, test and maintain DegenView, one person’s time.' },
      { claim: 'Free forever', text: 'DegenView is GPL-3.0 open source. No ads, no paywall, now or later.' },
    ],
  },

  cta: {
    title: 'Thank <span class="gradient-text">you</span>',
    lead: 'Whether you chip in, star the repo or just use it: you’re the reason this exists.',
  },
};
