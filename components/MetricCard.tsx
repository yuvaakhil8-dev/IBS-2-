type MetricCardProps = {
  label: string;
  value: string;
  accent?: string;
};

export function MetricCard({ label, value, accent = "text-lab-cyan" }: MetricCardProps) {
  return (
    <div className="scientific-card p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className={`mt-2 text-2xl font-semibold ${accent}`}>{value}</p>
    </div>
  );
}
