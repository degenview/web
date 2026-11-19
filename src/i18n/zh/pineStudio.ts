import type { Dict } from '../en';

export const pineStudio: Dict['pineStudio'] = {
  meta: {
    title: 'Pine Script 编辑器、调试器与性能分析器 | DegenView',
    description:
      'Pine Studio 是 DegenView 免费开源的桌面版 Pine Script v6 编辑器，TradingView 替代品之选：单步调试器、性能分析器、AI 助手和自定义主题。本地运行，无需账号。',
    breadcrumbHome: '首页',
    breadcrumbName: 'Pine Studio',
  },

  /** Labels of the floating section nav, keyed by section id. */
  sectionNav: {
    write: '编写',
    debugger: '调试器',
    profiler: '性能分析器',
    ai: 'AI 助手',
    themes: '主题',
    local: '本地',
    workflow: '工作流',
    differences: '对比 TradingView',
    faq: '常见问题',
    download: '下载',
  },

  /** JSON-LD text (SoftwareApplication). */
  jsonLd: {
    name: 'DegenView Pine Studio',
    applicationSubCategory: 'Pine Script 编辑器',
    featureList: [
      '在本地运行的 Pine Script v6 引擎',
      '带输入控件的实时预览图表',
      '支持断点、监视表达式和调用栈的单步调试器',
      '逐行性能分析器',
      '策略回测，含权益曲线、交易列表和蒙特卡洛模拟',
      '提供提问、规划和编辑三种模式的 AI 助手',
      'MCP 服务器，让其他 AI 助手读取、编辑并应用脚本',
      '可自定义的编辑器主题',
    ],
  },

  hero: {
    // {home} = link to the home page
    badge:
      'Pine Studio <span class="mx-2 text-line" aria-hidden="true">·</span> <a href="{home}" class="ml-1 font-semibold text-accent-text hover:underline">DegenView</a> 的一部分',
    title: 'Pine Script 编辑器，<span class="gradient-text block">自带真正的调试器。</span>',
    lead: '编写 Pine Script v6，在任意一行中断，找出性能瓶颈，还有 AI 帮忙。在你的电脑上基于实时数据运行。免费开源，无需账号。',
    docsLink: '阅读 Pine Studio 文档',
    chips: ['Pine Script v6', '100% 本地运行', 'macOS · Windows · Linux', '开源 · GPL-3.0'],
    screenshotAlt: 'Pine Studio：编辑器中打开 Pivot Levels 脚本，旁边是带有价位线的实时 BTC/USDT 图表、脚本的输入项，以及暂停在某一行的调试器',
  },

  write: {
    eyebrow: 'Pine Studio',
    title: '为 <span class="gradient-text">Pine Script v6</span> 打造的完整工作区',
    lead: '脚本库、编辑器和实时预览图表，集中在一个标签页里。脚本随输入即时运行，用的是真实市场数据。',
    // Same order as the icons in the page: engine, preview, problems, logs, strategy, editor.
    items: [
      {
        title: '本地运行的真正 Pine v6 引擎',
        body: '指标、策略和库都在你的电脑上运行。无需服务器，无需上传，无需账号。',
      },
      {
        title: '实时预览图表',
        body: '边写边重新运行，支持任意加密货币或股票市场。每个 input() 都会变成一个控件。',
      },
      {
        title: '直指代码行的诊断',
        body: '错误和警告（包括运行时失败）都会汇总到「问题」标签页，一键跳转到对应行。',
      },
      {
        title: '专为 log.*() 准备的「日志」面板',
        body: '按文本或正则搜索，按级别筛选，并从一条消息跳转到对应的代码行或 K 线。',
      },
      {
        title: '带报告的策略',
        body: '回测数据、权益曲线和完整的交易列表。',
      },
      {
        title: '真正好用的编辑器',
        body: '代码补全、签名提示、跳转到定义、重命名、多光标和修改标记。',
      },
    ],
    examples: '内置九个示例脚本，从 EMA 交叉到统计表格。',
    examplesLink: '如何在 Pine Studio 中编写脚本',
  },

  debugger: {
    eyebrow: '单步调试器',
    title: '别再用 <span class="gradient-text">log.info()</span> 调试 Pine 了',
    lead: '设个断点，在图表的 K 线上运行，停在关键位置。查看每个变量，像在真正的 IDE 里一样单步执行代码。',
    screenshotAlt: 'Pine Studio 在一段 Pine Script 的第 14 行暂停，显示行内数值、变量面板和单步控制按钮',
    // Same order as the icons in the page: breakpoint, step, variables, jump.
    items: [
      {
        title: '更聪明的断点',
        body: '点击行号槽或按 F9。可以加条件、命中次数或日志点。',
      },
      {
        title: '像任何 IDE 一样单步执行',
        body: '单步跳过、进入、跳出，或一次执行一整根 K 线。数值直接显示在行内。',
      },
      {
        title: '每个变量一目了然',
        body: '局部和全局变量连同类型一起显示，变化会高亮。还能添加 close - open 这样的监视表达式。',
      },
      {
        title: '跳转到任意 K 线',
        body: '停在某根 K 线或某个日期，查看调用栈。一键重新开始。',
      },
    ],
    note: '调试器运行在预览图表 K 线的冻结副本上，所以你查看时数据不会变动。',
    docsLink: '调试器文档',
  },

  profiler: {
    eyebrow: '性能分析器',
    title: '找出慢的那一行，<span class="gradient-text">而不只是慢的脚本。</span>',
    lead: '打开计时器，DegenView 会在预览图表的 K 线上为你的脚本计时，并在每一行旁边显示耗时条和占比。',
    bullets: [
      '逐行耗时和占比，就在代码旁边',
      '最耗时的行、代码块和函数，按排名列出',
      '点击一行即可跳转到对应代码',
    ],
    docsLink: '性能分析器如何测量',
    screenshotAlt: 'Pine Studio 性能分析器：每行代码旁边的耗时条和占比，以及最耗时代码行的排名列表',
  },

  ai: {
    eyebrow: 'AI 助手',
    title: '它改的是副本，<span class="gradient-text">每处改动都由你批准。</span>',
    lead: '说出你想要的效果。助手会读取、编译并分析你的脚本，然后提出修改建议，你确认后才会动到你的编辑器。',
    // {name} = the mode name below
    modeAlt: 'Pine Studio 助手的{name}模式',
    // Same order as the screenshots: pine-ai-chat, pine-ai-plan, pine-ai-proposal.
    modes: [
      { name: '提问', body: '针对你的脚本提问。它会读取、编译和测量，但绝不修改。' },
      { name: '规划', body: '先调查，再给出最多十二步的计划。你可以批准、修改或放弃。' },
      { name: '编辑', body: '以 diff 形式提出修改。可以全部应用，也可以逐条审阅。' },
    ],
    review: {
      screenshotAlt: '审阅面板：五处建议改动，每处都有复选框和 diff，可一步全部应用',
      title: '像审阅 pull request 一样审阅改动',
      bullets: [
        '每处改动都有复选框和 diff',
        '只需一步撤销。自动应用为可选项',
        '自带密钥：支持 OpenAI、Anthropic 或兼容的服务器',
      ],
      note: '你的脚本会直接发给你选择的服务商，中间没有 DegenView 的服务器。费用直接付给服务商。在 macOS 和 Linux 上，密钥保存在系统钥匙串中。',
      docsLink: 'AI 助手文档',
    },
    mcp: {
      eyebrow: 'MCP 服务器',
      title: '或者用<span class="gradient-text">你自己的助手</span>来操作 Pine Studio',
      lead: 'DegenView 可选的 MCP 服务器会向任何支持 MCP 的 AI 助手开放 Pine Studio：读取脚本、编译、修复诊断问题，并把结果放到图表上。',
      setupLink: '设置 MCP 服务器',
      moreLink: '了解更多 MCP 信息',
      bullets: [
        '读取、编译和编辑脚本草稿，绝不会悄悄覆盖',
        '把已保存的脚本应用到图表，调整或移除它',
        '默认关闭、仅限本地、有 token 保护。保存需要你批准',
      ],
    },
  },

  themes: {
    eyebrow: '编辑器主题',
    title: '让编辑器<span class="gradient-text">更合你意</span>',
    lead: '跟随应用主题，或选择 Dark、Light 或 Dracula。还可以修改每一种颜色、字体和行高。',
    // Same order as the screenshots: dark, light, dracula.
    items: [
      { name: 'Dark', note: '内置', alt: 'Dark 主题下的 Pine Script 编辑器' },
      { name: 'Light', note: '内置', alt: 'Light 主题下的 Pine Script 编辑器' },
      { name: 'Dracula', note: '内置', alt: 'Dracula 主题下的 Pine Script 编辑器' },
    ],
    custom: {
      title: '打造你自己的主题',
      bullets: [
        '带实时预览，编辑语法、编辑器和字体排版',
        '任意等宽字体，9 到 32 pt',
        '以 .degenview-theme.json 文件导出并分享主题',
      ],
      docsLink: '文档中的编辑器主题',
      screenshotAlt: '名为 Night shift 的自定义主题的主题编辑器，带有语法、编辑器和字体排版标签页',
    },
  },

  local: {
    eyebrow: '完全属于你',
    title: '你的脚本<span class="gradient-text">留在你的电脑上</span>',
    lead: 'Pine Studio 在进程内运行脚本。你的源码就是你自己文件夹里的普通 <span class="font-mono text-base">.pine</span> 文件。',
    // Same order as the icons in the page: shield, user, code.
    items: [
      {
        title: '不会上传任何内容',
        body: '脚本在本地运行。只有当你使用 AI 助手时，源码才会离开你的电脑，并且只发给你选择的服务商。',
      },
      { title: '无需账号', body: '无需注册。下载 DegenView，打开 Pine Studio，直接开写。' },
      { title: '开源', body: '在 GitHub 上以 GPL-3.0 开源。可以读引擎的工作原理，也可以自己构建。' },
    ],
    supportsTitle: '引擎支持的内容',
    supports: [
      '指标、策略和库',
      '绘图、填充、形状和背景色',
      '标签、线条、方框和表格',
      'ta.*、math.*、str.* 和 color.*',
      '数组、map 和矩阵',
      '用户自定义类型和方法',
      'request.security 和时间周期',
      'alert() 和 alertcondition()',
      'input.* 控件',
      'log.*()',
      'varip',
      '导入你自己的库',
    ],
    note: '独立实现的 Pine Script v6：遇到不支持的功能会明确告诉你，而不是悄悄失败。',
    noteLink: 'Pine 支持哪些内容',
  },

  workflow: {
    eyebrow: '从想法到警报',
    title: '一个闭环，<span class="gradient-text">从头到尾</span>',
    // {topic} = the step's `topic`, for the screen-reader-only part of the link
    readMore: '了解更多<span class="sr-only">：{topic}</span>',
    // Same order as the docs links in the page: writing-scripts, debugger-profiler, using-scripts, script-alerts.
    // `topic` is the lowercase form of the title, used in the sr-only link text.
    steps: [
      {
        title: '编写',
        topic: '编写',
        body: '从九个示例之一或空白脚本开始，看着预览图表跟着你的代码变化。',
      },
      {
        title: '调试',
        topic: '调试',
        body: '在出问题的那一行中断，查看变量，分析慢的部分，再问问助手。',
      },
      {
        title: '添加到图表',
        topic: '添加到图表',
        body: '从 + 菜单应用脚本。调整它的输入项和样式，或者把它关掉。',
      },
      {
        title: '收到警报',
        topic: '收到警报',
        body: '把 alert() 调用变成脚本警报，在实时 K 线上通知你，或发送到你自己的 webhook。',
      },
    ],
  },

  differences: {
    eyebrow: '兼容性',
    title: '和 <span class="gradient-text">TradingView</span> 有何不同',
    lead: 'Pine Studio 是独立实现的 Pine Script v6，有自己的引擎和数据，所以同一个脚本的表现可能不同。',
    // Table column headings (desktop) and the labels repeated inside each row on mobile.
    colTradingView: 'TradingView',
    colDegenView: 'DegenView Pine Studio',
    mobileTradingView: 'TradingView',
    mobileDegenView: 'Pine Studio',
    // What differs from TradingView. Keep in step with docs.degenview.app/pine/language.
    rows: [
      {
        area: '语言版本',
        tradingView: '仍可运行为旧版 Pine 编写的脚本。',
        degenView: '仅支持 Pine Script v6。旧脚本会被拒绝并给出明确的错误提示，需要先迁移。',
      },
      {
        area: '脚本在哪里运行',
        tradingView: '在 TradingView 的服务器上，与你的账号绑定。',
        degenView: '在你的电脑上。普通的 .pine 文件，无需账号，不上传任何内容。',
      },
      {
        area: '市场和时间周期',
        tradingView: '股票、期货、外汇、债券、加密货币等，支持日内时间周期。',
        degenView: '加密货币、美股和 ETF，以及预测市场，提供 1H、1D、1W、1M、3M 和 1Y 的 K 线。不支持分钟级时间周期。',
      },
      {
        area: '脚本中的数据源',
        tradingView: '通过 request.* 获取基本面、财报、股息、拆股、经济数据等。',
        degenView:
          'request.security 和 request.security_lower_tf 可用。财报、股息、拆股、经济、财务、seed 和 quandl 数据源会返回 na 并给出警告。request.footprint 用更细的 K 线近似逐笔数据。',
      },
      {
        area: '策略回测',
        tradingView: 'TradingView 自己的券商模拟器，包括保证金。',
        degenView:
          '独立的模拟器，没有保证金模型，也没有追加保证金通知。calc_on_order_fills 和 K 线放大器会被忽略并给出警告。结果可能不同。',
      },
      {
        area: '股票的时区',
        tradingView: '日历值遵循交易所所在的时区。',
        degenView: '股票的小时和星期几取值使用 UTC。',
      },
      {
        area: '文字样式',
        tradingView: '可为标签、方框和表格选择字体、粗体和斜体。',
        degenView: '可接受，但会被忽略。',
      },
      {
        area: '分享',
        tradingView: '发布脚本，并浏览社区脚本库。',
        degenView:
          '不支持发布，也没有内置脚本库。「社区脚本」链接会在浏览器中打开 tradingview.com/scripts；把想运行的内容粘贴进来即可。',
      },
    ],
    cards: [
      {
        title: '不支持就给警告，而不是给你惊吓',
        body: '不支持的功能会返回 na 或被忽略，并在「问题」标签页中给出带编号的警告。',
      },
      {
        title: '依赖结果之前先核对',
        body: '数据源和策略模拟器不同，所以绘图和回测结果可能不同。复用社区脚本之前，请先查看它的许可证。',
      },
    ],
    supportedLink: 'Pine Studio 支持内容的完整列表',
    compareLink: 'DegenView 对比 TradingView',
    trademark: 'Pine Script 和 TradingView 是 TradingView, Inc. 的商标。DegenView 与 TradingView 无关联，也未获其认可。',
  },

  faq: {
    eyebrow: '常见问题',
    title: 'Pine Studio，<span class="gradient-text">一问一答</span>',
    // {faqHref} = general FAQ page, {issuesHref} = GitHub issues
    more: '更多内容见<a class="font-medium text-accent-text underline underline-offset-4" href="{faqHref}">通用常见问题</a>，或者<a class="font-medium text-accent-text underline underline-offset-4" href="{issuesHref}" target="_blank" rel="noopener noreferrer">到 GitHub 上提问<span class="sr-only">（在新标签页中打开）</span></a>。',
    // Plain text: also used as the FAQPage JSON-LD.
    items: [
      {
        q: 'Pine Studio 是什么？',
        a: 'Pine Studio 是 DegenView 里的 Pine Script 工作区，而 DegenView 是免费开源的桌面市场看板。它把脚本库、代码编辑器和实时预览图表集中在一个标签页里，还带有单步调试器、性能分析器、AI 助手和编辑器主题。',
      },
      {
        q: 'DegenView 能运行来自 TradingView 的 Pine Script v6 脚本吗？',
        a: 'DegenView 在你的电脑上运行自己的 Pine Script v6 引擎，所以你可以把脚本粘贴到 Pine Studio 里运行。它是独立实现的，并非 TradingView 的引擎，因此特别冷门的脚本表现可能不同，少数功能（比如部分 request.* 数据源）会返回 na 并给出警告。目前只支持 Pine Script v6。',
      },
      {
        q: '可以用断点调试 Pine Script 吗？',
        a: '可以。在行号槽里设置断点，可选条件、命中次数和日志点，然后单步跳过、进入、跳出函数，或一次执行一整根 K 线。每次停下时，局部变量、全局变量、监视表达式和调用栈都会更新。调试器运行在预览图表 K 线的冻结副本上。',
      },
      {
        q: '有 Pine Script 性能分析器吗？',
        a: '有。打开性能分析器，DegenView 会在预览图表的 K 线上为你的脚本计时。它会在每一行旁边绘制耗时条和占比，并对最耗时的行、代码块和函数排名，让你知道该先改哪里。',
      },
      {
        q: '可以回测策略吗？',
        a: '可以。Pine 策略会在图表的 K 线上放置模拟交易，Report 标签页显示其各项数据、权益曲线和交易列表。蒙特卡洛模拟随后会把你已平仓的交易随机重新抽取，显示结果有多大程度取决于交易出现的先后顺序。回测只使用 K 线，没有保证金模型，因此它是研究策略的工具，而不是对结果的承诺。',
      },
      {
        q: 'AI 助手会把我的代码发到别处吗？',
        a: '只有在你使用它时才会，而且只发给你选择的服务商。你需要自带 OpenAI、Anthropic 或 OpenAI 兼容服务器（如 OpenRouter、Ollama 或 LM Studio）的 API 密钥。DegenView 中间没有任何服务器，费用直接付给你的服务商。助手在你脚本的私有副本上工作，在你应用改动之前绝不会改动你的编辑器。',
      },
      {
        q: '能用自己的 AI 助手来 vibe coding Pine 脚本吗？',
        a: '可以，通过 DegenView 可选的 MCP 服务器。向支持 MCP 的助手描述你的想法，它就能列出、读取和编译你的脚本，编辑脚本草稿，读取诊断信息、输入项和报告，并把已保存的脚本应用到图表上。该服务器默认关闭，只监听你本机，并且需要 token，你可以决定每个助手能做什么。默认情况下，覆盖保存脚本需要你在应用中批准。',
      },
      {
        q: '需要账号或网络连接吗？',
        a: '不需要账号。你的脚本就是电脑上的普通 .pine 文件。预览图表的市场数据来自公开的数据提供方，所以查看实时价格需要联网，编辑脚本则不需要。',
      },
      {
        q: 'Pine Studio 免费吗？',
        a: '免费。Pine Studio 是 DegenView 的一部分，DegenView 以 GPL-3.0 许可证免费开源，支持 macOS、Windows 和 Linux。',
      },
    ],
  },

  download: {
    title: '写 Pine，<span class="gradient-text block">好好调试。</span>',
    lead: 'Pine Studio 随 DegenView 一起提供。免费开源，无需注册。',
    docsLink: 'Pine Studio 文档',
    allDownloadsLink: '所有下载',
    compareLink: '与 TradingView 对比',
  },
};
