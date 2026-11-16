import type { Dict } from '../en';

export const pineStudio: Dict['pineStudio'] = {
  meta: {
    title: 'Éditeur Pine Script, débogueur et profileur | DegenView',
    description:
      'Pine Studio est l’éditeur Pine Script v6 gratuit de DegenView pour le bureau : débogueur pas à pas, profileur, assistant IA et thèmes. En local, sans compte.',
    breadcrumbHome: 'Accueil',
    breadcrumbName: 'Pine Studio',
  },

  sectionNav: {
    write: 'Écrire',
    debugger: 'Débogueur',
    profiler: 'Profileur',
    ai: 'Assistant IA',
    themes: 'Thèmes',
    local: 'Local',
    workflow: 'Flux de travail',
    differences: 'vs TradingView',
    faq: 'FAQ',
    download: 'Télécharger',
  },

  jsonLd: {
    name: 'DegenView Pine Studio',
    applicationSubCategory: 'Éditeur Pine Script',
    featureList: [
      'Moteur Pine Script v6 qui s’exécute en local',
      'Graphique d’aperçu en direct avec contrôles des entrées',
      'Débogueur pas à pas avec points d’arrêt, expressions surveillées et pile d’appels',
      'Profileur ligne par ligne',
      'Assistant IA avec les modes Ask, Plan et Edit',
      'Serveur MCP pour que d’autres assistants IA puissent lire, modifier et appliquer des scripts',
      'Thèmes d’éditeur personnalisables',
    ],
  },

  hero: {
    badge:
      'Pine Studio <span class="mx-2 text-line" aria-hidden="true">·</span> fait partie de <a href="{home}" class="ml-1 font-semibold text-accent-text hover:underline">DegenView</a>',
    title: 'L’éditeur Pine Script avec un <span class="gradient-text block">vrai débogueur.</span>',
    lead: 'Écrivez du Pine Script v6, arrêtez-vous sur n’importe quelle ligne, profilez les parties lentes et faites-vous aider par une IA. Tourne sur votre machine, sur des données en direct. Gratuit, open source, sans compte.',
    docsLink: 'Lire la documentation de Pine Studio',
    chips: ['Pine Script v6', 'Tourne 100 % en local', 'macOS · Windows · Linux', 'Open source · GPL-3.0'],
    screenshotAlt: 'Pine Studio avec le script Pivot Levels dans l’éditeur, un graphique BTC/USDT en direct avec ses niveaux, les entrées du script et le débogueur en pause sur une ligne',
  },

  write: {
    eyebrow: 'Pine Studio',
    title: 'Un vrai espace de travail pour <span class="gradient-text">Pine Script v6</span>',
    lead: 'Une bibliothèque de scripts, un éditeur et un graphique d’aperçu en direct dans un seul onglet. Les scripts s’exécutent pendant que vous tapez, sur de vraies données de marché.',
    items: [
      {
        title: 'Un vrai moteur Pine v6, en local',
        body: 'Indicateurs, stratégies et bibliothèques s’exécutent sur votre machine. Pas de serveur, pas d’envoi, pas de compte.',
      },
      {
        title: 'Un graphique d’aperçu en direct',
        body: 'Se relance pendant que vous tapez, sur n’importe quel marché crypto ou actions. Chaque input() devient un contrôle.',
      },
      {
        title: 'Des diagnostics qui pointent la ligne',
        body: 'Les erreurs et avertissements, y compris à l’exécution, arrivent dans un onglet Problèmes avec accès direct à la ligne.',
      },
      {
        title: 'Un panneau Logs pour log.*()',
        body: 'Recherchez par texte ou regex, filtrez par niveau et passez d’un message à sa ligne ou à sa barre.',
      },
      {
        title: 'Des stratégies avec rapport',
        body: 'Chiffres de backtest, courbe de capital et liste complète des trades.',
      },
      {
        title: 'Un éditeur qui aide',
        body: 'Complétion, aide à la signature, aller à la définition, renommer, curseurs multiples et marques de modifications.',
      },
    ],
    examples: 'Livré avec neuf scripts d’exemple, d’un croisement d’EMA à un tableau de statistiques.',
    examplesLink: 'Comment écrire des scripts dans Pine Studio',
  },

  debugger: {
    eyebrow: 'Débogueur pas à pas',
    title: 'Arrêtez de déboguer Pine avec <span class="gradient-text">log.info()</span>',
    lead: 'Posez un point d’arrêt, exécutez sur les barres de votre graphique et arrêtez-vous là où ça compte. Lisez chaque variable et avancez pas à pas comme dans un vrai IDE.',
    screenshotAlt: 'Pine Studio en pause à la ligne 14 d’un Pine Script, avec les valeurs en ligne, le panneau des variables et les commandes pas à pas',
    items: [
      {
        title: 'Des points d’arrêt qui réfléchissent',
        body: 'Cliquez dans la marge ou appuyez sur F9. Ajoutez une condition, un nombre de passages ou un logpoint.',
      },
      {
        title: 'Pas à pas, comme dans un IDE',
        body: 'Passez par-dessus, entrez ou sortez, ou avancez d’une barre entière. Les valeurs s’affichent en ligne.',
      },
      {
        title: 'Toutes les variables sous les yeux',
        body: 'Variables locales et globales avec leurs types, changements surlignés. Ajoutez des expressions comme close - open.',
      },
      {
        title: 'Sautez à n’importe quelle barre',
        body: 'Arrêtez-vous à une barre ou à une date et lisez la pile d’appels. Relancez en un clic.',
      },
    ],
    note: 'Le débogueur s’exécute sur une copie figée des barres du graphique d’aperçu : rien ne bouge pendant que vous regardez.',
    docsLink: 'Documentation du débogueur',
  },

  profiler: {
    eyebrow: 'Profileur',
    title: 'Trouvez la ligne lente, <span class="gradient-text">pas seulement le script lent.</span>',
    lead: 'Activez le chronomètre et DegenView mesure votre script sur les barres du graphique d’aperçu, avec une barre et une part à côté de chaque ligne.',
    bullets: [
      'Temps et part par ligne, à côté de votre code',
      'Lignes, blocs et fonctions les plus coûteux, classés',
      'Cliquez sur une ligne pour y accéder',
    ],
    docsLink: 'Comment le profileur mesure',
    screenshotAlt: 'Profileur de Pine Studio : une barre de temps et une part à côté de chaque ligne de code, et un classement des lignes les plus coûteuses',
  },

  ai: {
    eyebrow: 'Assistant IA',
    title: 'Il modifie une copie. <span class="gradient-text">Vous validez chaque changement.</span>',
    lead: 'Décrivez ce que vous voulez. L’assistant lit, compile et profile votre script, puis propose des changements que vous relisez avant qu’ils touchent votre éditeur.',
    modeAlt: 'Le mode {name} de l’assistant Pine Studio',
    modes: [
      { name: 'Ask', body: 'Questions sur votre script. Il lit, compile et mesure, mais ne modifie jamais rien.' },
      { name: 'Plan', body: 'Il enquête, puis propose un plan d’au plus douze étapes. Validez-le, révisez-le ou écartez-le.' },
      { name: 'Edit', body: 'Il propose des changements sous forme de diff. Appliquez tout, ou relisez un par un.' },
    ],
    review: {
      screenshotAlt: 'La feuille de relecture : cinq changements proposés avec une case à cocher par changement et un diff, prêts à être appliqués en une seule étape',
      title: 'Relisez-le comme une pull request',
      bullets: [
        'Un diff avec une case par changement',
        'Une seule étape d’annulation. L’application auto est facultative',
        'Apportez votre clé : OpenAI, Anthropic ou serveurs compatibles',
      ],
      note: 'Votre script part directement chez le fournisseur choisi, sans serveur DegenView entre les deux. Vous le payez directement. Les clés sont dans le trousseau du système sous macOS et Linux.',
      docsLink: 'Documentation de l’assistant IA',
    },
    mcp: {
      eyebrow: 'Serveur MCP',
      title: 'Ou pilotez Pine Studio depuis <span class="gradient-text">votre propre assistant</span>',
      lead: 'Le serveur MCP optionnel de DegenView ouvre Pine Studio à tout assistant IA compatible MCP : lire les scripts, compiler, corriger les diagnostics et placer le résultat sur un graphique.',
      setupLink: 'Configurer le serveur MCP',
      moreLink: 'En savoir plus sur MCP',
      bullets: [
        'Lire, compiler et modifier des brouillons, sans écrasement silencieux',
        'Appliquer un script enregistré à un graphique, le régler ou le retirer',
        'Désactivé par défaut, local, protégé par jeton. Enregistrer exige votre accord',
      ],
    },
  },

  themes: {
    eyebrow: 'Thèmes d’éditeur',
    title: 'Faites de l’éditeur <span class="gradient-text">le vôtre</span>',
    lead: 'Suivez l’app, ou choisissez Sombre, Clair ou Dracula. Puis changez chaque couleur, la police et l’interligne.',
    items: [
      { name: 'Sombre', note: 'Intégré', alt: 'Éditeur Pine Script avec le thème Sombre' },
      { name: 'Clair', note: 'Intégré', alt: 'Éditeur Pine Script avec le thème Clair' },
      { name: 'Dracula', note: 'Intégré', alt: 'Éditeur Pine Script avec le thème Dracula' },
    ],
    custom: {
      title: 'Créez votre propre thème',
      bullets: [
        'Modifiez syntaxe, éditeur et typographie avec aperçu en direct',
        'Toute police à chasse fixe, de 9 à 32 pt',
        'Exportez et partagez vos thèmes en fichiers .degenview-theme.json',
      ],
      docsLink: 'Thèmes d’éditeur dans la documentation',
      screenshotAlt: 'L’éditeur de thème pour un thème personnalisé nommé Night shift, avec les onglets Syntaxe, Éditeur et Typographie',
    },
  },

  local: {
    eyebrow: 'À vous pour de bon',
    title: 'Vos scripts <span class="gradient-text">restent sur votre machine</span>',
    lead: 'Pine Studio évalue les scripts dans le processus de l’app. Votre code source est un simple fichier <span class="font-mono text-base">.pine</span> dans un dossier qui vous appartient.',
    items: [
      {
        title: 'Rien n’est envoyé',
        body: 'Les scripts s’exécutent en local. Le texte source ne quitte votre ordinateur que si vous sollicitez l’assistant IA, vers le fournisseur de votre choix.',
      },
      { title: 'Sans compte', body: 'Rien à créer. Téléchargez DegenView, ouvrez Pine Studio et écrivez.' },
      { title: 'Open source', body: 'GPL-3.0 sur GitHub. Lisez comment le moteur fonctionne, ou compilez-le vous-même.' },
    ],
    supportsTitle: 'Ce que le moteur exécute',
    supports: [
      'Indicateurs, stratégies et bibliothèques',
      'Tracés, remplissages, formes et couleurs d’arrière-plan',
      'Étiquettes, lignes, boîtes et tableaux',
      'ta.*, math.*, str.* et color.*',
      'Tableaux, maps et matrices',
      'Types et méthodes définis par l’utilisateur',
      'request.security et unités de temps',
      'alert() et alertcondition()',
      'Contrôles input.*',
      'log.*()',
      'varip',
      'import de vos propres bibliothèques',
    ],
    note: 'Une implémentation indépendante de Pine Script v6 qui vous signale ce qui n’est pas pris en charge au lieu d’échouer en silence.',
    noteLink: 'Ce que Pine prend en charge',
  },

  workflow: {
    eyebrow: 'De l’idée à l’alerte',
    title: 'Une seule boucle, <span class="gradient-text">du début à la fin</span>',
    readMore: 'En savoir plus<span class="sr-only"> : {topic}</span>',
    steps: [
      {
        title: 'Écrire',
        topic: 'écrire',
        body: 'Partez de l’un des neuf exemples ou d’un script vierge et regardez le graphique d’aperçu suivre votre code.',
      },
      {
        title: 'Déboguer',
        topic: 'déboguer',
        body: 'Arrêtez-vous sur la ligne fautive, lisez les variables, profilez la partie lente et interrogez l’assistant.',
      },
      {
        title: 'Ajouter à un graphique',
        topic: 'ajouter à un graphique',
        body: 'Appliquez le script depuis le menu +. Réglez ses entrées et son style, ou désactivez-le.',
      },
      {
        title: 'Être alerté',
        topic: 'être alerté',
        body: 'Transformez les appels alert() en alertes de script qui vous préviennent sur une barre en direct, ou écrivent vers votre webhook.',
      },
    ],
  },

  differences: {
    eyebrow: 'Compatibilité',
    title: 'En quoi il diffère de <span class="gradient-text">TradingView</span>',
    lead: 'Pine Studio est une implémentation indépendante de Pine Script v6, avec son propre moteur et ses propres données : un même script peut se comporter autrement.',
    colTradingView: 'TradingView',
    colDegenView: 'DegenView Pine Studio',
    mobileTradingView: 'TradingView',
    mobileDegenView: 'Pine Studio',
    rows: [
      {
        area: 'Versions du langage',
        tradingView: 'Exécute encore les scripts écrits pour les anciennes versions de Pine.',
        degenView: 'Pine Script v6 uniquement. Les anciens scripts sont rejetés avec une erreur claire, migrez-les d’abord.',
      },
      {
        area: 'Où s’exécutent les scripts',
        tradingView: 'Sur les serveurs de TradingView, liés à votre compte.',
        degenView: 'Sur votre ordinateur. De simples fichiers .pine, sans compte, rien n’est envoyé.',
      },
      {
        area: 'Marchés et unités de temps',
        tradingView: 'Actions, futures, forex, obligations, crypto et plus, avec des unités de temps intrajournalières.',
        degenView: 'Crypto, actions et ETF américains, et marchés de prédiction, en bougies 1H, 1D, 1W, 1M, 3M et 1Y. Pas d’unités de temps en minutes.',
      },
      {
        area: 'Flux de données dans les scripts',
        tradingView: 'Données fondamentales, résultats, dividendes, splits, données économiques et plus via request.*.',
        degenView:
          'request.security et request.security_lower_tf fonctionnent. Les flux earnings, dividends, splits, economic, financial, seed et quandl renvoient na avec un avertissement. request.footprint approxime les données tick à partir de bougies plus fines.',
      },
      {
        area: 'Backtests de stratégie',
        tradingView: 'L’émulateur de courtier propre à TradingView, marge comprise.',
        degenView:
          'Un émulateur distinct, sans modèle de marge ni appels de marge. calc_on_order_fills et le bar magnifier sont ignorés avec un avertissement. Attendez-vous à d’autres chiffres.',
      },
      {
        area: 'Fuseaux horaires sur les actions',
        tradingView: 'Les valeurs de calendrier suivent le fuseau horaire de la bourse.',
        degenView: 'Les valeurs d’heure et de jour de la semaine utilisent UTC sur les actions.',
      },
      {
        area: 'Style du texte',
        tradingView: 'Choix de la famille de police, du gras et de l’italique sur les étiquettes, boîtes et tableaux.',
        degenView: 'Accepté, mais ignoré.',
      },
      {
        area: 'Partage',
        tradingView: 'Publiez des scripts et parcourez une bibliothèque communautaire.',
        degenView:
          'Ni publication ni bibliothèque intégrée. Le lien Community scripts ouvre tradingview.com/scripts dans votre navigateur ; collez ce que vous voulez exécuter.',
      },
    ],
    cards: [
      {
        title: 'Non pris en charge = un avertissement, pas une surprise',
        body: 'Ce qui n’est pas pris en charge renvoie na ou est ignoré, avec un avertissement numéroté dans l’onglet Problèmes.',
      },
      {
        title: 'Vérifiez les résultats avant de vous y fier',
        body: 'Les sources de données et l’émulateur de stratégies diffèrent, donc tracés et backtests peuvent différer. Vérifiez la licence d’un script communautaire avant de le réutiliser.',
      },
    ],
    supportedLink: 'La liste complète de ce que Pine Studio prend en charge',
    compareLink: 'DegenView vs TradingView',
    trademark: 'Pine Script et TradingView sont des marques de TradingView, Inc. DegenView n’est ni affilié ni approuvé par TradingView.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pine Studio, <span class="gradient-text">réponses</span>',
    more: 'Plus de réponses dans la <a class="font-medium text-accent-text underline underline-offset-4" href="{faqHref}">FAQ générale</a>, ou <a class="font-medium text-accent-text underline underline-offset-4" href="{issuesHref}" target="_blank" rel="noopener noreferrer">demandez sur GitHub<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a>.',
    items: [
      {
        q: 'Qu’est-ce que Pine Studio ?',
        a: 'Pine Studio est l’espace de travail Pine Script de DegenView, le tableau de bord de marchés de bureau gratuit et open source. C’est une bibliothèque de scripts, un éditeur de code et un graphique d’aperçu en direct dans un seul onglet, avec un débogueur pas à pas, un profileur, un assistant IA et des thèmes d’éditeur.',
      },
      {
        q: 'DegenView exécute-t-il les scripts Pine Script v6 de TradingView ?',
        a: 'DegenView exécute son propre moteur Pine Script v6 sur votre ordinateur : vous pouvez donc coller un script dans Pine Studio et l’exécuter. C’est une implémentation indépendante, pas celle de TradingView : des scripts très exotiques peuvent se comporter différemment, et quelques fonctionnalités, comme certains flux de données request.*, renvoient na avec un avertissement. Pine Script v6 est la seule version prise en charge.',
      },
      {
        q: 'Puis-je déboguer un Pine Script avec des points d’arrêt ?',
        a: 'Oui. Posez des points d’arrêt dans la marge, avec des conditions, des nombres de passages et des logpoints facultatifs, puis avancez pas à pas dans les fonctions ou une barre entière à la fois. Les variables locales et globales, les expressions surveillées et la pile d’appels se mettent à jour à chaque arrêt. Le débogueur s’exécute sur une copie figée des barres du graphique d’aperçu.',
      },
      {
        q: 'Existe-t-il un profileur Pine Script ?',
        a: 'Oui. Activez le profileur et DegenView mesure votre script sur les barres du graphique d’aperçu. Il dessine une barre et une part à côté de chaque ligne et classe les lignes, blocs et fonctions les plus coûteux : vous voyez ce qu’il faut corriger en premier.',
      },
      {
        q: 'L’assistant IA envoie-t-il mon code quelque part ?',
        a: 'Seulement si vous l’utilisez, et uniquement au fournisseur que vous choisissez. Vous apportez votre propre clé API pour OpenAI, Anthropic ou un serveur compatible OpenAI comme OpenRouter, Ollama ou LM Studio. DegenView n’a aucun serveur intermédiaire, et vous payez directement votre fournisseur. L’assistant travaille sur une copie privée de votre script et ne modifie jamais votre éditeur tant que vous n’appliquez pas un changement.',
      },
      {
        q: 'Puis-je faire du vibe coding de scripts Pine avec mon propre assistant IA ?',
        a: 'Oui, via le serveur MCP optionnel de DegenView. Décrivez l’idée à un assistant compatible MCP : il peut lister, lire et compiler vos scripts, modifier le brouillon d’un script, lire les diagnostics, les entrées et les rapports, et appliquer un script enregistré à un graphique. Le serveur est désactivé par défaut, n’écoute que sur votre machine et exige un jeton, et vous choisissez ce que chaque assistant a le droit de faire. Par défaut, l’enregistrement par-dessus un script attend votre approbation dans l’app.',
      },
      {
        q: 'Ai-je besoin d’un compte ou d’une connexion internet ?',
        a: 'Pas de compte. Vos scripts sont de simples fichiers .pine sur votre ordinateur. Les données de marché du graphique d’aperçu viennent de fournisseurs publics : il faut donc une connexion pour voir les prix en direct, mais pas pour modifier un script.',
      },
      {
        q: 'Pine Studio est-il gratuit ?',
        a: 'Oui. Pine Studio fait partie de DegenView, qui est gratuit et open source sous licence GPL-3.0, pour macOS, Windows et Linux.',
      },
    ],
  },

  download: {
    title: 'Écrivez du Pine. <span class="gradient-text block">Déboguez-le comme il faut.</span>',
    lead: 'Pine Studio est livré avec DegenView. Gratuit, open source, et rien à créer.',
    docsLink: 'Documentation de Pine Studio',
    allDownloadsLink: 'Tous les téléchargements',
    compareLink: 'Comparer avec TradingView',
  },
};
