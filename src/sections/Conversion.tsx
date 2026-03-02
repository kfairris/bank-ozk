import SectionCard from '../components/SectionCard';
import MetricRow from '../components/MetricRow';
import { seoStats, crawlStats } from '../data/crawlData';

const proposals = [
  {
    title: 'Add Schema Markup Sitewide',
    impact: 'High',
    effort: 'Medium',
    details:
      'Zero structured data on all 124 HTML pages. Implement Organization, BankAccount, BreadcrumbList, and FAQPage schemas. Expected: rich snippets in SERPs improve organic CTR by 15–30%.',
  },
  {
    title: 'Fix Page Titles (Below 30 chars)',
    impact: 'High',
    effort: 'Low',
    details:
      '77 pages have titles under 30 characters. Short titles miss keyword targeting and reduce click-through. Template: "{Product Name} | Bank OZK | {Location or Benefit}".',
  },
  {
    title: 'Resolve Multiple H1s',
    impact: 'Medium',
    effort: 'Low',
    details:
      '54 pages (43.6%) carry multiple H1 elements, likely from component-based rendering. Each page should have exactly one H1 that matches the primary keyword intent.',
  },
  {
    title: 'Add Canonical Tags to 68 Missing Pages',
    impact: 'High',
    effort: 'Low',
    details:
      '49.3% of pages lack canonical tags. This leaves search engines to choose the canonical, risking duplicate content dilution for product and location pages.',
  },
  {
    title: 'Image Optimisation Pipeline',
    impact: 'High',
    effort: 'High',
    details:
      '151 images exceed 100KB (85.8%) and all 176 images lack width/height attributes. Introduce a WebP conversion + CDN pipeline and add dimensions to all img tags to eliminate CLS.',
  },
  {
    title: 'Reduce Depth-4 Content to ≤3 Clicks',
    impact: 'Medium',
    effort: 'High',
    details:
      '62 pages sit at depth 4. Restructure navigation hubs or add contextual cross-links to reduce click depth for key product pages to 2–3 clicks maximum.',
  },
];

const impactColor = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-amber-100 text-amber-800',
  Low: 'bg-green-100 text-green-800',
};

const effortColor = {
  High: 'bg-purple-100 text-purple-800',
  Medium: 'bg-blue-100 text-blue-800',
  Low: 'bg-green-100 text-green-800',
};

export default function Conversion() {
  return (
    <SectionCard
      id="conversion"
      title="Conversion Opportunities"
      subtitle="CTA audit, structured data, prioritised SEO proposals"
    >
      {/* Structured Data Status */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Structured Data Status
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl font-bold text-red-600">0</span>
          <div>
            <div className="font-semibold text-red-800">Pages with Structured Data</div>
            <div className="text-xs text-red-600">Out of {seoStats.totalHTMLPages} internal HTML pages</div>
          </div>
        </div>
        <p className="text-sm text-red-700">
          Bank OZK has no structured data implemented anywhere on the site. This means no rich snippets,
          no breadcrumbs in search results, no FAQ accordions, and no entity disambiguation with Google's
          Knowledge Graph. This is a significant missed opportunity for a financial brand.
        </p>
      </div>

      {/* Response Code Summary */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Crawl Health
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: '2xx Success', value: crawlStats.responseCodes.success2xx, color: 'green' },
          { label: '3xx Redirects', value: crawlStats.responseCodes.redirect3xx, color: 'amber' },
          { label: 'Internal 3xx', value: crawlStats.responseCodes.internalRedirect3xx, color: 'amber' },
          { label: '4xx Errors', value: crawlStats.responseCodes.clientError4xx, color: 'red' },
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-lg p-3 text-center ${
              item.color === 'green'
                ? 'bg-green-50 border border-green-200'
                : item.color === 'amber'
                ? 'bg-amber-50 border border-amber-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            <div
              className={`text-2xl font-bold ${
                item.color === 'green'
                  ? 'text-green-700'
                  : item.color === 'amber'
                  ? 'text-amber-700'
                  : 'text-red-700'
              }`}
            >
              {item.value}
            </div>
            <div className="text-xs text-gray-600 mt-1">{item.label}</div>
          </div>
        ))}
      </div>
      <MetricRow
        label="4xx Client Errors (internal)"
        value="4 pages"
        status="red"
        note="4 internal URLs return 4xx — these break internal link equity and create dead ends"
      />
      <MetricRow
        label="Internal redirects"
        value="39 redirects"
        status="amber"
        note="Each redirect adds latency; audit chains and update source links where possible"
      />

      {/* Proposals */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mt-6 mb-3">
        Prioritised Conversion Proposals
      </h3>
      <div className="space-y-3">
        {proposals.map((p, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h4 className="font-semibold text-gray-800 text-sm">{p.title}</h4>
              <div className="flex gap-1.5 shrink-0">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${impactColor[p.impact as keyof typeof impactColor]}`}>
                  {p.impact} impact
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${effortColor[p.effort as keyof typeof effortColor]}`}>
                  {p.effort} effort
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{p.details}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
