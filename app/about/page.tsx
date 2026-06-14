"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
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
          <Info className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">About the Research</h1>
      </header>

      
            <h2 className="text-2xl font-semibold text-lab-cyan mb-4">What is Tuberculosis?</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. It generally affects the lungs, but can also affect other parts of the body. Inside the bacterium, thousands of proteins interact with each other, controlling cell survival, metabolism, drug resistance, pathogenicity, and virulence.</p>
            
            <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Protein-Protein Interactions (PPIs)</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">Protein-protein interactions are the physical contacts of high specificity established between two or more protein molecules as a result of biochemical events steered by interactions that include electrostatic forces, hydrogen bonding and the hydrophobic effect. In MTB, these interactions are critical targets for novel drug discovery.</p>
            
            <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Why Deep Learning?</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">Experimentally identifying protein interactions is expensive, time-consuming, and requires extensive wet-lab experiments. Artificial Intelligence and Deep Learning offer a computational approach to accurately predict these interactions, significantly accelerating the drug discovery pipeline and reducing costs.</p>
        
    </motion.div>
  );
}
