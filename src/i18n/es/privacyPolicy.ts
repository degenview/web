import type { Dict } from '../en';

export const privacyPolicy: Dict['privacyPolicy'] = {
  meta: {
    title: 'Política de privacidad – DegenView',
    description:
      'Cómo degenview.app gestiona cookies y analítica: nada se rastrea sin tu consentimiento, y la app de escritorio DegenView no tiene analítica ni telemetría.',
    breadcrumb: 'Política de privacidad',
  },

  /** Shown on translated pages only. */
  notice: 'Esta es una traducción de cortesía. La versión en inglés es la jurídicamente vinculante.',

  hero: {
    eyebrow: 'tu privacidad',
    title: 'Cookies y <span class="gradient-text">analítica</span>',
    lead: 'Este sitio web no recopila ni almacena por sí mismo datos personales de los visitantes. Si lo permites, utiliza cookies y tecnologías similares para entender cómo se usa el sitio.',
    lastUpdated: 'Última actualización: {date}',
  },

  opensNewTab: ' (se abre en una pestaña nueva)',

  storage: {
    title: 'Tipos de almacenamiento que usamos',
    necessary: {
      title: 'Estrictamente necesario',
      body: 'Necesario para que el sitio funcione como lo configuraste: tu tema y tu elección sobre las cookies. Se guarda únicamente en tu navegador.',
      badge: 'No requiere consentimiento',
    },
    analytics: {
      title: 'Analítica (opcional)',
      body: 'Se usa para medir el tráfico y entender cómo usan el sitio los visitantes. Si aceptas, pueden procesar direcciones IP, información del dispositivo y del navegador, y las páginas que ves.',
      badge: 'Desactivada hasta que aceptes',
    },
    table: {
      caption: 'Qué se almacena en tu navegador',
      name: 'Nombre',
      purpose: 'Finalidad',
      duration: 'Duración',
      // Storage keys `theme` and `dv_analytics_consent` stay in the page code.
      themePurpose: 'Recuerda si elegiste claro, oscuro o el del sistema.',
      themeDuration: 'Almacenamiento local, hasta que lo borres',
      consentPurpose: 'Recuerda si aceptaste o rechazaste la analítica.',
      consentDuration: 'Almacenamiento local, hasta que lo borres',
      googleName: 'Cookies de Google',
      googlePurpose: 'Solo si aceptas la analítica: las instalan Google Tag Manager y las etiquetas que contiene para medir las visitas.',
      googleDuration: 'Las define Google, consulta su política',
    },
  },

  legal: {
    title: 'Bases jurídicas del tratamiento',
    body: [
      'Cuando la ley lo exige, como en el EEE y el Reino Unido, la analítica solo se usa con tu consentimiento. En otros lugares puede basarse en intereses legítimos o en tu consentimiento. La analítica está desactivada por defecto.',
    ],
  },

  consent: {
    title: 'Cómo funciona el consentimiento',
    // Order matters: icons are set in the page code.
    steps: [
      'Puedes aceptar o rechazar la analítica en tu primera visita.',
      'No se usan cookies de analítica y no se carga nada de Google sin tu consentimiento.',
      'Tu elección se guarda en tu dispositivo para poder recordarla.',
      'Si la rechazas, no se realiza ningún rastreo analítico.',
    ],
  },

  manage: {
    title: 'Gestión de preferencias',
    body: 'Puedes cambiar o retirar tu consentimiento en cualquier momento.',
    button: 'Abrir ajustes de cookies',
  },

  third: {
    title: 'Servicios de terceros',
    body: [
      'La analítica, si la aceptas, la gestiona Google a través de Google Tag Manager conforme a la propia política de privacidad de Google, y tus datos pueden tratarse fuera de tu país.',
      'Este sitio está alojado en GitHub Pages. Para servirlo, y para mostrar la versión actual en los botones de descarga y obtener los archivos de descarga, tu navegador se comunica con GitHub (github.com y api.github.com), que puede ver datos técnicos como tu dirección IP conforme a la declaración de privacidad de GitHub. Las fuentes tipográficas y las imágenes se sirven desde este mismo sitio, no desde Google ni otros terceros.',
    ],
  },

  retention: {
    title: 'Conservación de datos y tus derechos',
    body: [
      'Nosotros no conservamos datos personales de los visitantes. Google conserva los datos de analítica durante el período fijado en nuestra configuración de Google y los elimina o anonimiza cuando ya no son necesarios.',
      'Según dónde vivas, puedes tener derecho a acceder a tus datos personales, rectificarlos o suprimirlos, a oponerte a su tratamiento y a retirar tu consentimiento en cualquier momento. Como este sitio no almacena datos personales por sí mismo, es posible que tengas que dirigirte a Google o a GitHub para las solicitudes sobre los datos que ellos tratan. También puedes presentar una reclamación ante tu autoridad de protección de datos.',
    ],
  },

  app: {
    title: 'La app de escritorio DegenView',
    body: [
      'Esta política cubre este sitio web. La app de escritorio DegenView no tiene analítica ni telemetría y no necesita cuenta. Para hacer su trabajo, se conecta directamente desde tu equipo a los servicios que se enumeran a continuación. Tus listas de seguimiento, carteras y scripts de Pine permanecen en tu dispositivo, salvo que los envíes tú a otro lugar, por ejemplo a un proveedor de IA que configures.',
      'Estos servicios los gestionan otras empresas, no nosotros. Al usar DegenView usas sus datos y servicios, y al hacerlo aceptas sus condiciones de servicio y políticas de privacidad. No los controlamos ni somos responsables de cómo tratan los datos. Algunos requieren una cuenta o clave de API propias, como Alpaca y los proveedores de IA.',
      'Si usas el asistente de IA, el texto que envías, que puede incluir tu script, va al proveedor que elegiste. Los proveedores que ejecutas tú mismo, como un modelo local, lo mantienen en tu equipo.',
    ],
    table: {
      caption: 'Servicios a los que se conecta la app de escritorio, con sus condiciones y políticas de privacidad',
      service: 'Servicio',
      usedFor: 'Se usa para',
      terms: 'Condiciones',
      privacy: 'Privacidad',
      termsSr: ' de {name} (se abre en una pestaña nueva)',
      privacySr: ' de {name} (se abre en una pestaña nueva)',
      siteLink: 'Condiciones y privacidad en {host}',
      groups: {
        marketData: 'Datos de mercado',
        other: 'Servicios que activas o usas',
      },
    },
    /** What each service is used for, keyed by the provider id used in the page code. */
    uses: {
      binance: 'Precios y gráficos de cripto',
      coinbase: 'Precios y gráficos de cripto',
      coingecko: 'Listas de monedas, precios y gráficos',
      geckoterminal: 'Gráficos de pools de DEX. Lo opera CoinGecko, cuyas condiciones se aplican',
      dexscreener: 'Pares y precios de DEX',
      coinmarketcap: 'Índices de mercado como Fear & Greed. Clave de API opcional',
      polymarket: 'Mercados de predicción',
      kalshi: 'Mercados de predicción',
      alpaca: 'Acciones de EE. UU., con tus propias claves de API gratuitas',
      bitstamp: 'Historial de precios de bitcoin para la conversión de divisas',
      github: 'Buscar y descargar actualizaciones',
      x: 'Vistas previas de publicaciones de X que añades como tarjetas',
      openai: 'Asistente de IA, solo si añades tu propia clave de API',
      anthropic: 'Asistente de IA, solo si añades tu propia clave de API',
      openrouter: 'Asistente de IA, solo si añades tu propia clave de API',
      icloud: 'Sincronización opcional entre tus Mac',
    },
  },

  contact: {
    title: 'Contacto y actualizaciones',
    intro: 'DegenView es un proyecto de código abierto de Nico Oelgart. Si tienes preguntas sobre esta política, <a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">abre un issue en la página de GitHub del proyecto<span class="sr-only"> (se abre en una pestaña nueva)</span></a>.',
    body: [
      'Podemos actualizar esta política cuando cambie la ley o el sitio. La fecha de la parte superior indica cuándo cambió por última vez, y las actualizaciones se publican en esta página.',
    ],
    button: 'Abrir un issue en GitHub',
  },
};
