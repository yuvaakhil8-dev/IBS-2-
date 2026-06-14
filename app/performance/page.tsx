"use client";

import { motion } from "framer-motion";
import { BarChart2 } from "lucide-react";
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
          <BarChart2 className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">Model Performance</h1>
      </header>

      
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6 mb-8">
                <MetricCard label="Accuracy" value="71.38%" />
                <MetricCard label="Precision" value="81.32%" accent="text-lab-mint" />
                <MetricCard label="Recall" value="55.50%" accent="text-lab-violet" />
                <MetricCard label="F1 Score" value="65.97%" accent="text-lab-cyan" />
                <MetricCard label="ROC-AUC" value="79.84%" accent="text-lab-amber" />
                <MetricCard label="Specificity" value="87.25%" accent="text-lab-mint" />
            </div>
            <div className="grid gap-6 lg:grid-cols-2 mb-8">
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">ROC Curve</h3>
                    <img src="/assets/top4000_hybrid_roc_curve.png" alt="ROC Curve" className="w-full rounded-lg" />
                </div>
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Precision-Recall Curve</h3>
                    <img src="/assets/top4000_hybrid_pr_curve.png" alt="PR Curve" className="w-full rounded-lg" />
                </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Training Curve</h3>
                    <img src="/assets/top4000_siamese_training_curve.png" alt="Training Curve" className="w-full rounded-lg" />
                </div>
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-white mb-4">Confusion Matrix</h3>
                    <img src="/assets/top4000_hybrid_confusion_matrix.png" alt="Confusion Matrix" className="w-full rounded-lg" />
                </div>
            </div>
        
    </motion.div>
  );
}
