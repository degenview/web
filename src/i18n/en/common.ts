export const common = {
  skipToContent: 'Skip to content',
  ogAlt: 'DegenView: the free, open source TradingView alternative',

  /** Site navigation (header, footer, mobile menu). Link labels are shared by header and footer. */
  nav: {
    primary: 'Primary',
    mobile: 'Mobile',
    footer: 'Footer',
    homeAria: 'DegenView home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    features: 'Features',
    pineStudio: 'Pine Studio',
    tradingviewAlternative: 'TradingView alternative',
    download: 'Download',
    faq: 'FAQ',
    docs: 'Docs',
    github: 'GitHub',
    privacyPolicy: 'Privacy policy',
    cookieSettings: 'Cookie settings',
    support: 'Support',
    /** Footer link text. */
    supportDegenView: 'Support DegenView',
  },

  /** Screen-reader suffix for links that open a new tab. Rendered as `<span class="sr-only"> {text}</span>`. */
  opensInNewTab: '(opens in a new tab)',

  footer: {
    tagline: 'Free, open-source market dashboard. © {year} Nico Oelgart, GPL-3.0-only.',
    trademark:
      'Pine Script and TradingView are trademarks of TradingView, Inc. DegenView is not affiliated with or endorsed by TradingView or any listed data provider. All other trademarks belong to their owners. Not financial advice.',
    /** Shown in the version badge when the latest release tag could not be fetched. */
    versionFallback: 'Open source',
  },

  coffee: 'Buy me a coffee',

  theme: {
    group: 'Color theme',
    system: 'System theme',
    light: 'Light theme',
    dark: 'Dark theme',
  },

  cookies: {
    title: 'Cookies, but only if you say so',
    text: 'We’d like to use cookies to measure visits to this site.',
    decline: 'Decline',
    accept: 'Accept',
  },

  preRelease: {
    ariaLabel: 'Pre-release notice',
    /** `block` variant. `{version}` is replaced by the release tag, `{issues}` by the GitHub issues link. */
    block: {
      releaseCandidate: {
        title: 'DegenView is in release candidate testing',
        body: '{version} is a release candidate of the next stable version, so you may hit rough edges. Found one? {issues}.',
      },
      preRelease: {
        title: 'DegenView is in pre-release testing',
        body: '{version} is a pre-release of the next stable version, so you may hit rough edges. Found one? {issues}.',
      },
      issuesLink: 'Tell us on GitHub',
      releaseNotes: 'Release notes',
    },
    /** `inline` variant. `{issues}` is replaced by the GitHub issues link. */
    inline: {
      releaseCandidate: 'Release candidate: expect rough edges. {issues}.',
      preRelease: 'Pre-release: expect rough edges. {issues}.',
      issuesLink: 'Report issues',
    },
  },

  /** Download menus and the platform-detection script (see Footer: emitted as JSON for src/scripts/platform.ts). */
  download: {
    label: 'Download',
    forOs: 'For {os}',
    osDownloads: '{os} downloads',
    recommended: 'Recommended',
    viewSource: 'View source',
    onGithub: 'On GitHub',
    /** Hero button label once the visitor's OS is detected. */
    downloadFor: 'Download for {os}',
    chooseDownload: 'Choose your download',
    mobileNote: 'DegenView is a desktop app — grab it on your computer.',
  },

  /** Human-readable names of download file kinds (OS names and architectures are not translated). */
  platforms: {
    formats: {
      diskImage: 'Disk image',
      installer: 'Installer',
      tarball: 'Tarball',
      flatpak: 'Flatpak',
    },
  },

  sectionNav: {
    ariaLabel: 'Sections',
    /** Default section labels of the home page, keyed by section id. */
    sections: {
      markets: 'Markets',
      'pine-script': 'Pine Script',
      mcp: 'MCP',
      portfolio: 'Portfolio',
      'paper-trading': 'Paper trading',
      replay: 'Replay',
      'chart-types': 'Chart types',
      more: 'More',
      feedback: 'Feedback',
      download: 'Download',
    },
  },

  codeBlock: {
    defaultLabel: 'shell',
    copy: 'Copy',
    copyAria: 'Copy {label}',
    copyAriaFallbackLabel: 'commands',
  },

  screenshot: {
    openPlayer: '{alt}. Open larger player',
    closePlayer: 'Close player',
    enlarge: '{alt}. Enlarge image',
    closeImage: 'Close image',
    comingSoonAria: '{alt} (screenshot coming soon)',
    comingSoon: 'screenshot coming soon',
  },

  notFound: {
    title: 'Page not found – DegenView',
    description: 'That page doesn’t exist.',
    /** `{accent}` is replaced by the highlighted (gradient) part. */
    heading: 'This chart is {accent}',
    headingAccent: 'delisted.',
    body: 'The page you’re after doesn’t exist.',
    button: 'Back to home',
  },
};
