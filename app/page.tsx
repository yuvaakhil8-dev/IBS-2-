"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Database, Dna, FileText, Network, ShieldCheck, Sparkles } from "lucide-react";

import { ArchitectureRail } from "@/components/ArchitectureRail";
import { MetricCard } from "@/components/MetricCard";
import { MoleculeScene } from "@/components/MoleculeScene";
import { NetworkPreview } from "@/components/NetworkPreview";

const modelCards = [
  ["Siamese CNN", "paired sequence learning", "30% fusion"],
  ["Transformer Encoder", "contextual residue embeddings", "25% fusion"],
  ["Graph Neural Network", "network topology and pathway context", "20% fusion"],
  ["Attention Head", "residue contribution weighting", "15% fusion"],
  ["Structural Fusion", "AlphaFold/PDB/contact-map features", "10% fusion"]
];

const references = [
  "[1] J. Zhang, J. Durham, and Q. Cong, Current Opinion in Structural Biology, 2024.",
  "[2] S. Hashemifar et al., Bioinformatics, 2018.",
  "[3] J. Jumper et al., Nature, 2021.",
  "[4] M. Baek et al., Science, 2021.",
  "[5] Z. Lin et al., Science, 2023.",
  "[6] R. Evans et al., bioRxiv, 2021.",
  "[7] H. Hamp and B. Rost, Bioinformatics, 2015.",
  "[8] M. Mirdita et al., Nature Methods, 2022.",
  "[9] J. Devlin et al., NAACL, 2019.",
  "[10] E. R. Chandrasekaran et al., Briefings in Bioinformatics, 2023."
];

export default function Page() {
  return (
    <main className="neural-grid min-h-screen px-6 py-6">
      <section className="mx-auto max-w-7xl">
        <nav className="mb-6 flex items-center justify-between rounded-lg border border-lab-cyan/20 bg-black/25 px-4 py-3">
          <div className="flex items-center gap-3">
            <Dna className="text-lab-cyan" />
            <span className="font-semibold">DeepTB NextGen PPI</span>
          </div>
          <div className="hidden gap-5 text-sm text-slate-300 md:flex">
            <span>Prediction</span>
            <span>Structures</span>
            <span>Explainability</span>
            <span>Discovery</span>
            <span>Reports</span>
          </div>
        </nav>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-lg p-8">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-lab-cyan/30 px-3 py-1 text-xs uppercase text-lab-cyan">
              <Sparkles size={14} /> Structure-aware explainable TB interactomics
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              AI-powered protein interaction intelligence for tuberculosis research.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              A research-grade platform combining Siamese CNNs, transformer encoders, GNN context, structural fusion,
              AlphaFold/PDB-aware visualization, residue-level XAI, mutation simulation, and 100x100 discovery.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-4">
              <MetricCard label="Dataset" value="4,000 pairs" />
              <MetricCard label="ROC-AUC" value="0.798" accent="text-lab-mint" />
              <MetricCard label="AlphaFold" value="91 structures" accent="text-lab-violet" />
              <MetricCard label="Discovery" value="100 x 100" accent="text-lab-amber" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-lg p-4">
            <MoleculeScene />
          </motion.div>
        </section>

        <section className="mt-6 glass rounded-lg p-5">
          <ArchitectureRail />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-lg p-5 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <BrainCircuit className="text-lab-cyan" />
              <h2 className="text-2xl font-semibold">Multi-Model AI Architecture</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-5">
              {modelCards.map(([title, detail, weight]) => (
                <div className="scientific-card p-4" key={title}>
                  <p className="font-semibold text-lab-cyan">{title}</p>
                  <p className="mt-2 text-sm text-slate-300">{detail}</p>
                  <p className="mt-4 text-xs text-lab-mint">{weight}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-lg p-5">
            <div className="mb-4 flex items-center gap-2">
              <Activity className="text-lab-mint" />
              <h2 className="text-2xl font-semibold">Prediction Output</h2>
            </div>
            {["Interaction probability", "Binding affinity proxy", "Confidence score", "Structural compatibility", "Functional relevance", "Risk level"].map((item) => (
              <div className="mb-3 flex justify-between border-b border-white/10 pb-2 text-sm" key={item}>
                <span className="text-slate-300">{item}</span>
                <span className="text-lab-cyan">ready</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-lg p-5">
            <div className="mb-4 flex items-center gap-2">
              <Network className="text-lab-violet" />
              <h2 className="text-2xl font-semibold">Protein Network Visualization</h2>
            </div>
            <NetworkPreview />
          </div>
          <div className="glass rounded-lg p-5">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="text-lab-amber" />
              <h2 className="text-2xl font-semibold">TB Research Module</h2>
            </div>
            <div className="grid gap-3">
              {["rpoB rifampicin-resistance mutation analysis", "katG isoniazid resistance case study", "inhA target interaction ranking", "embB ethambutol resistance hotspot view"].map((item) => (
                <div className="scientific-card p-3 text-sm text-slate-200" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-lg p-5">
            <Database className="mb-3 text-lab-cyan" />
            <h2 className="text-xl font-semibold">Custom Dataset Control</h2>
            <p className="mt-2 text-sm text-slate-300">FASTA/CSV upload, independent index ranges, custom batch prediction, PostgreSQL-ready experiment storage.</p>
          </div>
          <div className="glass rounded-lg p-5">
            <FileText className="mb-3 text-lab-mint" />
            <h2 className="text-xl font-semibold">Research Outputs</h2>
            <p className="mt-2 text-sm text-slate-300">PDF reports, structural snapshots, CSV/JSON exports, interpretation summaries, IEEE-style references.</p>
          </div>
          <div className="glass rounded-lg p-5">
            <Sparkles className="mb-3 text-lab-violet" />
            <h2 className="text-xl font-semibold">AI Protein Assistant</h2>
            <p className="mt-2 text-sm text-slate-300">Chat-style explanation layer for prediction rationale, mutation impact, pathway context, and viva answers.</p>
          </div>
        </section>

        <section className="mt-6 glass rounded-lg p-5">
          <h2 className="text-2xl font-semibold">References</h2>
          <div className="mt-4 grid gap-2 text-xs leading-6 text-slate-300 md:grid-cols-2">
            {references.map((reference) => <p key={reference}>{reference}</p>)}
          </div>
        </section>
      </section>
    </main>
  );
}
