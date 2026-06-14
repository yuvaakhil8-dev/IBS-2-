"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

export default function Page() {
  return (
    <motion.div 
      initial={ opacity: 0, y: 20 }
      animate={ opacity: 1, y: 0 }
      transition={ duration: 0.5 }
      className="pb-20"
    >
      <header className="mb-8 flex items-center gap-4">
        <div className="p-3 bg-lab-cyan/10 rounded-lg border border-lab-cyan/20">
          <Database className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Dataset Explorer</h1>
      </header>

      
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <MetricCard label="Total Proteins" value="4,026" />
                <MetricCard label="Raw Interactions" value="693,013" accent="text-lab-mint" />
                <MetricCard label="Balanced Pairs" value="4,000" accent="text-lab-violet" />
                <MetricCard label="Taxonomy ID" value="83332" accent="text-lab-amber" />
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-lab-cyan mb-4">Protein Length Distribution</h3>
                    <img src="/assets/protein_length_histogram.png" alt="Protein Length Distribution" className="w-full rounded-lg shadow-glow" />
                    <p className="text-sm text-slate-400 mt-4">Most proteins lie between 100-600 amino acids. This biological realism is critical for robust model training.</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-lab-mint mb-4">Amino Acid Distribution</h3>
                    <img src="/assets/amino_acid_distribution.png" alt="Amino Acid Distribution" className="w-full rounded-lg shadow-glow" />
                </div>
            </div>
        
    </motion.div>
  );
}
