import SectionCard from '../components/SectionCard';
import { trackingStack } from '../data/siteAnalysis';

const eventRecommendations = [
  {
    event: 'account_application_start',
    trigger: 'User clicks "Apply Now" or "Open Account" CTA',
    priority: 'P0',
    notes: 'Core conversion event — must fire before form step 1',
  },
  {
    event: 'account_application_complete',
    trigger: 'Successful form submission / confirmation page load',
    priority: 'P0',
    notes: 'Primary goal; track form_id and account_type as parameters',
  },
  {
    event: 'login_click',
    trigger: 'User clicks "Log In" in nav or hero',
    priority: 'P1',
    notes: 'Proxy for existing customer engagement rate',
  },
  {
    event: 'product_page_view',
    trigger: 'Page view on any /personal/, /business/, /trust-wealth/ product page',
    priority: 'P1',
    notes: 'Include product_category and page_depth parameters',
  },
  {
    event: 'branch_locator_search',
    trigger: 'Search submitted on /locations/ page',
    priority: 'P1',
    notes: 'Indicates high-intent local user; track search_query',
  },
  {
    event: 'content_engagement',
    trigger: 'User scrolls 50%+ of a Learning Center article',
    priority: 'P2',
    notes: 'Top-of-funnel signal; correlate with downstream application events',
  },
  {
    event: 'calculator_use',
    trigger: 'User interacts with any loan/savings calculator',
    priority: 'P2',
    notes: '[UNCONFIRMED] Requires verification that calculators exist on site',
  },
];

const priorityColor: Record<string, string> = {
  P0: 'bg-red-100 text-red-800',
  P1: 'bg-amber-100 text-amber-800',
  P2: 'bg-blue-100 text-blue-800',
};

export default function Tracking() {
  return (
    <SectionCard
      id="tracking"
      title="Tracking & Analytics"
      subtitle="Signal checklist and event architecture recommendations"
    >
      {/* Tracking Stack */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Detected Tracking Stack{' '}
        <span className="text-gray-400 font-normal normal-case">(all unconfirmed — verify in DevTools)</span>
      </h3>
      <div className="space-y-1 mb-6">
        {trackingStack.map((tool, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded border border-gray-200">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                tool.detected ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              {tool.detected ? (
                <span className="text-white text-xs">✓</span>
              ) : (
                <span className="text-white text-xs">?</span>
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-800">{tool.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{tool.notes}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-amber-800 text-sm mb-1">Action Required</h4>
        <p className="text-xs text-amber-700">
          No analytics or Search Console data was present in the Screaming Frog export. Confirm the
          tracking setup by inspecting the live site in Chrome DevTools (Network tab, filter by
          "collect" or "gtag") before implementing the event recommendations below.
        </p>
      </div>

      {/* Event Architecture */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Recommended Event Architecture
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-3 py-2 font-semibold text-gray-700">Event Name</th>
              <th className="text-left px-3 py-2 font-semibold text-gray-700">Trigger</th>
              <th className="text-center px-3 py-2 font-semibold text-gray-700">Priority</th>
              <th className="text-left px-3 py-2 font-semibold text-gray-700">Notes</th>
            </tr>
          </thead>
          <tbody>
            {eventRecommendations.map((ev, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="px-3 py-2 font-mono text-xs text-gray-800">{ev.event}</td>
                <td className="px-3 py-2 text-xs text-gray-600">{ev.trigger}</td>
                <td className="px-3 py-2 text-center">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${priorityColor[ev.priority]}`}>
                    {ev.priority}
                  </span>
                </td>
                <td className="px-3 py-2 text-xs text-gray-500">{ev.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 border-l-4 border-[#4d3157] bg-purple-50 rounded-r">
        <h4 className="font-semibold text-purple-800 text-sm mb-1">GA4 Conversion Configuration</h4>
        <p className="text-xs text-purple-700">
          Mark <span className="font-mono">account_application_complete</span> as a key event in GA4.
          Build a funnel exploration from <span className="font-mono">product_page_view</span> →
          <span className="font-mono"> account_application_start</span> →
          <span className="font-mono"> account_application_complete</span> to measure drop-off at
          each step. [UNCONFIRMED — pending analytics verification]
        </p>
      </div>
    </SectionCard>
  );
}
