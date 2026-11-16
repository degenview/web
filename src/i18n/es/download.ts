import type { Dict } from '../en';

// Inline markup (<code>, <b>, <a>) keeps its classes: copy the tags and attributes unchanged when translating.
// Commands, file names, URLs and version tags stay in the page code.
export const download: Dict['download'] = {
  meta: {
    title: 'Descargar DegenView – Alternativa a TradingView gratis',
    description:
      'Descarga DegenView, la alternativa a TradingView gratuita y de código abierto, para macOS, Windows o Linux. Sin cuenta, con pasos de instalación y checksums.',
    /** Structured data (schema.org softwareRequirements). */
    softwareRequirements: 'macOS 14 o posterior; Windows en x64 o ARM64; Linux con glibc 2.35 o posterior, o Flatpak',
  },
  breadcrumbs: { home: 'Inicio', download: 'Descargar' },
  /** Label of the newest release next to its version. */
  status: {
    rc: 'Versión candidata',
    prerelease: 'Versión preliminar',
    stable: 'Estable',
  },
  hero: {
    eyebrow: 'descargar',
    title: 'Descarga <span class="gradient-text">DegenView</span>',
    lead: 'Gratis y de código abierto para macOS, Windows y Linux. Sin cuenta, sin prueba, sin trampa.',
    choose: 'Elige tu descarga',
    other: 'Otras plataformas y formatos',
    /** {date} = release date. */
    released: 'Publicada el {date}',
  },
  all: {
    eyebrow: 'todas las descargas',
    title: 'Elige tu <span class="gradient-text">plataforma</span>',
    lead: 'Cada compilación viene como instalador o archivo comprimido. Los tamaños de archivo corresponden a esta versión.',
    /** System requirements line on each OS card. */
    needs: {
      macOS: 'macOS 14 Sonoma o posterior',
      Windows: 'Windows en x64 o ARM64',
      Linux: 'glibc 2.35 o superior (Ubuntu 22.04, Debian 12, Fedora 36+), o usa el Flatpak',
    },
    /** Architecture heading, by platform id. */
    archHints: {
      'macos-arm64': 'Apple Silicon (M1 y posteriores)',
      'macos-x64': 'Intel',
      'windows-x64': 'x64 (Intel y AMD)',
      'windows-arm64': 'ARM64 (Snapdragon X, Windows en ARM)',
      'linux-x64': 'x64',
      'linux-arm64': 'ARM64',
    },
    recommended: 'Recomendado',
    /** {url} = GitHub Releases. */
    older:
      'Las versiones anteriores y las notas de la versión están en <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">GitHub Releases<span class="sr-only"> (se abre en una pestaña nueva)</span></a>.',
  },
  install: {
    eyebrow: 'instalar',
    title: 'Listo para usar <span class="gradient-text">en un minuto</span>',
    macos: {
      steps: [
        'Descarga el <code class="font-mono text-fg">.dmg</code> que corresponda a tu Mac.',
        'Ábrelo y arrastra <b class="text-fg">DegenView</b> al acceso directo de Aplicaciones.',
        'Ábrelo desde Aplicaciones.',
        'Déjalo en Aplicaciones. Se actualiza solo desde dentro de la app.',
      ],
      brewTitle: 'O con Homebrew',
      brewNote:
        'Instala la app firmada en Aplicaciones. Sigue actualizándose sola desde dentro de la app, así que <code class="font-mono text-fg">brew upgrade</code> no la toca.',
    },
    windows: {
      steps: [
        'Descarga el <code class="font-mono text-fg">-setup.exe</code> para tu PC.',
        'Ejecútalo. Se instala solo para tu usuario, sin permisos de administrador, añade una entrada al menú Inicio y un desinstalador, y conserva tus datos si lo quitas.',
        'Si aparece SmartScreen, elige <b class="text-fg">Más información → Ejecutar de todas formas</b>. La compilación aún no está firmada.',
      ],
    },
    linux: {
      tarballTitle: 'Tarball, cualquier distro reciente',
      launcherIntro: '¿Quieres un lanzador y un icono en el dock? Desde la carpeta extraída:',
      tarballNote: 'En una carpeta de tu propiedad, la app se actualiza sola.',
      flatpakTitle: 'Flatpak, en entorno aislado',
      /** Flathub setup link opens in a new tab. */
      flatpakNote:
        'Actualízalo cuando quieras con <code class="font-mono text-fg">flatpak update</code>. El runtime viene de Flathub, así que <a class="font-medium text-accent-text underline underline-offset-4" href="https://flathub.org/setup" target="_blank" rel="noopener noreferrer">configura Flathub<span class="sr-only"> (se abre en una pestaña nueva)</span></a> primero. <code class="font-mono text-fg">beta</code> sigue las versiones candidatas y las finales; <code class="font-mono text-fg">stable</code> solo sigue las finales y funciona cuando se publique una.',
      /** {version} = release tag. */
      singleFile:
        '¿Prefieres un solo archivo? <code class="font-mono text-fg">flatpak install --user DegenView-{version}-linux-x64.flatpak</code>. Un archivo descargado no tiene remoto, así que no se actualiza.',
      requirements:
        'Requiere OpenGL/EGL y X11 o Wayland. En equipos ARM, usa <code class="font-mono text-fg">arm64</code> en el nombre del archivo.',
    },
  },
  verify: {
    eyebrow: 'verificar',
    title: 'Confía, pero <span class="gradient-text">verifica</span>',
    lead: 'DegenView es de código abierto y cada versión se compila con un flujo de trabajo público. Compara el checksum SHA-256 de tu descarga con el que aparece abajo.',
    macLinux: 'macOS y Linux',
    windows: 'Windows (PowerShell)',
    /** {os} = macOS, Windows or Linux. */
    osChecksums: 'Checksums de {os}',
    copy: 'Copiar',
    /** {name} = file name. */
    copyAria: 'Copiar el checksum de {name}',
    /** Button label after a successful copy. */
    copied: 'Copiado',
    /** Button label when the browser blocks clipboard access. */
    copyFailed: 'Pulsa ⌘/Ctrl+C',
    /** {url} = the release page. */
    listedOn:
      'Los checksums aparecen en la <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">página de la versión<span class="sr-only"> (se abre en una pestaña nueva)</span></a>.',
    /** {url} = GitHub Releases. */
    stale:
      'Ya hay una versión más reciente. Sus checksums están en la <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">página de la versión<span class="sr-only"> (se abre en una pestaña nueva)</span></a>.',
  },
  release: {
    eyebrow: 'versiones y código fuente',
    title: 'Léelo. <span class="gradient-text">Compílalo.</span>',
    thisRelease: {
      title: 'Esta versión',
      /** Shown for release candidates and pre-releases, before `notes`. */
      roughEdges: {
        rc: 'Esta es una versión candidata, así que puedes encontrar aristas sin pulir.',
        prerelease: 'Esta es una versión preliminar, así que puedes encontrar aristas sin pulir.',
      },
      notes: 'Las notas de la versión enumeran todos los cambios desde la anterior.',
      link: 'Notas de la versión en GitHub',
      previous: 'Versiones anteriores',
    },
    source: {
      title: 'Compilar desde el código fuente',
      lead: 'GPL-3.0, escrito en Rust. Necesitas Rust 1.95 o superior.',
      note: 'El binario queda en <code class="font-mono text-fg">target/release/degenview</code>. En macOS, <code class="font-mono text-fg">./tools/bundle.sh</code> genera una app que se puede abrir desde el Finder.',
      github: 'Ver en GitHub',
    },
  },
};
