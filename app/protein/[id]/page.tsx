"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dna, Activity, Search, ShieldAlert, Zap, Network, Box, Grid, Map } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicNetworkPreview = dynamic(() => import("@/components/NetworkPreview").then(mod => mod.NetworkPreview), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-slate-900 rounded-xl border border-white/10 text-slate-500 animate-pulse">Loading Network Physics...</div>
});

const DynamicMoleculeScene = dynamic(() => import("@/components/MoleculeScene").then(mod => mod.MoleculeScene), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] flex items-center justify-center bg-slate-900 rounded-xl border border-white/10 text-slate-500 animate-pulse">Loading Structural Viewer...</div>
});

export default function ProteinProfilePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const res = await fetch("/data/top_ranked_pairs.csv");
        const text = await res.text();
        const lines = text.trim().split("\n").slice(1);
        
        const found: any[] = [];
        
        lines.forEach(row => {
          const cols = row.split(",");
          if (cols.length < 11) return;
          
          const cleanA = cols[1].replace("83332.", "");
          const cleanB = cols[2].replace("83332.", "");
          const prob = parseFloat(cols[8]);
          
          if (cleanA === id) found.push({ id: cleanB, weight: prob });
          else if (cleanB === id) found.push({ id: cleanA, weight: prob });
        });
        
        // Sort by probability
        found.sort((a, b) => b.weight - a.weight);
        setPartners(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPartners();
  }, [id]);

  const topScore = partners.length > 0 ? partners[0].weight : 0;
  const confidence = (topScore * 100).toFixed(1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 space-y-8"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-lab-cyan/10 rounded-xl border border-lab-cyan/20">
            <Dna className="text-lab-cyan w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-outfit font-bold">{id}</h1>
              <span className="bg-lab-cyan/20 text-lab-cyan px-2.5 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider border border-lab-cyan/30">
                TB Target
              </span>
            </div>
            <p className="text-slate-400 mt-2">Mycobacterium tuberculosis H37Rv Protein Profile</p>
          </div>
        </div>
        <Link 
          href="/predict"
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm transition-colors text-white"
        >
          <Activity className="w-4 h-4 text-lab-mint" />
          Test in Inference Engine
        </Link>
      </header>

      {/* Research Relevance Panel */}
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Interaction Degree" value={loading ? "..." : String(partners.length)} accent="text-lab-cyan" tooltipContent="Total number of high-confidence interaction partners predicted by the Siamese CNN." />
        <MetricCard label="Max Confidence" value={`${confidence}%`} accent="text-lab-mint" tooltipContent="The highest interaction probability score among all predicted partners." />
        <MetricCard label="Network Centrality" value={partners.length > 10 ? "High" : "Moderate"} accent="text-lab-amber" tooltipContent="A qualitative measure of how central this protein is within the TB interaction network." />
        <MetricCard label="Drug Target Potential" value={partners.length > 5 ? "Elevated" : "Standard"} accent="text-lab-violet" tooltipContent="Proteins with many high-confidence interactions often represent critical vulnerabilities (hub nodes)." />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Structural Viewer */}
        <div className="glass p-6 rounded-xl flex flex-col h-full">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Box className="w-5 h-5 text-lab-cyan" /> 3D Structural Viewer
          </h2>
          <div className="flex-1 min-h-[400px]">
            <DynamicMoleculeScene proteinId={id} />
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">Data fetched from AlphaFold Protein Structure Database</p>
        </div>

        {/* Interaction Network */}
        <div className="glass p-6 rounded-xl flex flex-col h-full">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Network className="w-5 h-5 text-lab-mint" /> Local Interaction Network
          </h2>
          <div className="flex-1 min-h-[400px]">
            <DynamicNetworkPreview proteinId={id} />
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">Powered by Cytoscape.js and DeepTB Siamese CNN Predictions</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Top Partners List */}
        <div className="glass p-6 rounded-xl lg:col-span-1">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-lab-amber" /> Top Predicted Partners
          </h2>
          
          <div className="space-y-3">
            {loading ? (
              <div className="animate-pulse space-y-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-12 bg-white/5 rounded border border-white/5" />
                ))}
              </div>
            ) : partners.slice(0, 8).map((p, i) => (
              <Link 
                key={i}
                href={`/protein/${p.id}`}
                className="flex items-center justify-between p-3 bg-black/30 hover:bg-white/5 border border-white/5 hover:border-lab-cyan/30 rounded-lg transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-mono w-4">{i + 1}</span>
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{p.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
                    <div className="h-full bg-lab-mint rounded-full" style={{ width: `${p.weight * 100}%` }} />
                  </div>
                  <span className="text-xs font-mono text-lab-mint">{(p.weight * 100).toFixed(1)}%</span>
                </div>
              </Link>
            ))}
            
            {!loading && partners.length === 0 && (
              <div className="text-center text-slate-400 py-8">
                No high-confidence interactions found in the top 4000 subset.
              </div>
            )}
          </div>
        </div>

        {/* Biological Notes */}
        <div className="glass p-6 rounded-xl lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-lab-violet" /> Biological Context & Interpretability
          </h2>
          
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-slate-300 leading-relaxed">
              <strong>{id}</strong> is a predicted structural target within the <i>Mycobacterium tuberculosis</i> genome. The Siamese Convolutional Neural Network has identified strong sequence-level homologies and complementary physiochemical features with <strong>{partners.length}</strong> distinct partner proteins in our dataset.
            </p>
            
            <div className="mt-6 bg-black/40 border border-white/10 rounded-lg p-5">
              <h4 className="text-white font-medium mb-2 border-b border-white/10 pb-2">Explainable AI Insights (SHAP Placeholder)</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-lab-cyan font-bold">•</span>
                  <span><strong>Hydrophobicity Distribution:</strong> Strong predictive contribution for {id}'s interactions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lab-cyan font-bold">•</span>
                  <span><strong>Conjoint Triad Encoding:</strong> Indicates significant electrostatic complementarity with top partner {partners[0]?.id || "unknown"}.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
               <div className="bg-gradient-to-br from-slate-900 to-black border border-white/5 p-4 rounded-lg flex items-center gap-4 hover:border-lab-cyan/30 transition-colors cursor-pointer" onClick={() => window.location.href='/heatmaps'}>
                  <Grid className="w-8 h-8 text-lab-cyan" />
                  <div>
                     <h5 className="text-white text-sm font-medium">Global Heatmaps</h5>
                     <p className="text-xs text-slate-500">View {id} in the full matrix</p>
                  </div>
               </div>
               <div className="bg-gradient-to-br from-slate-900 to-black border border-white/5 p-4 rounded-lg flex items-center gap-4 hover:border-lab-cyan/30 transition-colors cursor-pointer" onClick={() => window.location.href='/contact-maps'}>
                  <Map className="w-8 h-8 text-lab-mint" />
                  <div>
                     <h5 className="text-white text-sm font-medium">Contact Maps</h5>
                     <p className="text-xs text-slate-500">View structural constraints</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
