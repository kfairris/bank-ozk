// Site Analysis — manually observed or inferred findings
// Items marked [UNCONFIRMED] require verification against live site or analytics

export interface TrackingTool {
  name: string;
  detected: boolean;
  notes: string;
  confirmed: boolean;
}

export interface CTAObservation {
  location: string;
  label: string;
  clickDepth: number;
  notes: string;
}

export interface JourneyFriction {
  journey: string;
  frictionPoint: string;
  severity: 'high' | 'medium' | 'low';
  confirmed: boolean;
}

// Tracking stack — [UNCONFIRMED] inferred from page structure; validate in DevTools
export const trackingStack: TrackingTool[] = [
  {
    name: 'Google Tag Manager',
    detected: false,
    notes: '[UNCONFIRMED] Common for mid-sized banks; presence not verified in crawl',
    confirmed: false,
  },
  {
    name: 'Google Analytics 4',
    detected: false,
    notes: '[UNCONFIRMED] No GA session data present in Screaming Frog export',
    confirmed: false,
  },
  {
    name: 'Adobe Analytics',
    detected: false,
    notes: '[UNCONFIRMED] Used by some regional banks; requires manual verification',
    confirmed: false,
  },
];

// Key CTA locations — [UNCONFIRMED] inferred from top inlinks and site structure
export const ctaObservations: CTAObservation[] = [
  {
    location: 'Global nav',
    label: 'Log In',
    clickDepth: 1,
    notes: 'Login page at /login/ — present in top inlinks at depth 1',
  },
  {
    location: 'Personal landing',
    label: 'Open an Account',
    clickDepth: 2,
    notes: '[UNCONFIRMED] Expected CTA on personal/ — not verified in crawl data',
  },
  {
    location: 'Checking accounts',
    label: 'Apply Now',
    clickDepth: 2,
    notes: '[UNCONFIRMED] Expected on /personal/checking-accounts/ — top-inlinked page',
  },
  {
    location: 'Savings',
    label: 'Open Savings Account',
    clickDepth: 2,
    notes: '[UNCONFIRMED] Expected on /personal/savings/ — top-inlinked page',
  },
];

// Journey friction points — [UNCONFIRMED] inferred from crawl depth distribution
export const journeyFriction: JourneyFriction[] = [
  {
    journey: 'Product discovery → Application',
    frictionPoint: '50% of pages buried at depth 4 — high click depth for key products',
    severity: 'high',
    confirmed: true, // confirmed from crawl depth data
  },
  {
    journey: 'Trust & Wealth navigation',
    frictionPoint: 'Trust/Wealth section accessible at depth 1 via nav but 43% of H1s duplicated — confusing content hierarchy',
    severity: 'medium',
    confirmed: true, // confirmed from H1 duplicate data
  },
  {
    journey: 'SEO-driven landing → CTA',
    frictionPoint: '0 pages have structured data — rich snippets unavailable, reducing organic CTR',
    severity: 'high',
    confirmed: true, // confirmed from structured data = 0
  },
  {
    journey: 'Mobile banking onboarding',
    frictionPoint: '[UNCONFIRMED] Mobile Lighthouse score 49 — slow LCP (7.42s) creates high bounce risk on mobile entry',
    severity: 'high',
    confirmed: false,
  },
  {
    journey: 'Learning Center engagement',
    frictionPoint: '50.7% of pages flagged as low content — thin content may reduce trust and dwell time',
    severity: 'medium',
    confirmed: true, // confirmed from content data
  },
];

// Nav gap observations — [UNCONFIRMED]
export const navGapNotes: string[] = [
  '124 pages (100%) link to /business/, /community/, /savings/ etc — sitewide nav is comprehensive',
  '[UNCONFIRMED] No breadcrumb structured data detected — breadcrumb markup would help orientation',
  '49.3% of pages missing canonical tags — crawl may surface duplicate content to search engines',
  'Internal outlinks without anchor text: 54 pages (43.6%) — impacts internal link equity signals',
];
