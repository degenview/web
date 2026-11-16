import type { Dict } from '../en';

export const faq: Dict['faq'] = {
  meta: {
    title: 'DegenView 常见问题 – 免费开源 TradingView 替代品',
    description:
      '关于 DegenView 的解答：免费开源的 TradingView 替代品，涵盖账号、Pine Script、股票数据、支持的平台和首次启动提示。',
  },
  breadcrumbs: { home: '首页', faq: '常见问题' },
  hero: {
    eyebrow: '常见问题',
    title: '你的疑问，<span class="gradient-text">这里解答</span>',
    lead: '下载之前大家常问的一切。这里没有的话，欢迎到 GitHub 上提问。',
    searchLabel: '搜索问题',
    /** {count} = number of questions. */
    searchPlaceholder: '搜索 {count} 个问题',
    /** Result count while searching, by plural category ({count} = matches). Add the categories your language needs (zero, one, two, few, many, other). */
    found: {
      one: '找到 {count} 个问题',
      other: '找到 {count} 个问题',
    } as Record<string, string>,
  },
  nav: {
    label: '主题',
    heading: '主题',
  },
  groups: {
    basics: { title: '基础', intro: '收费吗，背后是谁，以及它不是什么。' },
    scripts: { title: 'Pine Script 与 AI', intro: '运行脚本，以及脚本和图表的去向。' },
    data: { title: '数据与隐私', intro: '价格从哪里来，以及我们对你了解多少（很少）。' },
    install: { title: '安装与平台', intro: '各平台能运行什么，以及首次启动时该怎么做。' },
  },
  /** Alt text of a topic illustration. {title} = topic title. */
  groupArtLabel: '{title}插图',
  /** Alt text of an answer illustration. {question} = the question. */
  itemArtLabel: '插图：{question}',
  empty:
    '没有匹配的问题。<a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">到 GitHub 上提问<span class="sr-only">（在新标签页中打开）</span></a>，我们会补上。',
  cta: {
    title: '还有<span class="gradient-text">疑问？</span>',
    lead: '提交一个 issue，我们会回答。或者直接下载 DegenView，亲自体验。',
    download: '免费下载',
    ask: '到 GitHub 提问',
  },
  items: {
    free: {
      q: 'DegenView 真的免费吗？',
      a: '是的。DegenView 基于 GPL-3.0 免费开源。没有付费套餐，也没有功能限制。',
    },
    alternative: {
      q: 'DegenView 是免费的 TradingView 替代品吗？',
      a: '是的。DegenView 是一款免费开源的桌面应用，支持加密货币、股票和预测市场，提供多图表布局、本地 Pine Script v6 引擎、警报、K 线回放和投资组合跟踪。它独立于 TradingView，并不能取代 TradingView 提供的全部功能。',
      links: ['查看对比'],
    },
    openSource: {
      q: 'DegenView 是开源的吗？',
      a: '是的。源代码以 GPL-3.0-only 许可证公开在 GitHub 上，发布版本由公开的工作流构建。',
    },
    account: {
      q: '需要账号吗？',
      a: '不需要。无需注册任何东西。警报、投资组合、模拟交易和 Pine Script 都在你的电脑本地运行。',
    },
    affiliation: {
      q: '它和 TradingView 或数据提供商有关联吗？',
      a: '没有。DegenView 是独立项目。Pine Script 和 TradingView 是 TradingView, Inc. 的商标。Pine Script 是 TradingView 的语言，DegenView 用自己的引擎运行用它编写的脚本。其他所有商标均归其各自所有者所有。',
    },
    runPine: {
      q: '我能在 DegenView 中运行自己的 TradingView Pine 脚本吗？',
      a: '可以。DegenView 在本地运行自己的 Pine Script v6 引擎。它是独立实现，所以非常冷门的脚本可能与 TradingView 上的表现不同。',
    },
    pinePrivacy: {
      q: '我的 Pine 脚本会去哪里？',
      a: '默认哪里都不去。脚本在你的电脑上运行，源代码也留在那里，除非你自己选择把它发送到别处，例如发送给你为助手配置的 AI 提供商。',
    },
    aiAssistant: {
      q: '可以连接 AI 助手吗？',
      a: '可以。DegenView 提供可选的 MCP 服务器，AI 助手和自动化工具可以操作你的图表、警报和 Pine 脚本。它默认关闭，每个连接能做什么由你决定。',
    },
    stockData: {
      q: '怎么获取股票数据？',
      a: '美股数据来自 Alpaca 免费的 IEX 数据源。只需在设置中添加你的免费 Alpaca API 密钥即可。加密货币、预测市场和 CoinMarketCap 指数完全不需要密钥。',
      links: ['查看所有数据源'],
    },
    dataCollection: {
      q: 'DegenView 会收集我的数据吗？',
      a: '桌面应用没有分析或遥测功能，也不需要账号。本网站只有在你接受时才会设置分析 Cookie。隐私政策列出了应用连接的所有服务。',
      links: ['阅读隐私政策'],
    },
    offline: {
      q: 'DegenView 能离线使用吗？',
      a: '应用、你的脚本和你的数据都保存在你的电脑上。实时价格仍然来自数据提供商，所以获取行情数据需要联网。',
    },
    platforms: {
      q: '支持哪些平台？',
      a: 'macOS（Apple 芯片和 Intel）、Windows（x64 和 ARM64）以及 Linux（x64 和 ARM64，提供 tarball 或 Flatpak）。少数功能仅限 macOS：原生标签页和窗口，以及后台警报。',
      links: ['前往下载'],
    },
    smartscreen: {
      q: 'Windows 显示 SmartScreen 警告，安全吗？',
      a: 'Windows 版本暂未做代码签名，所以首次启动时 SmartScreen 可能会发出警告。源代码和构建工作流都公开在 GitHub 上，每个版本也都列出了可供你比对的 SHA-256 校验和。请选择“更多信息”，然后选择“仍要运行”。macOS 版应用已签名。',
      links: ['验证你的下载'],
    },
    autoUpdate: {
      q: 'DegenView 会自动更新吗？',
      a: 'macOS、Windows 以及放在你有权限的文件夹中的 Linux tarball 都会。Flatpak 包没有远程源，所以不会自动更新。',
    },
    homebrew: {
      q: '可以用 Homebrew 安装 DegenView 吗？',
      a: '可以，在 macOS 上：brew install --cask degenview/degenview/degenview@rc。它会从 DegenView tap 把同一个已签名的应用安装到“应用程序”中。不带 @rc 的名称对应最新的正式版本，在正式版本发布后才可用。应用会自动更新，所以 brew upgrade 会跳过它。',
      links: ['前往下载'],
    },
    whichDownload: {
      q: '我该选哪个下载项？',
      a: '在 Mac 上，点击苹果菜单，选择“关于本机”：显示“Apple M…”表示 Apple 芯片，显示“Intel”表示 Intel。在 Windows 上，除非你用的是 Windows on ARM 设备，否则选择 x64。在 Linux 上，tarball 适合大多数发行版，Flatpak 适合较旧的发行版。',
      links: ['前往下载'],
    },
  },
};
