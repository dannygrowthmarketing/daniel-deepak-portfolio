# Daniel Deepak — AI-Powered Growth Marketing Consultant

> A portfolio of **production-grade** growth work — live case studies, interactive reports, and open-source AI tooling across SEO, Google Ads, paid media, CRO, analytics, and agentic automation.

This repository is the portfolio hub itself: a fast, fully responsive, **zero-dependency** single-page site (HTML, CSS, and vanilla JavaScript) deployed on GitHub Pages. No frameworks, no build step, no external requests.

**Live site:** https://dannygrowthmarketing.github.io/daniel-deepak-portfolio/

---

## Why this exists

Recruiters and clients shouldn't have to take a resume's word for it. Every project linked here is a real, shipped artifact you can click into and inspect — a live report, an interactive model, or an installable AI tool with its own CI.

## Featured work

| Project | Type | What it demonstrates | Link |
| --- | --- | --- | --- |
| **Foremost Public Adjusters** | Live report | Paid-search audit + SEO rebuild + interactive revenue projection model | [View](https://dannygrowthmarketing.github.io/foremost-pa-growth-case-study/?cover) |
| **Claude Ads** | Open-source AI Skill (MIT) | Multi-platform paid-ads audit for Claude Code — 8 platforms, 0–100 scoring, CI-tested | [GitHub](https://github.com/AgriciDaniel/claude-ads) |
| **Google Trends MCP Server** | AI / MCP automation | Real-time trend velocity scoring exposed as MCP tools for agentic SEO | [GitHub](https://github.com/k-devvv/keyword-scrapper-SEO) |
| **TONI&GUY** | Live monograph | 16-store salon network — ₹369M revenue, +277% CTR, −67% CPC over 16 months | [View](https://dannygrowthmarketing.github.io/toniandguy-growth-case-study/monograph_16.html) |
| **EveryWatch** | Live intelligence report | Luxury-watch marketplace — 1.33M new users, 34× lifetime ROAS, $787.9K revenue over 17 months | [View](https://dannygrowthmarketing.github.io/everywatch-growth-intelligence/catalogue.html) |

## Capabilities

`SEO & Content` · `Google Ads & PPC` · `Paid Social` · `CRO & Landing Pages` · `Analytics & Measurement` · `AI & Automation (Claude Skills, MCP)`

## Tech & design

- **Stack:** HTML5, modern CSS (Grid, Flexbox, custom properties), vanilla JavaScript.
- **Zero dependencies:** no frameworks, no CDN, no Google Fonts — system font stack and inline SVG/canvas only. Keeps Lighthouse high and the site self-contained.
- **Responsive:** mobile-first across 320 / 480 / 768 / 1024 breakpoints.
- **Accessible:** semantic landmarks, keyboard focus styles, `prefers-reduced-motion` support, sufficient contrast.
- **Performance:** animated hero rendered on `<canvas>` with capped particle count and pauses when the tab is hidden; charts and card motifs are inline SVG.

## Run locally

No tooling required — it's static.

```bash
# clone, then simply open the file
open index.html          # macOS
# or
python3 -m http.server   # then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push `index.html`, `styles.css`, and `script.js` to the repository root.
2. **Settings → Pages → Build and deployment → Source:** Deploy from a branch → `main` → `/ (root)`.
3. Wait ~1–2 minutes, then visit your Pages URL (hard-refresh to clear cache).

> For a custom domain, add a `CNAME` file containing your domain and configure DNS per GitHub's docs.

## Structure

```
.
├── index.html      # all content & sections
├── styles.css      # design system + responsive layout
├── script.js       # nav, scroll-spy, reveal, count-ups, hero canvas, card motifs
└── README.md
```

## About

Daniel Deepak is a growth marketing consultant for B2B, B2C, SaaS, and service brands, specializing in positioning, paid media, GTM — and AI tooling built in-house.

- **Website:** [dannygrowthmarketing.com](https://dannygrowthmarketing.com)
- **LinkedIn:** [/in/danny-ai-marketing](https://www.linkedin.com/in/danny-ai-marketing/)
- **Blog:** [agricidaniel.com](https://agricidaniel.com)
- **GitHub:** [@AgriciDaniel](https://github.com/AgriciDaniel) · [@k-devvv](https://github.com/k-devvv) · [@dannygrowthmarketing](https://github.com/dannygrowthmarketing)

---

<sub>Built with HTML, CSS &amp; vanilla JavaScript · No dependencies · © 2026 Daniel Deepak</sub>
