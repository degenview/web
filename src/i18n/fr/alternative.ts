import type { Dict } from '../en';

export const alternative: Dict['alternative'] = {
  meta: {
    title: 'DegenView vs TradingView : alternative gratuite, open source',
    description:
      'DegenView vs TradingView : alternative de bureau gratuite et open source, avec Pine Script v6 en local, listes de suivi illimitées, alertes et replay.',
    breadcrumb: 'Alternative à TradingView',
  },

  hero: {
    eyebrow: 'Alternative à TradingView',
    title: 'L’alternative à TradingView <span class="gradient-text block">gratuite et open source</span>',
    lead: 'Une application de bureau pour la crypto, les actions et les marchés de prédiction, avec un Pine Script qui s’exécute sur votre propre machine.',
    chips: ['Open source · GPL-3.0', 'Sans compte', 'macOS · Windows · Linux'],
    priceCard: {
      forever: 'pour toujours',
      download: 'Télécharger gratuitement',
      note: 'Sans compte. Sans carte bancaire. Sans compte à rebours d’essai.',
      platformsAria: 'Disponible pour macOS, Windows et Linux',
    },
  },

  ladder: {
    eyebrow: 'tarifs',
    title: 'Combien voulez-vous <span class="gradient-text">payer ?</span>',
    lead: 'TradingView a une échelle de prix. DegenView a un plancher, et il est gratuit.',
    freeBadge: 'Gratuit',
    perMonthForever: 'par mois, pour toujours',
    planName: 'TradingView {name}',
    perMonthBilledAnnually: 'par mois, facturé annuellement',
    perYear: '≈ {amount} par an',
    note: 'Les prix sont ceux de TradingView, en euros, tels qu’affichés sur sa <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="nofollow noopener noreferrer">page des tarifs<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a> en {date}. Ils changent et varient selon la région : vérifiez-les là-bas avant de décider.',
  },

  freeVsFree: {
    eyebrow: 'gratuit contre gratuit',
    title: 'Ce que vous avez <span class="gradient-text">sans payer</span>',
    lead: 'Les deux sont gratuits au départ. Un seul le reste.',
    degenview: {
      subtitle: 'Gratuit et open source',
      items: [
        'Listes de suivi illimitées',
        'Autant d’indicateurs que votre processeur peut en encaisser',
        'Mises en page multigraphiques',
        'Alertes de prix sans limite d’offre',
        'Moteur Pine Script v6 qui s’exécute sur votre machine',
        'Replay barre par barre, paper trading et suivi de portefeuille',
        'Open source (GPL-3.0)',
        'Aucun compte requis',
      ],
      download: 'Télécharger gratuitement',
    },
    tradingview: {
      subtitle: 'Offre gratuite (Basic)',
      items: [
        '2 indicateurs par graphique',
        '1 graphique par onglet',
        '1 liste de suivi, jusqu’à 30 symboles',
        '3 alertes de prix actives',
        'Pine Script s’exécute sur les serveurs de TradingView',
        'Applications web, de bureau et mobiles',
        'Énorme communauté et bibliothèque de scripts',
        'Code fermé',
      ],
      plans: 'Voir les offres de TradingView',
    },
    sr: {
      included: 'Inclus : ',
      limited: 'Limité : ',
      notAvailable: 'Non disponible : ',
      opensNewTab: ' (s’ouvre dans un nouvel onglet)',
    },
    legendLimit: 'Limite de l’offre gratuite',
    checked: 'Chiffres de TradingView vérifiés le {date}',
  },

  better: {
    eyebrow: 'soyons honnêtes',
    title: 'Ce que TradingView <span class="gradient-text">fait encore mieux</span>',
    lead: 'Nous préférons que vous choisissiez le bon outil plutôt que le plus bruyant.',
    items: [
      { title: 'Des apps partout', description: 'Applications web et mobiles : vos graphiques vous suivent sur n’importe quel navigateur ou téléphone.' },
      { title: 'Des marchés plus larges', description: 'Actions, futures, forex, obligations et données économiques, au-delà de la crypto, des actions américaines et des marchés de prédiction.' },
      { title: 'Une grande communauté', description: 'Des idées publiées et une bibliothèque publique de scripts écrits par d’autres.' },
      { title: 'Trader depuis le graphique', description: 'Passez des ordres via des courtiers connectés sans quitter le graphique.' },
    ],
    closing:
      'Vous en avez besoin ? Gardez TradingView à côté de DegenView. Vous voulez surtout des graphiques rapides, des indicateurs, des alertes et du replay sans offre à gérer ? Voici la version gratuite.',
  },

  comingFrom: {
    eyebrow: 'en route vers DegenView',
    title: 'Vous venez de <span class="gradient-text">TradingView</span>',
    items: [
      { title: 'Pine Script v6', description: 'Collez votre script dans Pine Studio et exécutez-le en local, avec un débogueur pas à pas et un profileur.' },
      { title: 'Des outils familiers', description: 'Lignes de tendance, retracements de Fibonacci, règle, et 18 types de graphiques, des chandeliers à Renko et Kagi.' },
      { title: 'Plus que des graphiques', description: 'Replay barre par barre, paper trading, suivi de portefeuille, alertes avec webhooks et un serveur MCP optionnel pour les assistants IA.' },
    ],
  },

  cta: {
    title: 'Gratuit aujourd’hui. <span class="gradient-text block">Gratuit pour toujours.</span>',
    lead: 'Sans compte, sans essai, sans piège. macOS, Windows et Linux.',
    disclaimer:
      'DegenView est un projet indépendant, non affilié à TradingView, ni approuvé ou parrainé par TradingView. TradingView et Pine Script sont des marques de TradingView, Inc., citées ici uniquement pour décrire ce dont DegenView est une alternative et avec quoi il est compatible.',
  },
};
