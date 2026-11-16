import type { Dict } from '../en';

export const privacyPolicy: Dict['privacyPolicy'] = {
  meta: {
    title: '隐私政策 – DegenView',
    description:
      '说明 degenview.app 如何处理 Cookie 和分析数据：未经你同意不会追踪任何信息，DegenView 桌面应用没有分析和遥测功能。',
    breadcrumb: '隐私政策',
  },

  /** Shown on translated pages only. */
  notice: '本页为方便阅读而提供的译文，以英文版本为准，具有法律效力。',

  hero: {
    eyebrow: '你的隐私',
    title: 'Cookie 与<span class="gradient-text">分析</span>',
    lead: '本网站自身不会收集或存储访问者的个人数据。在你允许的情况下，它会使用 Cookie 和类似技术来了解网站的使用情况。',
    lastUpdated: '最后更新：{date}',
  },

  opensNewTab: '（在新标签页中打开）',

  storage: {
    title: '我们使用的存储类型',
    necessary: {
      title: '严格必要',
      body: '网站按你的设置正常运行所必需：你的主题和你的 Cookie 选择。这些内容只存储在你的浏览器中。',
      badge: '无需同意',
    },
    analytics: {
      title: '分析（可选）',
      body: '用于统计流量，了解访问者如何使用网站。如果你接受，它们可能会处理 IP 地址、设备和浏览器信息，以及你浏览了哪些页面。',
      badge: '接受前保持关闭',
    },
    table: {
      caption: '存储在你浏览器中的内容',
      name: '名称',
      purpose: '用途',
      duration: '期限',
      // Storage keys `theme` and `dv_analytics_consent` stay in the page code.
      themePurpose: '记住你选择的是浅色、深色还是跟随系统。',
      themeDuration: '本地存储，直到你清除为止',
      consentPurpose: '记住你接受还是拒绝了分析。',
      consentDuration: '本地存储，直到你清除为止',
      googleName: 'Google Cookie',
      googlePurpose: '仅在你接受分析时：由 Google Tag Manager 及其中的标签设置，用于统计访问量。',
      googleDuration: '由 Google 设置，请参阅其政策',
    },
  },

  legal: {
    title: '处理的法律依据',
    body: [
      '在法律有要求的地区，例如欧洲经济区和英国，只有在你同意后才会使用分析。在其他地区，分析可能基于合法利益或你的同意。分析默认处于关闭状态。',
    ],
  },

  consent: {
    title: '同意机制如何运作',
    // Order matters: icons are set in the page code.
    steps: [
      '你可以在首次访问时接受或拒绝分析。',
      '未经你同意，不会使用分析 Cookie，也不会加载任何来自 Google 的内容。',
      '你的选择会保存在你的设备上，以便我们记住它。',
      '如果你拒绝，就不会进行任何分析追踪。',
    ],
  },

  manage: {
    title: '管理偏好设置',
    body: '你可以随时更改或撤回你的同意。',
    button: '打开 Cookie 设置',
  },

  third: {
    title: '第三方服务',
    body: [
      '如果你接受分析，分析由 Google 通过 Google Tag Manager 处理，适用 Google 自己的隐私政策，你的数据可能会在你所在国家或地区之外被处理。',
      '本网站托管在 GitHub Pages 上。为了提供网站内容、在下载按钮上显示当前版本并获取下载文件，你的浏览器会与 GitHub（github.com 和 api.github.com）通信，GitHub 可以根据其隐私声明看到你的 IP 地址等技术数据。字体和图片由本站自身提供，不来自 Google 或其他第三方。',
    ],
  },

  retention: {
    title: '数据保留与你的权利',
    body: [
      '我们自己不会保留访问者的个人数据。分析数据由 Google 按我们 Google 配置中设定的期限保存，不再需要时会被删除或匿名化。',
      '根据你所在的地区，你可能有权访问、更正或删除个人数据，有权反对处理，并有权随时撤回同意。由于本网站自身不存储个人数据，如需就 Google 或 GitHub 处理的数据提出请求，你可能需要直接联系它们。你也可以向所在地的数据保护机构投诉。',
    ],
  },

  app: {
    title: 'DegenView 桌面应用',
    body: [
      '本政策适用于本网站。DegenView 桌面应用没有分析和遥测功能，也不需要账号。为了完成工作，它会从你的电脑直接连接到下面列出的服务。你的自选列表、投资组合和 Pine 脚本会保留在你的设备上，除非你自己把它们发送到别处，例如发送给你配置的 AI 提供商。',
      '这些服务由其他公司运营，而非由我们运营。你使用 DegenView 时会用到它们的数据和服务，使用即表示你同意它们的服务条款和隐私政策。我们无法控制这些服务，也不对它们如何处理数据负责。其中一些需要你自己的账号或 API 密钥，例如 Alpaca 和各 AI 提供商。',
      '如果你使用 AI 助手，你发送的文本（可能包含你的脚本）会发送给你选择的提供商。如果是你自己运行的提供商，例如本地模型，数据则会留在你的电脑上。',
    ],
    table: {
      caption: '桌面应用连接的服务，及其条款和隐私政策',
      service: '服务',
      usedFor: '用途',
      terms: '条款',
      privacy: '隐私',
      termsSr: '：{name}（在新标签页中打开）',
      privacySr: '：{name}（在新标签页中打开）',
      siteLink: '{host} 上的条款和隐私政策',
      groups: {
        marketData: '行情数据',
        other: '你启用或使用的服务',
      },
    },
    /** What each service is used for, keyed by the provider id used in the page code. */
    uses: {
      binance: '加密货币价格和图表',
      coinbase: '加密货币价格和图表',
      coingecko: '币种列表、价格和图表',
      geckoterminal: 'DEX 池图表。由 CoinGecko 运营，适用其条款',
      dexscreener: 'DEX 交易对和价格',
      coinmarketcap: '恐惧与贪婪指数等市场指数。API 密钥可选',
      polymarket: '预测市场',
      kalshi: '预测市场',
      alpaca: '美股，使用你自己的免费 API 密钥',
      bitstamp: '用于货币换算的比特币价格历史',
      github: '检查和下载更新',
      x: '你添加为卡片的 X 帖子的预览',
      openai: 'AI 助手，仅在你添加自己的 API 密钥时使用',
      anthropic: 'AI 助手，仅在你添加自己的 API 密钥时使用',
      openrouter: 'AI 助手，仅在你添加自己的 API 密钥时使用',
      icloud: '可选的 Mac 之间同步',
    },
  },

  contact: {
    title: '联系方式与更新',
    intro: 'DegenView 是 Nico Oelgart 的开源项目。如对本政策有疑问，请<a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">在项目的 GitHub 页面上提交 issue<span class="sr-only">（在新标签页中打开）</span></a>。',
    body: [
      '当法律或网站发生变化时，我们可能会更新本政策。顶部的日期表示最近一次更改的时间，更新会发布在本页面上。',
    ],
    button: '提交 GitHub issue',
  },
};
