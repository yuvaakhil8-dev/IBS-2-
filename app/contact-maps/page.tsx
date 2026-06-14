"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
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
          <Map className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Contact Map Analysis</h1>
      </header>

      
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Residue-Level Interactions</h2>
                <p className="text-slate-300 mb-6">Contact maps overlay our deep learning predictions with structural reality, showing residue vs. residue interactions between proteins. This is critical for identifying binding regions and hotspots.</p>
                
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-lab-mint mb-3">Predicted Binding Hotspots</h3>
                        <p className="text-sm text-slate-400">By mapping the highest attention weights from our models onto the 2D sequence grid, we identify the specific amino acid sequences that physically interact.</p>
                    </div>
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-lab-violet mb-3">Biological Validation</h3>
                        <p className="text-sm text-slate-400">These computationally generated maps are cross-referenced with known PDB structures to validate our model's structural awareness.</p>
                    </div>
                </div>
            </div>
        
    </motion.div>
  );
}
