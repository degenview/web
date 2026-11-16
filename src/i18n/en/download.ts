// Inline markup (<code>, <b>, <a>) keeps its classes: copy the tags and attributes unchanged when translating.
// Commands, file names, URLs and version tags stay in the page code.
export const download = {
  meta: {
    title: 'Download DegenView – Free TradingView Alternative',
    description:
      'Download DegenView, the free, open source TradingView alternative, for macOS, Windows or Linux. No account needed, with install steps and checksums.',
    /** Structured data (schema.org softwareRequirements). */
    softwareRequirements: 'macOS 14 or later; Windows on x64 or ARM64; Linux with glibc 2.35 or later, or Flatpak',
  },
  breadcrumbs: { home: 'Home', download: 'Download' },
  /** Label of the newest release next to its version. */
  status: {
    rc: 'Release candidate',
    prerelease: 'Pre-release',
    stable: 'Stable',
  },
  hero: {
    eyebrow: 'download',
    title: 'Download <span class="gradient-text">DegenView</span>',
    lead: 'Free and open source for macOS, Windows and Linux. No account, no trial, no catch.',
    choose: 'Choose your download',
    other: 'Other platforms and formats',
    /** {date} = release date. */
    released: 'Released {date}',
  },
  all: {
    eyebrow: 'all downloads',
    title: 'Pick your <span class="gradient-text">platform</span>',
    lead: 'Every build comes as an installer or archive. File sizes are for this release.',
    /** System requirements line on each OS card. */
    needs: {
      macOS: 'macOS 14 Sonoma or later',
      Windows: 'Windows on x64 or ARM64',
      Linux: 'glibc 2.35 or newer (Ubuntu 22.04, Debian 12, Fedora 36+), or use the Flatpak',
    },
    /** Architecture heading, by platform id. */
    archHints: {
      'macos-arm64': 'Apple Silicon (M1 and later)',
      'macos-x64': 'Intel',
      'windows-x64': 'x64 (Intel and AMD)',
      'windows-arm64': 'ARM64 (Snapdragon X, Windows on ARM)',
      'linux-x64': 'x64',
      'linux-arm64': 'ARM64',
    },
    recommended: 'Recommended',
    /** {url} = GitHub Releases. */
    older:
      'Older versions and release notes live on <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">GitHub Releases<span class="sr-only"> (opens in a new tab)</span></a>.',
  },
  install: {
    eyebrow: 'install',
    title: 'Up and running <span class="gradient-text">in a minute</span>',
    macos: {
      steps: [
        'Download the <code class="font-mono text-fg">.dmg</code> that matches your Mac.',
        'Open it and drag <b class="text-fg">DegenView</b> onto the Applications shortcut.',
        'Launch it from Applications.',
        'Keep it in Applications. It updates itself from inside the app.',
      ],
      brewTitle: 'Or with Homebrew',
      brewNote:
        'Installs the signed app into Applications. It still updates itself from inside the app, so <code class="font-mono text-fg">brew upgrade</code> leaves it alone.',
    },
    windows: {
      steps: [
        'Download the <code class="font-mono text-fg">-setup.exe</code> for your PC.',
        'Run it. It installs for your user only, with no admin rights, adds a Start menu entry and an uninstaller, and keeps your data if you remove it.',
        'If SmartScreen appears, choose <b class="text-fg">More info → Run anyway</b>. The build isn’t code-signed yet.',
      ],
    },
    linux: {
      tarballTitle: 'Tarball, any recent distro',
      launcherIntro: 'Want a launcher and dock icon? From the extracted folder:',
      tarballNote: 'In a folder you own, the app updates itself.',
      flatpakTitle: 'Flatpak, sandboxed',
      /** Flathub setup link opens in a new tab. */
      flatpakNote:
        'Update it any time with <code class="font-mono text-fg">flatpak update</code>. The runtime comes from Flathub, so <a class="font-medium text-accent-text underline underline-offset-4" href="https://flathub.org/setup" target="_blank" rel="noopener noreferrer">set Flathub up<span class="sr-only"> (opens in a new tab)</span></a> first. <code class="font-mono text-fg">beta</code> follows release candidates and final releases; <code class="font-mono text-fg">stable</code> follows final releases only and works once one is published.',
      /** {version} = release tag. */
      singleFile:
        'Prefer a single file? <code class="font-mono text-fg">flatpak install --user DegenView-{version}-linux-x64.flatpak</code>. A downloaded file has no remote, so it does not update.',
      requirements:
        'Needs OpenGL/EGL and X11 or Wayland. On ARM machines, use <code class="font-mono text-fg">arm64</code> in the file name.',
    },
  },
  verify: {
    eyebrow: 'verify',
    title: 'Trust, but <span class="gradient-text">verify</span>',
    lead: 'DegenView is open source and every release is built by a public workflow. Compare your download’s SHA-256 checksum with the one below.',
    macLinux: 'macOS and Linux',
    windows: 'Windows (PowerShell)',
    /** {os} = macOS, Windows or Linux. */
    osChecksums: '{os} checksums',
    copy: 'Copy',
    /** {name} = file name. */
    copyAria: 'Copy checksum for {name}',
    /** Button label after a successful copy. */
    copied: 'Copied',
    /** Button label when the browser blocks clipboard access. */
    copyFailed: 'Press ⌘/Ctrl+C',
    /** {url} = the release page. */
    listedOn:
      'Checksums are listed on the <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">release page<span class="sr-only"> (opens in a new tab)</span></a>.',
    /** {url} = GitHub Releases. */
    stale:
      'A newer release is out. Its checksums are on the <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">release page<span class="sr-only"> (opens in a new tab)</span></a>.',
  },
  release: {
    eyebrow: 'releases and source',
    title: 'Read it. <span class="gradient-text">Build it.</span>',
    thisRelease: {
      title: 'This release',
      /** Shown for release candidates and pre-releases, before `notes`. */
      roughEdges: {
        rc: 'This is a release candidate, so you may hit rough edges.',
        prerelease: 'This is a pre-release, so you may hit rough edges.',
      },
      notes: 'Release notes list every change since the last one.',
      link: 'Release notes on GitHub',
      previous: 'Previous releases',
    },
    source: {
      title: 'Build from source',
      lead: 'GPL-3.0, written in Rust. You need Rust 1.95 or newer.',
      note: 'The binary lands at <code class="font-mono text-fg">target/release/degenview</code>. On macOS, <code class="font-mono text-fg">./tools/bundle.sh</code> builds a Finder-launchable app.',
      github: 'View on GitHub',
    },
  },
};
