import type { ReactNode } from 'react';

interface SectionCardProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function SectionCard({ id, title, subtitle, children }: SectionCardProps) {
  return (
    <section id={id} className="scroll-mt-16 mb-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-[#231f20] px-6 py-4">
          <h2 className="text-white text-lg font-bold">{title}</h2>
          {subtitle && <p className="text-gray-400 text-sm mt-0.5">{subtitle}</p>}
        </div>
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
}
