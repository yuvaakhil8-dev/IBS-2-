"use client";

import { motion } from "framer-motion";
import { Box } from "lucide-react";
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
          <Box className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Structural Biology Integration</h1>
      </header>

      
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">AlphaFold & PDB Awareness</h2>
                <p className="text-slate-300 mb-6">Sequence data alone is insufficient. Our pipeline integrates 3D structural data from AlphaFold and the Protein Data Bank (PDB) to ensure predictions are physically possible in 3D space.</p>
                
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                    <MetricCard label="UniProt Mapped" value="92" />
                    <MetricCard label="AlphaFold Available" value="91" accent="text-lab-mint" />
                    <MetricCard label="Paired Structures" value="149" accent="text-lab-violet" />
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                    By fusing structural features into the later stages of the deep learning pipeline, the model achieves significantly higher specificity, reducing false positive interactions that might look viable sequentially but are blocked by 3D folding constraints.
                </p>
            </div>
        
    </motion.div>
  );
}
