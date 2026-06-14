"use client";

import { motion } from "framer-motion";
import { Presentation, Code2, Database, Cpu, Activity, Award, Briefcase, GraduationCap } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

export default function ProjectSummaryPage() {
  const stack = [
    { name: "TensorFlow & Keras", desc: "Core Siamese CNN Architecture" },
    { name: "TensorFlow.js", desc: "Client-side Edge Inference" },
    { name: "SHAP", desc: "Explainable AI (Game Theory)" },
    { name: "Next.js 14", desc: "React Framework & Routing" },
    { name: "TypeScript", desc: "Static Type Safety" },
    { name: "Tailwind CSS", desc: "Utility-first Styling" },
    { name: "Cytoscape.js", desc: "Graph Network Physics" },
    { name: "PDBe Molstar", desc: "AlphaFold 3D Rendering" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 max-w-5xl mx-auto space-y-12"
    >
      {/* Hero Section */}
      <header className="text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 bg-lab-cyan/10 rounded-2xl border border-lab-cyan/30 shadow-[0_0_40px_rgba(85,230,255,0.2)] mb-4">
          <Presentation className="text-lab-cyan w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          AI-Driven Explainable Tuberculosis <br className="hidden md:block"/> Protein-Protein Interaction Prediction Platform
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          A production-grade bioinformatics research portal developed to predict and interpret novel therapeutic drug targets in <em>Mycobacterium tuberculosis</em>.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-slate-300">
            <Award className="w-4 h-4 text-yellow-500" /> Research Portfolio
          </span>
          <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-slate-300">
            <Briefcase className="w-4 h-4 text-lab-cyan" /> Tech Interview Showcase
          </span>
          <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-slate-300">
            <GraduationCap className="w-4 h-4 text-lab-mint" /> Grad School App
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="https://ibs-2.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-lab-cyan/20 hover:bg-lab-cyan/30 transition-colors border border-lab-cyan/40 px-5 py-2.5 rounded-lg text-sm text-lab-cyan font-medium">
            Live Platform Demo
          </a>
          <a href="https://github.com/yuvaakhil8-dev/IBS-2-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 px-5 py-2.5 rounded-lg text-sm text-white font-medium">
            View on GitHub
          </a>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tech Stack */}
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-white border-b border-white/10 pb-4">
            <Code2 className="text-lab-cyan w-6 h-6" /> Technology Stack
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {stack.map((item, i) => (
              <div key={i} className="bg-black/40 border border-white/5 p-4 rounded-xl hover:border-lab-cyan/30 transition-colors group">
                <h3 className="font-medium text-slate-200 group-hover:text-white transition-colors">{item.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Model Performance */}
        <div className="glass p-8 rounded-2xl flex flex-col">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-white border-b border-white/10 pb-4">
            <Activity className="text-lab-mint w-6 h-6" /> Empirical Performance
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Evaluated on a completely unseen 20% holdout test set (800 structurally distinct protein pairs). Specificity was prioritized over Recall to aggressively minimize false positive rates in clinical target nomination.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <MetricCard label="Accuracy" value="71.38%" />
            <MetricCard label="Precision" value="81.32%" accent="text-lab-mint" />
            <MetricCard label="Recall" value="55.50%" accent="text-lab-violet" />
            <MetricCard label="F1 Score" value="65.97%" accent="text-lab-cyan" />
            <MetricCard label="ROC-AUC" value="0.798" accent="text-lab-amber" />
            <MetricCard label="Specificity" value="87.25%" accent="text-lab-mint" />
          </div>
        </div>
      </div>

      {/* Core Achievements */}
      <div className="glass p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-white border-b border-white/10 pb-4">
          <Cpu className="text-lab-violet w-6 h-6" /> Core Architectural Achievements
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lab-violet/20 border border-lab-violet/30 flex items-center justify-center text-lab-violet font-bold">1</div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">Zero-Runtime Edge Inference</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ported a heavy Python/Keras TensorFlow model into the browser via TensorFlow.js. This completely eliminates server-cost bottlenecks, allowing instantaneous predictive inference running directly on the user's local CPU/GPU using pre-trained `.bin` shard weights.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lab-cyan/20 border border-lab-cyan/30 flex items-center justify-center text-lab-cyan font-bold">2</div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">Symmetric Feature Extraction</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Standard Multi-Layer Perceptrons fail at Protein-Protein Interaction because they are asymmetric (predicting A-B is different from B-A). Designed a Siamese architecture with shared convolutional weights to ensure mathematical symmetry across inputs.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lab-mint/20 border border-lab-mint/30 flex items-center justify-center text-lab-mint font-bold">3</div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">Biological Interpretability (SHAP)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Applied SHapley Additive exPlanations to demystify the "black box" CNN. The model actively outputs the exact physiochemical properties (e.g. Hydrophobicity, Polarity) responsible for driving its interaction probabilities, bridging the gap between Computer Science and Structural Biology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
