import { Tooltip } from "./Tooltip";

type MetricCardProps = {
  label: string;
  value: string;
  accent?: string;
  tooltipTitle?: string;
  tooltipContent?: string;
};

export function MetricCard({ label, value, accent = "text-lab-cyan", tooltipTitle, tooltipContent }: MetricCardProps) {
  const content = (
    <div className="scientific-card p-4 h-full">
      <p className={`text-xs uppercase tracking-wide text-slate-400 ${tooltipContent ? "border-b border-dashed border-slate-500 inline-block cursor-help" : ""}`}>
        {label}
      </p>
      <p className={`mt-2 text-2xl font-semibold ${accent}`}>{value}</p>
    </div>
  );

  if (tooltipContent) {
    return (
      <Tooltip title={tooltipTitle || label} content={tooltipContent} position="top">
        {content}
      </Tooltip>
    );
  }

  return content;
}
