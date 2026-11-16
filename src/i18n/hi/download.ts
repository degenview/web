import type { Dict } from '../en';

// Inline markup (<code>, <b>, <a>) keeps its classes: copy the tags and attributes unchanged when translating.
// Commands, file names, URLs and version tags stay in the page code.
export const download: Dict['download'] = {
  meta: {
    title: 'DegenView Download करें – फ्री TradingView का विकल्प',
    description:
      'DegenView, फ्री ओपन सोर्स TradingView का विकल्प, macOS, Windows और Linux के लिए download करें। कोई अकाउंट नहीं। install स्टेप और checksum भी।',
    /** Structured data (schema.org softwareRequirements). */
    softwareRequirements: 'macOS 14 या नया; x64 या ARM64 पर Windows; glibc 2.35 या नए वाला Linux, या Flatpak',
  },
  breadcrumbs: { home: 'होम', download: 'Download' },
  /** Label of the newest release next to its version. */
  status: {
    rc: 'रिलीज़ कैंडिडेट',
    prerelease: 'प्री-रिलीज़',
    stable: 'स्टेबल',
  },
  hero: {
    eyebrow: 'download',
    title: '<span class="gradient-text">DegenView</span> Download करें',
    lead: 'macOS, Windows और Linux के लिए फ्री और ओपन सोर्स। कोई अकाउंट नहीं, कोई ट्रायल नहीं, कोई छिपी शर्त नहीं।',
    choose: 'अपना download चुनें',
    other: 'अन्य प्लेटफ़ॉर्म और फ़ॉर्मैट',
    /** {date} = release date. */
    released: '{date} को रिलीज़ हुआ',
  },
  all: {
    eyebrow: 'सभी downloads',
    title: 'अपना <span class="gradient-text">प्लेटफ़ॉर्म</span> चुनें',
    lead: 'हर बिल्ड इंस्टॉलर या आर्काइव के रूप में मिलता है। फ़ाइल साइज़ इसी रिलीज़ के हैं।',
    /** System requirements line on each OS card. */
    needs: {
      macOS: 'macOS 14 Sonoma या नया',
      Windows: 'x64 या ARM64 पर Windows',
      Linux: 'glibc 2.35 या नया (Ubuntu 22.04, Debian 12, Fedora 36+), या Flatpak इस्तेमाल करें',
    },
    /** Architecture heading, by platform id. */
    archHints: {
      'macos-arm64': 'Apple Silicon (M1 और बाद के)',
      'macos-x64': 'Intel',
      'windows-x64': 'x64 (Intel और AMD)',
      'windows-arm64': 'ARM64 (Snapdragon X, Windows on ARM)',
      'linux-x64': 'x64',
      'linux-arm64': 'ARM64',
    },
    recommended: 'अनुशंसित',
    /** {url} = GitHub Releases. */
    older:
      'पुराने वर्शन और रिलीज़ नोट्स <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">GitHub Releases<span class="sr-only"> (नए टैब में खुलता है)</span></a> पर मिलेंगे।',
  },
  install: {
    eyebrow: 'install',
    title: 'बस <span class="gradient-text">एक मिनट में</span> शुरू',
    macos: {
      steps: [
        'अपने Mac से मेल खाने वाली <code class="font-mono text-fg">.dmg</code> फ़ाइल download करें।',
        'उसे खोलें और <b class="text-fg">DegenView</b> को Applications शॉर्टकट पर खींच लाएँ।',
        'Applications से इसे लॉन्च करें।',
        'इसे Applications में ही रखें। यह ऐप के अंदर से अपने-आप अपडेट होता है।',
      ],
      brewTitle: 'या Homebrew से',
      brewNote:
        'साइन किया हुआ ऐप Applications में install करता है। यह फिर भी ऐप के अंदर से अपने-आप अपडेट होता है, इसलिए <code class="font-mono text-fg">brew upgrade</code> इसे छूता नहीं।',
    },
    windows: {
      steps: [
        'अपने PC के लिए <code class="font-mono text-fg">-setup.exe</code> download करें।',
        'इसे चलाएँ। यह सिर्फ़ आपके यूज़र के लिए install होता है, एडमिन अधिकार नहीं चाहिए, Start मेन्यू में एंट्री और अनइंस्टॉलर जुड़ जाता है, और हटाने पर भी आपका डेटा बना रहता है।',
        'अगर SmartScreen दिखे, तो <b class="text-fg">More info → Run anyway</b> चुनें। यह बिल्ड अभी code-signed नहीं है।',
      ],
    },
    linux: {
      tarballTitle: 'Tarball, कोई भी नया distro',
      launcherIntro: 'लॉन्चर और डॉक आइकन चाहिए? निकाले हुए फ़ोल्डर से:',
      tarballNote: 'आपके अपने फ़ोल्डर में रखने पर ऐप अपने-आप अपडेट होता है।',
      flatpakTitle: 'Flatpak, सैंडबॉक्स में',
      /** Flathub setup link opens in a new tab. */
      flatpakNote:
        'कभी भी <code class="font-mono text-fg">flatpak update</code> से अपडेट करें। रनटाइम Flathub से आता है, इसलिए पहले <a class="font-medium text-accent-text underline underline-offset-4" href="https://flathub.org/setup" target="_blank" rel="noopener noreferrer">Flathub सेट अप करें<span class="sr-only"> (नए टैब में खुलता है)</span></a>। <code class="font-mono text-fg">beta</code> रिलीज़ कैंडिडेट और फ़ाइनल रिलीज़ को फ़ॉलो करता है; <code class="font-mono text-fg">stable</code> सिर्फ़ फ़ाइनल रिलीज़ को फ़ॉलो करता है और पहली फ़ाइनल रिलीज़ के आने के बाद काम करता है।',
      /** {version} = release tag. */
      singleFile:
        'एक ही फ़ाइल चाहिए? <code class="font-mono text-fg">flatpak install --user DegenView-{version}-linux-x64.flatpak</code>। download की हुई फ़ाइल का कोई remote नहीं होता, इसलिए वह अपडेट नहीं होती।',
      requirements:
        'OpenGL/EGL और X11 या Wayland चाहिए। ARM मशीनों पर फ़ाइल के नाम में <code class="font-mono text-fg">arm64</code> इस्तेमाल करें।',
    },
  },
  verify: {
    eyebrow: 'सत्यापन',
    title: 'भरोसा करें, पर <span class="gradient-text">जाँच लें</span>',
    lead: 'DegenView ओपन सोर्स है और हर रिलीज़ एक सार्वजनिक workflow से बनती है। अपने download का SHA-256 checksum नीचे दिए checksum से मिलाएँ।',
    macLinux: 'macOS और Linux',
    windows: 'Windows (PowerShell)',
    /** {os} = macOS, Windows or Linux. */
    osChecksums: '{os} checksum',
    copy: 'कॉपी करें',
    /** {name} = file name. */
    copyAria: '{name} का checksum कॉपी करें',
    /** Button label after a successful copy. */
    copied: 'कॉपी हो गया',
    /** Button label when the browser blocks clipboard access. */
    copyFailed: '⌘/Ctrl+C दबाएँ',
    /** {url} = the release page. */
    listedOn:
      'Checksum <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">रिलीज़ पेज<span class="sr-only"> (नए टैब में खुलता है)</span></a> पर दिए गए हैं।',
    /** {url} = GitHub Releases. */
    stale:
      'नई रिलीज़ आ चुकी है। उसके checksum <a class="font-medium text-accent-text underline underline-offset-4" href="{url}" target="_blank" rel="noopener noreferrer">रिलीज़ पेज<span class="sr-only"> (नए टैब में खुलता है)</span></a> पर हैं।',
  },
  release: {
    eyebrow: 'रिलीज़ और सोर्स',
    title: 'पढ़ें। <span class="gradient-text">बनाएँ।</span>',
    thisRelease: {
      title: 'यह रिलीज़',
      /** Shown for release candidates and pre-releases, before `notes`. */
      roughEdges: {
        rc: 'यह एक रिलीज़ कैंडिडेट है, इसलिए कुछ कमियाँ मिल सकती हैं।',
        prerelease: 'यह एक प्री-रिलीज़ है, इसलिए कुछ कमियाँ मिल सकती हैं।',
      },
      notes: 'रिलीज़ नोट्स में पिछली रिलीज़ के बाद का हर बदलाव दर्ज है।',
      link: 'GitHub पर रिलीज़ नोट्स',
      previous: 'पिछली रिलीज़',
    },
    source: {
      title: 'सोर्स से बनाएँ',
      lead: 'GPL-3.0, Rust में लिखा गया। आपको Rust 1.95 या नया चाहिए।',
      note: 'बाइनरी <code class="font-mono text-fg">target/release/degenview</code> पर बनती है। macOS पर <code class="font-mono text-fg">./tools/bundle.sh</code> Finder से लॉन्च होने वाला ऐप बना देता है।',
      github: 'GitHub पर देखें',
    },
  },
};
