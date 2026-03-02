import { useState, useEffect } from 'react';
import { CLIENT_NAME } from '../data/crawlData';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'performance', label: 'Performance' },
  { id: 'journey', label: 'Customer Journey' },
  { id: 'conversion', label: 'Conversion' },
  { id: 'tracking', label: 'Tracking' },
  { id: 'ninetyDay', label: '90-Day Plan' },
];

export default function Header() {
  const [active, setActive] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#231f20] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <span className="text-white font-bold text-sm tracking-wide">
          {CLIENT_NAME} — Digital Experience Audit
        </span>
        <nav className="flex gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                active === id
                  ? 'bg-[#e40046] text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
