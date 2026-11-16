import type { Dict } from '../en';

export const common: Dict['common'] = {
  skipToContent: 'सीधे कंटेंट पर जाएँ',
  ogAlt: 'DegenView: फ्री, ओपन सोर्स TradingView का विकल्प',

  /** Site navigation (header, footer, mobile menu). Link labels are shared by header and footer. */
  nav: {
    primary: 'मुख्य',
    mobile: 'मोबाइल',
    footer: 'फ़ुटर',
    homeAria: 'DegenView होम',
    openMenu: 'मेन्यू खोलें',
    closeMenu: 'मेन्यू बंद करें',
    features: 'फ़ीचर',
    pineStudio: 'Pine Studio',
    tradingviewAlternative: 'TradingView का विकल्प',
    download: 'Download',
    faq: 'FAQ',
    docs: 'Docs',
    github: 'GitHub',
    privacyPolicy: 'गोपनीयता नीति',
    cookieSettings: 'Cookie सेटिंग',
  },

  /** Screen-reader suffix for links that open a new tab. Rendered as `<span class="sr-only"> {text}</span>`. */
  opensInNewTab: '(नए टैब में खुलता है)',

  footer: {
    tagline: 'फ्री, ओपन सोर्स मार्केट डैशबोर्ड। © {year} Nico Oelgart, GPL-3.0-only।',
    trademark:
      'Pine Script और TradingView, TradingView, Inc. के ट्रेडमार्क हैं। DegenView का TradingView या सूचीबद्ध किसी भी डेटा प्रदाता से कोई संबंध नहीं है, और न ही इनमें से किसी ने इसका समर्थन किया है। अन्य सभी ट्रेडमार्क उनके संबंधित स्वामियों के हैं। यह वित्तीय सलाह नहीं है।',
    /** Shown in the version badge when the latest release tag could not be fetched. */
    versionFallback: 'ओपन सोर्स',
  },

  coffee: 'मुझे एक कॉफ़ी पिलाएँ',

  theme: {
    group: 'कलर थीम',
    system: 'सिस्टम थीम',
    light: 'लाइट थीम',
    dark: 'डार्क थीम',
  },

  cookies: {
    title: 'Cookie, पर आपकी इजाज़त से ही',
    text: 'हम इस साइट पर आने वालों की गिनती के लिए cookie इस्तेमाल करना चाहेंगे।',
    decline: 'मना करें',
    accept: 'स्वीकार करें',
  },

  preRelease: {
    ariaLabel: 'प्री-रिलीज़ सूचना',
    /** `block` variant. `{version}` is replaced by the release tag, `{issues}` by the GitHub issues link. */
    block: {
      releaseCandidate: {
        title: 'DegenView रिलीज़ कैंडिडेट टेस्टिंग में है',
        body: '{version} अगले स्टेबल वर्शन का रिलीज़ कैंडिडेट है, इसलिए कुछ कमियाँ मिल सकती हैं। कोई कमी मिली? {issues}।',
      },
      preRelease: {
        title: 'DegenView प्री-रिलीज़ टेस्टिंग में है',
        body: '{version} अगले स्टेबल वर्शन का प्री-रिलीज़ है, इसलिए कुछ कमियाँ मिल सकती हैं। कोई कमी मिली? {issues}।',
      },
      issuesLink: 'GitHub पर बताएँ',
      releaseNotes: 'रिलीज़ नोट्स',
    },
    /** `inline` variant. `{issues}` is replaced by the GitHub issues link. */
    inline: {
      releaseCandidate: 'रिलीज़ कैंडिडेट: कुछ कमियाँ हो सकती हैं। {issues}।',
      preRelease: 'प्री-रिलीज़: कुछ कमियाँ हो सकती हैं। {issues}।',
      issuesLink: 'समस्या बताएँ',
    },
  },

  /** Download menus and the platform-detection script (see Footer: emitted as JSON for src/scripts/platform.ts). */
  download: {
    label: 'Download',
    forOs: '{os} के लिए',
    osDownloads: '{os} downloads',
    recommended: 'अनुशंसित',
    viewSource: 'सोर्स देखें',
    onGithub: 'GitHub पर',
    /** Hero button label once the visitor's OS is detected. */
    downloadFor: '{os} के लिए Download करें',
    chooseDownload: 'अपना download चुनें',
    mobileNote: 'DegenView एक डेस्कटॉप ऐप है — इसे अपने कंप्यूटर पर लें।',
  },

  /** Human-readable names of download file kinds (OS names and architectures are not translated). */
  platforms: {
    formats: {
      diskImage: 'डिस्क इमेज',
      installer: 'इंस्टॉलर',
      tarball: 'Tarball',
      flatpak: 'Flatpak',
    },
  },

  sectionNav: {
    ariaLabel: 'सेक्शन',
    /** Default section labels of the home page, keyed by section id. */
    sections: {
      markets: 'मार्केट',
      'pine-script': 'Pine Script',
      mcp: 'MCP',
      portfolio: 'Portfolio',
      'paper-trading': 'Paper trading',
      replay: 'Replay',
      'chart-types': 'Chart के प्रकार',
      more: 'और भी',
      download: 'Download',
    },
  },

  codeBlock: {
    defaultLabel: 'shell',
    copy: 'कॉपी करें',
    copyAria: '{label} कॉपी करें',
    copyAriaFallbackLabel: 'कमांड',
  },

  screenshot: {
    openPlayer: '{alt}। बड़ा प्लेयर खोलें',
    closePlayer: 'प्लेयर बंद करें',
    enlarge: '{alt}। इमेज बड़ी करें',
    closeImage: 'इमेज बंद करें',
    comingSoonAria: '{alt} (स्क्रीनशॉट जल्द आ रहा है)',
    comingSoon: 'स्क्रीनशॉट जल्द आ रहा है',
  },

  notFound: {
    title: 'पेज नहीं मिला – DegenView',
    description: 'यह पेज मौजूद नहीं है।',
    /** `{accent}` is replaced by the highlighted (gradient) part. */
    heading: 'यह chart {accent}',
    headingAccent: 'डीलिस्ट हो चुका है।',
    body: 'आप जो पेज ढूँढ रहे हैं, वह मौजूद नहीं है।',
    button: 'होम पर वापस जाएँ',
  },
};
