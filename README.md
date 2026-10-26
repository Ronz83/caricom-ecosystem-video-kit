# CARICOM Business Hub • Businesses OS • Dispatch OS • CBPay — 8-Video Recreation Kit

This repository contains the complete, non-duplicate source files, scripts, knowledge base, and regional screen-free photography required to recreate all **8 product and ecosystem videos** (`1920x1080` at `30fps` in Remotion).

---

## 1. Core Documentation & Scripts
- **[GEMINI_COMPLETE_CONTEXT_SINGLE_FILE.md](./GEMINI_COMPLETE_CONTEXT_SINGLE_FILE.md)** — Single-file master context combining the full Knowledge Base + all 8 video scripts (ideal for 1-click upload into Gemini, Google AI Studio, or NotebookLM).
- **[PRODUCTS_AND_PLATFORMS_KNOWLEDGE_BASE.md](./PRODUCTS_AND_PLATFORMS_KNOWLEDGE_BASE.md)** — Complete breakdown of every product, platform, feature, and how they connect end-to-end.
- **[ALL_8_VIDEO_SCRIPTS.md](./ALL_8_VIDEO_SCRIPTS.md)** — Scene-by-scene and continuous voiceover scripts for all 8 videos.

---

## 2. Remotion Compositions & Automation (`src/` & Root)
- **[src/ecosystem-entry.tsx](./src/ecosystem-entry.tsx)** — Registers all 8 video compositions (`1920x1080` @ `30fps`).
- **[src/EcosystemMasterInfomercial.tsx](./src/EcosystemMasterInfomercial.tsx)** — 5-Act Flagship Ecosystem Infomercial (`ecosystem-master-infomercial`).
- **[src/DispatchIndustryExplainer.tsx](./src/DispatchIndustryExplainer.tsx)** — 4-Act Parameterized Explainer powering `service-dispatch-master-walkthrough` and the 6 standalone industry VSLs (`vsl-auto-rescue`, `vsl-food-delivery`, `vsl-hvac-trades`, `vsl-security-patrol`, `vsl-mobile-detailing`, `vsl-commercial-logistics`).
- **[src/ecosystem-audio-manifest.json](./src/ecosystem-audio-manifest.json)** — Exact frame counts and scene durations synced to the voiceover mixes.
- **[generate-ecosystem-and-dispatch-audio.mjs](./generate-ecosystem-and-dispatch-audio.mjs)** — Generates the 8 `*-master.wav` mixes using strict monolingual English voices (`en-US-ChristopherNeural`, `en-US-AriaNeural`, `en-US-GuyNeural`, `en-US-JennyNeural`) with zero mid-sentence language switching.
- **[render-all-ecosystem-videos.mjs](./render-all-ecosystem-videos.mjs)** — Renders all 8 MP4 videos into `./videos/`.

---

## 3. Clean Caribbean Photography (`public/bos-assets/`)
All 10 background images used across the 8 compositions (screen-free/device-free so no backward phone/monitor screens appear):
- `public/bos-assets/clean-caribbean-autorescue.jpg`
- `public/bos-assets/clean-caribbean-delivery.jpg`
- `public/bos-assets/clean-caribbean-detailer.jpg`
- `public/bos-assets/clean-caribbean-executives.jpg`
- `public/bos-assets/clean-caribbean-freight.jpg`
- `public/bos-assets/clean-caribbean-hvac-trades.jpg`
- `public/bos-assets/clean-caribbean-patrol.jpg`
- `public/bos-assets/clean-caribbean-reception.jpg`
- `public/bos-assets/clean-caribbean-trade-counter.jpg`
- `public/bos-assets/hero-professional.png`

---

## 4. Rendered MP4 Videos & Master WAV Audio Mixes
All 8 rendered `.mp4` videos and 8 `*-master.wav` audio tracks are attached to **[GitHub Release v1.0.0](https://github.com/Ronz83/caricom-ecosystem-video-kit/releases/tag/v1.0.0)**.
