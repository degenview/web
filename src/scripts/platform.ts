import { PLATFORMS, releaseFromTag, REPO, LATEST_URL, type PlatformId, type ReleaseInfo } from '../data/platforms';

const KEY = 'platform';
const ids = PLATFORMS.map((p) => p.id) as string[];

export interface Detection {
  id: PlatformId | null;
  note: string | null;
}

interface UAData {
  platform?: string;
  getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string; platform?: string }>;
}

export async function detectPlatform(): Promise<Detection> {
  const ua = navigator.userAgent;
  const uaData = (navigator as unknown as { userAgentData?: UAData }).userAgentData;
  if (/iPhone|iPad|iPod|Android/i.test(ua)) return { id: null, note: 'DegenView is a desktop app — grab it on your computer.' };

  let arch: string | undefined;
  try {
    arch = (await uaData?.getHighEntropyValues?.(['architecture']))?.architecture;
  } catch {}
  const plat = uaData?.platform ?? navigator.platform ?? '';

  if (/mac/i.test(plat) || /Mac OS X|Macintosh/.test(ua)) {
    if (arch === 'x86') return { id: 'macos-x64', note: null };
    // Safari/Firefox hide the CPU; every Mac since late 2020 is Apple Silicon.
    return { id: 'macos-arm64', note: arch === 'arm' ? null : 'Intel Mac? Pick “macOS (Intel)”.' };
  }
  if (/win/i.test(plat) || /Windows/.test(ua)) {
    return { id: 'windows-x64', note: arch === 'arm' ? 'Windows on ARM runs the x64 build via emulation.' : null };
  }
  if (/linux|x11|cros/i.test(plat + ua)) {
    if (arch === 'arm' || /aarch64|arm/i.test(ua)) return { id: null, note: 'No ARM Linux build yet — x64 only.' };
    return { id: 'linux-x64', note: null };
  }
  return { id: null, note: null };
}

function stored(): PlatformId | null {
  try {
    const v = localStorage.getItem(KEY);
    if (v && ids.includes(v)) return v as PlatformId;
  } catch {}
  return null;
}

async function refreshRelease(initial: ReleaseInfo): Promise<ReleaseInfo> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return initial;
    const { tag_name } = (await res.json()) as { tag_name?: string };
    return tag_name ? releaseFromTag(tag_name) : initial;
  } catch {
    return initial;
  }
}

export async function initDownloads() {
  const root = document.documentElement;
  const initialTag = root.dataset.releaseTag || null;
  let release = releaseFromTag(initialTag);
  let detected = await detectPlatform();
  let current: PlatformId | null = stored() ?? detected.id;

  const render = () => {
    const platform = PLATFORMS.find((p) => p.id === current);
    const href = platform ? release.urls[platform.id] : LATEST_URL;
    document.querySelectorAll<HTMLAnchorElement>('[data-dl-button]').forEach((a) => {
      a.href = href;
      const label = a.querySelector('[data-dl-label]');
      if (label) label.textContent = platform ? `Download for ${platform.label.replace(/ \(.*\)/, '')}` : 'Download';
      const sub = a.querySelector('[data-dl-sub]');
      if (sub) sub.textContent = platform ? `${platform.short} · ${release.tag ?? 'latest'}` : 'Choose your platform';
    });
    document.querySelectorAll<HTMLSelectElement>('[data-dl-select]').forEach((s) => {
      s.value = current ?? '';
    });
    document.querySelectorAll<HTMLElement>('[data-dl-note]').forEach((n) => {
      const msg = stored() ? null : detected.note;
      n.textContent = msg ?? '';
      n.hidden = !msg;
    });
    document.querySelectorAll<HTMLAnchorElement>('[data-dl-card]').forEach((a) => {
      const id = a.dataset.dlCard as PlatformId;
      a.href = release.urls[id];
      a.toggleAttribute('data-selected', id === current);
    });
    document.querySelectorAll<HTMLElement>('[data-dl-version]').forEach((v) => {
      if (release.tag) v.textContent = release.tag;
    });
  };

  document.querySelectorAll<HTMLSelectElement>('[data-dl-select]').forEach((s) =>
    s.addEventListener('change', () => {
      if (!ids.includes(s.value)) return;
      current = s.value as PlatformId;
      try {
        localStorage.setItem(KEY, current);
      } catch {}
      render();
    }),
  );

  render();
  const fresh = await refreshRelease(release);
  if (fresh.tag !== release.tag) {
    release = fresh;
    render();
  }
}
