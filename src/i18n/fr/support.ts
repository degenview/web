import type { Dict } from '../en';

export const support: Dict['support'] = {
  meta: {
    title: 'Soutenir DegenView – Gratuit et open source',
    description:
      'DegenView est gratuit, open source et conçu par une seule personne. Offrez un café, envoyez des cryptos, mettez une étoile ou parlez-en pour qu’il continue.',
  },
  breadcrumbs: { home: 'Accueil', support: 'Soutenir' },

  hero: {
    eyebrow: 'soutien',
    title: 'Qu’il reste <span class="gradient-text">gratuit</span>',
    lead: 'Pas de pub, pas de mur payant, et une seule personne derrière. Si DegenView mérite une place sur votre écran, voici comment l’aider à durer.',
    star: 'Étoile sur GitHub',
    note: 'Aucune pression. Utiliser DegenView aide déjà, et tout reste gratuit quoi qu’il arrive.',
  },

  chipIn: {
    eyebrow: 'participez',
    title: 'Du carburant pour le <span class="gradient-text">travail</span>',
    lead: 'Votre soutien va directement au mainteneur et se transforme en temps pour DegenView. Tout montant est le bienvenu, aucun n’est attendu.',
    coffee: {
      tag: 'Tout montant',
      title: 'Offrez-moi un café',
      body: 'La façon la plus rapide de dire merci : un café ponctuel via Buy Me a Coffee, en une minute.',
    },
    crypto: {
      tag: 'On-chain',
      title: 'Envoyer des cryptos',
      body: 'Vous préférez votre wallet ? Copiez une adresse et envoyez directement. Sans intermédiaire, sans autres frais que ceux du réseau.',
      button: 'Afficher les adresses',
    },
  },

  supporters: {
    title: 'Soutiens <span class="gradient-text">récents</span>',
    lead: 'Merci pour votre contribution. Grâce à vous, DegenView reste gratuit.',
    anonymous: 'Soutien anonyme',
  },

  crypto: {
    eyebrow: 'crypto',
    title: 'Merci <span class="gradient-text">on-chain</span>',
    lead: 'Copiez l’adresse de votre réseau. Les fonds envoyés sur le mauvais réseau ne sont pas récupérables : vérifiez avant d’envoyer.',
    list: 'Adresses crypto',
    copy: 'Copier',
    copyAria: 'Copier l’adresse {name}',
    copied: 'Copié',
    copyFailed: 'Appuyez sur ⌘/Ctrl+C',
    network: 'Envoyez {ticker} uniquement sur le réseau {network}.',
    addressLabel: 'Adresse {name}',
    safety: 'Ne copiez les adresses que depuis cette page, et comparez les premiers et derniers caractères après avoir collé.',
  },

  free: {
    eyebrow: 'façons gratuites',
    title: 'Pas de wallet ? <span class="gradient-text">Pas de souci</span>',
    lead: 'Elles aident tout autant et prennent chacune environ une minute.',
    badge: 'Gratuit',
    star: {
      title: 'Mettez une étoile',
      body: 'Les étoiles aident à trouver les projets open source. Un clic permet à plus de traders de découvrir DegenView.',
      button: 'Étoile sur GitHub',
      count: '{count} étoiles',
    },
    share: {
      title: 'Parlez-en',
      body: 'Dites-le à un ami trader, publiez une capture d’écran ou répondez à un fil « alternative gratuite à TradingView ? ». La communauté se retrouve sur Reddit.',
      x: 'Partager sur X',
      /** Pre-filled post text. The page URL is appended by X. */
      xText: 'DegenView : une alternative à TradingView gratuite et open source pour votre bureau.',
    },
    feedback: {
      title: 'Signalez des bugs, partagez des idées',
      body: 'Chaque défaut signalé est corrigé pour tout le monde. Dites-nous ce qui a coincé, ou ce que vous aimeriez voir ensuite.',
      button: 'Ouvrir un ticket',
    },
    contribute: {
      title: 'Contribuez',
      body: 'Code, documentation ou traductions. DegenView parle six langues, et les corrections de locuteurs natifs sont très bienvenues.',
      code: 'Code source',
      translations: 'Traductions',
      docs: 'Documentation',
    },
  },

  good: {
    eyebrow: 'bon à savoir',
    title: 'Les <span class="gradient-text">petites lignes</span>',
    items: [
      { claim: 'Rien n’est verrouillé', text: 'Toutes les fonctions sont gratuites pour tous. Le soutien est un remerciement, pas un achat, et il ne débloque rien.' },
      { claim: 'Va au mainteneur', text: 'Votre soutien paie le temps nécessaire pour concevoir, tester et maintenir DegenView : le temps d’une seule personne.' },
      { claim: 'Gratuit pour toujours', text: 'DegenView est open source sous GPL-3.0. Pas de pub, pas de mur payant, maintenant comme plus tard.' },
    ],
  },

  cta: {
    title: 'Un grand <span class="gradient-text">merci</span>',
    lead: 'Que vous contribuiez, mettiez une étoile ou l’utilisiez simplement : c’est grâce à vous que ça existe.',
  },
};
