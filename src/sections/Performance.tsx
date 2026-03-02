import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import SectionCard from '../components/SectionCard';
import ScoreGauge from '../components/ScoreGauge';
import MetricRow from '../components/MetricRow';
import { lighthouseRuns, crawlStats, seoStats, imageStats, securityStats, canonicalStats } from '../data/crawlData';

function lcpStatus(lcp: number) {
  if (lcp <= 2.5) return 'green';
  if (lcp <= 4.0) return 'amber';
  return 'red';
}

function tbtStatus(tbt: number) {
  if (tbt <= 200) return 'green';
  if (tbt <= 600) return 'amber';
  return 'red';
}

function clsStatus(cls: number) {
  if (cls <= 0.1) return 'green';
  if (cls <= 0.25) return 'amber';
  return 'red';
}

function fcpStatus(fcp: number) {
  if (fcp <= 1.8) return 'green';
  if (fcp <= 3.0) return 'amber';
  return 'red';
}

export default function Performance() {
  const depthData = crawlStats.crawlDepth.map((d) => ({
    depth: `Depth ${d.depth}`,
    pages: d.pages,
  }));

  return (
    <SectionCard
      id="performance"
      title="Performance & Technical SEO"
      subtitle="Lighthouse scores, Core Web Vitals, crawl health"
    >
      {/* Lighthouse Gauges */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-4">
        Lighthouse Performance Scores
      </h3>
      <div className="flex gap-8 justify-center mb-8 flex-wrap">
        {lighthouseRuns.map((run) => (
          <ScoreGauge
            key={run.formFactor}
            score={run.performanceScore}
            label={run.formFactor === 'mobile' ? 'Mobile' : 'Desktop'}
            size={140}
          />
        ))}
      </div>

      {/* Core Web Vitals */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Core Web Vitals
      </h3>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-3 py-2 font-semibold text-gray-700">Metric</th>
              <th className="text-center px-3 py-2 font-semibold text-gray-700">Mobile</th>
              <th className="text-center px-3 py-2 font-semibold text-gray-700">Desktop</th>
              <th className="text-center px-3 py-2 font-semibold text-gray-700">Threshold</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                label: 'LCP (Largest Contentful Paint)',
                mobile: `${lighthouseRuns[0].lcp}s`,
                desktop: `${lighthouseRuns[1].lcp}s`,
                threshold: '≤ 2.5s',
                mobileStatus: lcpStatus(lighthouseRuns[0].lcp),
                desktopStatus: lcpStatus(lighthouseRuns[1].lcp),
              },
              {
                label: 'FCP (First Contentful Paint)',
                mobile: `${lighthouseRuns[0].fcp}s`,
                desktop: `${lighthouseRuns[1].fcp}s`,
                threshold: '≤ 1.8s',
                mobileStatus: fcpStatus(lighthouseRuns[0].fcp),
                desktopStatus: fcpStatus(lighthouseRuns[1].fcp),
              },
              {
                label: 'CLS (Cumulative Layout Shift)',
                mobile: lighthouseRuns[0].cls.toFixed(3),
                desktop: lighthouseRuns[1].cls.toFixed(3),
                threshold: '≤ 0.1',
                mobileStatus: clsStatus(lighthouseRuns[0].cls),
                desktopStatus: clsStatus(lighthouseRuns[1].cls),
              },
              {
                label: 'TBT (Total Blocking Time)',
                mobile: `${lighthouseRuns[0].tbt}ms`,
                desktop: `${lighthouseRuns[1].tbt}ms`,
                threshold: '≤ 200ms',
                mobileStatus: tbtStatus(lighthouseRuns[0].tbt),
                desktopStatus: tbtStatus(lighthouseRuns[1].tbt),
              },
              {
                label: 'Speed Index',
                mobile: `${lighthouseRuns[0].speedIndex}s`,
                desktop: `${lighthouseRuns[1].speedIndex}s`,
                threshold: '≤ 3.4s',
                mobileStatus: lighthouseRuns[0].speedIndex <= 3.4 ? 'green' : lighthouseRuns[0].speedIndex <= 5.8 ? 'amber' : 'red',
                desktopStatus: lighthouseRuns[1].speedIndex <= 3.4 ? 'green' : 'amber',
              },
              {
                label: 'TTFB (Server Response)',
                mobile: `${lighthouseRuns[0].ttfb}ms`,
                desktop: `${lighthouseRuns[1].ttfb}ms`,
                threshold: '≤ 200ms',
                mobileStatus: lighthouseRuns[0].ttfb <= 200 ? 'green' : 'amber',
                desktopStatus: lighthouseRuns[1].ttfb <= 200 ? 'green' : 'amber',
              },
            ].map((row) => (
              <tr key={row.label} className="border-b border-gray-100">
                <td className="px-3 py-2 text-gray-700">{row.label}</td>
                <td className="px-3 py-2 text-center">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-bold ${
                      row.mobileStatus === 'green'
                        ? 'bg-green-100 text-green-800'
                        : row.mobileStatus === 'amber'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {row.mobile}
                  </span>
                </td>
                <td className="px-3 py-2 text-center">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-bold ${
                      row.desktopStatus === 'green'
                        ? 'bg-green-100 text-green-800'
                        : row.desktopStatus === 'amber'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {row.desktop}
                  </span>
                </td>
                <td className="px-3 py-2 text-center text-gray-500 text-xs">{row.threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Crawl Issues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
            Page Title Issues
          </h3>
          <MetricRow label="Missing" value={seoStats.titles.missing} status="green" />
          <MetricRow label="Duplicate" value={seoStats.titles.duplicate} status={seoStats.titles.duplicate > 0 ? 'amber' : 'green'} />
          <MetricRow
            label="Below 30 characters"
            value={`${seoStats.titles.below30Chars} (${seoStats.titles.below30CharsPct}%)`}
            status="red"
            note="62% of pages have very short titles — keyword opportunity lost"
          />
          <MetricRow label="Over 60 characters" value={seoStats.titles.over60Chars} status="amber" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
            Meta Description Issues
          </h3>
          <MetricRow label="Missing" value={`${seoStats.metaDescription.missing} (${seoStats.metaDescription.missingPct}%)`} status="amber" />
          <MetricRow label="Duplicate" value={seoStats.metaDescription.duplicate} status="amber" />
          <MetricRow label="Over 155 characters" value={seoStats.metaDescription.over155Chars} status="amber" />
          <MetricRow label="Below 70 characters" value={seoStats.metaDescription.below70Chars} status="amber" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
            H1 Issues
          </h3>
          <MetricRow label="Missing" value={seoStats.h1.missing} status="green" />
          <MetricRow label="Duplicate" value={`${seoStats.h1.duplicate} (${seoStats.h1.duplicatePct}%)`} status="red" />
          <MetricRow
            label="Multiple H1s"
            value={`${seoStats.h1.multiple} (${seoStats.h1.multiplePct}%)`}
            status="red"
            note="43% of pages have multiple H1s — structural SEO issue"
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
            Image Issues
          </h3>
          <MetricRow
            label="Over 100 KB"
            value={`${imageStats.over100KB} (${imageStats.over100KBPct}%)`}
            status="red"
            note="85.8% of images unoptimised — major LCP contributor"
          />
          <MetricRow
            label="Missing size attributes"
            value={`${imageStats.missingSizeAttributes} (${imageStats.missingSizeAttributesPct}%)`}
            status="red"
            note="100% missing width/height — CLS risk on all pages"
          />
          <MetricRow label="Missing alt text" value={`${imageStats.missingAltText} (${imageStats.missingAltTextPct}%)`} status="green" />
        </div>
      </div>

      {/* Canonicals & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
            Canonical Status
          </h3>
          <MetricRow
            label="Missing canonical"
            value={`${canonicalStats.missing} (${canonicalStats.missingPct}%)`}
            status="red"
            note="49% of pages expose duplicate content risk"
          />
          <MetricRow label="Self-referencing" value={canonicalStats.selfReferencing} status="green" />
          <MetricRow label="Canonicalised (de-indexed)" value={canonicalStats.canonicalised} status="green" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
            Security Headers
          </h3>
          <MetricRow label="HTTP URLs" value={securityStats.httpURLs} status="green" />
          <MetricRow label="Missing HSTS" value={securityStats.missingHSTS} status="green" />
          <MetricRow label="Missing CSP" value={securityStats.missingCSP} status="amber" />
          <MetricRow
            label="Missing Referrer-Policy"
            value={`${securityStats.missingReferrerPolicy} (${securityStats.missingReferrerPolicyPct}%)`}
            status="red"
            note="88% of URLs lack Secure Referrer-Policy header"
          />
        </div>
      </div>

      {/* Crawl Depth Chart */}
      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-3">
        Crawl Depth Distribution
      </h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={depthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="depth" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="pages" radius={[4, 4, 0, 0]}>
              {depthData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.pages > 30 ? '#e40046' : entry.pages > 10 ? '#f59e0b' : '#4d3157'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        50% of HTML pages are at depth 4 — deep navigation reduces crawl efficiency and user discoverability.
      </p>
    </SectionCard>
  );
}
