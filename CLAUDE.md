# Bank OZK — Digital Experience Audit Dashboard

## Client
- **Client:** Bank OZK
- **Site URL:** https://www.ozk.com/ (crawl started at /personal/)
- **Crawl Date:** 2026-03-02
- **Audit Slug:** bank-ozk

## Stack
- Vite 7 + React 19 + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- Recharts 3
- gh-pages (deploy target: GitHub Pages)

## Data Sources
| File | Path |
|---|---|
| Screaming Frog crawl overview | `../bank-ozk/screaming-frog/crawl_overview.csv` |
| Screaming Frog issues overview | `../bank-ozk/screaming-frog/issues_overview_report.csv` |
| Lighthouse mobile | `../bank-ozk/google-lighthouse-json/MOBILE-www.ozk.com-20260302T111255.json` |
| Lighthouse desktop | `../bank-ozk/google-lighthouse-json/DESKTOP-www.ozk.com-20260302T111352.json` |

All values in `src/data/crawlData.ts` are parsed directly from the above files — no defaults or estimates used.

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| `ozk-dark` | `#231f20` | Nav background, section headers |
| `ozk-primary` | `#e40046` | Brand magenta, CTAs, accent |
| `ozk-primary-dark` | `#bb0039` | Hover states |
| `ozk-accent` | `#4d3157` | Purple secondary |
| `ozk-charcoal` | `#414141` | Body text |
| `ozk-light` | `#f5f5f7` | Page background |
| `ozk-muted` | `#808285` | Secondary text, borders |

## Key Findings
| Finding | Severity | Source |
|---|---|---|
| 0 pages with structured data (of 124) | Critical | crawl_overview.csv |
| Mobile Lighthouse score: 49 | Critical | MOBILE lighthouse.json |
| 100% images missing size attributes (176/176) | Critical | crawl_overview.csv |
| 85.8% images over 100KB | Critical | crawl_overview.csv |
| 62.1% page titles below 30 characters | High | crawl_overview.csv |
| 49.3% pages missing canonical tag | High | crawl_overview.csv |
| 43.6% pages have multiple H1s | High | crawl_overview.csv |
| 87.96% URLs missing Secure Referrer-Policy | Medium | crawl_overview.csv |
| 50.7% pages flagged as low content | Medium | crawl_overview.csv |
| Mobile LCP: 7.42s (threshold ≤ 2.5s) | Critical | MOBILE lighthouse.json |
| SEO Opportunity Score: 41/100 | — | Calculated |

## SEO Score Formula
Weights applied: CLS risk 20%, Structured data 15%, Title quality 15%, Alt text 10%, H1 quality 10%, Meta description 10%, Redirects 10%, Security 10%. Score of 41 driven down primarily by zero structured data (0 × 0.15) and 100% image size attrs missing (0 × 0.20).

## Product Reality Notes
- Tracking stack is **unconfirmed** — no GA/Analytics data in Screaming Frog export. Validate in browser DevTools before implementing event recommendations.
- CTA observations (except login) are **unconfirmed** — inferred from page structure.
- Crawl started at `/personal/` not the domain root — some pages outside /personal/ may not be fully represented.

## Dev Commands
```bash
npm run dev        # local dev server at localhost:5173/bank-ozk/
npm run build      # production build to dist/
npm run preview    # preview built site locally
npm run deploy     # build + push to gh-pages branch
```

## Deploy
- **GitHub repo:** https://github.com/kennyfairris/bank-ozk (to be created)
- **Live URL:** https://kennyfairris.github.io/bank-ozk/
- **Deploy branch:** gh-pages
