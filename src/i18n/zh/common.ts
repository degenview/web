import type { Dict } from '../en';

export const common: Dict['common'] = {
  skipToContent: '跳到正文',
  ogAlt: 'DegenView：免费开源的 TradingView 替代品',

  /** Site navigation (header, footer, mobile menu). Link labels are shared by header and footer. */
  nav: {
    primary: '主导航',
    mobile: '移动端导航',
    footer: '页脚导航',
    homeAria: 'DegenView 首页',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    features: '功能',
    pineStudio: 'Pine Studio',
    tradingviewAlternative: 'TradingView 替代品',
    download: '下载',
    faq: '常见问题',
    docs: '文档',
    github: 'GitHub',
    privacyPolicy: '隐私政策',
    cookieSettings: 'Cookie 设置',
  },

  /** Screen-reader suffix for links that open a new tab. Rendered as `<span class="sr-only"> {text}</span>`. */
  opensInNewTab: '（在新标签页打开）',

  footer: {
    tagline: '免费开源的行情看板。© {year} Nico Oelgart，GPL-3.0-only。',
    trademark:
      'Pine Script 和 TradingView 是 TradingView, Inc. 的商标。DegenView 与 TradingView 及文中提到的任何数据提供方均无关联，也未获其认可。其他商标归各自所有者所有。不构成投资建议。',
    /** Shown in the version badge when the latest release tag could not be fetched. */
    versionFallback: '开源',
  },

  coffee: '请我喝杯咖啡',

  theme: {
    group: '颜色主题',
    system: '跟随系统',
    light: '浅色主题',
    dark: '深色主题',
  },

  cookies: {
    title: 'Cookie，你同意才用',
    text: '我们想用 Cookie 统计网站访问量。',
    decline: '拒绝',
    accept: '接受',
  },

  preRelease: {
    ariaLabel: '预发布版提示',
    /** `block` variant. `{version}` is replaced by the release tag, `{issues}` by the GitHub issues link. */
    block: {
      releaseCandidate: {
        title: 'DegenView 正处于候选版本测试阶段',
        body: '{version} 是下一个稳定版的候选版本，可能还有一些小问题。发现了？{issues}。',
      },
      preRelease: {
        title: 'DegenView 正处于预发布测试阶段',
        body: '{version} 是下一个稳定版的预发布版，可能还有一些小问题。发现了？{issues}。',
      },
      issuesLink: '在 GitHub 上告诉我们',
      releaseNotes: '发布说明',
    },
    /** `inline` variant. `{issues}` is replaced by the GitHub issues link. */
    inline: {
      releaseCandidate: '候选版本，可能有小问题。{issues}。',
      preRelease: '预发布版，可能有小问题。{issues}。',
      issuesLink: '反馈问题',
    },
  },

  /** Download menus and the platform-detection script (see Footer: emitted as JSON for src/scripts/platform.ts). */
  download: {
    label: '下载',
    forOs: '{os} 版',
    osDownloads: '{os} 下载',
    recommended: '推荐',
    viewSource: '查看源码',
    onGithub: '在 GitHub 上',
    /** Hero button label once the visitor's OS is detected. */
    downloadFor: '下载 {os} 版',
    chooseDownload: '选择下载版本',
    mobileNote: 'DegenView 是桌面应用，请在电脑上下载。',
  },

  /** Human-readable names of download file kinds (OS names and architectures are not translated). */
  platforms: {
    formats: {
      diskImage: '磁盘映像',
      installer: '安装程序',
      tarball: 'Tarball',
      flatpak: 'Flatpak',
    },
  },

  sectionNav: {
    ariaLabel: '章节',
    /** Default section labels of the home page, keyed by section id. */
    sections: {
      markets: '市场',
      'pine-script': 'Pine Script',
      mcp: 'MCP',
      portfolio: '投资组合',
      'paper-trading': '模拟交易',
      replay: '回放',
      'chart-types': '图表类型',
      more: '更多',
      download: '下载',
    },
  },

  codeBlock: {
    defaultLabel: 'shell',
    copy: '复制',
    copyAria: '复制 {label}',
    copyAriaFallbackLabel: '命令',
  },

  screenshot: {
    openPlayer: '{alt}。打开大播放器',
    closePlayer: '关闭播放器',
    enlarge: '{alt}。放大图片',
    closeImage: '关闭图片',
    comingSoonAria: '{alt}（截图即将上线）',
    comingSoon: '截图即将上线',
  },

  notFound: {
    title: '页面未找到 – DegenView',
    description: '这个页面不存在。',
    /** `{accent}` is replaced by the highlighted (gradient) part. */
    heading: '这张图表已{accent}',
    headingAccent: '下架。',
    body: '你要找的页面不存在。',
    button: '返回首页',
  },
};
