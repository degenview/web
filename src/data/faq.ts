import { localePath, useT, type Dict, type Lang } from '../i18n';

export type FaqGroupId = keyof Dict['faq']['groups'];
type FaqKey = keyof Dict['faq']['items'];

export interface FaqGroup {
  id: FaqGroupId;
  title: string;
  intro: string;
  /** Key into `art` in `illustrations.ts`, shown beside the group heading. */
  art?: string;
}

export interface FaqItem {
  /** Stable anchor (`/faq/#<id>`), the same in every language. */
  id: string;
  group: FaqGroupId;
  q: string;
  /** Plain text. Also used for the FAQPage structured data. */
  a: string;
  /** Follow-up links shown under the answer, with the href already localised. */
  links?: [label: string, href: string][];
  /** Key into `art` in `illustrations.ts`, shown beside this answer. */
  art?: string;
}

// Structure lives here (ids, order, art, canonical link paths); the text comes from the `faq` dictionary.
const groupMeta: { id: FaqGroupId; art?: string }[] = [
  { id: 'basics', art: 'free' },
  { id: 'scripts' },
  { id: 'data', art: 'shield' },
  { id: 'install', art: 'platforms' },
];

const itemMeta: { key: FaqKey; id: string; group: FaqGroupId; art?: string; links?: string[] }[] = [
  { key: 'free', id: 'is-degenview-really-free', group: 'basics' },
  { key: 'alternative', id: 'is-degenview-a-free-tradingview-alternative', group: 'basics', links: ['/tradingview-alternative/'] },
  { key: 'openSource', id: 'is-degenview-open-source', group: 'basics' },
  { key: 'account', id: 'do-i-need-an-account', group: 'basics' },
  { key: 'affiliation', id: 'is-it-affiliated-with-tradingview-or-the-data-providers', group: 'basics' },
  { key: 'languages', id: 'which-languages-does-degenview-support', group: 'basics', links: ['https://docs.degenview.app/workspace/language'] },
  { key: 'runPine', id: 'can-i-run-my-tradingview-pine-scripts-in-degenview', group: 'scripts' },
  { key: 'pinePrivacy', id: 'where-do-my-pine-scripts-go', group: 'scripts' },
  { key: 'aiAssistant', id: 'can-i-connect-an-ai-assistant', group: 'scripts' },
  { key: 'stockData', id: 'how-do-i-get-stock-data', group: 'data', art: 'sources', links: ['/privacy-policy/#app-h'] },
  { key: 'dataCollection', id: 'does-degenview-collect-my-data', group: 'data', links: ['/privacy-policy/'] },
  { key: 'offline', id: 'does-degenview-work-offline', group: 'data' },
  { key: 'platforms', id: 'which-platforms-are-supported', group: 'install', links: ['/download/'] },
  { key: 'smartscreen', id: 'windows-shows-a-smartscreen-warning-is-it-safe', group: 'install', art: 'smartscreen', links: ['/download/#verify'] },
  { key: 'autoUpdate', id: 'does-degenview-update-itself', group: 'install' },
  { key: 'homebrew', id: 'can-i-install-degenview-with-homebrew', group: 'install', links: ['/download/'] },
  { key: 'whichDownload', id: 'which-download-should-i-pick', group: 'install', links: ['/download/'] },
];

export function getFaqGroups(lang: Lang): FaqGroup[] {
  const t = useT(lang).faq;
  return groupMeta.map((g) => ({ ...g, ...t.groups[g.id] }));
}

export function getFaq(lang: Lang): FaqItem[] {
  const t = useT(lang).faq;
  return itemMeta.map(({ key, links, ...meta }) => {
    const text = t.items[key];
    return {
      ...meta,
      q: text.q,
      a: text.a,
      ...(links ? { links: links.map((href, i): [string, string] => [text.links![i], localePath(lang, href)]) } : {}),
    };
  });
}
