import type { Dict } from '../en';

export const faq: Dict['faq'] = {
  meta: {
    title: 'FAQ DegenView – Alternative à TradingView open source',
    description:
      'Réponses sur DegenView, l’alternative à TradingView gratuite et open source : compte, Pine Script, données boursières, plateformes, premier lancement.',
  },
  breadcrumbs: { home: 'Accueil', faq: 'FAQ' },
  hero: {
    eyebrow: 'faq',
    title: 'Questions, <span class="gradient-text">réponses</span>',
    lead: 'Tout ce que l’on demande avant de télécharger. Si ce n’est pas ici, demandez sur GitHub.',
    searchLabel: 'Rechercher dans les questions',
    searchPlaceholder: 'Rechercher parmi {count} questions',
    found: {
      one: '{count} question trouvée',
      many: '{count} questions trouvées',
      other: '{count} questions trouvées',
    } as Record<string, string>,
  },
  nav: {
    label: 'Thèmes',
    heading: 'Thèmes',
  },
  groups: {
    basics: { title: 'Les bases', intro: 'Ce que ça coûte, qui est derrière, et ce que ce n’est pas.' },
    scripts: { title: 'Pine Script et IA', intro: 'Exécuter des scripts, et où peuvent aller vos scripts et vos graphiques.' },
    data: { title: 'Données et vie privée', intro: 'D’où viennent les prix et ce que nous savons de vous (très peu).' },
    install: { title: 'Installation et plateformes', intro: 'Ce qui tourne où, et quoi faire au premier lancement.' },
  },
  groupArtLabel: 'Illustration : {title}',
  itemArtLabel: 'Illustration : {question}',
  empty:
    'Aucune question ne correspond. <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">Demandez sur GitHub<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a> et nous l’ajouterons.',
  cta: {
    title: 'Encore <span class="gradient-text">une question ?</span>',
    lead: 'Ouvrez un ticket et nous y répondrons. Ou téléchargez simplement DegenView et jugez par vous-même.',
    download: 'Télécharger gratuitement',
    ask: 'Demander sur GitHub',
  },
  items: {
    free: {
      q: 'DegenView est-il vraiment gratuit ?',
      a: 'Oui. DegenView est gratuit et open source sous GPL-3.0. Il n’y a ni offres payantes ni fonctionnalités verrouillées.',
    },
    alternative: {
      q: 'DegenView est-il une alternative gratuite à TradingView ?',
      a: 'Oui. DegenView est une application de bureau gratuite et open source pour la crypto, les actions et les marchés de prédiction, avec des mises en page multigraphiques, un moteur Pine Script v6 local, des alertes, un replay barre par barre et le suivi de portefeuille. Il est indépendant de TradingView et ne remplace pas tout ce que TradingView propose.',
      links: ['Voir la comparaison'],
    },
    openSource: {
      q: 'DegenView est-il open source ?',
      a: 'Oui. Le code source est public sur GitHub sous licence GPL-3.0-only, et les builds des versions sont produits par un workflow public.',
    },
    account: {
      q: 'Ai-je besoin d’un compte ?',
      a: 'Non. Il n’y a rien à créer. Les alertes, les portefeuilles, le paper trading et Pine Script fonctionnent tous en local sur votre machine.',
    },
    affiliation: {
      q: 'Est-il affilié à TradingView ou aux fournisseurs de données ?',
      a: 'Non. DegenView est un projet indépendant. Pine Script et TradingView sont des marques de TradingView, Inc. Pine Script est le langage de TradingView, et DegenView exécute son propre moteur pour les scripts écrits dans ce langage. Toutes les autres marques appartiennent à leurs propriétaires.',
    },
    runPine: {
      q: 'Puis-je exécuter mes Pine Scripts TradingView dans DegenView ?',
      a: 'Oui. DegenView exécute son propre moteur Pine Script v6, en local. C’est une implémentation indépendante, si bien que des scripts très exotiques peuvent se comporter différemment de TradingView.',
    },
    pinePrivacy: {
      q: 'Où vont mes Pine Scripts ?',
      a: 'Nulle part par défaut. Les scripts s’exécutent sur votre ordinateur, et le code source y reste, sauf si vous choisissez de l’envoyer vous-même quelque part, par exemple à un fournisseur d’IA que vous avez configuré pour l’assistant.',
    },
    aiAssistant: {
      q: 'Puis-je connecter un assistant IA ?',
      a: 'Oui. DegenView dispose d’un serveur MCP optionnel : les assistants IA et les outils d’automatisation peuvent ainsi travailler avec vos graphiques, vos alertes et vos scripts Pine. Il est désactivé par défaut, et vous choisissez ce que chaque connexion a le droit de faire.',
    },
    stockData: {
      q: 'Comment obtenir des données boursières ?',
      a: 'Les actions américaines viennent du flux IEX gratuit d’Alpaca. Ajoutez simplement vos clés API Alpaca gratuites dans les Paramètres. La crypto, les marchés de prédiction et les indices CoinMarketCap ne demandent aucune clé.',
      links: ['Voir toutes les sources de données'],
    },
    dataCollection: {
      q: 'DegenView collecte-t-il mes données ?',
      a: 'L’application de bureau n’a ni analytique ni télémétrie et n’exige aucun compte. Ce site web ne dépose de cookies d’analyse que si vous les acceptez. La politique de confidentialité liste tous les services auxquels l’application se connecte.',
      links: ['Lire la politique de confidentialité'],
    },
    offline: {
      q: 'DegenView fonctionne-t-il hors ligne ?',
      a: 'L’application, vos scripts et vos données résident sur votre machine. Les prix en direct viennent toujours des fournisseurs de données : une connexion internet est donc nécessaire pour les données de marché.',
    },
    platforms: {
      q: 'Quelles plateformes sont prises en charge ?',
      a: 'macOS (Apple Silicon et Intel), Windows (x64 et ARM64) et Linux (x64 et ARM64, en archive tar ou Flatpak). Quelques extras sont réservés à macOS : onglets et fenêtres natifs, et alertes en arrière-plan.',
      links: ['Aller aux téléchargements'],
    },
    smartscreen: {
      q: 'Windows affiche un avertissement SmartScreen. Est-ce sûr ?',
      a: 'Le build Windows n’est pas encore signé : SmartScreen peut donc avertir au premier lancement. Le code source et le workflow de build sont publics sur GitHub, et chaque version liste une somme de contrôle SHA-256 que vous pouvez comparer. Choisissez « Informations complémentaires », puis « Exécuter quand même ». L’app macOS, elle, est signée.',
      links: ['Vérifier votre téléchargement'],
    },
    autoUpdate: {
      q: 'DegenView se met-il à jour tout seul ?',
      a: 'Oui sur macOS, sur Windows et pour l’archive tar Linux dans un dossier qui vous appartient. Un bundle Flatpak n’a pas de dépôt distant : il ne se met donc pas à jour tout seul.',
    },
    homebrew: {
      q: 'Puis-je installer DegenView avec Homebrew ?',
      a: 'Oui, sur macOS : brew install --cask degenview/degenview/degenview@rc. Cela installe la même app signée dans Applications depuis le tap DegenView. Le nom sans @rc correspond à la dernière version finale et existe dès qu’une est publiée. L’app se met à jour toute seule : brew upgrade l’ignore.',
      links: ['Aller aux téléchargements'],
    },
    whichDownload: {
      q: 'Quel téléchargement choisir ?',
      a: 'Sur un Mac, menu Pomme, « À propos de ce Mac » : « Apple M… » signifie Apple Silicon, « Intel » signifie Intel. Sous Windows, choisissez x64 sauf si vous avez une machine Windows sur ARM. Sous Linux, l’archive tar convient à la plupart des distributions et le Flatpak aux plus anciennes.',
      links: ['Aller aux téléchargements'],
    },
  },
};
