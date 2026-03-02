import type {
  ImageStats,
  SEOStats,
  CrawlStats,
  SecurityStats,
  CanonicalStats,
  LighthouseRun,
  SEOScoreBreakdown,
} from './types';

// ── Meta ──────────────────────────────────────────────────────────────────────
export const CRAWL_DATE = '2026-03-02';
export const CRAWL_URL = 'https://www.ozk.com/personal/';
export const CLIENT_NAME = 'Bank OZK';

// ── Images ────────────────────────────────────────────────────────────────────
// Source: crawl_overview.csv — Images section (base: 176 images with 2xx)
export const imageStats: ImageStats = {
  total: 176,
  over100KB: 151,
  over100KBPct: 85.80,
  missingAltText: 3,
  missingAltTextPct: 1.70,
  missingAltAttribute: 0,
  missingSizeAttributes: 176,
  missingSizeAttributesPct: 100.00,
};

// ── SEO ───────────────────────────────────────────────────────────────────────
// Source: crawl_overview.csv — Page Titles, Meta Description, H1, H2, Content,
//         Structured Data sections (base: 124 internal HTML pages with 2xx)
export const seoStats: SEOStats = {
  totalHTMLPages: 124,
  titles: {
    missing: 0,
    duplicate: 4,
    over60Chars: 4,
    below30Chars: 77,
    below30CharsPct: 62.10,
    sameAsH1: 0,
  },
  metaDescription: {
    missing: 7,
    missingPct: 5.65,
    duplicate: 4,
    over155Chars: 18,
    below70Chars: 50,
  },
  h1: {
    missing: 0,
    duplicate: 44,
    duplicatePct: 35.48,
    over70Chars: 0,
    multiple: 54,
    multiplePct: 43.55,
  },
  h2: {
    missing: 28,
    missingPct: 22.58,
    duplicate: 58,
    over70Chars: 1,
    multiple: 78,
    nonSequential: 4,
  },
  structuredData: {
    pagesWithSD: 0,
  },
  content: {
    lowContentPages: 70,
    lowContentPct: 50.72,
    readabilityDifficult: 0,
    readabilityVeryDifficult: 0,
  },
};

// ── Crawl ─────────────────────────────────────────────────────────────────────
// Source: crawl_overview.csv — Summary, Response Codes, URL, Depth, Inlinks sections
export const crawlStats: CrawlStats = {
  totalURLs: 500,
  totalInternal: 357,
  totalExternal: 143,
  totalIndexable: 314,
  totalNonIndexable: 43,
  totalHTMLInternal: 165,
  responseCodes: {
    success2xx: 398,
    redirect3xx: 60,
    internalRedirect3xx: 39,
    clientError4xx: 19,
  },
  urlIssues: {
    underscores: 0,
    uppercase: 0,
    over115Chars: 0,
    repetitivePath: 0,
  },
  crawlDepth: [
    { depth: '0', pages: 1, pct: 0.81 },
    { depth: '1', pages: 36, pct: 29.03 },
    { depth: '2', pages: 18, pct: 14.52 },
    { depth: '3', pages: 7, pct: 5.65 },
    { depth: '4', pages: 62, pct: 50.00 },
    { depth: '5', pages: 0, pct: 0 },
    { depth: '6+', pages: 0, pct: 0 },
  ],
  topInlinks: [
    { url: 'https://www.ozk.com/business/', inlinks: 124, pct: 100 },
    { url: 'https://www.ozk.com/community/', inlinks: 124, pct: 100 },
    { url: 'https://www.ozk.com/personal/savings/', inlinks: 124, pct: 100 },
    { url: 'https://www.ozk.com/trust-wealth/wealth/', inlinks: 124, pct: 100 },
    { url: 'https://www.ozk.com/learning-center/', inlinks: 124, pct: 100 },
  ],
};

// ── Security ──────────────────────────────────────────────────────────────────
// Source: crawl_overview.csv — Security section (base: 357 internal URLs)
export const securityStats: SecurityStats = {
  httpURLs: 0,
  httpsURLs: 357,
  httpsURLsPct: 100.00,
  missingHSTS: 0,
  missingCSP: 1,
  missingReferrerPolicy: 314,
  missingReferrerPolicyPct: 87.96,
  unsafeCrossOriginLinks: 0,
};

// ── Canonicals ────────────────────────────────────────────────────────────────
// Source: crawl_overview.csv — Canonicals section (base: 138 internal HTML/PDF with 2xx)
export const canonicalStats: CanonicalStats = {
  total: 138,
  containsCanonical: 70,
  containsCanonicalPct: 50.72,
  selfReferencing: 70,
  canonicalised: 0,
  missing: 68,
  missingPct: 49.28,
  nonIndexableCanonical: 0,
};

// ── Lighthouse ────────────────────────────────────────────────────────────────
// Source: MOBILE-www.ozk.com-20260302T111255.json, DESKTOP-www.ozk.com-20260302T111352.json
export const lighthouseRuns: LighthouseRun[] = [
  {
    formFactor: 'mobile',
    url: 'https://www.ozk.com/personal/',
    performanceScore: 49,
    fcp: 4.05,
    lcp: 7.42,
    cls: 0.000,
    tbt: 569,
    speedIndex: 5.95,
    ttfb: 57,
  },
  {
    formFactor: 'desktop',
    url: 'https://www.ozk.com/personal/',
    performanceScore: 87,
    fcp: 1.11,
    lcp: 1.76,
    cls: 0.000,
    tbt: 0,
    speedIndex: 1.94,
    ttfb: 83,
  },
];

// ── SEO Opportunity Score ─────────────────────────────────────────────────────
export function calcSEOScore(): { score: number; breakdown: SEOScoreBreakdown[] } {
  const missingSizeAttrsPct = imageStats.missingSizeAttributesPct;
  const missingAltPct = imageStats.missingAltTextPct;
  const structuredDataPages = seoStats.structuredData.pagesWithSD;
  const titlesBelow30CharsPct = seoStats.titles.below30CharsPct;
  const h1MultiplePct = seoStats.h1.multiplePct;
  const metaDescMissing = seoStats.metaDescription.missing;
  const internalRedirects = crawlStats.responseCodes.internalRedirect3xx;
  const unsafeCrossOriginLinks = securityStats.unsafeCrossOriginLinks;

  const breakdown: SEOScoreBreakdown[] = [
    {
      factor: 'CLS risk',
      score: missingSizeAttrsPct > 50 ? 0 : 100,
      weight: 0.20,
      weighted: 0,
    },
    {
      factor: 'Alt text',
      score: missingAltPct > 30 ? 30 : 80,
      weight: 0.10,
      weighted: 0,
    },
    {
      factor: 'Structured data',
      score: structuredDataPages === 0 ? 0 : 80,
      weight: 0.15,
      weighted: 0,
    },
    {
      factor: 'Title quality',
      score: 100 - titlesBelow30CharsPct,
      weight: 0.15,
      weighted: 0,
    },
    {
      factor: 'H1 quality',
      score: 100 - h1MultiplePct,
      weight: 0.10,
      weighted: 0,
    },
    {
      factor: 'Meta description',
      score: metaDescMissing === 0 ? 90 : 60,
      weight: 0.10,
      weighted: 0,
    },
    {
      factor: 'Redirects',
      score: internalRedirects < 5 ? 90 : 70,
      weight: 0.10,
      weighted: 0,
    },
    {
      factor: 'Security',
      score: unsafeCrossOriginLinks < 5 ? 90 : 65,
      weight: 0.10,
      weighted: 0,
    },
  ];

  breakdown.forEach((item) => {
    item.weighted = item.score * item.weight;
  });

  const score = Math.round(breakdown.reduce((sum, item) => sum + item.weighted, 0));
  return { score, breakdown };
}
