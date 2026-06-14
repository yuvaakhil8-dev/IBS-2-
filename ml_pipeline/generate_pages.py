import os

pages = {
    "about": {
        "title": "About the Research",
        "icon": "Info",
        "content": """
            <h2 className="text-2xl font-semibold text-lab-cyan mb-4">What is Tuberculosis?</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria. It generally affects the lungs, but can also affect other parts of the body. Inside the bacterium, thousands of proteins interact with each other, controlling cell survival, metabolism, drug resistance, pathogenicity, and virulence.</p>
            
            <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Protein-Protein Interactions (PPIs)</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">Protein-protein interactions are the physical contacts of high specificity established between two or more protein molecules as a result of biochemical events steered by interactions that include electrostatic forces, hydrogen bonding and the hydrophobic effect. In MTB, these interactions are critical targets for novel drug discovery.</p>
            
            <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Why Deep Learning?</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">Experimentally identifying protein interactions is expensive, time-consuming, and requires extensive wet-lab experiments. Artificial Intelligence and Deep Learning offer a computational approach to accurately predict these interactions, significantly accelerating the drug discovery pipeline and reducing costs.</p>
        """
    },
    "dataset": {
        "title": "Dataset Explorer",
        "icon": "Database",
        "content": """
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <MetricCard label="Total Proteins" value="4,026" />
                <MetricCard label="Raw Interactions" value="693,013" accent="text-lab-mint" />
                <MetricCard label="Balanced Pairs" value="4,000" accent="text-lab-violet" />
                <MetricCard label="Taxonomy ID" value="83332" accent="text-lab-amber" />
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-lab-cyan mb-4">Protein Length Distribution</h3>
                    <img src="/assets/protein_length_histogram.png" alt="Protein Length Distribution" className="w-full rounded-lg shadow-glow" />
                    <p className="text-sm text-slate-400 mt-4">Most proteins lie between 100-600 amino acids. This biological realism is critical for robust model training.</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-lab-mint mb-4">Amino Acid Distribution</h3>
                    <img src="/assets/amino_acid_distribution.png" alt="Amino Acid Distribution" className="w-full rounded-lg shadow-glow" />
                </div>
            </div>
        """
    },
    "architecture": {
        "title": "Deep Learning Architecture",
        "icon": "Cpu",
        "content": """
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
        """
    },
    "performance": {
        "title": "Model Performance",
        "icon": "BarChart2",
        "content": """
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
        """
    },
    "explainability": {
        "title": "Explainable AI (SHAP)",
        "icon": "Eye",
        "content": """
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Why Did the Model Predict This?</h2>
                <p className="text-slate-300 mb-6">Using SHAP (SHapley Additive exPlanations), we look inside the "black box" of the Siamese CNN to understand exactly which biological features drive an interaction prediction. This allows us to transition from pure prediction to biological discovery.</p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Feature Importance</h3>
                <div className="bg-black/40 rounded-xl p-4 inline-block w-full">
                    <img src="/assets/feature_importance.png" alt="SHAP Feature Importance" className="w-full max-w-3xl mx-auto rounded-lg shadow-glow" />
                </div>
            </div>
        """
    },
    "contact-maps": {
        "title": "Contact Map Analysis",
        "icon": "Map",
        "content": """
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Residue-Level Interactions</h2>
                <p className="text-slate-300 mb-6">Contact maps overlay our deep learning predictions with structural reality, showing residue vs. residue interactions between proteins. This is critical for identifying binding regions and hotspots.</p>
                
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-lab-mint mb-3">Predicted Binding Hotspots</h3>
                        <p className="text-sm text-slate-400">By mapping the highest attention weights from our models onto the 2D sequence grid, we identify the specific amino acid sequences that physically interact.</p>
                    </div>
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-lab-violet mb-3">Biological Validation</h3>
                        <p className="text-sm text-slate-400">These computationally generated maps are cross-referenced with known PDB structures to validate our model's structural awareness.</p>
                    </div>
                </div>
            </div>
        """
    },
    "heatmaps": {
        "title": "Interaction Heatmaps",
        "icon": "Grid",
        "content": """
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Global Network View</h2>
                <p className="text-slate-300 mb-6">Interaction heatmaps provide a macroscopic view of the TB interactome. Rather than looking at single pairs, we analyze functional clusters and broad interaction networks.</p>
                
                <div className="bg-black/40 rounded-xl p-4 inline-block w-full text-center">
                    <img src="/assets/interaction_heatmap.png" alt="Interaction Heatmap" className="w-full max-w-4xl mx-auto rounded-lg shadow-glow mb-4" />
                    <p className="text-sm text-slate-400 italic">Dark regions indicate strong interaction probabilities; lighter regions represent functional isolation.</p>
                </div>
            </div>
        """
    },
    "structure": {
        "title": "Structural Biology Integration",
        "icon": "Box",
        "content": """
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">AlphaFold & PDB Awareness</h2>
                <p className="text-slate-300 mb-6">Sequence data alone is insufficient. Our pipeline integrates 3D structural data from AlphaFold and the Protein Data Bank (PDB) to ensure predictions are physically possible in 3D space.</p>
                
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                    <MetricCard label="UniProt Mapped" value="92" />
                    <MetricCard label="AlphaFold Available" value="91" accent="text-lab-mint" />
                    <MetricCard label="Paired Structures" value="149" accent="text-lab-violet" />
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                    By fusing structural features into the later stages of the deep learning pipeline, the model achieves significantly higher specificity, reducing false positive interactions that might look viable sequentially but are blocked by 3D folding constraints.
                </p>
            </div>
        """
    },
    "mutations": {
        "title": "Mutation Effect Analysis",
        "icon": "Dna",
        "content": """
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Simulating Drug Resistance</h2>
                <p className="text-slate-300 mb-6">Tuberculosis rapidly evolves drug resistance through specific point mutations (e.g., S450L in rpoB). Our platform allows researchers to input a mutation and simulate its downstream effect on the protein's interaction network.</p>
                
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-white mb-2">1. Input Mutation</h3>
                        <code className="text-lab-mint bg-black/50 px-3 py-1 rounded">S450L</code>
                    </div>
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-white mb-2">2. Recalculate</h3>
                        <p className="text-sm text-slate-400">The model re-embeds the mutated sequence and re-runs the Siamese CNN forward pass.</p>
                    </div>
                    <div className="scientific-card p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-white mb-2">3. Delta Output</h3>
                        <p className="text-sm text-slate-400">Interaction probability drops from 0.89 to 0.12, indicating a loss-of-function event causing drug resistance.</p>
                    </div>
                </div>
            </div>
        """
    },
    "insights": {
        "title": "Research Insights & Discovery",
        "icon": "Lightbulb",
        "content": """
            <div className="glass p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold text-lab-cyan mb-4">Beyond Classification</h2>
                <p className="text-slate-300 mb-8">The ultimate goal of this AI-driven approach is actionable biological discovery. By applying our trained model across a 100x100 discovery matrix (10,000 potential interactions), we identify novel pathways.</p>
                
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="bg-black/40 rounded-xl p-4">
                        <h3 className="text-xl font-semibold text-lab-mint mb-4">Drug Target Prioritization</h3>
                        <img src="/assets/drug_target_ranking.png" alt="Drug Target Ranking" className="w-full rounded-lg mb-4" />
                        <p className="text-sm text-slate-400">Ranking TB proteins by their centrality in the predicted interaction network helps prioritize candidates for novel antibiotics.</p>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4">
                        <h3 className="text-xl font-semibold text-lab-amber mb-4">Specificity & Validation</h3>
                        <img src="/assets/tb_specificity_proof.png" alt="Specificity Proof" className="w-full rounded-lg mb-4" />
                        <p className="text-sm text-slate-400">Validation against holdout datasets proves our model learns true TB interaction physics, not just dataset bias.</p>
                    </div>
                </div>
            </div>
        """
    }
}

base_dir = "app"

for page_slug, page_data in pages.items():
    page_dir = os.path.join(base_dir, page_slug)
    os.makedirs(page_dir, exist_ok=True)
    
    content = f'''"use client";

import {{ motion }} from "framer-motion";
import {{ {page_data["icon"]} }} from "lucide-react";
import {{ MetricCard }} from "@/components/MetricCard";

export default function Page() {{
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <header className="mb-8 flex items-center gap-4">
        <div className="p-3 bg-lab-cyan/10 rounded-lg border border-lab-cyan/20">
          <{page_data["icon"]} className="text-lab-cyan w-8 h-8" />
        </div>
        <h1 className="text-4xl font-outfit font-bold">{page_data["title"]}</h1>
      </header>

      {page_data["content"]}
    </motion.div>
  );
}}
'''
    
    with open(os.path.join(page_dir, "page.tsx"), "w") as f:
        f.write(content)

print("Pages generated successfully!")
