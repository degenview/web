import type { Dict } from '../en';

export const common: Dict['common'] = {
  skipToContent: 'Aller au contenu',
  ogAlt: 'DegenView : l’alternative à TradingView, gratuite et open source',

  nav: {
    primary: 'Principale',
    mobile: 'Mobile',
    footer: 'Pied de page',
    homeAria: 'Accueil DegenView',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    features: 'Fonctionnalités',
    pineStudio: 'Pine Studio',
    tradingviewAlternative: 'Alternative à TradingView',
    download: 'Télécharger',
    faq: 'FAQ',
    docs: 'Docs',
    github: 'GitHub',
    privacyPolicy: 'Politique de confidentialité',
    cookieSettings: 'Paramètres des cookies',
  },

  opensInNewTab: '(s’ouvre dans un nouvel onglet)',

  footer: {
    tagline: 'Tableau de bord de marchés gratuit et open source. © {year} Nico Oelgart, GPL-3.0-only.',
    trademark:
      'Pine Script et TradingView sont des marques de TradingView, Inc. DegenView n’est ni affilié ni approuvé par TradingView ou par l’un des fournisseurs de données cités. Toutes les autres marques appartiennent à leurs propriétaires. Ceci n’est pas un conseil financier.',
    versionFallback: 'Open source',
  },

  coffee: 'Offrez-moi un café',

  theme: {
    group: 'Thème de couleurs',
    system: 'Thème du système',
    light: 'Thème clair',
    dark: 'Thème sombre',
  },

  cookies: {
    title: 'Des cookies, mais seulement si vous le voulez',
    text: 'Nous aimerions utiliser des cookies pour mesurer les visites de ce site.',
    decline: 'Refuser',
    accept: 'Accepter',
  },

  preRelease: {
    ariaLabel: 'Avis de préversion',
    block: {
      releaseCandidate: {
        title: 'DegenView est en phase de test de version candidate',
        body: '{version} est une version candidate de la prochaine version stable : vous pouvez donc rencontrer quelques aspérités. Vous en avez trouvé une ? {issues}.',
      },
      preRelease: {
        title: 'DegenView est en phase de test de préversion',
        body: '{version} est une préversion de la prochaine version stable : vous pouvez donc rencontrer quelques aspérités. Vous en avez trouvé une ? {issues}.',
      },
      issuesLink: 'Dites-le-nous sur GitHub',
      releaseNotes: 'Notes de version',
    },
    inline: {
      releaseCandidate: 'Version candidate : bugs possibles. {issues}.',
      preRelease: 'Préversion : bugs possibles. {issues}.',
      issuesLink: 'Signaler un bug',
    },
  },

  download: {
    label: 'Télécharger',
    forOs: 'Pour {os}',
    osDownloads: 'Téléchargements {os}',
    recommended: 'Recommandé',
    viewSource: 'Voir le code source',
    onGithub: 'Sur GitHub',
    downloadFor: 'Télécharger pour {os}',
    chooseDownload: 'Choisissez votre téléchargement',
    mobileNote: 'DegenView est une application de bureau : installez-la sur votre ordinateur.',
  },

  platforms: {
    formats: {
      diskImage: 'Image disque',
      installer: 'Installeur',
      tarball: 'Archive tar',
      flatpak: 'Flatpak',
    },
  },

  sectionNav: {
    ariaLabel: 'Sections',
    sections: {
      markets: 'Marchés',
      'pine-script': 'Pine Script',
      mcp: 'MCP',
      portfolio: 'Portefeuille',
      'paper-trading': 'Paper trading',
      replay: 'Replay',
      'chart-types': 'Types de graphiques',
      more: 'Plus',
      feedback: 'Avis',
      download: 'Télécharger',
    },
  },

  codeBlock: {
    defaultLabel: 'shell',
    copy: 'Copier',
    copyAria: 'Copier {label}',
    copyAriaFallbackLabel: 'les commandes',
  },

  screenshot: {
    openPlayer: '{alt}. Ouvrir le lecteur agrandi',
    closePlayer: 'Fermer le lecteur',
    enlarge: '{alt}. Agrandir l’image',
    closeImage: 'Fermer l’image',
    comingSoonAria: '{alt} (capture d’écran bientôt disponible)',
    comingSoon: 'capture d’écran bientôt disponible',
  },

  notFound: {
    title: 'Page introuvable – DegenView',
    description: 'Cette page n’existe pas.',
    heading: 'Ce graphique est {accent}',
    headingAccent: 'radié de la cote.',
    body: 'La page que vous cherchez n’existe pas.',
    button: 'Retour à l’accueil',
  },
};
