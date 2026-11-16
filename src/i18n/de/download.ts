import type { Dict } from '../en';

export const download: Dict['download'] = {
  meta: {
    title: 'DegenView herunterladen – Kostenlose TradingView-Alternative',
    description:
      'Lade DegenView, die kostenlose Open-Source-TradingView-Alternative, für macOS, Windows oder Linux herunter. Ohne Konto, mit Anleitung und Prüfsummen.',
    softwareRequirements: 'macOS 14 oder neuer; Windows auf x64 oder ARM64; Linux mit glibc 2.35 oder neuer, oder Flatpak',
  },
  breadcrumbs: { home: 'Startseite', download: 'Download' },
  status: {
    rc: 'Release Candidate',
    prerelease: 'Vorabversion',
    stable: 'Stabil',
  },
  hero: {
    eyebrow: 'Download',
    title: '<span class="gradient-text">DegenView</span> herunterladen',
    lead: 'Kostenlos und Open Source für macOS, Windows und Linux. Kein Konto, keine Testphase, kein Haken.',
    choose: 'Download auswählen',
    other: 'Weitere Plattformen und Formate',
    released: 'Veröffentlicht am {date}',
  },
  all: {
    eyebrow: 'alle Downloads',
    title: 'Wähle deine <span class="gradient-text">Plattform</span>',
    lead: 'Jeder Build kommt als Installer oder Archiv. Die Dateigrößen gelten für dieses Release.',
    needs: {
      macOS: 'macOS 14 Sonoma oder neuer',
      Windows: 'Windows auf x64 oder ARM64',
      Linux: 'glibc 2.35 oder neuer (Ubuntu 22.04, Debian 12, Fedora 36+) oder nutze das Flatpak',
    },
    archHints: {
      'macos-arm64': 'Apple Silicon (M1 und neuer)',
      'macos-x64': 'Intel',
      'windows-x64': 'x64 (Intel und AMD)',
      'windows-arm64': 'ARM64 (Snapdragon X, Windows on ARM)',
      'linux-x64': 'x64',
      'linux-arm64': 'ARM64',
    },
    recommended: 'Empfohlen',
    older:
      'Ältere Versionen und Release Notes findest du auf <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">GitHub Releases<span class="sr-only"> (öffnet in einem neuen Tab)</span></a>.',
  },
  install: {
    eyebrow: 'Installation',
    title: 'In einer Minute <span class="gradient-text">startklar</span>',
    macos: {
      steps: [
        'Lade die <code class="font-mono text-fg">.dmg</code> herunter, die zu deinem Mac passt.',
        'Öffne sie und zieh <b class="text-fg">DegenView</b> auf die Verknüpfung zum Ordner „Programme“.',
        'Starte die App aus dem Ordner „Programme“.',
        'Lass sie im Ordner „Programme“. Sie aktualisiert sich selbst aus der App heraus.',
      ],
      brewTitle: 'Oder mit Homebrew',
      brewNote:
        'Installiert die signierte App im Ordner „Programme“. Sie aktualisiert sich weiterhin selbst aus der App heraus, <code class="font-mono text-fg">brew upgrade</code> lässt sie also in Ruhe.',
    },
    windows: {
      steps: [
        'Lade die <code class="font-mono text-fg">-setup.exe</code> für deinen PC herunter.',
        'Führe sie aus. Sie installiert nur für deinen Benutzer, ohne Administratorrechte, legt einen Startmenü-Eintrag und ein Deinstallationsprogramm an und behält deine Daten, wenn du sie entfernst.',
        'Wenn SmartScreen erscheint, wähle <b class="text-fg">Weitere Informationen → Trotzdem ausführen</b>. Der Build ist noch nicht codesigniert.',
      ],
    },
    linux: {
      tarballTitle: 'Tarball, jede aktuelle Distribution',
      launcherIntro: 'Du willst einen Starter und ein Dock-Symbol? Aus dem entpackten Ordner:',
      tarballNote: 'In einem Ordner, der dir gehört, aktualisiert sich die App selbst.',
      flatpakTitle: 'Flatpak, in der Sandbox',
      flatpakNote:
        'Aktualisiere es jederzeit mit <code class="font-mono text-fg">flatpak update</code>. Die Runtime kommt von Flathub, <a class="font-medium text-accent-text underline underline-offset-4" href="https://flathub.org/setup" target="_blank" rel="noopener noreferrer">richte Flathub also zuerst ein<span class="sr-only"> (öffnet in einem neuen Tab)</span></a>. <code class="font-mono text-fg">beta</code> folgt Release Candidates und finalen Releases; <code class="font-mono text-fg">stable</code> folgt nur finalen Releases und funktioniert, sobald eines veröffentlicht ist.',
      singleFile:
        'Lieber eine einzelne Datei? <code class="font-mono text-fg">flatpak install --user DegenView-{version}-linux-x64.flatpak</code>. Eine heruntergeladene Datei hat keine Remote und aktualisiert sich deshalb nicht.',
      requirements:
        'Braucht OpenGL/EGL sowie X11 oder Wayland. Verwende auf ARM-Rechnern <code class="font-mono text-fg">arm64</code> im Dateinamen.',
    },
  },
  verify: {
    eyebrow: 'Prüfen',
    title: 'Vertrauen ist gut, <span class="gradient-text">Prüfen ist besser</span>',
    lead: 'DegenView ist Open Source, und jedes Release wird von einem öffentlichen Workflow gebaut. Vergleiche die SHA-256-Prüfsumme deines Downloads mit der unten.',
    macLinux: 'macOS und Linux',
    windows: 'Windows (PowerShell)',
    osChecksums: '{os}-Prüfsummen',
    copy: 'Kopieren',
    copyAria: 'Prüfsumme für {name} kopieren',
    copied: 'Kopiert',
    copyFailed: 'Drücke ⌘/Strg+C',
    listedOn:
      'Die Prüfsummen stehen auf der <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">Release-Seite<span class="sr-only"> (öffnet in einem neuen Tab)</span></a>.',
    stale:
      'Es gibt ein neueres Release. Dessen Prüfsummen stehen auf der <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">Release-Seite<span class="sr-only"> (öffnet in einem neuen Tab)</span></a>.',
  },
  release: {
    eyebrow: 'Releases und Quellcode',
    title: 'Lies ihn. <span class="gradient-text">Bau ihn.</span>',
    thisRelease: {
      title: 'Dieses Release',
      roughEdges: {
        rc: 'Das ist ein Release Candidate, da kann es noch ruckeln.',
        prerelease: 'Das ist eine Vorabversion, da kann es noch ruckeln.',
      },
      notes: 'Die Release Notes listen jede Änderung seit dem letzten Release auf.',
      link: 'Release Notes auf GitHub',
      previous: 'Frühere Releases',
    },
    source: {
      title: 'Aus dem Quellcode bauen',
      lead: 'GPL-3.0, in Rust geschrieben. Du brauchst Rust 1.95 oder neuer.',
      note: 'Die Binärdatei landet unter <code class="font-mono text-fg">target/release/degenview</code>. Unter macOS baut <code class="font-mono text-fg">./tools/bundle.sh</code> eine App, die sich aus dem Finder starten lässt.',
      github: 'Auf GitHub ansehen',
    },
  },
};
