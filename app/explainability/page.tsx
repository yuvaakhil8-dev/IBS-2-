"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
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
          <Eye className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Explainable AI (SHAP)</h1>
      </header>

      
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Why Did the Model Predict This?</h2>
                <p className="text-slate-300 mb-6">Using SHAP (SHapley Additive exPlanations), we look inside the "black box" of the Siamese CNN to understand exactly which biological features drive an interaction prediction. This allows us to transition from pure prediction to biological discovery.</p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Feature Importance</h3>
                <div className="bg-black/40 rounded-xl p-4 inline-block w-full">
                    <img src="/assets/feature_importance.png" alt="SHAP Feature Importance" className="w-full max-w-3xl mx-auto rounded-lg shadow-glow" />
                </div>
            </div>
        
    </motion.div>
  );
}
