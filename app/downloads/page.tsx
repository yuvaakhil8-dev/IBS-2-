"use client";

import { motion } from "framer-motion";
import { Download, FileText, Database, Code, Box } from "lucide-react";

export default function DownloadsPage() {
  const downloads = [
    {
      title: "IBS-2 Research Report",
      description: "Full methodology, model architecture details, and biological evaluation results.",
      icon: FileText,
      size: "2.4 MB",
      type: "PDF Document",
      link: "/data/Lab-1_report.docx"
    },
    {
      title: "M. Tuberculosis Dataset",
      description: "H37Rv strain interaction network data including non-redundant FASTA sequences.",
      icon: Database,
      size: "2.5 MB",
      type: "FASTA Archive",
      link: "/data/tb_large.fasta"
    },
    {
      title: "Feature Vectors (170-dim)",
      description: "Pre-computed numerical feature vectors for all 4,000 evaluated protein pairs.",
      icon: Box,
      size: "5.5 MB",
      type: "XLSX Format",
      link: "/data/sequence_features.xlsx"
    },
    {
      title: "TensorFlow.js Model Weights",
      description: "The trained Siamese CNN weights compatible with TFJS for browser execution.",
      icon: Code,
      size: "1.1 MB",
      type: "JSON / BIN Shards",
      link: "/model/model.json"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <header className="mb-8 flex items-center gap-4">
        <div className="p-3 bg-lab-blue/10 rounded-lg border border-lab-blue/20">
          <Download className="text-lab-blue w-8 h-8" />
        </div>
        <div>
          <h1 className="text-4xl font-outfit font-bold">Download Center</h1>
          <p className="text-slate-400 mt-2">Access datasets, reports, and trained weights locally.</p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {downloads.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-black/40 rounded-lg">
                    <Icon className="w-6 h-6 text-lab-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-lab-cyan">{item.type} • {item.size}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6">{item.description}</p>
              </div>
              <a 
                href={item.link} 
                download
                className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-center text-sm font-medium hover:bg-lab-cyan hover:text-black hover:border-lab-cyan transition-all flex justify-center items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download
              </a>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
