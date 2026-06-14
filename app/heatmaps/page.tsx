"use client";

import { motion } from "framer-motion";
import { Grid } from "lucide-react";
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
          <Grid className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Interaction Heatmaps</h1>
      </header>

      
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Global Network View</h2>
                <p className="text-slate-300 mb-6">Interaction heatmaps provide a macroscopic view of the TB interactome. Rather than looking at single pairs, we analyze functional clusters and broad interaction networks.</p>
                
                <div className="bg-black/40 rounded-xl p-4 inline-block w-full text-center">
                    <img src="/assets/interaction_heatmap.png" alt="Interaction Heatmap" className="w-full max-w-4xl mx-auto rounded-lg shadow-glow mb-4" />
                    <p className="text-sm text-slate-400 italic">Dark regions indicate strong interaction probabilities; lighter regions represent functional isolation.</p>
                </div>
            </div>
        
    </motion.div>
  );
}
