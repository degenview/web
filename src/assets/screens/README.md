# Screenshots

Drop PNGs here; the site picks them up automatically (missing ones render a "coming soon" frame).

- Naming: `<slug>-dark.png` and `<slug>-light.png`. Light is optional (falls back to dark), and so is dark.
- Size: 2400×1500 (16:10), PNG, crop to the app window without OS chrome (the site adds only a rounded border and glow, no title bar).
- Video: `<slug>.mp4` (+ `<slug>-poster.webp`) replaces the screenshot with a muted looping clip, e.g. `pine-script.mp4`. Encode: H.264, no audio, 1920px wide, CRF 18, `+faststart` (~0.5 MB for 7 s).
- Exception: `hero-dark.webp` and `paper-trading-dark.webp` are full macOS window shots (own title bar, rounded transparent corners), cropped to the window edge and stored as near-lossless WebP (q98). They render with `framed` so the site skips its own frame. WebP is picked up like PNG. Astro resizes and recompresses at build time (quality 90), never upscaling.

| slug | show |
|---|---|
| `hero` | Full window: BTC-EUR chart with indicators and drawings, paper-trading order ticket on the right |
| `markets` | Symbol search across sources, a Polymarket/Kalshi probability chart next to a price chart |
| `pine-script` | Pine Studio: editor, diagnostics, live preview chart |
| `portfolio` | Allocation, P&L, transaction ledger |
| `mcp` | Settings ▸ MCP Server: enabled server, a client with its token hidden, per-client Read/Write permissions |
| `paper-trading` | Order ticket + position/order markers on a chart |
| `replay` | Replay controls and timeline scrubber |

The Pine Studio page (`/pine-studio/`) adds these, all with `-dark` and `-light` variants: `pine-hero`, `pine-debugger` and `pine-profiler` are full window shots (use `framed`), `pine-ai-chat`, `pine-ai-plan`, `pine-ai-proposal` and `pine-ai-review` are crops of the assistant panel and its review sheet, and `pine-theme-editor` is the theme editor. The three editor-theme crops (Dark, Light, Dracula) live in `src/assets/pine/` because they show a theme and must not swap with the site's.
