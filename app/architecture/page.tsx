"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
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
          <Cpu className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Deep Learning Architecture</h1>
      </header>

      
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Siamese CNN Workflow</h2>
                <p className="text-slate-300 mb-6">The core of our platform relies on a Siamese Convolutional Neural Network. Both proteins in a pair are passed through identical CNN branches with shared weights, ensuring a fair biological comparison.</p>
                <div className="bg-black/30 p-6 rounded-lg border border-lab-cyan/20">
                    <pre className="text-sm text-lab-mint font-mono overflow-x-auto">
{`Protein A -> CNN Branch -> 128-dim Embedding A
Protein B -> CNN Branch -> 128-dim Embedding B
                      |
                 Concatenate
                      |
                 Dense Layer
                      |
                   Sigmoid
                      |
           Interaction Probability`}
                    </pre>
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">Feature Extraction</h3>
                    <p className="text-slate-400 text-sm">We extract a 170-dimensional feature vector encompassing amino acid composition, dipeptide patterns, and physicochemical properties (hydrophobicity, charge, polarity, aromaticity).</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-2">Embedding Layer</h3>
                    <p className="text-slate-400 text-sm">A customized embedding layer translates standard 21 amino acids into dense 128-dimensional vectors, capturing rich sequential and structural information automatically.</p>
                </div>
            </div>
        
    </motion.div>
  );
}
