import type { Dict } from '../en';

// Inline markup (<code>, <b>, <a>) keeps its classes: copy the tags and attributes unchanged when translating.
// Commands, file names, URLs and version tags stay in the page code.
export const download: Dict['download'] = {
  meta: {
    title: '下载 DegenView – 免费 TradingView 替代品',
    description:
      '下载 DegenView，免费开源的 TradingView 替代品，支持 macOS、Windows 和 Linux。无需账号，附安装步骤和校验和。',
    /** Structured data (schema.org softwareRequirements). */
    softwareRequirements: 'macOS 14 或更高版本；x64 或 ARM64 的 Windows；glibc 2.35 或更高版本的 Linux，或 Flatpak',
  },
  breadcrumbs: { home: '首页', download: '下载' },
  /** Label of the newest release next to its version. */
  status: {
    rc: '候选版本',
    prerelease: '预发布版',
    stable: '稳定版',
  },
  hero: {
    eyebrow: '下载',
    title: '下载 <span class="gradient-text">DegenView</span>',
    lead: '免费开源，支持 macOS、Windows 和 Linux。无需账号，没有试用期，没有套路。',
    choose: '选择你的下载项',
    other: '其他平台和格式',
    /** {date} = release date. */
    released: '发布于 {date}',
  },
  all: {
    eyebrow: '全部下载',
    title: '选择你的<span class="gradient-text">平台</span>',
    lead: '每个构建都提供安装程序或压缩包。文件大小对应当前版本。',
    /** System requirements line on each OS card. */
    needs: {
      macOS: 'macOS 14 Sonoma 或更高版本',
      Windows: 'x64 或 ARM64 的 Windows',
      Linux: 'glibc 2.35 或更高版本（Ubuntu 22.04、Debian 12、Fedora 36+），也可以使用 Flatpak',
    },
    /** Architecture heading, by platform id. */
    archHints: {
      'macos-arm64': 'Apple 芯片（M1 及更新）',
      'macos-x64': 'Intel',
      'windows-x64': 'x64（Intel 和 AMD）',
      'windows-arm64': 'ARM64（Snapdragon X、Windows on ARM）',
      'linux-x64': 'x64',
      'linux-arm64': 'ARM64',
    },
    recommended: '推荐',
    /** {url} = GitHub Releases. */
    older:
      '旧版本和发布说明请见 <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">GitHub Releases<span class="sr-only">（在新标签页中打开）</span></a>。',
  },
  install: {
    eyebrow: '安装',
    title: '一分钟<span class="gradient-text">即可上手</span>',
    macos: {
      steps: [
        '下载与你的 Mac 对应的 <code class="font-mono text-fg">.dmg</code> 文件。',
        '打开它，把 <b class="text-fg">DegenView</b> 拖到“应用程序”快捷方式上。',
        '从“应用程序”中启动。',
        '请保留在“应用程序”中。它会在应用内自动更新。',
      ],
      brewTitle: '或者用 Homebrew',
      brewNote:
        '把已签名的应用安装到“应用程序”中。它仍会在应用内自动更新，所以 <code class="font-mono text-fg">brew upgrade</code> 不会处理它。',
    },
    windows: {
      steps: [
        '下载适合你电脑的 <code class="font-mono text-fg">-setup.exe</code>。',
        '运行它。它只为当前用户安装，不需要管理员权限，会添加开始菜单项和卸载程序，卸载时会保留你的数据。',
        '如果出现 SmartScreen，请选择<b class="text-fg">更多信息 → 仍要运行</b>。该版本暂未做代码签名。',
      ],
    },
    linux: {
      tarballTitle: 'Tarball，适用于任何较新的发行版',
      launcherIntro: '想要启动器和 Dock 图标？在解压后的文件夹中运行：',
      tarballNote: '放在你有权限的文件夹里，应用会自动更新。',
      flatpakTitle: 'Flatpak，沙盒运行',
      /** Flathub setup link opens in a new tab. */
      flatpakNote:
        '随时可以用 <code class="font-mono text-fg">flatpak update</code> 更新。运行时来自 Flathub，所以请先<a class="font-medium text-accent-text underline underline-offset-4" href="https://flathub.org/setup" target="_blank" rel="noopener noreferrer">设置 Flathub<span class="sr-only">（在新标签页中打开）</span></a>。<code class="font-mono text-fg">beta</code> 跟随候选版本和正式版本；<code class="font-mono text-fg">stable</code> 只跟随正式版本，在正式版本发布后才可用。',
      /** {version} = release tag. */
      singleFile:
        '更喜欢单个文件？运行 <code class="font-mono text-fg">flatpak install --user DegenView-{version}-linux-x64.flatpak</code>。下载的文件没有远程源，所以不会自动更新。',
      requirements:
        '需要 OpenGL/EGL，以及 X11 或 Wayland。ARM 设备请在文件名中使用 <code class="font-mono text-fg">arm64</code>。',
    },
  },
  verify: {
    eyebrow: '验证',
    title: '信任，但要<span class="gradient-text">验证</span>',
    lead: 'DegenView 是开源的，每个版本都由公开的工作流构建。请把下载文件的 SHA-256 校验和与下面的对比。',
    macLinux: 'macOS 和 Linux',
    windows: 'Windows（PowerShell）',
    /** {os} = macOS, Windows or Linux. */
    osChecksums: '{os} 校验和',
    copy: '复制',
    /** {name} = file name. */
    copyAria: '复制 {name} 的校验和',
    /** Button label after a successful copy. */
    copied: '已复制',
    /** Button label when the browser blocks clipboard access. */
    copyFailed: '请按 ⌘/Ctrl+C',
    /** {url} = the release page. */
    listedOn:
      '校验和列在<a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">版本页面<span class="sr-only">（在新标签页中打开）</span></a>上。',
    /** {url} = GitHub Releases. */
    stale:
      '已有更新的版本发布。它的校验和在<a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">版本页面<span class="sr-only">（在新标签页中打开）</span></a>上。',
  },
  release: {
    eyebrow: '版本与源代码',
    title: '读源码，<span class="gradient-text">自己构建。</span>',
    thisRelease: {
      title: '当前版本',
      /** Shown for release candidates and pre-releases, before `notes`. */
      roughEdges: {
        rc: '这是候选版本，可能会遇到一些不完善的地方。',
        prerelease: '这是预发布版，可能会遇到一些不完善的地方。',
      },
      notes: '发布说明列出了自上一版本以来的所有变更。',
      link: 'GitHub 上的发布说明',
      previous: '历史版本',
    },
    source: {
      title: '从源代码构建',
      lead: 'GPL-3.0，用 Rust 编写。需要 Rust 1.95 或更高版本。',
      note: '二进制文件位于 <code class="font-mono text-fg">target/release/degenview</code>。在 macOS 上，<code class="font-mono text-fg">./tools/bundle.sh</code> 可以构建出能从 Finder 启动的应用。',
      github: '在 GitHub 上查看',
    },
  },
};
