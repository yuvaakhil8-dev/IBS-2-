"use client";

import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Layers, Target, Code, Database } from "lucide-react";

export default function ResearchPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 max-w-4xl"
    >
      <header className="mb-8 flex items-center gap-4">
        <div className="p-3 bg-lab-mint/10 rounded-lg border border-lab-mint/20">
          <Lightbulb className="text-lab-mint w-8 h-8" />
        </div>
        <div>
          <h1 className="text-4xl font-outfit font-bold">Research Methodology</h1>
          <p className="text-slate-400 mt-2">Comprehensive documentation of the IBS-2 scientific approach.</p>
        </div>
      </header>

      <div className="space-y-8">
        <section className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
            <BookOpen className="text-lab-cyan w-6 h-6" /> Motivation & Background
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Tuberculosis, caused by Mycobacterium tuberculosis (H37Rv strain), remains one of the world's most deadly infectious diseases. The survival, virulence, and drug resistance of the bacteria depend heavily on complex Protein-Protein Interactions (PPIs).
          </p>
          <p className="text-slate-300 leading-relaxed">
            Traditionally, mapping the TB interactome requires slow, expensive wet-lab techniques (e.g., Yeast Two-Hybrid). This project introduces a Deep Learning alternative: a Siamese Convolutional Neural Network that predicts interaction probability strictly from primary amino acid sequences, accelerated by Explainable AI (SHAP) to ensure biological interpretability.
          </p>
        </section>

        <section className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
            <Database className="text-lab-violet w-6 h-6" /> Dataset Preparation
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Our positive dataset (interacting pairs) is sourced directly from validated high-throughput Y2H databases. The negative dataset is constructed via randomized subcellular localization constraints to prevent false negatives. The combined dataset contains 4,000 perfectly balanced pairs.
          </p>
        </section>

        <section className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
            <Code className="text-lab-mint w-6 h-6" /> Feature Engineering
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Sequences are mapped into a rich 170-dimensional numerical space. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
            <li>Amino Acid Composition (AAC)</li>
            <li>Dipeptide Composition (DPC)</li>
            <li>Physicochemical traits: Hydrophobicity, Polarity, Charge, and Aromaticity</li>
            <li>Conjoint Triad (CT) groups for local sequence context</li>
          </ul>
        </section>

        <section className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
            <Layers className="text-lab-cyan w-6 h-6" /> Siamese CNN Architecture
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The core architecture is a twin-branch neural network. Protein A and Protein B undergo identical convolutional filtering through shared weights, ensuring symmetric extraction. The resulting embeddings are flattened, concatenated, and passed through dense classification layers equipped with Dropout for regularization.
          </p>
        </section>

        <section className="glass p-8 rounded-xl">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
            <Target className="text-yellow-500 w-6 h-6" /> Evaluation Strategy
          </h2>
          <p className="text-slate-300 leading-relaxed">
            The model is rigorously evaluated on an unseen 20% holdout split. The primary optimization metric is ROC-AUC (0.798) to ensure robustness across classification thresholds. Specificity (87.25%) is prioritized over recall to minimize expensive wet-lab false positives.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
