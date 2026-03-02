interface MetricRowProps {
  label: string;
  value: string | number;
  status?: 'red' | 'amber' | 'green' | 'neutral';
  note?: string;
}

const statusStyles = {
  red: 'bg-red-50 border-l-4 border-red-400',
  amber: 'bg-amber-50 border-l-4 border-amber-400',
  green: 'bg-green-50 border-l-4 border-green-400',
  neutral: 'bg-gray-50 border-l-4 border-gray-300',
};

const valueBadge = {
  red: 'bg-red-100 text-red-800',
  amber: 'bg-amber-100 text-amber-800',
  green: 'bg-green-100 text-green-800',
  neutral: 'bg-gray-100 text-gray-700',
};

export default function MetricRow({ label, value, status = 'neutral', note }: MetricRowProps) {
  return (
    <div className={`flex items-center justify-between px-4 py-2.5 rounded mb-1 ${statusStyles[status]}`}>
      <div>
        <span className="text-sm font-medium text-gray-800">{label}</span>
        {note && <p className="text-xs text-gray-500 mt-0.5">{note}</p>}
      </div>
      <span className={`text-sm font-bold px-2 py-0.5 rounded ${valueBadge[status]}`}>
        {value}
      </span>
    </div>
  );
}
