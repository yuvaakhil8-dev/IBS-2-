"use client";

import { motion } from "framer-motion";
import { Share2, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function SharePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 max-w-4xl mx-auto space-y-12"
    >
      <header className="text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 bg-lab-blue/10 rounded-2xl border border-lab-blue/30 mb-4">
          <Share2 className="text-lab-blue w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight text-white">
          Share This Project
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Help spread the word about open-source Tuberculosis Bioinformatics. Use the assets below for your LinkedIn posts, portfolio, or presentations.
        </p>
      </header>

      {/* Share Links */}
      <div className="glass p-8 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-6">
        <a href="https://ibs-2.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-lab-cyan/20 hover:bg-lab-cyan/30 border border-lab-cyan/40 px-6 py-3 rounded-xl text-lab-cyan font-semibold transition-all">
          <ExternalLink className="w-5 h-5" /> Visit Live Portal
        </a>
        <a href="https://github.com/yuvaakhil8-dev/IBS-2-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl text-white font-semibold transition-all">
          <Github className="w-5 h-5" /> Star on GitHub
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fibs-2.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#0a66c2]/20 hover:bg-[#0a66c2]/30 border border-[#0a66c2]/40 px-6 py-3 rounded-xl text-[#0a66c2] font-semibold transition-all">
          <Linkedin className="w-5 h-5" /> Post to LinkedIn
        </a>
      </div>

      {/* Media Assets */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">Featured Screenshots</h2>
        
        <div className="grid gap-8">
          <div className="glass p-4 rounded-2xl border border-white/10 overflow-hidden group relative">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black border border-white/5">
              <Image 
                src="/assets/tb_specificity_proof.png" 
                alt="TB Specificity Proof" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex justify-between items-center px-2">
              <div>
                <h3 className="text-lg font-medium text-white">Project Banner / OpenGraph</h3>
                <p className="text-sm text-slate-400">Primary visual representing the platform's focus.</p>
              </div>
              <a href="/assets/tb_specificity_proof.png" download className="text-lab-cyan hover:underline text-sm font-medium">Download HD</a>
            </div>
          </div>

          <div className="glass p-4 rounded-2xl border border-white/10 overflow-hidden group relative">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black border border-white/5">
              <Image 
                src="/assets/siamese_cnn_architecture.png" 
                alt="Siamese CNN Architecture" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex justify-between items-center px-2">
              <div>
                <h3 className="text-lg font-medium text-white">Siamese CNN Architecture</h3>
                <p className="text-sm text-slate-400">Diagram of the twin-branch neural network with shared weights.</p>
              </div>
              <a href="/assets/siamese_cnn_architecture.png" download className="text-lab-cyan hover:underline text-sm font-medium">Download HD</a>
            </div>
          </div>

          <div className="glass p-4 rounded-2xl border border-white/10 overflow-hidden group relative">
            <div className="aspect-video relative rounded-xl overflow-hidden bg-black border border-white/5">
              <Image 
                src="/assets/interaction_heatmap.png" 
                alt="Interaction Heatmap" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex justify-between items-center px-2">
              <div>
                <h3 className="text-lg font-medium text-white">Interaction Heatmap</h3>
                <p className="text-sm text-slate-400">Global interaction matrix showcasing prediction clusters.</p>
              </div>
              <a href="/assets/interaction_heatmap.png" download className="text-lab-cyan hover:underline text-sm font-medium">Download HD</a>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Copy */}
      <div className="glass p-8 rounded-2xl border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6">Suggested LinkedIn Post</h2>
        <div className="bg-black/50 p-6 rounded-xl font-mono text-sm text-slate-300 whitespace-pre-wrap border border-white/5">
{`I'm excited to share a project I've been building: an AI-Driven Bioinformatics Portal for predicting Tuberculosis Protein-Protein Interactions! 🧬💻

Using a custom Siamese CNN trained on the H37Rv strain, the model maps interactions directly from primary amino acid sequences—no wet-lab required. 

Key features:
✅ Explainable AI (SHAP) to interpret physiochemical properties
✅ TensorFlow.js Edge Inference (Zero-server runtime)
✅ AlphaFold 3D Structural Viewers
✅ Localized Cytoscape Interaction Networks
✅ 4,000 top-ranked M. tuberculosis targets

Built with Next.js, React, Cytoscape.js, and PDBe Molstar. 

Check out the live platform here: https://ibs-2.vercel.app
Source code: https://github.com/yuvaakhil8-dev/IBS-2-

#Bioinformatics #DeepLearning #TensorFlow #Nextjs #Tuberculosis #ComputationalBiology #AI`}
        </div>
      </div>
    </motion.div>
  );
}
