export interface ImageStats {
  total: number;
  over100KB: number;
  over100KBPct: number;
  missingAltText: number;
  missingAltTextPct: number;
  missingAltAttribute: number;
  missingSizeAttributes: number;
  missingSizeAttributesPct: number;
}

export interface SEOStats {
  totalHTMLPages: number; // Internal HTML with 2xx
  titles: {
    missing: number;
    duplicate: number;
    over60Chars: number;
    below30Chars: number;
    below30CharsPct: number;
    sameAsH1: number;
  };
  metaDescription: {
    missing: number;
    missingPct: number;
    duplicate: number;
    over155Chars: number;
    below70Chars: number;
  };
  h1: {
    missing: number;
    duplicate: number;
    duplicatePct: number;
    over70Chars: number;
    multiple: number;
    multiplePct: number;
  };
  h2: {
    missing: number;
    missingPct: number;
    duplicate: number;
    over70Chars: number;
    multiple: number;
    nonSequential: number;
  };
  structuredData: {
    pagesWithSD: number;
  };
  content: {
    lowContentPages: number;
    lowContentPct: number;
    readabilityDifficult: number;
    readabilityVeryDifficult: number;
  };
}

export interface CrawlStats {
  totalURLs: number;
  totalInternal: number;
  totalExternal: number;
  totalIndexable: number;
  totalNonIndexable: number;
  totalHTMLInternal: number;
  responseCodes: {
    success2xx: number;
    redirect3xx: number;
    internalRedirect3xx: number;
    clientError4xx: number;
  };
  urlIssues: {
    underscores: number;
    uppercase: number;
    over115Chars: number;
    repetitivePath: number;
  };
  crawlDepth: Array<{ depth: string; pages: number; pct: number }>;
  topInlinks: Array<{ url: string; inlinks: number; pct: number }>;
}

export interface SecurityStats {
  httpURLs: number;
  httpsURLs: number;
  httpsURLsPct: number;
  missingHSTS: number;
  missingCSP: number;
  missingReferrerPolicy: number;
  missingReferrerPolicyPct: number;
  unsafeCrossOriginLinks: number;
}

export interface CanonicalStats {
  total: number;
  containsCanonical: number;
  containsCanonicalPct: number;
  selfReferencing: number;
  canonicalised: number;
  missing: number;
  missingPct: number;
  nonIndexableCanonical: number;
}

export interface LighthouseRun {
  formFactor: 'mobile' | 'desktop';
  url: string;
  performanceScore: number;
  fcp: number; // seconds
  lcp: number; // seconds
  cls: number; // raw score
  tbt: number; // milliseconds
  speedIndex: number; // seconds
  ttfb: number; // milliseconds
}

export interface SEOScoreBreakdown {
  factor: string;
  score: number;
  weight: number;
  weighted: number;
}
