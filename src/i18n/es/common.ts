import type { Dict } from '../en';

export const common: Dict['common'] = {
  skipToContent: 'Saltar al contenido',
  ogAlt: 'DegenView: la alternativa a TradingView gratuita y de código abierto',

  /** Site navigation (header, footer, mobile menu). Link labels are shared by header and footer. */
  nav: {
    primary: 'Principal',
    mobile: 'Móvil',
    footer: 'Pie de página',
    homeAria: 'Inicio de DegenView',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    features: 'Funciones',
    pineStudio: 'Pine Studio',
    tradingviewAlternative: 'Alternativa a TradingView',
    download: 'Descargar',
    faq: 'FAQ',
    docs: 'Documentación',
    github: 'GitHub',
    privacyPolicy: 'Política de privacidad',
    cookieSettings: 'Ajustes de cookies',
  },

  /** Screen-reader suffix for links that open a new tab. Rendered as `<span class="sr-only"> {text}</span>`. */
  opensInNewTab: '(se abre en una pestaña nueva)',

  footer: {
    tagline: 'Panel de mercados gratuito y de código abierto. © {year} Nico Oelgart, GPL-3.0-only.',
    trademark:
      'Pine Script y TradingView son marcas comerciales de TradingView, Inc. DegenView no está afiliado a TradingView ni a ningún proveedor de datos mencionado, ni cuenta con su respaldo. Las demás marcas pertenecen a sus respectivos dueños. No es asesoramiento financiero.',
    /** Shown in the version badge when the latest release tag could not be fetched. */
    versionFallback: 'Código abierto',
  },

  coffee: 'Invítame a un café',

  theme: {
    group: 'Tema de color',
    system: 'Tema del sistema',
    light: 'Tema claro',
    dark: 'Tema oscuro',
  },

  cookies: {
    title: 'Cookies, pero solo si tú quieres',
    text: 'Nos gustaría usar cookies para medir las visitas a este sitio.',
    decline: 'Rechazar',
    accept: 'Aceptar',
  },

  preRelease: {
    ariaLabel: 'Aviso de versión preliminar',
    /** `block` variant. `{version}` is replaced by the release tag, `{issues}` by the GitHub issues link. */
    block: {
      releaseCandidate: {
        title: 'DegenView está en pruebas de versión candidata',
        body: '{version} es una versión candidata de la próxima versión estable, así que puedes encontrar aristas sin pulir. ¿Has dado con alguna? {issues}.',
      },
      preRelease: {
        title: 'DegenView está en pruebas de versión preliminar',
        body: '{version} es una versión preliminar de la próxima versión estable, así que puedes encontrar aristas sin pulir. ¿Has dado con alguna? {issues}.',
      },
      issuesLink: 'Cuéntanoslo en GitHub',
      releaseNotes: 'Notas de la versión',
    },
    /** `inline` variant. `{issues}` is replaced by the GitHub issues link. */
    inline: {
      releaseCandidate: 'Versión candidata: posibles fallos. {issues}.',
      preRelease: 'Versión preliminar: posibles fallos. {issues}.',
      issuesLink: 'Reporta problemas',
    },
  },

  /** Download menus and the platform-detection script (see Footer: emitted as JSON for src/scripts/platform.ts). */
  download: {
    label: 'Descargar',
    forOs: 'Para {os}',
    osDownloads: 'Descargas para {os}',
    recommended: 'Recomendado',
    viewSource: 'Ver código fuente',
    onGithub: 'En GitHub',
    /** Hero button label once the visitor's OS is detected. */
    downloadFor: 'Descargar para {os}',
    chooseDownload: 'Elige tu descarga',
    mobileNote: 'DegenView es una app de escritorio. Descárgala en tu equipo.',
  },

  /** Human-readable names of download file kinds (OS names and architectures are not translated). */
  platforms: {
    formats: {
      diskImage: 'Imagen de disco',
      installer: 'Instalador',
      tarball: 'Tarball',
      flatpak: 'Flatpak',
    },
  },

  sectionNav: {
    ariaLabel: 'Secciones',
    /** Default section labels of the home page, keyed by section id. */
    sections: {
      markets: 'Mercados',
      'pine-script': 'Pine Script',
      mcp: 'MCP',
      portfolio: 'Cartera',
      'paper-trading': 'Trading simulado',
      replay: 'Reproducción',
      'chart-types': 'Tipos de gráfico',
      more: 'Más',
      download: 'Descargar',
    },
  },

  codeBlock: {
    defaultLabel: 'shell',
    copy: 'Copiar',
    copyAria: 'Copiar {label}',
    copyAriaFallbackLabel: 'comandos',
  },

  screenshot: {
    openPlayer: '{alt}. Abrir reproductor ampliado',
    closePlayer: 'Cerrar reproductor',
    enlarge: '{alt}. Ampliar imagen',
    closeImage: 'Cerrar imagen',
    comingSoonAria: '{alt} (captura próximamente)',
    comingSoon: 'captura próximamente',
  },

  notFound: {
    title: 'Página no encontrada – DegenView',
    description: 'Esa página no existe.',
    /** `{accent}` is replaced by the highlighted (gradient) part. */
    heading: 'Este gráfico fue {accent}',
    headingAccent: 'deslistado.',
    body: 'La página que buscas no existe.',
    button: 'Volver al inicio',
  },
};
