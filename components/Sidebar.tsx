"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Info, 
  Database, 
  Cpu, 
  BarChart2, 
  Eye, 
  Map, 
  Grid, 
  Box, 
  Dna, 
  Lightbulb 
} from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Research", icon: Info },
  { href: "/dataset", label: "Dataset Explorer", icon: Database },
  { href: "/architecture", label: "DL Architecture", icon: Cpu },
  { href: "/performance", label: "Model Performance", icon: BarChart2 },
  { href: "/explainability", label: "Explainable AI", icon: Eye },
  { href: "/contact-maps", label: "Contact Maps", icon: Map },
  { href: "/heatmaps", label: "Heatmaps", icon: Grid },
  { href: "/structure", label: "Structural Biology", icon: Box },
  { href: "/mutations", label: "Mutation Analysis", icon: Dna },
  { href: "/insights", label: "Research Insights", icon: Lightbulb },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen glass border-r border-lab-cyan/20 fixed flex flex-col pt-6 z-50">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-outfit font-bold tracking-tight text-white">
          <span className="text-lab-cyan">IBS-2</span> Platform
        </h1>
        <p className="text-xs text-lab-mint/70 mt-1">TB Interaction Intelligence</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? "bg-lab-cyan/15 text-lab-cyan border border-lab-cyan/30 shadow-[0_0_15px_rgba(85,230,255,0.15)]" 
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-lab-cyan" : "text-slate-400"}`} />
              {link.label}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-white/5 text-xs text-slate-500 text-center">
        Powered by Siamese CNN & SHAP
      </div>
    </div>
  );
}
