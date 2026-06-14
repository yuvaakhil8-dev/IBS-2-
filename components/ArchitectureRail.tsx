const stages = [
  "FASTA / CSV Input",
  "Transformer Encoding",
  "Siamese CNN",
  "GNN Context",
  "Structural Fusion",
  "Attention XAI",
  "3D + Mutation Insight"
];

export function ArchitectureRail() {
  return (
    <div className="grid gap-3 md:grid-cols-7">
      {stages.map((stage, index) => (
        <div className="scientific-card relative p-3 text-center" key={stage}>
          <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-lab-cyan/30 text-sm text-lab-cyan">
            {index + 1}
          </div>
          <p className="text-xs font-medium text-slate-200">{stage}</p>
        </div>
      ))}
    </div>
  );
}
