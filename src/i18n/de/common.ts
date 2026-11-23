import type { Dict } from '../en';

export const common: Dict['common'] = {
  skipToContent: 'Zum Inhalt springen',
  ogAlt: 'DegenView: die kostenlose Open-Source-Alternative zu TradingView',

  nav: {
    primary: 'Hauptnavigation',
    mobile: 'Mobil',
    footer: 'Fußbereich',
    homeAria: 'DegenView Startseite',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    features: 'Funktionen',
    pineStudio: 'Pine Studio',
    tradingviewAlternative: 'TradingView-Alternative',
    download: 'Download',
    faq: 'FAQ',
    docs: 'Doku',
    github: 'GitHub',
    privacyPolicy: 'Datenschutzerklärung',
    cookieSettings: 'Cookie-Einstellungen',
    support: 'Unterstützen',
    /** Footer link text. */
    supportDegenView: 'DegenView unterstützen',
  },

  opensInNewTab: '(öffnet in einem neuen Tab)',

  footer: {
    tagline: 'Kostenloses Open-Source-Marktdashboard. © {year} Nico Oelgart, GPL-3.0-only.',
    trademark:
      'Pine Script und TradingView sind Marken von TradingView, Inc. DegenView steht in keiner Verbindung zu TradingView oder einem der genannten Datenanbieter und wird von diesen nicht unterstützt. Alle anderen Marken gehören ihren jeweiligen Inhabern. Keine Anlageberatung.',
    versionFallback: 'Open Source',
  },

  coffee: 'Spendier mir einen Kaffee',

  theme: {
    group: 'Farbschema',
    system: 'Systemschema',
    light: 'Helles Schema',
    dark: 'Dunkles Schema',
  },

  cookies: {
    title: 'Cookies, aber nur, wenn du willst',
    text: 'Wir würden gern Cookies nutzen, um die Besuche auf dieser Website zu messen.',
    decline: 'Ablehnen',
    accept: 'Akzeptieren',
  },

  preRelease: {
    ariaLabel: 'Hinweis zur Vorabversion',
    block: {
      releaseCandidate: {
        title: 'DegenView befindet sich im Release-Candidate-Test',
        body: '{version} ist ein Release Candidate der nächsten stabilen Version, da kann es noch ruckeln. Etwas gefunden? {issues}.',
      },
      preRelease: {
        title: 'DegenView befindet sich im Vorabtest',
        body: '{version} ist eine Vorabversion der nächsten stabilen Version, da kann es noch ruckeln. Etwas gefunden? {issues}.',
      },
      issuesLink: 'Sag es uns auf GitHub',
      releaseNotes: 'Release Notes',
    },
    inline: {
      releaseCandidate: 'Release Candidate: Macken möglich. {issues}.',
      preRelease: 'Vorabversion: Macken möglich. {issues}.',
      issuesLink: 'Fehler melden',
    },
  },

  download: {
    label: 'Download',
    forOs: 'Für {os}',
    osDownloads: '{os}-Downloads',
    recommended: 'Empfohlen',
    viewSource: 'Quellcode ansehen',
    onGithub: 'Auf GitHub',
    downloadFor: 'Download für {os}',
    chooseDownload: 'Download auswählen',
    mobileNote: 'DegenView ist eine Desktop-App – hol sie dir auf deinem Computer.',
  },

  platforms: {
    formats: {
      diskImage: 'Disk-Image',
      installer: 'Installer',
      tarball: 'Tarball',
      flatpak: 'Flatpak',
    },
  },

  sectionNav: {
    ariaLabel: 'Abschnitte',
    sections: {
      markets: 'Märkte',
      'pine-script': 'Pine Script',
      mcp: 'MCP',
      portfolio: 'Portfolio',
      'paper-trading': 'Paper Trading',
      replay: 'Replay',
      'chart-types': 'Chartarten',
      more: 'Mehr',
      feedback: 'Stimmen',
      download: 'Download',
    },
  },

  codeBlock: {
    defaultLabel: 'shell',
    copy: 'Kopieren',
    copyAria: '{label} kopieren',
    copyAriaFallbackLabel: 'Befehle',
  },

  screenshot: {
    openPlayer: '{alt}. Größeren Player öffnen',
    closePlayer: 'Player schließen',
    enlarge: '{alt}. Bild vergrößern',
    closeImage: 'Bild schließen',
    comingSoonAria: '{alt} (Screenshot folgt bald)',
    comingSoon: 'Screenshot folgt bald',
  },

  notFound: {
    title: 'Seite nicht gefunden – DegenView',
    description: 'Diese Seite gibt es nicht.',
    heading: 'Dieser Chart ist {accent}',
    headingAccent: 'delistet.',
    body: 'Die gesuchte Seite gibt es nicht.',
    button: 'Zurück zur Startseite',
  },
};
