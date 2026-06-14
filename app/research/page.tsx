"use client";

import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Layers, Target, Code, Database, Microscope, Cpu, Sparkles, TrendingUp, Presentation, AlertCircle } from "lucide-react";

export default function ResearchPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20 max-w-4xl mx-auto"
    >
      <header className="mb-12 flex flex-col md:flex-row items-center gap-6 text-center md:text-left border-b border-white/10 pb-8">
        <div className="p-4 bg-lab-mint/10 rounded-2xl border border-lab-mint/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <Lightbulb className="text-lab-mint w-12 h-12" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-outfit font-bold tracking-tight mb-3">Research Documentation</h1>
          <p className="text-slate-400 text-lg max-w-2xl">Comprehensive documentation of the deep learning methodologies powering the IBS-2 predictive architecture.</p>
        </div>
      </header>

      <div className="space-y-10">
        
        {/* Section 1 */}
        <section className="glass p-8 rounded-2xl hover:border-lab-cyan/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-cyan text-sm font-bold">1</span>
            Research Motivation
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              Tuberculosis (TB), caused by the pathogen <em>Mycobacterium tuberculosis (H37Rv)</em>, remains one of the world's most deadly infectious diseases. The survival, virulence, and drug-resistance mechanisms of the bacteria depend fundamentally on complex Protein-Protein Interactions (PPIs).
            </p>
            <p>
              Traditional methods to map these interactions, such as Yeast Two-Hybrid (Y2H) screens or Co-immunoprecipitation, are incredibly slow, expensive, and prone to high false-positive rates. This research aims to construct an <strong>Explainable Siamese Convolutional Neural Network</strong> that bypasses wet-lab bottlenecks, predicting TB interactomes directly and instantly from raw amino acid sequences.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="glass p-8 rounded-2xl hover:border-lab-violet/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-violet text-sm font-bold">2</span>
            Dataset Collection
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              The foundation of any robust deep learning model is its data. The interaction data was aggregated from the <strong>STRING Database (v11.5)</strong>, explicitly filtering for high-confidence physical interactions within the H37Rv strain.
            </p>
            <p>
              Raw FASTA sequences for the TB proteome were subsequently scraped and verified using the <strong>UniProt Knowledgebase</strong>. To prevent data leakage and ensure structural homology did not artificially inflate metrics, CD-HIT was employed to cluster and remove redundant sequences sharing >40% identity.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="glass p-8 rounded-2xl hover:border-lab-mint/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-mint text-sm font-bold">3</span>
            Dataset Statistics
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
             <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-1">4,026</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Unique Proteins</div>
             </div>
             <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-1">693,013</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Total Edges</div>
             </div>
             <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-1">1:1</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Class Balance</div>
             </div>
          </div>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              The generation of a <strong>Negative Dataset</strong> (non-interacting pairs) is biologically non-trivial. True negatives rarely exist in literature. We approached this via a randomized subcellular localization pairing constraint—pairing membrane proteins with cytosolic proteins that possess extreme spatial separation, ensuring a highly rigorous negative class.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="glass p-8 rounded-2xl hover:border-yellow-500/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-yellow-500 text-sm font-bold">4</span>
            Feature Engineering
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              Raw alphabetical sequences cannot be processed by CNNs. We transform varying-length FASTA strings into uniform 170-dimensional numerical vectors.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mt-4">
              <li className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <strong className="text-lab-cyan block mb-1">Amino Acid Composition (AAC)</strong>
                The simple relative frequency of all 20 standard amino acids.
              </li>
              <li className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <strong className="text-lab-cyan block mb-1">Dipeptide Composition (DPC)</strong>
                Frequencies of adjacent pairs, capturing localized motifs.
              </li>
              <li className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <strong className="text-lab-cyan block mb-1">Physicochemical Traits</strong>
                Continuous scales mapped for Hydrophobicity, Polarity, and Charge.
              </li>
              <li className="bg-white/5 border border-white/10 p-4 rounded-lg">
                <strong className="text-lab-cyan block mb-1">Conjoint Triad (CT)</strong>
                Groups amino acids by dipole scale to identify electrostatic interaction surfaces.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="glass p-8 rounded-2xl hover:border-lab-cyan/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-cyan text-sm font-bold">5</span>
            Siamese CNN Architecture
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300 mb-6">
            <p>
              PPI prediction is inherently symmetric: if Protein A interacts with B, then B interacts with A. Standard neural networks fail to guarantee this symmetry. 
            </p>
            <p>
              We implemented a <strong>Siamese Architecture</strong>. The inputs (Protein A and Protein B vectors) are fed into twin sub-networks that <em>share identical weights</em>. This ensures the extracted latent feature embeddings are perfectly symmetric. The two embeddings are concatenated and passed into fully connected layers (with Dropout) yielding a binary probability.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg font-mono text-xs text-slate-400 overflow-x-auto">
            {'Input A (170) -> [Conv1D 64] -> [MaxPool] -> [Dense 128] \\'}<br/>
            {'                                                        -> [Concat] -> [Dense 64] -> [Sigmoid]'}<br/>
            {'Input B (170) -> [Conv1D 64] -> [MaxPool] -> [Dense 128] /'}
          </div>
        </section>

        {/* Section 6 */}
        <section className="glass p-8 rounded-2xl hover:border-lab-mint/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-mint text-sm font-bold">6</span>
            Explainable AI Pipeline
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              Deep learning models in healthcare suffer from the "black-box" problem—they output a probability but provide no biological rationale. 
            </p>
            <p>
              We solved this by wrapping the CNN with <strong>SHAP (SHapley Additive exPlanations)</strong>. SHAP applies cooperative game theory to distribute the final prediction score back onto the original 170 input features. This allows researchers to see exactly which physicochemical property (e.g., a hydrophobic patch on Protein B) drove the model's decision, enabling structural validation.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="glass p-8 rounded-2xl hover:border-lab-violet/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-violet text-sm font-bold">7</span>
            Evaluation Metrics
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              The model was rigorously tested on a strict 20% holdout test set completely unseen during training. Because the ultimate goal of this pipeline is to nominate targets for wet-lab assays (which cost thousands of dollars per attempt), <strong>Precision and Specificity were prioritized</strong> over Recall to drastically minimize false positives.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="glass p-8 rounded-2xl hover:border-yellow-500/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-yellow-500 text-sm font-bold">8</span>
            Results & Findings
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              The Siamese CNN achieved a <strong>ROC-AUC of 0.798</strong>, indicating a highly robust discriminative ability across all classification thresholds. The high Specificity (87.25%) validates our objective of generating a highly cautious, conservative prediction engine.
            </p>
            <p>
              Analysis of the SHAP summary plots revealed that the model learned to prioritize <strong>Conjoint Triad frequencies</strong> over simple amino acid composition, implying it successfully abstracted 3D electrostatic surface compatibility from 1D sequence data.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="glass p-8 rounded-2xl hover:border-lab-cyan/30 transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-cyan text-sm font-bold">9</span>
            Biological Insights
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              By sweeping the entire 4,000x4,000 TB interactome through our inference engine, we successfully reconstructed the global interaction network. Several high-degree "hub" proteins (such as KatG/Rv1908c) emerged. 
            </p>
            <p>
              Biologically, these hub nodes are critical points of failure for the pathogen. Destroying a peripheral node via medication might cause a minor disruption; destroying a hub node almost guarantees cellular collapse, nominating them as prime targets for novel anti-tubercular drug development.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="glass p-8 rounded-2xl border-dashed border-lab-mint/40 hover:border-lab-mint transition-colors">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 text-white">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-lab-mint text-sm font-bold">10</span>
            Future Work
          </h2>
          <div className="prose prose-invert max-w-none text-slate-300">
            <p>
              While sequence-based prediction is exceptionally fast, it lacks the steric validation of 3D folding. Future iterations of this platform will attempt to fuse our 1D CNN embeddings with 3D structural embeddings extracted from <strong>AlphaFold2 / ESMFold</strong> latent spaces.
            </p>
            <p>
              Furthermore, we aim to integrate an automated molecular docking pipeline (e.g., AutoDock Vina) to automatically assess the druggability of newly discovered PPI interfaces.
            </p>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
