import type { Dict } from '../en';

export const download: Dict['download'] = {
  meta: {
    title: 'Télécharger DegenView – Alternative à TradingView gratuite',
    description:
      'Téléchargez DegenView, l’alternative à TradingView gratuite et open source, pour macOS, Windows ou Linux. Sans compte, avec étapes d’installation et checksums.',
    softwareRequirements: 'macOS 14 ou ultérieur ; Windows sur x64 ou ARM64 ; Linux avec glibc 2.35 ou ultérieure, ou Flatpak',
  },
  breadcrumbs: { home: 'Accueil', download: 'Télécharger' },
  status: {
    rc: 'Version candidate',
    prerelease: 'Préversion',
    stable: 'Stable',
  },
  hero: {
    eyebrow: 'téléchargement',
    title: 'Télécharger <span class="gradient-text">DegenView</span>',
    lead: 'Gratuit et open source pour macOS, Windows et Linux. Sans compte, sans essai, sans piège.',
    choose: 'Choisissez votre téléchargement',
    other: 'Autres plateformes et formats',
    released: 'Publiée le {date}',
  },
  all: {
    eyebrow: 'tous les téléchargements',
    title: 'Choisissez votre <span class="gradient-text">plateforme</span>',
    lead: 'Chaque build est disponible sous forme d’installeur ou d’archive. Les tailles de fichier sont celles de cette version.',
    needs: {
      macOS: 'macOS 14 Sonoma ou ultérieur',
      Windows: 'Windows sur x64 ou ARM64',
      Linux: 'glibc 2.35 ou plus récente (Ubuntu 22.04, Debian 12, Fedora 36+), ou utilisez le Flatpak',
    },
    archHints: {
      'macos-arm64': 'Apple Silicon (M1 et ultérieurs)',
      'macos-x64': 'Intel',
      'windows-x64': 'x64 (Intel et AMD)',
      'windows-arm64': 'ARM64 (Snapdragon X, Windows sur ARM)',
      'linux-x64': 'x64',
      'linux-arm64': 'ARM64',
    },
    recommended: 'Recommandé',
    older:
      'Les anciennes versions et les notes de version sont sur <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">GitHub Releases<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a>.',
  },
  install: {
    eyebrow: 'installation',
    title: 'Opérationnel <span class="gradient-text">en une minute</span>',
    macos: {
      steps: [
        'Téléchargez le <code class="font-mono text-fg">.dmg</code> qui correspond à votre Mac.',
        'Ouvrez-le et faites glisser <b class="text-fg">DegenView</b> sur le raccourci Applications.',
        'Lancez-le depuis Applications.',
        'Laissez-le dans Applications. Il se met à jour tout seul depuis l’application.',
      ],
      brewTitle: 'Ou avec Homebrew',
      brewNote:
        'Installe l’app signée dans Applications. Elle se met toujours à jour toute seule depuis l’application, donc <code class="font-mono text-fg">brew upgrade</code> n’y touche pas.',
    },
    windows: {
      steps: [
        'Téléchargez le <code class="font-mono text-fg">-setup.exe</code> adapté à votre PC.',
        'Lancez-le. Il s’installe pour votre seul compte utilisateur, sans droits d’administrateur, ajoute une entrée au menu Démarrer et un désinstalleur, et conserve vos données si vous le supprimez.',
        'Si SmartScreen s’affiche, choisissez <b class="text-fg">Informations complémentaires → Exécuter quand même</b>. Le build n’est pas encore signé.',
      ],
    },
    linux: {
      tarballTitle: 'Archive tar, toute distribution récente',
      launcherIntro: 'Envie d’un lanceur et d’une icône dans le dock ? Depuis le dossier extrait :',
      tarballNote: 'Dans un dossier qui vous appartient, l’app se met à jour toute seule.',
      flatpakTitle: 'Flatpak, isolé (sandbox)',
      flatpakNote:
        'Mettez-le à jour à tout moment avec <code class="font-mono text-fg">flatpak update</code>. Le runtime provient de Flathub : <a class="font-medium text-accent-text underline underline-offset-4" href="https://flathub.org/setup" target="_blank" rel="noopener noreferrer">configurez d’abord Flathub<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a>. <code class="font-mono text-fg">beta</code> suit les versions candidates et les versions finales ; <code class="font-mono text-fg">stable</code> ne suit que les versions finales et fonctionne dès qu’une est publiée.',
      singleFile:
        'Vous préférez un seul fichier ? <code class="font-mono text-fg">flatpak install --user DegenView-{version}-linux-x64.flatpak</code>. Un fichier téléchargé n’a pas de dépôt distant : il ne se met donc pas à jour.',
      requirements:
        'Nécessite OpenGL/EGL et X11 ou Wayland. Sur les machines ARM, utilisez <code class="font-mono text-fg">arm64</code> dans le nom du fichier.',
    },
  },
  verify: {
    eyebrow: 'vérification',
    title: 'Faites confiance, mais <span class="gradient-text">vérifiez</span>',
    lead: 'DegenView est open source et chaque version est construite par un workflow public. Comparez la somme de contrôle SHA-256 de votre téléchargement avec celle ci-dessous.',
    macLinux: 'macOS et Linux',
    windows: 'Windows (PowerShell)',
    osChecksums: 'Sommes de contrôle {os}',
    copy: 'Copier',
    copyAria: 'Copier la somme de contrôle de {name}',
    copied: 'Copié',
    copyFailed: 'Appuyez sur ⌘/Ctrl+C',
    listedOn:
      'Les sommes de contrôle figurent sur la <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">page de la version<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a>.',
    stale:
      'Une version plus récente est disponible. Ses sommes de contrôle figurent sur la <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">page de la version<span class="sr-only"> (s’ouvre dans un nouvel onglet)</span></a>.',
  },
  release: {
    eyebrow: 'versions et code source',
    title: 'Lisez-le. <span class="gradient-text">Compilez-le.</span>',
    thisRelease: {
      title: 'Cette version',
      roughEdges: {
        rc: 'Ceci est une version candidate : vous pouvez rencontrer quelques aspérités.',
        prerelease: 'Ceci est une préversion : vous pouvez rencontrer quelques aspérités.',
      },
      notes: 'Les notes de version listent chaque changement depuis la précédente.',
      link: 'Notes de version sur GitHub',
      previous: 'Versions précédentes',
    },
    source: {
      title: 'Compiler depuis les sources',
      lead: 'GPL-3.0, écrit en Rust. Il vous faut Rust 1.95 ou plus récent.',
      note: 'Le binaire se retrouve dans <code class="font-mono text-fg">target/release/degenview</code>. Sur macOS, <code class="font-mono text-fg">./tools/bundle.sh</code> construit une app lançable depuis le Finder.',
      github: 'Voir sur GitHub',
    },
  },
};
