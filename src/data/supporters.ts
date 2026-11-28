import { COFFEE_URL } from './platforms';

const SUPPORTERS_API = 'https://developers.buymeacoffee.com/api/v1/supporters';
// The creator page's public coffee feed provides display names and photos keyed by support_id.
const PUBLIC_COFFEES_API = `https://app.buymeacoffee.com/api/creators/slug${new URL(COFFEE_URL).pathname}/coffees`;
const SUPPORTER_LIMIT = 12;
const NOT_REFUNDED: unknown[] = [undefined, null, false, 0, '0', 'false'];

type ApiRow = Record<string, unknown>;

interface Supporter {
  name?: string;
  photo?: string;
  amount: number;
  currency: string;
}

function isRecord(value: unknown): value is ApiRow {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function readNumber(value: unknown): number {
  if (typeof value === 'number') return value;
  const numericText = text(value);
  return numericText ? Number(numericText) : NaN;
}

function profilePhoto(row: ApiRow): string | undefined {
  const defaultPhoto = text(row.default_profile_picture_url);
  for (const value of [row.profile_picture, row.profile_picture_url]) {
    const photo = text(value);
    if (!photo || photo === defaultPhoto) continue;

    const url = URL.parse(photo);
    if (url?.origin === 'https://cdn.buymeacoffee.com' &&
      url.pathname.startsWith('/uploads/profile_pictures/') &&
      !url.pathname.startsWith('/uploads/profile_pictures/default/')) {
      return url.href;
    }
  }
}

async function getPage(url: string, signal: AbortSignal, headers: Record<string, string> = {}) {
  const response = await fetch(url, { headers: { Accept: 'application/json', ...headers }, redirect: 'error', signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const body: unknown = await response.json();
  if (!isRecord(body) || !Array.isArray(body.data)) throw new Error('Unexpected response format');
  const next = body.next_page_url ?? (isRecord(body.links) ? body.links.next : null);
  return { rows: body.data.filter(isRecord), hasNext: Boolean(next) };
}

async function getPublicCoffees(signal: AbortSignal): Promise<Map<number, ApiRow>> {
  const publicRows = new Map<number, ApiRow>();
  for (let page = 1; page <= 3; page += 1) {
    const { rows, hasNext } = await getPage(`${PUBLIC_COFFEES_API}?web=1&page=${page}&per_page=20`, signal, {
      'X-Requested-With': 'XMLHttpRequest',
    });
    for (const row of rows) {
      const id = readNumber(row.support_id);
      if (Number.isSafeInteger(id) && id > 0 && readNumber(row.support_visibility) === 1) publicRows.set(id, row);
    }
    if (!hasNext) break;
  }
  return publicRows;
}

async function fetchSupporters(token: string): Promise<Supporter[]> {
  const signal = AbortSignal.timeout(12_000);
  const headers = { Authorization: `Bearer ${token}` };
  const [firstPage, publicRows] = await Promise.all([
    getPage(`${SUPPORTERS_API}?page=1`, signal, headers),
    getPublicCoffees(signal),
  ]);
  if (publicRows.size === 0) return [];

  const supporters = new Map<number, Supporter & { created: number }>();
  let result = firstPage;

  for (let page = 1; ; page += 1) {
    for (const row of result.rows) {
      const id = readNumber(row.support_id);
      const publicRow = publicRows.get(id);
      if (!publicRow || readNumber(row.support_visibility) !== 1 || readNumber(row.support_hidden) === 1) continue;
      if (!NOT_REFUNDED.includes(row.is_refunded)) continue;

      const amount = readNumber(row.support_coffees) * readNumber(row.support_coffee_price);
      const currency = text(row.support_currency).toUpperCase();
      if (!(Number.isFinite(amount) && amount > 0 && /^[A-Z]{3}$/.test(currency))) continue;

      const displayName = text(publicRow.profile_full_name);
      const emailLocalPart = /^([^\s@]+)@[^\s@]+\.[^\s@]+$/.exec(displayName)?.[1];
      const name = displayName && displayName.toLowerCase() !== 'someone' ? (emailLocalPart ?? displayName) : undefined;
      supporters.set(id, {
        name,
        photo: name ? profilePhoto(publicRow) : undefined,
        amount,
        currency,
        created: Date.parse(text(row.support_created_on)) || 0,
      });
    }

    // The API lists the newest donations first. Follow its pagination flag on the fixed API origin.
    if (supporters.size >= SUPPORTER_LIMIT || !result.hasNext || page === 10) break;
    result = await getPage(`${SUPPORTERS_API}?page=${page + 1}`, signal, headers);
  }

  return [...supporters.entries()]
    .sort(([leftId, left], [rightId, right]) => right.created - left.created || rightId - leftId)
    .slice(0, SUPPORTER_LIMIT)
    .map(([, { name, photo, amount, currency }]) => ({ name, photo, amount, currency }));
}

let supporters: Promise<Supporter[]> | undefined;

/** Share one build-time snapshot across all support page locales. */
export function getSupporters(): Promise<Supporter[]> {
  const token = process.env.BUY_ME_A_COFFEE_API_TOKEN?.trim();
  if (!token) return Promise.resolve([]);

  supporters ??= fetchSupporters(token).catch(() => {
    console.warn('[supporters] Could not fetch Buy Me a Coffee supporters. The supporter list will be omitted.');
    return [];
  });
  return supporters;
}
