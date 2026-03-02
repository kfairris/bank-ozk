import SectionCard from '../components/SectionCard';

interface Action {
  task: string;
  owner: string;
  impact: string;
  metric: string;
}

const thirtyDay: Action[] = [
  {
    task: 'Add canonical tags to all 68 pages missing them',
    owner: 'Dev',
    impact: 'High',
    metric: 'Canonical coverage: 50.7% → 100%',
  },
  {
    task: 'Rewrite page titles on 77 pages below 30 characters — template: [Product] | Bank OZK | [Benefit]',
    owner: 'SEO / Content',
    impact: 'High',
    metric: 'Avg title length: <30 chars → 45–60 chars',
  },
  {
    task: 'Fix multiple H1s on 54 pages — ensure single, keyword-rich H1 per page',
    owner: 'Dev / Content',
    impact: 'High',
    metric: 'Multiple H1: 43.6% → 0%',
  },
  {
    task: 'Add width & height attributes to all 176 images',
    owner: 'Dev',
    impact: 'High',
    metric: 'Missing size attrs: 100% → 0%; CLS improvement',
  },
  {
    task: 'Audit and fix 4 internal 4xx pages — update or remove broken links',
    owner: 'Dev',
    impact: 'Medium',
    metric: 'Internal 4xx: 4 → 0',
  },
  {
    task: 'Implement BreadcrumbList and Organization schema on all pages',
    owner: 'Dev',
    impact: 'High',
    metric: 'Pages with SD: 0 → 100%',
  },
];

const sixtyDay: Action[] = [
  {
    task: 'Implement WebP conversion pipeline for all images — target <100KB per image',
    owner: 'Dev / Design',
    impact: 'High',
    metric: 'Images >100KB: 85.8% → <10%',
  },
  {
    task: 'Add BankAccount / FinancialProduct schema to all product pages',
    owner: 'Dev',
    impact: 'High',
    metric: 'Rich result eligibility for product pages',
  },
  {
    task: 'Reduce depth-4 pages by adding cross-links and hub navigation',
    owner: 'UX / Dev',
    impact: 'Medium',
    metric: 'Depth-4 pages: 62 → <20',
  },
  {
    task: 'Add Secure Referrer-Policy header sitewide',
    owner: 'Dev / Infra',
    impact: 'Medium',
    metric: 'Missing Referrer-Policy: 88% → 0%',
  },
  {
    task: 'Confirm and document analytics tracking setup; deploy P0 events',
    owner: 'Analytics',
    impact: 'High',
    metric: 'account_application_complete firing correctly',
  },
  {
    task: 'Audit and update 50 meta descriptions below 70 characters',
    owner: 'SEO / Content',
    impact: 'Medium',
    metric: 'Meta desc below 70 chars: 50 → 0',
  },
];

const ninetyDay: Action[] = [
  {
    task: 'FAQPage schema on Learning Center and product pages',
    owner: 'Dev / Content',
    impact: 'Medium',
    metric: 'FAQ rich results in SERPs for key queries',
  },
  {
    task: 'Implement GA4 funnel exploration and set conversion events',
    owner: 'Analytics',
    impact: 'High',
    metric: 'Funnel visibility from product view → application complete',
  },
  {
    task: 'Resolve H1 duplicates on 44 pages — differentiate content signals',
    owner: 'Content',
    impact: 'Medium',
    metric: 'Duplicate H1: 35.5% → <5%',
  },
  {
    task: 'Add Content-Security-Policy header (1 page currently missing)',
    owner: 'Dev / Infra',
    impact: 'Low',
    metric: 'Missing CSP: 1 → 0',
  },
  {
    task: 'Content audit — expand or consolidate 70 low-content pages',
    owner: 'Content',
    impact: 'Medium',
    metric: 'Low content pages: 50.7% → <20%',
  },
  {
    task: 'Internal link audit — add descriptive anchor text to 54 pages with empty anchors',
    owner: 'Content / Dev',
    impact: 'Medium',
    metric: 'Pages with no-anchor-text outlinks: 43.6% → <10%',
  },
];

const impactColor: Record<string, string> = {
  High: 'text-red-700',
  Medium: 'text-amber-700',
  Low: 'text-green-700',
};

function ActionTable({ actions }: { actions: Action[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-3 py-2 font-semibold text-gray-700">Task</th>
            <th className="text-center px-3 py-2 font-semibold text-gray-700">Owner</th>
            <th className="text-center px-3 py-2 font-semibold text-gray-700">Impact</th>
            <th className="text-left px-3 py-2 font-semibold text-gray-700">Success Metric</th>
          </tr>
        </thead>
        <tbody>
          {actions.map((a, i) => (
            <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-3 py-2.5 text-gray-800">{a.task}</td>
              <td className="px-3 py-2.5 text-center text-xs font-medium text-gray-600 whitespace-nowrap">
                {a.owner}
              </td>
              <td className={`px-3 py-2.5 text-center text-xs font-bold ${impactColor[a.impact]}`}>
                {a.impact}
              </td>
              <td className="px-3 py-2.5 text-xs text-gray-500">{a.metric}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NinetyDay() {
  return (
    <SectionCard
      id="ninetyDay"
      title="90-Day Action Plan"
      subtitle="Prioritised by SEO impact — derived from audit findings"
    >
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#e40046] flex items-center justify-center text-white font-bold text-sm shrink-0">
              30
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Days 1–30: Foundation Fixes</h3>
              <p className="text-xs text-gray-500">Quick wins — high impact, low-to-medium effort</p>
            </div>
          </div>
          <ActionTable actions={thirtyDay} />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#4d3157] flex items-center justify-center text-white font-bold text-sm shrink-0">
              60
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Days 31–60: Performance & Structure</h3>
              <p className="text-xs text-gray-500">Technical improvements requiring dev effort</p>
            </div>
          </div>
          <ActionTable actions={sixtyDay} />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#231f20] flex items-center justify-center text-white font-bold text-sm shrink-0">
              90
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Days 61–90: Content & Analytics</h3>
              <p className="text-xs text-gray-500">Sustaining improvements and measurement</p>
            </div>
          </div>
          <ActionTable actions={ninetyDay} />
        </div>
      </div>
    </SectionCard>
  );
}
