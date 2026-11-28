import type { Dict } from '../en';

export const home: Dict['home'] = {
  meta: {
    title: 'DegenView – 免费开源的 TradingView 替代品',
    description:
      '免费开源的桌面端 TradingView 替代品：多图表布局、本地 Pine Script v6、警报、回放和投资组合。支持 macOS、Windows、Linux。',
  },

  jsonLd: {
    alternateNames: ['DegenView – 开源 TradingView 替代品', 'DegenView Charts'],
  },

  hero: {
    eyebrow: '免费开源',
    eyebrowLink: 'TradingView 替代品',
    // Features TradingView paywalls. The first one is the static, no-JS headline.
    phrases: ['多个自选列表', '无限指标', '多图表布局', '无限价格警报', '30 个以上品种', '多个绘图'],
    // Headline = headlineBefore + rotating phrase + headlineMiddle + headlineEmphasis (gradient).
    headlineBefore: '在这里，',
    headlineMiddle: '不是',
    headlineEmphasis: '付费功能。',
    lead: '免费开源的桌面端 TradingView 替代品：加密货币、股票和预测市场尽在多图表布局中，配备本地 Pine Script、警报和回放。无需账号，在你自己的电脑上运行。',
    screenshotAlt: 'DegenView 仪表盘，网格布局中显示多个实时图表',
  },

  // Labels around the quotes in src/data/testimonials.ts (the quotes themselves are verbatim and never translated).
  testimonials: {
    eyebrow: '用户反馈',
    heading: '大家<span class="gradient-text">怎么说</span>',
    author: '用户反馈',
    tags: { debugger: '调试', pine: 'Pine Script', impression: '第一印象' },
  },

  sources: {
    heading: '数据来自你常用的数据源',
  },

  features: {
    heading: '一个行情看板<span class="gradient-text">该有的都有</span>',
    eyebrow: '功能',
    markets: {
      eyebrow: '市场与实时数据',
      title: '所有市场，一个屏幕。',
      blurb:
        '并排搜索 Binance、Coinbase、OKX、Kraken、Bybit、Gate.io、MEXC、CoinGecko 和 DEXScreener，添加美股，还能把 Polymarket 和 Kalshi 当作概率来画图。',
      bullets: [
        '来自 Binance、OKX、Kraken、Bybit、Gate.io、MEXC 和 Coinbase 的实时价格',
        '通过 Alpaca 免费的 IEX 数据源获取美股行情',
        '大多数数据源无需 API 密钥',
      ],
      alt: 'DegenView 在同一个多图表布局中显示 BTC、ETH、SOL 图表和一张 Polymarket 概率图',
    },
    'pine-script': {
      eyebrow: '本地 Pine Script v6 引擎',
      title: '写 Pine Script，本地运行。',
      blurb:
        '编写兼容 TradingView 的脚本，直接在你的电脑上运行。无需账号，源码绝不离开你的设备。',
      bullets: [
        '通过 MCP 和 AI 助手一起 vibe coding',
        '支持断点和监视的单步调试器',
        '内置性能分析器，看清时间花在哪',
        '策略回测，附权益曲线和蒙特卡洛模拟',
      ],
      alt: 'DegenView Pine Studio，包含 Pine Script 编辑器和实时预览图表',
      linkLabel: '了解 Pine Studio',
    },
    mcp: {
      eyebrow: 'MCP 服务器',
      title: '让 AI 替你操作图表。',
      blurb:
        '通过 MCP 把 AI 助手连接到 DegenView。说一句“画出支撑位和阻力位”，就能看着它落在你的实时图表上。',
      bullets: [
        '添加图表和指标',
        '创建、编辑和暂停价格警报',
        '读取和编辑你的 Pine 脚本',
      ],
      alt: '终端里的 AI 助手通过 MCP 在 DegenView 图表上画出支撑位和阻力位',
    },
    portfolio: {
      eyebrow: '投资组合跟踪',
      title: '多个投资组合，真实盈亏。',
      blurb:
        '想建多少个投资组合都行，配有交易流水账和加权平均成本核算。',
      bullets: [
        '资产配置、24 小时涨跌、已实现和未实现盈亏',
        '可按 USD、EUR、GBP、JPY、CHF 或 BTC 计价',
        '支持 CSV 导入导出，包括 CoinMarketCap',
      ],
      alt: 'DegenView 投资组合概览，包含价值图表、资产配置环形图、盈亏卡片和主要持仓',
    },
    'paper-trading': {
      eyebrow: '模拟交易',
      title: '虚拟资金，真实图表。',
      blurb:
        '本地持久化的模拟器，支持市价单、限价单和止损单，并跟踪净仓位。模拟订单绝不会触及真实交易所。',
      bullets: [
        '每个仓位按加权平均成本计算',
        '在图表上标出订单和仓位',
        '重启后依然保留，数据只存在你的设备上',
      ],
      alt: 'DegenView 模拟交易，图表上标出一笔 BTC 多头仓位，下方是持仓表格',
    },
    replay: {
      eyebrow: 'K 线回放',
      title: '把行情倒带，一根一根看。',
      blurb:
        '挑选历史上的任意时刻，按你的节奏回放，不会提前看到未来，所有图表同步进行。',
      bullets: [
        '可从任意一根 K 线或精确时间开始',
        '共用一个时钟，所有图表保持同步',
        '用模拟交易下单面板练习入场',
      ],
      alt: 'K 线回放控制栏，历史图表上方有时间轴拖动条和速度选择器',
    },
  },

  // Cards under "and while you're here". A trailing * marks the title that carries `note`.
  extras: {
    eyebrow: '顺便一提',
    heading: '其余的<span class="gradient-text">好东西</span>',
    intro: '不是每个功能都配得上一张截图，但这些配得上一幅插画。',
    illustrationAria: '{title}插图',
    'no-account': {
      tag: '隐私',
      title: '无需账号，无需注册。*',
      text: '打开应用就能用。不用验证邮箱，不用开启试用，也没有需要关掉的“欢迎回来！”。',
      note: 'Alpaca 是例外：它的免费美股数据需要 Alpaca 账号和你自己的 API 密钥。这是他们的规定，不是我们的。',
    },
    watchlists: {
      tag: '列表',
      title: '自选列表不限量',
      text: '想建多少个都行。“升级后才能再加一个列表”从来都不算什么功能。',
    },
    tools: {
      tag: '绘图',
      title: '你早已熟悉的绘图工具',
      text: 'TradingView 用户形成肌肉记忆的那套绘图工具箱，只是少了套餐对比表。',
    },
    indicators: {
      tag: '指标',
      title: '指标数量，取决于你的 CPU',
      text: '成交量、RSI、EMA、布林带、Supertrend，还有你自己的 Pine 脚本。一直叠加，直到风扇投诉为止。',
    },
    alerts: {
      tag: '警报',
      title: '价格警报',
      text: '价格一动就通知你的行情应用。革命性，我们知道。',
    },
    webhooks: {
      tag: 'Webhook',
      title: 'Webhook 警报',
      text: '价格警报和 Pine 的 alert() 调用可以触发你配置的 webhook。接到机器人、Discord，或任何你喜欢的地方。',
    },
    ai: {
      tag: 'Pine',
      title: 'Pine Script 的 AI 帮手',
      text: '为你的脚本内置的编程助手。初稿它来写，功劳归你。',
    },
    icloud: {
      tag: 'macOS',
      title: 'macOS 上的 iCloud 同步',
      text: '开启后，你的设置会通过你自己的 iCloud 在多台 Mac 间同步，而不是经过我们的服务器。',
    },
  },

  download: {
    heading: '获取 DegenView。<span class="gradient-text block">它是免费的。</span>',
    // {version} is replaced with the release tag (rendered in monospace).
    latest: '最新版本 {version}。无需账号，无需试用，没有任何附加条件。',
    languages: '应用支持英语、西班牙语、德语、俄语和简体中文。',
    allDownloads: '全部下载',
    faq: '常见问题',
    freeForever: '永久免费。如果它在你的屏幕上占得一席之地：',
  },

  // Text inside the inline SVG illustrations (SVG text does not wrap: keep these short).
  // Also used by the FAQ illustrations (free, shield, smartscreen).
  illustrations: {
    noAccount: { email: '邮箱', password: '密码', cta: '直接打开' },
    watchlists: { title: '自选列表 7', newButton: '+ 新建' },
    indicators: { load: '负载', indicators: '指标' },
    alerts: { crossedAbove: '上穿 76,000' },
    ai: { suggestion: '添加 RSI 警报' },
    free: { forever: '永久', noAccount: '无需账号' },
    shield: { noAnalytics: '无统计分析', noTelemetry: '无遥测', noAccount: '无需账号' },
    smartscreen: { title: 'Windows 已保护你的电脑', moreInfo: '更多信息', runAnyway: '仍要运行' },
  },
};
