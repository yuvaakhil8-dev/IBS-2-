"use client";

const nodes = [
  ["Rv2441c", 18, 42],
  ["Rv2785c", 52, 26],
  ["rpoB", 76, 48],
  ["katG", 34, 68],
  ["inhA", 66, 76],
  ["embB", 20, 18]
];

export function NetworkPreview() {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-lg border border-lab-cyan/20 bg-slate-950/70">
      <svg className="h-full w-full" viewBox="0 0 100 100">
        {nodes.slice(1).map((node, index) => (
          <line key={node[0]} x1="18" y1="42" x2={node[1]} y2={node[2]} stroke="rgba(85,230,255,.32)" strokeWidth={index % 2 ? 0.8 : 1.4} />
        ))}
        {nodes.map(([id, x, y], index) => (
          <g key={id}>
            <circle cx={x} cy={y} r={index === 0 ? 5 : 4} fill={index % 2 ? "#6ef5b3" : "#55e6ff"} opacity="0.92" />
            <text x={Number(x) + 5} y={Number(y) + 1} fill="#dffbff" fontSize="4">{id}</text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-3 left-3 text-xs text-slate-400">Cytoscape/D3-ready interaction graph contract</div>
    </div>
  );
}
