interface ScoreGaugeProps {
  score: number;
  label: string;
  size?: number;
}

function getColor(score: number): string {
  if (score >= 90) return '#22c55e';
  if (score >= 50) return '#f59e0b';
  return '#e40046';
}

function getLabel(score: number): string {
  if (score >= 90) return 'Good';
  if (score >= 50) return 'Needs Work';
  return 'Poor';
}

export default function ScoreGauge({ score, label, size = 120 }: ScoreGaugeProps) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  // Use 270° arc (3/4 circle) for gauge effect
  const arcLength = circumference * 0.75;
  const filled = arcLength * (score / 100);
  const color = getColor(score);
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} className="-rotate-[135deg]">
        {/* Track */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={10}
          strokeDasharray={`${arcLength} ${circumference - arcLength}`}
          strokeLinecap="round"
        />
        {/* Fill */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={10}
          strokeDasharray={`${filled} ${circumference - filled}`}
          strokeLinecap="round"
          style={{ transition: 'stroke-dasharray 0.6s ease' }}
        />
      </svg>
      <div className="text-center -mt-12">
        <div className="text-3xl font-bold" style={{ color }}>{score}</div>
        <div className="text-xs text-gray-500 font-medium">{getLabel(score)}</div>
      </div>
      <div className="text-sm font-semibold text-gray-700 mt-2">{label}</div>
    </div>
  );
}
