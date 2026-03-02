import './index.css';
import Header from './components/Header';
import ScoreGauge from './components/ScoreGauge';
import Performance from './sections/Performance';
import CustomerJourney from './sections/CustomerJourney';
import Conversion from './sections/Conversion';
import Tracking from './sections/Tracking';
import NinetyDay from './sections/NinetyDay';
import { CLIENT_NAME, CRAWL_DATE, CRAWL_URL, calcSEOScore } from './data/crawlData';

const { score: seoScore } = calcSEOScore();

const auditSummary =
  'The ozk.com site performs well on desktop but critically fails on mobile (score 49), has zero structured data, 100% of images missing size attributes, and 49% of pages without canonical tags — all representing high-priority SEO and performance opportunities.';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Overview Hero */}
        <section id="overview" className="scroll-mt-16 mb-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#e40046] px-6 py-5">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-white text-2xl font-bold">{CLIENT_NAME}</h1>
                  <p className="text-red-200 text-sm mt-1">Digital Experience Audit</p>
                  <a
                    href={CRAWL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-xs mt-1 block hover:text-white underline"
                  >
                    {CRAWL_URL}
                  </a>
                </div>
                <div className="text-right text-white">
                  <div className="text-sm opacity-75">Crawl Date</div>
                  <div className="font-bold">{CRAWL_DATE}</div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <ScoreGauge score={seoScore} label="SEO Opportunity Score" size={160} />
                  <p className="text-xs text-gray-500 text-center max-w-[140px]">
                    Lower score = more opportunity
                  </p>
                </div>

                <div className="flex-1">
                  <h2 className="font-bold text-gray-800 mb-2">Audit Summary</h2>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{auditSummary}</p>

                  <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                    Top 3 Findings by Severity
                  </h3>
                  <div className="space-y-2">
                    {[
                      {
                        rank: 1,
                        finding: 'Zero structured data across all 124 HTML pages — no rich snippets, no entity disambiguation',
                        severity: 'Critical',
                      },
                      {
                        rank: 2,
                        finding: 'Mobile Lighthouse score 49 with 7.42s LCP — high mobile bounce risk for organic visitors',
                        severity: 'Critical',
                      },
                      {
                        rank: 3,
                        finding: '100% of images missing size attributes + 85.8% over 100KB — CLS and LCP degradation',
                        severity: 'Critical',
                      },
                    ].map((item) => (
                      <div key={item.rank} className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-[#e40046] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {item.rank}
                        </div>
                        <div>
                          <span className="text-xs font-bold bg-red-100 text-red-800 px-1.5 py-0.5 rounded mr-2">
                            {item.severity}
                          </span>
                          <span className="text-sm text-gray-700">{item.finding}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Performance />
        <CustomerJourney />
        <Conversion />
        <Tracking />
        <NinetyDay />
      </main>

      <footer className="bg-[#231f20] text-gray-400 text-xs text-center py-4 mt-8">
        {CLIENT_NAME} Digital Experience Audit — {CRAWL_DATE} — Confidential
      </footer>
    </div>
  );
}
