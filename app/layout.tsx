import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "IBS-2 | TB Interaction Intelligence",
  description: "Structure-aware explainable tuberculosis protein interaction intelligence platform"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="neural-grid min-h-screen text-slate-100 antialiased selection:bg-lab-cyan/30">
        <Sidebar />
        <main className="ml-64 min-h-screen p-8 relative">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
