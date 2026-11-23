import type { Dict } from '../en';

export const support: Dict['support'] = {
  meta: {
    title: 'Apoya DegenView – Gratis y de código abierto',
    description:
      'DegenView es gratis, de código abierto y lo hace una sola persona. Invita a un café, envía cripto, dale una estrella al proyecto o corre la voz para que siga adelante.',
  },
  breadcrumbs: { home: 'Inicio', support: 'Apoyar' },

  hero: {
    eyebrow: 'apoyo',
    title: 'Que siga <span class="gradient-text">gratis</span>',
    lead: 'Sin anuncios, sin muros de pago y con una sola persona detrás. Si DegenView se gana un sitio en tu pantalla, así puedes ayudar a que siga adelante.',
    star: 'Estrella en GitHub',
    note: 'Sin presión. Usar DegenView ya ayuda, y todo seguirá siendo gratis de todos modos.',
  },

  chipIn: {
    eyebrow: 'aporta',
    title: 'Dale <span class="gradient-text">combustible</span>',
    lead: 'Tu apoyo va directo al mantenedor y se convierte en más tiempo para DegenView. Cualquier cantidad es bienvenida, ninguna es obligatoria.',
    coffee: {
      tag: 'Cualquier cantidad',
      title: 'Invítame a un café',
      body: 'La forma más rápida de dar las gracias: un café puntual a través de Buy Me a Coffee, en un minuto.',
    },
    crypto: {
      tag: 'On-chain',
      title: 'Envía cripto',
      body: '¿Prefieres tu wallet? Copia una dirección y envía directamente. Sin intermediarios y sin más comisiones que las de la red.',
      button: 'Ver direcciones',
    },
  },

  crypto: {
    eyebrow: 'cripto',
    title: 'Gracias <span class="gradient-text">on-chain</span>',
    lead: 'Copia la dirección de tu red. Los fondos enviados a una red equivocada no se pueden recuperar, así que compruébalo antes de enviar.',
    list: 'Direcciones de cripto',
    copy: 'Copiar',
    copyAria: 'Copiar la dirección de {name}',
    copied: 'Copiado',
    copyFailed: 'Pulsa ⌘/Ctrl+C',
    network: 'Envía {ticker} solo por la red {network}.',
    addressLabel: 'Dirección de {name}',
    safety: 'Copia las direcciones solo de esta página y compara los primeros y los últimos caracteres después de pegar.',
  },

  free: {
    eyebrow: 'formas gratis',
    title: '¿Sin wallet? <span class="gradient-text">Sin problema</span>',
    lead: 'Estas ayudan igual de mucho y cada una lleva un minuto.',
    badge: 'Gratis',
    star: {
      title: 'Dale una estrella',
      body: 'Las estrellas son la forma en que la gente encuentra proyectos de código abierto. Un clic ayuda a que más traders descubran DegenView.',
      button: 'Estrella en GitHub',
      count: '{count} estrellas',
    },
    share: {
      title: 'Corre la voz',
      body: 'Cuéntaselo a un amigo trader, publica una captura o responde a un hilo de «¿alternativa gratis a TradingView?». La comunidad está en Reddit.',
      x: 'Compartir en X',
      /** Pre-filled post text. The page URL is appended by X. */
      xText: 'DegenView: una alternativa a TradingView gratis y de código abierto para tu escritorio.',
    },
    feedback: {
      title: 'Informa de fallos, comparte ideas',
      body: 'Cada fallo que cuentas se arregla para todos. Dinos con qué te has topado o qué te gustaría ver después.',
      button: 'Abrir una incidencia',
    },
    contribute: {
      title: 'Colabora',
      body: 'Código, documentación o traducciones. DegenView habla seis idiomas y las correcciones de hablantes nativos son muy bienvenidas.',
      code: 'Código fuente',
      translations: 'Traducciones',
      docs: 'Documentación',
    },
  },

  good: {
    eyebrow: 'conviene saber',
    title: 'La <span class="gradient-text">letra pequeña</span>',
    items: [
      { claim: 'Nada está bloqueado', text: 'Todas las funciones son gratis para todos. El apoyo es un agradecimiento, no una compra, y no desbloquea nada.' },
      { claim: 'Va al mantenedor', text: 'Tu apoyo paga el tiempo que cuesta crear, probar y mantener DegenView, el tiempo de una sola persona.' },
      { claim: 'Gratis para siempre', text: 'DegenView es de código abierto bajo GPL-3.0. Sin anuncios y sin muros de pago, ahora y después.' },
    ],
  },

  cta: {
    title: 'Mil <span class="gradient-text">gracias</span>',
    lead: 'Si aportas, dejas una estrella o simplemente lo usas: eres la razón de que esto exista.',
  },
};
