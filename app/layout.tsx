import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "AI-Driven Explainable Tuberculosis Protein-Protein Interaction Prediction Platform",
  description: "Deep Learning, Bioinformatics, Siamese CNN, SHAP Explainability, AlphaFold Structures, Contact Maps and Protein Interaction Prediction.",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    title: "IBS-2 | TB Interaction Intelligence",
    description: "Deep Learning, Bioinformatics, Siamese CNN, SHAP Explainability, AlphaFold Structures, Contact Maps and Protein Interaction Prediction.",
    url: "https://ibs-2.vercel.app",
    siteName: "IBS-2 Platform",
    images: [
      {
        url: "/assets/tb_specificity_proof.png",
        width: 1200,
        height: 630,
        alt: "IBS-2 Project Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IBS-2 | TB Interaction Intelligence",
    description: "Deep Learning, Bioinformatics, Siamese CNN, SHAP Explainability, AlphaFold Structures, Contact Maps and Protein Interaction Prediction.",
    images: ["/assets/tb_specificity_proof.png"],
  },
};

import { GlobalSearch } from "@/components/GlobalSearch";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "IBS-2: AI-Driven Tuberculosis Interaction Prediction Platform",
    "description": "Deep Learning platform predicting protein-protein interactions in Mycobacterium tuberculosis using Siamese CNNs and Explainable AI.",
    "url": "https://ibs-2.vercel.app"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="neural-grid min-h-screen text-slate-100 antialiased selection:bg-lab-cyan/30">
        <Sidebar />
        <main className="md:ml-64 min-h-screen p-4 md:p-8 relative pt-16 md:pt-8">
          <div className="max-w-7xl mx-auto">
            <GlobalSearch />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
