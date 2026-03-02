interface Step {
  label: string;
  depth?: number;
  friction?: boolean;
}

interface JourneyMapProps {
  title: string;
  steps: Step[];
}

export default function JourneyMap({ title, steps }: JourneyMapProps) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-bold text-gray-700 mb-3">{title}</h4>
      <div className="flex items-center flex-wrap gap-1">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-1">
            <div
              className={`px-3 py-1.5 rounded text-xs font-medium ${
                step.friction
                  ? 'bg-red-100 text-red-800 border border-red-300'
                  : 'bg-[#e40046]/10 text-[#e40046] border border-[#e40046]/30'
              }`}
            >
              {step.depth !== undefined && (
                <span className="text-[10px] opacity-60 mr-1">D{step.depth}</span>
              )}
              {step.label}
              {step.friction && <span className="ml-1">⚠</span>}
            </div>
            {i < steps.length - 1 && (
              <span className="text-gray-400 text-xs">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
