import type { Dict } from '../en';

export const alternative: Dict['alternative'] = {
  meta: {
    title: 'DegenView 对比 TradingView：免费开源替代品',
    description:
      'DegenView 对比 TradingView：免费开源的桌面端 TradingView 替代品，本地运行 Pine Script v6，自选列表不限量，支持警报与回放。macOS、Windows、Linux。',
    breadcrumb: 'TradingView 替代品',
  },

  hero: {
    eyebrow: 'TradingView 替代品',
    title: '免费开源的 <span class="gradient-text block">TradingView 替代品</span>',
    lead: '面向加密货币、股票和预测市场的桌面应用，Pine Script 直接在你自己的电脑上运行。',
    chips: ['开源 · GPL-3.0', '无需账号', 'macOS · Windows · Linux'],
    priceCard: {
      forever: '永久',
      download: '免费下载',
      note: '无需账号，无需信用卡，没有试用倒计时。',
      platformsAria: '支持 macOS、Windows 和 Linux',
    },
  },

  ladder: {
    eyebrow: '价格',
    title: '你想<span class="gradient-text">花多少钱？</span>',
    lead: 'TradingView 是价格阶梯，DegenView 是价格底线，而且是免费。',
    freeBadge: '免费',
    perMonthForever: '每月，永久',
    planName: 'TradingView {name}',
    perMonthBilledAnnually: '每月，按年付费',
    perYear: '约 {amount} / 年',
    note: '价格为 TradingView 官方{date}在其<a class="text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="nofollow noopener noreferrer">定价页面<span class="sr-only">（在新标签页打开）</span></a>列出的欧元价格。价格会变动，也因地区而异，请先去那里确认再决定。',
  },

  freeVsFree: {
    eyebrow: '免费对免费',
    title: '不花钱，<span class="gradient-text">能得到什么</span>',
    lead: '两者都能免费起步，但只有一个会一直免费。',
    degenview: {
      subtitle: '免费开源',
      // Order matters: one entry per row.
      items: [
        '自选列表不限量',
        '指标数量只看你的 CPU 撑不撑得住',
        '多图表布局',
        '价格警报没有套餐限制',
        '在你自己电脑上运行的 Pine Script v6 引擎',
        'K 线回放、模拟交易和投资组合跟踪',
        '开源（GPL-3.0）',
        '无需账号',
      ],
      download: '免费下载',
    },
    tradingview: {
      subtitle: '免费（Basic）套餐',
      // Order matters: the ✓ / – / ✗ marker of each row is set in the page code.
      items: [
        '每个图表 2 个指标',
        '每个标签页 1 个图表',
        '1 个自选列表，最多 30 个品种',
        '3 个有效价格警报',
        'Pine Script 在 TradingView 的服务器上运行',
        '网页版、桌面版和移动版应用',
        '庞大的社区和脚本库',
        '闭源',
      ],
      plans: '查看 TradingView 的套餐',
    },
    sr: {
      included: '包含：',
      limited: '有限制：',
      notAvailable: '不提供：',
      opensNewTab: '（在新标签页打开）',
    },
    legendLimit: '免费套餐的限制',
    checked: 'TradingView 数据最后核对于 {date}',
  },

  better: {
    eyebrow: '说句公道话',
    title: 'TradingView <span class="gradient-text">仍然更强的地方</span>',
    lead: '比起最吵的工具，我们更希望你选对工具。',
    // Order matters: icons are set in the page code.
    items: [
      { title: '全平台应用', description: '有网页版和移动版：你的图表可以跟着你去任何浏览器或手机。' },
      { title: '更广的市场', description: '除加密货币、美股和预测市场外，还有股票、期货、外汇、债券和经济数据。' },
      { title: '庞大的社区', description: '有公开发布的交易想法，以及别人分享的脚本库。' },
      { title: '直接在图表上交易', description: '通过已连接的券商下单，无需离开图表。' },
    ],
    closing:
      '这些你离不开？那就同时保留 TradingView。主要想要快速的图表、指标、警报和回放，又不想管理套餐？那这个免费的就够了。',
  },

  comingFrom: {
    eyebrow: '迁移过来',
    title: '从 <span class="gradient-text">TradingView</span> 转过来',
    items: [
      { title: 'Pine Script v6', description: '把脚本粘贴到 Pine Studio，在本地运行，还有单步调试器和性能分析器。' },
      { title: '熟悉的工具', description: '趋势线、斐波那契回撤、尺子，以及从 K 线到砖形图、卡吉图的 18 种图表类型。' },
      { title: '不止是图表', description: 'K 线回放、模拟交易、投资组合跟踪、支持 webhook 的警报，还有面向 AI 助手的可选 MCP 服务器。' },
    ],
  },

  cta: {
    title: '今天免费，<span class="gradient-text block">永远免费。</span>',
    lead: '无需账号，无需试用，没有任何附加条件。支持 macOS、Windows 和 Linux。',
    disclaimer:
      'DegenView 是独立项目，与 TradingView 无关联，也未获其认可或赞助。TradingView 和 Pine Script 是 TradingView, Inc. 的商标，此处仅用于说明 DegenView 是谁的替代品、与什么兼容。',
  },
};
