import type { Dict } from '../en';

export const privacyPolicy: Dict['privacyPolicy'] = {
  meta: {
    title: 'Politique de confidentialité – DegenView',
    description:
      'Comment degenview.app gère cookies et analytique : rien n’est suivi sans votre consentement, et l’application DegenView n’a ni analytique ni télémétrie.',
    breadcrumb: 'Politique de confidentialité',
  },

  notice: 'Cette traduction est fournie à titre indicatif. La version anglaise fait foi juridiquement.',

  hero: {
    eyebrow: 'votre vie privée',
    title: 'Cookies &amp; <span class="gradient-text">analytique</span>',
    lead: 'Ce site web ne collecte ni ne conserve lui-même de données personnelles sur ses visiteurs. Si vous l’autorisez, il utilise des cookies et des technologies similaires pour comprendre comment le site est utilisé.',
    lastUpdated: 'Dernière mise à jour : {date}',
  },

  opensNewTab: ' (s’ouvre dans un nouvel onglet)',

  storage: {
    title: 'Types de stockage que nous utilisons',
    necessary: {
      title: 'Strictement nécessaires',
      body: 'Indispensables pour que le site fonctionne comme vous l’avez configuré : votre thème et votre choix concernant les cookies. Ces informations sont stockées uniquement dans votre navigateur.',
      badge: 'Aucun consentement requis',
    },
    analytics: {
      title: 'Analytique (facultatif)',
      body: 'Des cookies servent à mesurer le trafic et à comprendre comment les visiteurs utilisent le site. Si vous les acceptez, ils peuvent traiter des adresses IP, des informations sur l’appareil et le navigateur, ainsi que les pages que vous consultez.',
      badge: 'Désactivés tant que vous n’acceptez pas',
    },
    table: {
      caption: 'Ce qui est stocké dans votre navigateur',
      name: 'Nom',
      purpose: 'Finalité',
      duration: 'Durée',
      themePurpose: 'Mémorise si vous avez choisi le thème clair, sombre ou système.',
      themeDuration: 'Stockage local, jusqu’à ce que vous l’effaciez',
      consentPurpose: 'Mémorise si vous avez accepté ou refusé l’analytique.',
      consentDuration: 'Stockage local, jusqu’à ce que vous l’effaciez',
      googleName: 'Cookies Google',
      googlePurpose: 'Uniquement si vous acceptez l’analytique : déposés par Google Tag Manager et les balises qu’il contient pour mesurer les visites.',
      googleDuration: 'Définie par Google, voir sa politique',
    },
  },

  legal: {
    title: 'Bases juridiques du traitement',
    body: [
      'Lorsque la loi l’exige, par exemple dans l’EEE et au Royaume-Uni, l’analytique n’est utilisée qu’avec votre consentement. Ailleurs, elle peut reposer sur des intérêts légitimes ou sur votre consentement. L’analytique est désactivée par défaut.',
    ],
  },

  consent: {
    title: 'Fonctionnement du consentement',
    steps: [
      'Vous pouvez accepter ou refuser l’analytique dès votre première visite.',
      'Aucun cookie d’analyse n’est utilisé et rien de Google ne se charge sans votre consentement.',
      'Votre choix est stocké sur votre appareil afin que nous puissions le mémoriser.',
      'Si vous refusez, aucun suivi analytique n’a lieu.',
    ],
  },

  manage: {
    title: 'Gérer vos préférences',
    body: 'Vous pouvez modifier ou retirer votre consentement à tout moment.',
    button: 'Ouvrir les paramètres des cookies',
  },

  third: {
    title: 'Services tiers',
    body: [
      'L’analytique, si vous l’acceptez, est gérée par Google via Google Tag Manager, conformément à la politique de confidentialité propre à Google, et vos données peuvent être traitées en dehors de votre pays.',
      'Ce site est hébergé sur GitHub Pages. Pour le servir, afficher la version actuelle sur les boutons de téléchargement et récupérer les fichiers à télécharger, votre navigateur communique avec GitHub (github.com et api.github.com), qui peut voir des données techniques comme votre adresse IP, conformément à la déclaration de confidentialité de GitHub. Les polices et les images sont servies par ce site lui-même, et non par Google ou d’autres tiers.',
    ],
  },

  retention: {
    title: 'Conservation des données et vos droits',
    body: [
      'Nous ne conservons pas nous-mêmes de données personnelles sur les visiteurs. Les données d’analytique sont conservées par Google pendant la durée définie dans notre configuration Google, puis supprimées ou anonymisées lorsqu’elles ne sont plus nécessaires.',
      'Selon l’endroit où vous vivez, vous pouvez avoir le droit d’accéder à vos données personnelles, de les rectifier ou de les supprimer, de vous opposer à leur traitement et de retirer votre consentement à tout moment. Comme ce site ne stocke pas lui-même de données personnelles, il se peut que vous deviez contacter Google ou GitHub pour les demandes concernant les données qu’ils traitent. Vous pouvez aussi introduire une réclamation auprès de votre autorité de protection des données.',
    ],
  },

  app: {
    title: 'L’application de bureau DegenView',
    body: [
      'Cette politique couvre ce site web. L’application de bureau DegenView n’a ni analytique ni télémétrie et n’exige aucun compte. Pour fonctionner, elle se connecte directement, depuis votre ordinateur, aux services listés ci-dessous. Vos listes de suivi, vos portefeuilles et vos scripts Pine restent sur votre appareil, sauf si vous les envoyez vous-même quelque part, par exemple à un fournisseur d’IA que vous avez configuré.',
      'Ces services sont exploités par d’autres entreprises, pas par nous. Lorsque vous utilisez DegenView, vous utilisez leurs données et leurs services, et vous acceptez de ce fait leurs conditions d’utilisation et leurs politiques de confidentialité. Nous ne les contrôlons pas et ne sommes pas responsables de la manière dont ils traitent les données. Certains exigent un compte ou une clé API qui vous est propre, comme Alpaca et les fournisseurs d’IA.',
      'Si vous utilisez l’assistant IA, le texte que vous envoyez, qui peut inclure votre script, est transmis au fournisseur que vous avez choisi. Avec les fournisseurs que vous exécutez vous-même, comme un modèle local, il reste sur votre machine.',
    ],
    table: {
      caption: 'Services auxquels l’application de bureau se connecte, avec leurs conditions et leurs politiques de confidentialité',
      service: 'Service',
      usedFor: 'Utilisé pour',
      terms: 'Conditions',
      privacy: 'Confidentialité',
      termsSr: ' pour {name} (s’ouvre dans un nouvel onglet)',
      privacySr: ' pour {name} (s’ouvre dans un nouvel onglet)',
      siteLink: 'Conditions et confidentialité sur {host}',
      groups: {
        marketData: 'Données de marché',
        other: 'Services que vous activez ou utilisez',
      },
    },
    uses: {
      binance: 'Prix et graphiques crypto',
      coinbase: 'Prix et graphiques crypto',
      coingecko: 'Listes de cryptos, prix et graphiques',
      geckoterminal: 'Graphiques de pools DEX. Exploité par CoinGecko, dont les conditions s’appliquent',
      dexscreener: 'Paires et prix DEX',
      coinmarketcap: 'Indices de marché comme Fear & Greed. Clé API facultative',
      polymarket: 'Marchés de prédiction',
      kalshi: 'Marchés de prédiction',
      alpaca: 'Actions américaines, avec vos propres clés API gratuites',
      bitstamp: 'Historique du prix du bitcoin pour la conversion de devises',
      github: 'Recherche et téléchargement des mises à jour',
      x: 'Aperçus des publications X que vous ajoutez sous forme de cartes',
      openai: 'Assistant IA, uniquement si vous ajoutez votre propre clé API',
      anthropic: 'Assistant IA, uniquement si vous ajoutez votre propre clé API',
      openrouter: 'Assistant IA, uniquement si vous ajoutez votre propre clé API',
      icloud: 'Synchronisation facultative entre vos Mac',
    },
  },

  contact: {
    title: 'Contact et mises à jour',
    intro: 'DegenView est un projet open source de Nico Oelgart. Pour toute question sur cette politique, <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">ouvrez un ticket sur la page GitHub du projet<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a>.',
    body: [
      'Nous pouvons mettre à jour cette politique lorsque la loi ou le site change. La date en haut indique la dernière modification, et les mises à jour sont publiées sur cette page.',
    ],
    button: 'Ouvrir un ticket GitHub',
  },
};
