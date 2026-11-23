import { REPO, REPO_URL } from './platforms';

/** The marketing site's repository (translations, layout fixes). */
export const WEB_REPO_URL = 'https://github.com/degenview/web';
/** The user guide's repository. */
export const DOCS_REPO_URL = 'https://github.com/degenview/docs';
export const ISSUES_URL = `${REPO_URL}/issues`;

/** One address people can send crypto to. */
export interface Wallet {
  /** Stable id, used for the element ids on the page. */
  id: string;
  /** Asset name as people know it, e.g. "Bitcoin". Not translated. */
  name: string;
  /** Short ticker shown in the badge, e.g. "BTC". */
  ticker: string;
  /** Network the address lives on, e.g. "Bitcoin", "Ethereum", "Solana". Shown as a warning next to the address. */
  network: string;
  address: string;
}

/**
 * Crypto addresses shown on /support/. Add one entry per address; the crypto section (and the "Send crypto" card)
 * appear on their own as soon as this list has an entry, and stay hidden while it is empty.
 *
 * Only paste addresses you control, and copy them from your wallet rather than typing them:
 *   { id: 'btc', name: 'Bitcoin', ticker: 'BTC', network: 'Bitcoin', address: '…' },
 */
export const WALLETS: Wallet[] = [];

let stars: Promise<number | undefined> | undefined;

/** Build-time GitHub star count of the app repository. Never throws: the page just omits the number when it can't be read. */
export function getStars(): Promise<number | undefined> {
  stars ??= (async () => {
    try {
      const token = process.env.GITHUB_TOKEN;
      const res = await fetch(`https://api.github.com/repos/${REPO}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) throw new Error(`GitHub API ${res.status}`);
      const n = ((await res.json()) as { stargazers_count?: unknown }).stargazers_count;
      return typeof n === 'number' && n > 0 ? n : undefined;
    } catch {
      return undefined;
    }
  })();
  return stars;
}
