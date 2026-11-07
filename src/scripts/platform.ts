import {
  PLATFORMS, FORMATS, assetUrl, pickTag, releaseFromTag, REPO,
  type PlatformId, type ReleaseInfo,
} from '../data/platforms';

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
    // Safari/Firefox hide the CPU; every Mac since late 2020 is Apple Silicon. Intel users pick it in the menu.
    return { id: arch === 'x86' ? 'macos-x64' : 'macos-arm64', note: null };
  }
  if (/win/i.test(plat) || /Windows/.test(ua)) {
    return { id: arch === 'arm' ? 'windows-arm64' : 'windows-x64', note: null };
  }
  if (/linux|x11|cros/i.test(plat + ua)) {
    return { id: arch === 'arm' || /aarch64|arm/i.test(ua) ? 'linux-arm64' : 'linux-x64', note: null };
  }
  return { id: null, note: null };
}

async function refreshRelease(initial: ReleaseInfo): Promise<ReleaseInfo> {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=5`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return initial;
    const tag = pickTag((await res.json()) as { tag_name?: string; draft?: boolean }[]);
    return tag ? releaseFromTag(tag) : initial;
  } catch {
    return initial;
  }
}

export async function initDownloads() {
  const root = document.documentElement;
  let release = releaseFromTag(root.dataset.releaseTag || null);
  const detected = await detectPlatform();
  const current = detected.id;

  const render = () => {
    const platform = PLATFORMS.find((p) => p.id === current);

    // Per-OS menus: fill links, highlight the detected OS, put the detected arch first and badge it.
    document.querySelectorAll<HTMLElement>('[data-dl-menu]').forEach((menu) => {
      const isCurrentOs = menu.dataset.dlMenu === platform?.os;
      menu.toggleAttribute('data-selected', isCurrentOs);
      const panel = menu.querySelector<HTMLElement>('[role=menu]')!;
      const items = [...panel.querySelectorAll<HTMLAnchorElement>('[data-dl-item]')];
      for (const a of items) {
        const p = PLATFORMS.find((x) => x.id === a.dataset.platform)!;
        const f = FORMATS[p.os].find((x) => x.suffix === a.dataset.suffix)!;
        a.href = assetUrl(release.tag, p, f);
        const match = isCurrentOs && p.id === current;
        a.querySelector<HTMLElement>('[data-dl-rec]')!.hidden = !match || f !== p.formats[0];
      }
      if (isCurrentOs) {
        const rank = (a: HTMLElement) => (a.dataset.platform === current ? 0 : 1);
        items.sort((a, b) => rank(a) - rank(b)).forEach((a) => panel.append(a));
      }
    });

    document.querySelectorAll<HTMLElement>('[data-dl-note]').forEach((n) => {
      n.textContent = detected.note ?? '';
      n.hidden = !detected.note;
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

  // One menu open at a time; close on outside click, Escape or after picking a file.
  const menus = [...document.querySelectorAll<HTMLDetailsElement>('[data-dl-menu]')];
  const closeAll = (except?: Element | null) => menus.forEach((m) => m !== except && m.removeAttribute('open'));
  menus.forEach((m) => {
    m.addEventListener('toggle', () => m.open && closeAll(m));
    m.addEventListener('click', (e) => {
      if ((e.target as Element).closest('[data-dl-item]')) setTimeout(() => m.removeAttribute('open'), 0);
    });
  });
  document.addEventListener('click', (e) => closeAll((e.target as Element).closest('[data-dl-menu]')));
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = menus.find((m) => m.open);
    if (!open) return;
    open.removeAttribute('open');
    open.querySelector<HTMLElement>('summary')?.focus();
  });

  render();
  const fresh = await refreshRelease(release);
  if (fresh.tag !== release.tag) {
    release = fresh;
    render();
  }
}
