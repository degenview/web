import type { Dict } from '../en';

export const home: Dict['home'] = {
  meta: {
    title: 'DegenView – Alternative à TradingView gratuite, open source',
    description:
      'Alternative à TradingView gratuite et open source : multigraphiques, Pine Script v6 en local, alertes, replay, portefeuilles. macOS, Windows, Linux.',
  },

  jsonLd: {
    alternateNames: ['DegenView – alternative open source à TradingView', 'DegenView Charts'],
  },

  hero: {
    eyebrow: 'Gratuit et open source',
    eyebrowLink: 'Alternative à TradingView',
    phrases: ['les listes de suivi', 'indicateurs illimités', 'plusieurs graphiques', 'alertes illimitées', 'plus de 30 symboles', 'plusieurs dessins'],
    headlineBefore: 'Ici,',
    headlineMiddle: 'c’est',
    headlineEmphasis: 'inclus, pas premium.',
    lead: 'L’alternative à TradingView gratuite et open source pour votre bureau : crypto, actions et marchés de prédiction dans des mises en page multigraphiques, avec Pine Script en local, alertes et replay. Sans compte, et tout tourne sur votre machine.',
    screenshotAlt: 'Tableau de bord DegenView avec plusieurs graphiques en direct dans une grille',
  },

  // Labels around the quotes in src/data/testimonials.ts (the quotes themselves are verbatim and never translated).
  testimonials: {
    eyebrow: 'avis',
    heading: 'Ce que les gens <span class="gradient-text">en disent</span>',
    author: 'Avis d’un utilisateur',
    tags: { debugger: 'Débogueur', pine: 'Pine Script', impression: 'Première impression' },
  },

  sources: {
    heading: 'Les données des sources que vous utilisez déjà',
  },

  features: {
    heading: 'Tout ce qu’un tableau de bord de marchés <span class="gradient-text">devrait avoir</span>',
    eyebrow: 'fonctionnalités',
    markets: {
      eyebrow: 'Marchés et données en direct',
      title: 'Tous les marchés, un seul écran.',
      blurb:
        'Cherchez sur Binance, Coinbase, OKX, Kraken, Bybit, Gate.io, MEXC, CoinGecko et DEXScreener côte à côte, ajoutez des actions américaines et affichez Polymarket et Kalshi sous forme de probabilités.',
      bullets: [
        'Prix en direct de Binance, OKX, Kraken, Bybit, Gate.io, MEXC et Coinbase',
        'Actions américaines via le flux IEX gratuit d’Alpaca',
        'Pas de clé API pour la plupart des sources',
      ],
      alt: 'DegenView avec des graphiques BTC, ETH et SOL et un graphique de probabilité Polymarket dans une même mise en page multigraphique',
    },
    'pine-script': {
      eyebrow: 'Moteur Pine Script v6 local',
      title: 'Écrivez du Pine Script. Exécutez-le en local.',
      blurb:
        'Écrivez des scripts compatibles TradingView et exécutez-les sur votre machine. Aucun compte, et votre code ne quitte jamais votre appareil.',
      bullets: [
        'Vibe coding avec votre assistant IA via MCP',
        'Débogueur pas à pas avec points d’arrêt',
        'Profileur intégré pour voir où votre script perd du temps',
        'Backtest des stratégies avec courbe de capital et simulation Monte Carlo',
      ],
      alt: 'DegenView Pine Studio avec un éditeur Pine Script et un graphique d’aperçu en direct',
      linkLabel: 'Découvrir Pine Studio',
    },
    mcp: {
      eyebrow: 'Serveur MCP',
      title: 'Laissez l’IA travailler vos graphiques.',
      blurb:
        'Connectez un assistant IA à DegenView via MCP. Dites « trace les supports et résistances » et regardez-les apparaître sur votre graphique en direct.',
      bullets: [
        'Ajoutez des graphiques et des indicateurs',
        'Créez, modifiez et mettez en pause des alertes de prix',
        'Lisez et modifiez vos scripts Pine',
      ],
      alt: 'Un assistant IA dans un terminal trace des niveaux de support et de résistance sur un graphique DegenView via MCP',
    },
    portfolio: {
      eyebrow: 'Suivi de portefeuille',
      title: 'Plusieurs portefeuilles. Un vrai P&L.',
      blurb:
        'Suivez autant de portefeuilles que vous voulez, avec registre des transactions et comptabilité au coût moyen pondéré.',
      bullets: [
        'Répartition, variation 24 h, P&L réalisé et latent',
        'Devise d’affichage : USD, EUR, GBP, JPY, CHF ou BTC',
        'Import/export CSV, exports CoinMarketCap inclus',
      ],
      alt: 'Vue d’ensemble d’un portefeuille DegenView avec graphique de valeur, anneau de répartition, cartes de P&L et principales positions',
    },
    'paper-trading': {
      eyebrow: 'Paper trading',
      title: 'Argent fictif, vrais graphiques.',
      blurb:
        'Un simulateur local et persistant, avec ordres au marché, à cours limité et stop, et suivi de la position nette. Les ordres simulés ne touchent jamais une vraie bourse.',
      bullets: [
        'Coût moyen pondéré par position',
        'Marqueurs d’ordres et de positions sur le graphique',
        'Survit aux redémarrages, reste sur votre appareil',
      ],
      alt: 'Paper trading DegenView avec une position longue sur BTC marquée sur le graphique et le tableau des positions en dessous',
    },
    replay: {
      eyebrow: 'Replay barre par barre',
      title: 'Rembobinez le marché, barre par barre.',
      blurb:
        'Choisissez n’importe quel moment de l’historique et rejouez-le à votre rythme, sans anticipation, sur tous vos graphiques à la fois.',
      bullets: [
        'Démarrez sur n’importe quelle bougie ou heure précise',
        'Une horloge commune synchronise tous les graphiques',
        'Entraînez vos entrées avec le ticket de paper trading',
      ],
      alt: 'Commandes de replay avec curseur de chronologie et sélecteur de vitesse sur un graphique historique',
    },
  },

  extras: {
    eyebrow: 'et tant qu’on y est',
    heading: 'Le reste des <span class="gradient-text">bonnes choses</span>',
    intro: 'Toutes les fonctionnalités ne méritent pas une capture d’écran. Celles-ci ont mérité une illustration.',
    illustrationAria: 'Illustration : {title}',
    'no-account': {
      tag: 'Vie privée',
      title: 'Pas de compte. Pas d’inscription.*',
      text: 'Ouvrez l’app et servez-vous. Pas d’e-mail à valider, pas d’essai à lancer, pas de « content de vous revoir ! » à fermer.',
      note: 'Alpaca fait exception : ses données gratuites sur les actions américaines exigent un compte Alpaca et vos propres clés API. C’est leur règle, pas la nôtre.',
    },
    watchlists: {
      tag: 'Listes',
      title: 'Listes de suivi illimitées',
      text: 'Créez-en autant que vous voulez. « Passez à l’offre supérieure pour ajouter une autre liste » n’a jamais été une fonctionnalité.',
    },
    tools: {
      tag: 'Dessin',
      title: 'Les outils graphiques que vous adorez déjà',
      text: 'La boîte à outils de dessin que les utilisateurs de TradingView ont dans les doigts, sans le tableau comparatif des offres.',
    },
    indicators: {
      tag: 'Indicateurs',
      title: 'Autant d’indicateurs que votre processeur peut en encaisser',
      text: 'Volume, RSI, EMA, bandes de Bollinger, Supertrend et vos propres scripts Pine. Empilez-les jusqu’à ce que vos ventilateurs déposent une plainte.',
    },
    alerts: {
      tag: 'Alertes',
      title: 'Alertes de prix',
      text: 'Une appli de marché qui vous prévient quand le prix bouge. Révolutionnaire, on sait.',
    },
    webhooks: {
      tag: 'Webhooks',
      title: 'Alertes webhook',
      text: 'Les alertes de prix et les appels Pine alert() peuvent déclencher un webhook que vous configurez. Branchez-les sur un bot, Discord, ou ce qui vous plaît.',
    },
    ai: {
      tag: 'Pine',
      title: 'Aide IA pour Pine Script',
      text: 'Un assistant de code intégré pour vos scripts. Il écrit le premier jet, vous récoltez les lauriers.',
    },
    icloud: {
      tag: 'macOS',
      title: 'Synchronisation iCloud sur macOS',
      text: 'Activez-la et votre configuration vous suit d’un Mac à l’autre via votre propre iCloud, pas via un serveur à nous.',
    },
  },

  download: {
    heading: 'Prenez DegenView. <span class="gradient-text block">C’est gratuit.</span>',
    latest: 'Dernière version {version}. Sans compte, sans essai, sans piège.',
    allDownloads: 'Tous les téléchargements',
    faq: 'FAQ',
    freeForever: 'Gratuit pour toujours. S’il mérite une place sur votre écran :',
  },

  illustrations: {
    noAccount: { email: 'E-mail', password: 'Mot de passe', cta: 'Ouvrez-le, c’est tout' },
    watchlists: { title: 'Liste de suivi 7', newButton: '+ Créer' },
    indicators: { load: 'charge', indicators: 'indicateurs' },
    alerts: { crossedAbove: 'Passé au-dessus de 76 000' },
    ai: { suggestion: 'Ajouter alerte RSI' },
    free: { forever: 'pour toujours', noAccount: 'Sans compte' },
    shield: { noAnalytics: 'Sans analytique', noTelemetry: 'Sans télémétrie', noAccount: 'Sans compte' },
    smartscreen: { title: 'Windows a protégé votre PC', moreInfo: 'Plus d’infos', runAnyway: 'Exécuter quand même' },
  },
};
