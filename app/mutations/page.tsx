"use client";

import { motion } from "framer-motion";
import { Dna } from "lucide-react";
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
          <Dna className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Mutation Effect Analysis</h1>
      </header>

      
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Simulating Drug Resistance</h2>
                <p className="text-slate-300 mb-6">Tuberculosis rapidly evolves drug resistance through specific point mutations (e.g., S450L in rpoB). Our platform allows researchers to input a mutation and simulate its downstream effect on the protein's interaction network.</p>
                
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-white mb-2">1. Input Mutation</h3>
                        <code className="text-lab-mint bg-black/50 px-3 py-1 rounded">S450L</code>
                    </div>
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-white mb-2">2. Recalculate</h3>
                        <p className="text-sm text-slate-400">The model re-embeds the mutated sequence and re-runs the Siamese CNN forward pass.</p>
                    </div>
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-white mb-2">3. Delta Output</h3>
                        <p className="text-sm text-slate-400">Interaction probability drops from 0.89 to 0.12, indicating a loss-of-function event causing drug resistance.</p>
                    </div>
                </div>
            </div>
        
    </motion.div>
  );
}
