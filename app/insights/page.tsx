"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

export default function Page() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <header className="mb-8 flex items-center gap-4">
        <div className="p-3 bg-lab-cyan/10 rounded-lg border border-lab-cyan/20">
          <Lightbulb className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Research Insights & Discovery</h1>
      </header>

      
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Beyond Classification</h2>
                <p className="text-slate-300 mb-8">The ultimate goal of this AI-driven approach is actionable biological discovery. By applying our trained model across a 100x100 discovery matrix (10,000 potential interactions), we identify novel pathways.</p>
                
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="bg-black/40 rounded-xl p-4">
                        <h3 className="text-xl font-semibold text-lab-mint mb-4">Drug Target Prioritization</h3>
                        <img src="/assets/drug_target_ranking.png" alt="Drug Target Ranking" className="w-full rounded-lg mb-4" />
                        <p className="text-sm text-slate-400">Ranking TB proteins by their centrality in the predicted interaction network helps prioritize candidates for novel antibiotics.</p>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4">
                        <h3 className="text-xl font-semibold text-lab-amber mb-4">Specificity & Validation</h3>
                        <img src="/assets/tb_specificity_proof.png" alt="Specificity Proof" className="w-full rounded-lg mb-4" />
                        <p className="text-sm text-slate-400">Validation against holdout datasets proves our model learns true TB interaction physics, not just dataset bias.</p>
                    </div>
                </div>
            </div>
        
    </motion.div>
  );
}
