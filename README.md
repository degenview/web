# degenview.app

Marketing site for [DegenView](https://github.com/degenview/degenview). Static [Astro](https://astro.build) + Tailwind CSS, deployed to GitHub Pages.

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview
npm run icons     # regenerate favicons + og.png from src/assets/brand/logo.png
```

- **Screenshots**: add PNGs to `src/assets/screens/` (see the README there).
- **Copy**: features in `src/data/features.ts`, FAQ in `src/data/faq.ts`.
- **Downloads**: at build time `src/data/release.ts` reads the latest GitHub release of `degenview/degenview`; the browser re-checks on load. Asset names follow the app's release workflow (`DegenView-<tag>-<platform>.<ext>`, see `src/data/platforms.ts`).

## Deploy (one-time setup)

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Set custom domain `degenview.app` there and enable **Enforce HTTPS** (`public/CNAME` is ignored by Actions deploys).
3. DNS: apex `A` → `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` (and `AAAA` `2606:50c0:8000::153` … `8003::153`); `www` `CNAME` → `degenview.github.io`.
4. Verify the domain at the org level (prevents takeover).

Pushes to `main` deploy automatically. The site only works at the custom domain (no `base` path is configured).
To refresh download links on each app release, have the app's release workflow send `repository_dispatch` type `release` to this repo (needs a PAT secret).
