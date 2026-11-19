import type { Dict } from '../en';

export const pineStudio: Dict['pineStudio'] = {
  meta: {
    title: 'Pine Script एडिटर, Debugger और Profiler | DegenView',
    description:
      'Pine Studio, DegenView का फ्री Pine Script v6 डेस्कटॉप एडिटर: step debugger, profiler, AI असिस्टेंट और कस्टम थीम। लोकल चलता है, अकाउंट नहीं।',
    breadcrumbHome: 'होम',
    breadcrumbName: 'Pine Studio',
  },

  /** Labels of the floating section nav, keyed by section id. */
  sectionNav: {
    write: 'लिखें',
    debugger: 'Debugger',
    profiler: 'Profiler',
    ai: 'AI असिस्टेंट',
    themes: 'थीम',
    local: 'लोकल',
    workflow: 'वर्कफ़्लो',
    differences: 'vs TradingView',
    faq: 'FAQ',
    download: 'Download',
  },

  /** JSON-LD text (SoftwareApplication). */
  jsonLd: {
    name: 'DegenView Pine Studio',
    applicationSubCategory: 'Pine Script एडिटर',
    featureList: [
      'लोकल चलने वाला Pine Script v6 इंजन',
      'इनपुट कंट्रोल के साथ लाइव प्रीव्यू chart',
      'ब्रेकपॉइंट, watch और call stack वाला step debugger',
      'हर लाइन का profiler',
      'Equity curve, trade list और Monte Carlo simulation के साथ strategy backtesting',
      'Ask, Plan और Edit मोड वाला AI असिस्टेंट',
      'MCP सर्वर, ताकि दूसरे AI असिस्टेंट script पढ़, एडिट और लागू कर सकें',
      'कस्टमाइज़ होने वाली एडिटर थीम',
    ],
  },

  hero: {
    // {home} = link to the home page
    badge:
      'Pine Studio <span class="mx-2 text-line" aria-hidden="true">·</span> <a href="{home}" class="ml-1 font-semibold text-accent-text hover:underline">DegenView</a> का हिस्सा',
    title: 'असली debugger वाला <span class="gradient-text block">Pine Script एडिटर।</span>',
    lead: 'Pine Script v6 लिखें, किसी भी लाइन पर रुकें, धीमे हिस्सों को profile करें और AI से मदद लें। आपकी मशीन पर, लाइव डेटा के साथ चलता है। फ्री, ओपन सोर्स, कोई अकाउंट नहीं।',
    docsLink: 'Pine Studio docs पढ़ें',
    chips: ['Pine Script v6', '100% लोकल चलता है', 'macOS · Windows · Linux', 'ओपन सोर्स · GPL-3.0'],
    screenshotAlt: 'एडिटर में Pivot Levels script, अपने लेवल के साथ लाइव BTC/USDT chart, script के इनपुट और एक लाइन पर रुके debugger के साथ Pine Studio',
  },

  write: {
    eyebrow: 'Pine Studio',
    title: '<span class="gradient-text">Pine Script v6</span> के लिए एक सही वर्कस्पेस',
    lead: 'एक ही टैब में script लाइब्रेरी, एडिटर और लाइव प्रीव्यू chart। script टाइप करते ही असली मार्केट डेटा पर चलती हैं।',
    // Same order as the icons in the page: engine, preview, problems, logs, strategy, editor.
    items: [
      {
        title: 'असली Pine v6 इंजन, लोकल',
        body: 'Indicator, strategy और library आपकी मशीन पर चलती हैं। कोई सर्वर नहीं, कोई अपलोड नहीं, कोई अकाउंट नहीं।',
      },
      {
        title: 'लाइव प्रीव्यू chart',
        body: 'किसी भी क्रिप्टो या स्टॉक मार्केट पर टाइप करते ही दोबारा चलती है। हर input() एक कंट्रोल बन जाता है।',
      },
      {
        title: 'सीधे लाइन की ओर इशारा करने वाले डायग्नोस्टिक',
        body: 'रन-टाइम की विफलताओं समेत error और warning Problems टैब में आते हैं, go-to-line के साथ।',
      },
      {
        title: 'log.*() के लिए Logs पेन',
        body: 'टेक्स्ट या regex से खोजें, लेवल से फ़िल्टर करें, और किसी मैसेज से उसकी लाइन या bar पर कूदें।',
      },
      {
        title: 'रिपोर्ट वाली strategy',
        body: 'बैकटेस्ट के आँकड़े, equity curve और पूरी ट्रेड लिस्ट।',
      },
      {
        title: 'मदद करने वाला एडिटर',
        body: 'Completion, signature help, go to definition, rename, कई कर्सर और बदलाव के निशान।',
      },
    ],
    examples: 'शुरुआत नौ उदाहरण script से होती है, EMA cross से लेकर stats टेबल तक।',
    examplesLink: 'Pine Studio में script कैसे लिखें',
  },

  debugger: {
    eyebrow: 'Step debugger',
    title: 'Pine को <span class="gradient-text">log.info()</span> से डीबग करना छोड़ें',
    lead: 'ब्रेकपॉइंट लगाएँ, chart के bar पर चलाएँ और जहाँ ज़रूरी है वहीं रुकें। हर variable पढ़ें और असली IDE की तरह कोड में step करें।',
    screenshotAlt: 'Pine Script की लाइन 14 पर रुका हुआ Pine Studio, इनलाइन वैल्यू, variables पैनल और step कंट्रोल के साथ',
    // Same order as the icons in the page: breakpoint, step, variables, jump.
    items: [
      {
        title: 'समझदार ब्रेकपॉइंट',
        body: 'गटर पर क्लिक करें या F9 दबाएँ। कंडीशन, hit count या logpoint जोड़ें।',
      },
      {
        title: 'किसी भी IDE जैसा step',
        body: 'ऊपर से, अंदर और बाहर step करें, या पूरा एक bar एक बार में चलाएँ। वैल्यू इनलाइन दिखती हैं।',
      },
      {
        title: 'हर variable देखें',
        body: 'Local और global, type के साथ, बदलाव हाइलाइट। close - open जैसे watch जोड़ें।',
      },
      {
        title: 'किसी भी bar पर कूदें',
        body: 'किसी bar या तारीख पर रुकें और call stack पढ़ें। एक क्लिक में दोबारा शुरू करें।',
      },
    ],
    note: 'Debugger प्रीव्यू chart के bar की एक फ़्रीज़ की हुई कॉपी पर चलता है, इसलिए आपके देखते समय कुछ हिलता नहीं।',
    docsLink: 'Debugger docs',
  },

  profiler: {
    eyebrow: 'Profiler',
    title: 'धीमी लाइन खोजें, <span class="gradient-text">सिर्फ़ धीमी script नहीं।</span>',
    lead: 'स्टॉपवॉच चालू करें और DegenView प्रीव्यू chart के bar पर आपकी script का समय नापता है, हर लाइन के बगल में bar और हिस्सेदारी के साथ।',
    bullets: [
      'हर लाइन का समय और हिस्सेदारी, कोड के बगल में',
      'सबसे भारी लाइनें, ब्लॉक और function, क्रम से',
      'पंक्ति पर क्लिक करके उस लाइन पर जाएँ',
    ],
    docsLink: 'Profiler कैसे नापता है',
    screenshotAlt: 'Pine Studio profiler: कोड की हर लाइन के बगल में समय bar और हिस्सेदारी, और सबसे भारी लाइनों की क्रमबद्ध सूची',
  },

  ai: {
    eyebrow: 'AI असिस्टेंट',
    title: 'यह कॉपी एडिट करता है। <span class="gradient-text">हर बदलाव आप मंज़ूर करते हैं।</span>',
    lead: 'बताइए आपको क्या चाहिए। असिस्टेंट आपकी script पढ़ता, compile और profile करता है, फिर ऐसे बदलाव सुझाता है जो आपके रिव्यू के बाद ही आपके एडिटर में लगते हैं।',
    // {name} = the mode name below
    modeAlt: 'Pine Studio असिस्टेंट का {name} मोड',
    // Same order as the screenshots: pine-ai-chat, pine-ai-plan, pine-ai-proposal.
    modes: [
      { name: 'Ask', body: 'आपकी script के बारे में सवाल। यह पढ़ता, compile करता और नापता है, पर एडिट नहीं करता।' },
      { name: 'Plan', body: 'यह जाँच-पड़ताल करके बारह स्टेप तक का प्लान सुझाता है। मंज़ूर करें, बदलवाएँ या हटा दें।' },
      { name: 'Edit', body: 'यह बदलाव diff के रूप में सुझाता है। सब लागू करें, या एक-एक करके देखें।' },
    ],
    review: {
      screenshotAlt: 'रिव्यू शीट: हर बदलाव के चेकबॉक्स और diff के साथ पाँच सुझाए गए बदलाव, एक स्टेप में लागू होने को तैयार',
      title: 'इसे pull request की तरह रिव्यू करें',
      bullets: [
        'हर बदलाव के चेकबॉक्स वाला diff',
        'एक undo स्टेप। Auto-apply वैकल्पिक है',
        'अपनी key लाएँ: OpenAI, Anthropic या संगत सर्वर',
      ],
      note: 'आपकी script सीधे आपके चुने प्रोवाइडर के पास जाती है, बीच में DegenView का कोई सर्वर नहीं। भुगतान भी सीधे उसी को। macOS और Linux पर key सिस्टम keychain में रहती हैं।',
      docsLink: 'AI असिस्टेंट docs',
    },
    mcp: {
      eyebrow: 'MCP सर्वर',
      title: 'या Pine Studio को <span class="gradient-text">अपने असिस्टेंट से चलाएँ</span>',
      lead: 'DegenView का वैकल्पिक MCP सर्वर Pine Studio को किसी भी MCP-सक्षम AI असिस्टेंट के लिए खोलता है: script पढ़ें, compile करें, डायग्नोस्टिक ठीक करें और नतीजा chart पर लगाएँ।',
      setupLink: 'MCP सर्वर सेट अप करें',
      moreLink: 'MCP के बारे में और',
      bullets: [
        'Script ड्राफ़्ट पढ़ें, compile और एडिट करें, चुपचाप ओवरराइट नहीं',
        'सेव की हुई script chart पर लगाएँ, ट्यून करें या हटाएँ',
        'डिफ़ॉल्ट रूप से बंद, लोकल, टोकन से सुरक्षित। सेव के लिए आपकी मंज़ूरी',
      ],
    },
  },

  themes: {
    eyebrow: 'एडिटर थीम',
    title: 'एडिटर को <span class="gradient-text">अपना बनाएँ</span>',
    lead: 'ऐप को फ़ॉलो करें, या Dark, Light या Dracula चुनें। फिर हर रंग, फ़ॉन्ट और लाइन की ऊँचाई बदलें।',
    // Same order as the screenshots: dark, light, dracula.
    items: [
      { name: 'Dark', note: 'बिल्ट-इन', alt: 'Dark थीम में Pine Script एडिटर' },
      { name: 'Light', note: 'बिल्ट-इन', alt: 'Light थीम में Pine Script एडिटर' },
      { name: 'Dracula', note: 'बिल्ट-इन', alt: 'Dracula थीम में Pine Script एडिटर' },
    ],
    custom: {
      title: 'अपनी थीम बनाएँ',
      bullets: [
        'लाइव प्रीव्यू के साथ syntax, एडिटर और टाइपोग्राफ़ी एडिट करें',
        'कोई भी monospaced फ़ॉन्ट, 9 से 32 pt',
        'थीम को .degenview-theme.json फ़ाइल के रूप में एक्सपोर्ट और शेयर करें',
      ],
      docsLink: 'Docs में एडिटर थीम',
      screenshotAlt: 'Night shift नाम की कस्टम थीम का थीम एडिटर, Syntax, Editor और Typography टैब के साथ',
    },
  },

  local: {
    eyebrow: 'आपका, आपके पास',
    title: 'आपकी script <span class="gradient-text">आपकी मशीन पर रहती हैं</span>',
    lead: 'Pine Studio script को इन-प्रोसेस evaluate करता है। आपका सोर्स आपके अपने फ़ोल्डर में एक सादी <span class="font-mono text-base">.pine</span> फ़ाइल है।',
    // Same order as the icons in the page: shield, user, code.
    items: [
      {
        title: 'कुछ भी अपलोड नहीं होता',
        body: 'Script लोकल चलती हैं। सोर्स टेक्स्ट सिर्फ़ तब आपके कंप्यूटर से बाहर जाता है जब आप AI असिस्टेंट से पूछते हैं, और तब आपके चुने प्रोवाइडर के पास।',
      },
      { title: 'कोई अकाउंट नहीं', body: 'साइन अप करने को कुछ नहीं। DegenView डाउनलोड करें, Pine Studio खोलें और लिखें।' },
      { title: 'ओपन सोर्स', body: 'GitHub पर GPL-3.0। इंजन कैसे काम करता है पढ़ें, या खुद बनाएँ।' },
    ],
    supportsTitle: 'इंजन क्या चलाता है',
    supports: [
      'Indicator, strategy और library',
      'Plot, fill, shape और बैकग्राउंड रंग',
      'Label, line, box और table',
      'ta.*, math.*, str.* और color.*',
      'Array, map और matrix',
      'यूज़र-डिफ़ाइंड type और method',
      'request.security और timeframe',
      'alert() और alertcondition()',
      'input.* कंट्रोल',
      'log.*()',
      'varip',
      'अपनी library का import',
    ],
    note: 'Pine Script v6 का स्वतंत्र इम्प्लीमेंटेशन, जो कुछ असमर्थित होने पर चुपचाप फ़ेल होने के बजाय बता देता है।',
    noteLink: 'Pine क्या सपोर्ट करता है',
  },

  workflow: {
    eyebrow: 'आइडिया से alert तक',
    title: 'एक लूप, <span class="gradient-text">शुरू से अंत तक</span>',
    // {topic} = the step's `topic`, for the screen-reader-only part of the link
    readMore: 'और पढ़ें<span class="sr-only"> {topic} के बारे में</span>',
    // Same order as the docs links in the page: writing-scripts, debugger-profiler, using-scripts, script-alerts.
    // `topic` is the lowercase form of the title, used in the sr-only link text.
    steps: [
      {
        title: 'लिखें',
        topic: 'लिखने',
        body: 'नौ उदाहरणों में से किसी से या खाली script से शुरू करें और प्रीव्यू chart को अपने कोड के पीछे चलते देखें।',
      },
      {
        title: 'Debug करें',
        topic: 'debug करने',
        body: 'गड़बड़ वाली लाइन पर रुकें, variable पढ़ें, धीमे हिस्से को profile करें और असिस्टेंट से पूछें।',
      },
      {
        title: 'Chart में जोड़ें',
        topic: 'chart में जोड़ने',
        body: 'script को + मेन्यू से लगाएँ। उसके इनपुट और स्टाइल ट्यून करें, या बंद कर दें।',
      },
      {
        title: 'Alert पाएँ',
        topic: 'alert पाने',
        body: 'alert() कॉल को script alert में बदलें, जो लाइव bar पर सूचित करते हैं या आपके webhook पर पोस्ट करते हैं।',
      },
    ],
  },

  differences: {
    eyebrow: 'संगतता',
    title: '<span class="gradient-text">TradingView</span> से यह कैसे अलग है',
    lead: 'Pine Studio, Pine Script v6 का स्वतंत्र इम्प्लीमेंटेशन है, जिसका अपना इंजन और डेटा है, इसलिए वही script अलग व्यवहार कर सकती है।',
    // Table column headings (desktop) and the labels repeated inside each row on mobile.
    colTradingView: 'TradingView',
    colDegenView: 'DegenView Pine Studio',
    mobileTradingView: 'TradingView',
    mobileDegenView: 'Pine Studio',
    // What differs from TradingView. Keep in step with docs.degenview.app/pine/language.
    rows: [
      {
        area: 'भाषा के वर्शन',
        tradingView: 'अब भी Pine के पुराने वर्शन के लिए लिखी script चलाता है।',
        degenView: 'सिर्फ़ Pine Script v6। पुरानी script साफ़ error के साथ अस्वीकार होती हैं, इसलिए पहले उन्हें migrate करें।',
      },
      {
        area: 'Script कहाँ चलती हैं',
        tradingView: 'TradingView के सर्वर पर, आपके अकाउंट से जुड़ी।',
        degenView: 'आपके कंप्यूटर पर। सादी .pine फ़ाइलें, कोई अकाउंट नहीं, कुछ भी अपलोड नहीं।',
      },
      {
        area: 'मार्केट और timeframe',
        tradingView: 'स्टॉक, फ़्यूचर्स, फ़ॉरेक्स, बॉन्ड, क्रिप्टो और बहुत कुछ, इंट्राडे timeframe के साथ।',
        degenView: 'क्रिप्टो, US स्टॉक और ETF, और prediction market, 1H, 1D, 1W, 1M, 3M और 1Y candle में। मिनट वाले timeframe नहीं।',
      },
      {
        area: 'Script में डेटा फ़ीड',
        tradingView: 'request.* के ज़रिए फ़ंडामेंटल, earnings, डिविडेंड, स्प्लिट, आर्थिक डेटा और बहुत कुछ।',
        degenView:
          'request.security और request.security_lower_tf काम करते हैं। earnings, dividends, splits, economic, financial, seed और quandl फ़ीड warning के साथ na लौटाती हैं। request.footprint बारीक candle से tick डेटा का अनुमान लगाता है।',
      },
      {
        area: 'Strategy बैकटेस्ट',
        tradingView: 'TradingView का अपना ब्रोकर एम्युलेटर, मार्जिन समेत।',
        degenView:
          'अलग एम्युलेटर, न मार्जिन मॉडल, न मार्जिन कॉल। calc_on_order_fills और bar magnifier को warning के साथ नज़रअंदाज़ किया जाता है। आँकड़े अलग होंगे।',
      },
      {
        area: 'स्टॉक पर टाइम ज़ोन',
        tradingView: 'कैलेंडर वैल्यू एक्सचेंज के टाइम ज़ोन को फ़ॉलो करती हैं।',
        degenView: 'स्टॉक पर घंटे और सप्ताह के दिन की वैल्यू UTC इस्तेमाल करती हैं।',
      },
      {
        area: 'टेक्स्ट स्टाइलिंग',
        tradingView: 'label, box और table पर फ़ॉन्ट फ़ैमिली, bold और italic चुनें।',
        degenView: 'स्वीकार की जाती है, पर नज़रअंदाज़ होती है।',
      },
      {
        area: 'शेयरिंग',
        tradingView: 'Script प्रकाशित करें और कम्युनिटी लाइब्रेरी ब्राउज़ करें।',
        degenView:
          'न पब्लिश करना, न बिल्ट-इन लाइब्रेरी। Community scripts लिंक tradingview.com/scripts ब्राउज़र में खोलता है; जो चलाना हो वह पेस्ट करें।',
      },
    ],
    cards: [
      {
        title: 'असमर्थित का मतलब warning, चौंकाने वाली बात नहीं',
        body: 'असमर्थित चीज़ें na लौटाती हैं या नज़रअंदाज़ होती हैं, Problems टैब में क्रमांकित warning के साथ।',
      },
      {
        title: 'भरोसा करने से पहले नतीजे जाँचें',
        body: 'डेटा स्रोत और strategy एम्युलेटर अलग हैं, इसलिए plot और बैकटेस्ट अलग हो सकते हैं। कम्युनिटी script दोबारा इस्तेमाल करने से पहले उसका लाइसेंस जाँचें।',
      },
    ],
    supportedLink: 'Pine Studio जो कुछ सपोर्ट करता है, उसकी पूरी सूची',
    compareLink: 'DegenView बनाम TradingView',
    trademark: 'Pine Script और TradingView, TradingView, Inc. के ट्रेडमार्क हैं। DegenView का TradingView से कोई संबंध नहीं है और न ही TradingView ने इसका समर्थन किया है।',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pine Studio, <span class="gradient-text">जवाब</span>',
    // {faqHref} = general FAQ page, {issuesHref} = GitHub issues
    more: '<a class="font-medium text-accent-text underline underline-offset-4" href="{faqHref}">सामान्य FAQ</a> में और भी, या <a class="font-medium text-accent-text underline underline-offset-4" href="{issuesHref}" target="_blank" rel="noopener noreferrer">GitHub पर पूछें<span class="sr-only"> (नए टैब में खुलता है)</span></a>।',
    // Plain text: also used as the FAQPage JSON-LD.
    items: [
      {
        q: 'Pine Studio क्या है?',
        a: 'Pine Studio, DegenView के अंदर का Pine Script वर्कस्पेस है, जो फ्री और ओपन सोर्स डेस्कटॉप मार्केट डैशबोर्ड है। यह एक ही टैब में script लाइब्रेरी, कोड एडिटर और लाइव प्रीव्यू chart है, साथ में step debugger, profiler, AI असिस्टेंट और एडिटर थीम।',
      },
      {
        q: 'क्या DegenView, TradingView की Pine Script v6 script चलाता है?',
        a: 'DegenView आपके कंप्यूटर पर अपना Pine Script v6 इंजन चलाता है, इसलिए आप किसी script को Pine Studio में पेस्ट करके चला सकते हैं। यह एक स्वतंत्र इम्प्लीमेंटेशन है, TradingView का नहीं, इसलिए बहुत अनोखी script अलग व्यवहार कर सकती हैं, और कुछ फ़ीचर, जैसे कुछ request.* डेटा फ़ीड, warning के साथ na लौटाते हैं। Pine Script v6 ही अकेला सपोर्टेड वर्शन है।',
      },
      {
        q: 'क्या मैं ब्रेकपॉइंट के साथ Pine Script debug कर सकता हूँ?',
        a: 'हाँ। गटर में ब्रेकपॉइंट लगाएँ, वैकल्पिक कंडीशन, hit count और logpoint के साथ, फिर function के ऊपर से, अंदर और बाहर step करें या एक बार में पूरा एक bar चलाएँ। हर रुकने पर local, global, watch एक्सप्रेशन और call stack अपडेट होते हैं। Debugger प्रीव्यू chart के bar की फ़्रीज़ की हुई कॉपी पर चलता है।',
      },
      {
        q: 'क्या Pine Script profiler है?',
        a: 'हाँ। Profiler चालू करें और DegenView प्रीव्यू chart के bar पर आपकी script का समय नापता है। यह हर लाइन के बगल में एक bar और हिस्सेदारी बनाता है और सबसे भारी लाइनों, ब्लॉक और function को क्रम से रखता है, ताकि आप देख सकें कि पहले क्या ठीक करना है।',
      },
      {
        q: 'क्या strategy का backtest किया जा सकता है?',
        a: 'हाँ। Pine strategy chart की candles पर simulated trades रखती है, और Report टैब उसके आँकड़े, equity curve और trade list दिखाता है। Monte Carlo simulation फिर आपके बंद trades को random तरीके से दोबारा खींचता है, ताकि दिखे कि नतीजा उनके आने के क्रम पर कितना निर्भर था। Backtest सिर्फ़ candles इस्तेमाल करते हैं और इनमें margin मॉडल नहीं है, इसलिए ये strategy को परखने का औज़ार हैं, नतीजों का वादा नहीं।',
      },
      {
        q: 'क्या AI असिस्टेंट मेरा कोड कहीं भेजता है?',
        a: 'सिर्फ़ तब जब आप उसे इस्तेमाल करें, और सिर्फ़ आपके चुने प्रोवाइडर को। OpenAI, Anthropic या OpenRouter, Ollama या LM Studio जैसे OpenAI-संगत सर्वर के लिए आप अपनी API key लाते हैं। बीच में DegenView का कोई सर्वर नहीं है, और आप अपने प्रोवाइडर को सीधे भुगतान करते हैं। असिस्टेंट आपकी script की निजी कॉपी पर काम करता है और जब तक आप कोई बदलाव लागू न करें, आपका एडिटर कभी नहीं बदलता।',
      },
      {
        q: 'क्या मैं अपने AI असिस्टेंट से Pine script vibe-code कर सकता हूँ?',
        a: 'हाँ, DegenView के वैकल्पिक MCP सर्वर के ज़रिए। किसी MCP-सक्षम असिस्टेंट को अपना आइडिया बताएँ और वह आपकी script की सूची देख, पढ़ और compile कर सकता है, script का ड्राफ़्ट एडिट कर सकता है, डायग्नोस्टिक, इनपुट और रिपोर्ट पढ़ सकता है, और सेव की हुई script को chart पर लगा सकता है। सर्वर डिफ़ॉल्ट रूप से बंद रहता है, सिर्फ़ आपकी मशीन पर सुनता है और टोकन माँगता है, और हर असिस्टेंट क्या कर सकता है, यह आप चुनते हैं। डिफ़ॉल्ट रूप से, किसी script के ऊपर सेव करना ऐप में आपकी मंज़ूरी का इंतज़ार करता है।',
      },
      {
        q: 'क्या मुझे अकाउंट या इंटरनेट कनेक्शन चाहिए?',
        a: 'अकाउंट नहीं। आपकी script आपके कंप्यूटर पर सादी .pine फ़ाइलें हैं। प्रीव्यू chart का मार्केट डेटा सार्वजनिक प्रोवाइडर से आता है, इसलिए लाइव कीमतें देखने के लिए कनेक्शन चाहिए, पर script एडिट करने के लिए नहीं।',
      },
      {
        q: 'क्या Pine Studio फ्री है?',
        a: 'हाँ। Pine Studio, DegenView का हिस्सा है, जो macOS, Windows और Linux के लिए GPL-3.0 लाइसेंस के तहत फ्री और ओपन सोर्स है।',
      },
    ],
  },

  download: {
    title: 'Pine लिखें। <span class="gradient-text block">ठीक से debug करें।</span>',
    lead: 'Pine Studio, DegenView के साथ आता है। फ्री, ओपन सोर्स, और साइन-अप करने को कुछ नहीं।',
    docsLink: 'Pine Studio docs',
    allDownloadsLink: 'सभी downloads',
    compareLink: 'TradingView से तुलना करें',
  },
};
