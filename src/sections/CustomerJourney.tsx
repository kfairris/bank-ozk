import SectionCard from '../components/SectionCard';
import JourneyMap from '../components/JourneyMap';
import MetricRow from '../components/MetricRow';
import { journeyFriction, ctaObservations, navGapNotes } from '../data/siteAnalysis';
import { crawlStats } from '../data/crawlData';

export default function CustomerJourney() {
  return (
    <SectionCard
      id="journey"
      title="Customer Journey Analysis"
      subtitle="Click depth, journey friction, navigation gaps"
    >
      {/* Key Journeys */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-4">
        Top Task Journeys
      </h3>
      <JourneyMap
        title="Personal Banking — Open Checking Account"
        steps={[
          { label: 'Homepage', depth: 0 },
          { label: 'Personal', depth: 1 },
          { label: 'Checking Accounts', depth: 2 },
          { label: 'Apply', depth: 3 },
        ]}
      />
      <JourneyMap
        title="Business Banking — Discover Products"
        steps={[
          { label: 'Homepage', depth: 0 },
          { label: 'Business', depth: 1 },
          { label: 'Checking Accounts', depth: 2 },
          { label: 'Product Detail', depth: 3 },
          { label: 'Apply / Contact', depth: 4, friction: true },
        ]}
      />
      <JourneyMap
        title="Trust & Wealth — Advisory Services"
        steps={[
          { label: 'Homepage', depth: 0 },
          { label: 'Trust & Wealth', depth: 1 },
          { label: 'Wealth Management', depth: 2 },
          { label: 'Trust & Estate', depth: 2 },
          { label: 'Contact', depth: 3 },
        ]}
      />
      <JourneyMap
        title="Learning Center — Content Engagement"
        steps={[
          { label: 'Organic Search', depth: 0 },
          { label: 'Learning Center', depth: 1 },
          { label: 'Article', depth: 4, friction: true },
          { label: 'Related Product', depth: 4, friction: true },
        ]}
      />

      {/* Crawl Depth Summary */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-amber-800 text-sm mb-2">Depth Distribution Finding</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {crawlStats.crawlDepth.filter((d) => d.pages > 0).map((d) => (
            <div key={d.depth} className="text-center">
              <div className="text-lg font-bold text-gray-800">{d.pages}</div>
              <div className="text-xs text-gray-500">Depth {d.depth} pages</div>
              <div className="text-xs font-medium text-amber-700">{d.pct}%</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-amber-700 mt-3">
          Half of all HTML pages sit at depth 4 — users and search crawlers must navigate 4+ clicks
          to reach key product content.
        </p>
      </div>

      {/* CTA Observations */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        CTA Locations <span className="text-gray-400 font-normal normal-case">(some unconfirmed — see labels)</span>
      </h3>
      <div className="space-y-1 mb-6">
        {ctaObservations.map((cta, i) => (
          <MetricRow
            key={i}
            label={`${cta.location} — "${cta.label}"`}
            value={`D${cta.clickDepth}`}
            status={cta.clickDepth <= 2 ? 'green' : 'amber'}
            note={cta.notes}
          />
        ))}
      </div>

      {/* Friction Points */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Journey Friction Points
      </h3>
      <div className="space-y-2 mb-6">
        {journeyFriction.map((fp, i) => (
          <div
            key={i}
            className={`rounded-lg p-3 border-l-4 ${
              fp.severity === 'high'
                ? 'bg-red-50 border-red-400'
                : fp.severity === 'medium'
                ? 'bg-amber-50 border-amber-400'
                : 'bg-blue-50 border-blue-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-gray-600 mb-0.5">{fp.journey}</div>
                <div className="text-sm text-gray-800">{fp.frictionPoint}</div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded shrink-0 ${
                  fp.severity === 'high'
                    ? 'bg-red-100 text-red-700'
                    : fp.severity === 'medium'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {fp.severity.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Nav Gaps */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Navigation Observations
      </h3>
      <ul className="space-y-1.5">
        {navGapNotes.map((note, i) => (
          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
            <span className="text-[#e40046] mt-0.5">•</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
