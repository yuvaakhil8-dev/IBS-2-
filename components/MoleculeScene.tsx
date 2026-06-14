"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Maximize2, Layers, Crosshair } from "lucide-react";
import Script from "next/script";

export function MoleculeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pluginRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"cartoon" | "surface" | "ball-and-stick">("cartoon");

  const initMolstar = () => {
    if (!containerRef.current || pluginRef.current || !(window as any).PDBeMolstarPlugin) return;

    const plugin = new (window as any).PDBeMolstarPlugin();
    pluginRef.current = plugin;

    const options = {
      customData: {
        url: 'https://alphafold.ebi.ac.uk/files/AF-P9WPP1-F1-model_v4.cif',
        format: 'cif',
      },
      bgColor: { r: 15, g: 23, b: 42 }, // slate-900 to match theme
      hideControls: true,
      hideCanvasControls: ["expand", "selection", "animation", "controlToggle", "controlInfo"],
      visualStyle: "cartoon",
      lighting: "matte",
    };

    plugin.render(containerRef.current, options);
    
    // Simulate loading time since Molstar doesn't easily expose an onLoad hook via CDN
    setTimeout(() => setLoading(false), 2000);
  };

  const handleViewChange = (mode: "cartoon" | "surface" | "ball-and-stick") => {
    setViewMode(mode);
    if (!pluginRef.current) return;
    
    pluginRef.current.visual.update({
      customData: {
        url: 'https://alphafold.ebi.ac.uk/files/AF-P9WPP1-F1-model_v4.cif',
        format: 'cif',
      },
      visualStyle: mode,
    }, true);
  };

  const highlightHotspot = () => {
    if (!pluginRef.current) return;
    // Basic highlight attempt using the plugin API
    try {
      pluginRef.current.visual.select({
        data: [{ residue_number: 45, color: { r: 255, g: 0, b: 0 } }, { residue_number: 46, color: { r: 255, g: 0, b: 0 } }],
        nonSelectedColor: { r: 150, g: 150, b: 150 }
      });
    } catch (e) {
      console.warn("Highlight API mismatch", e);
    }
  };

  return (
    <div className="relative h-[400px] flex flex-col rounded-xl border border-lab-cyan/20 bg-slate-900 overflow-hidden">
      {/* Load PDBe Molstar CSS & JS from EBI CDN */}
      <link rel="stylesheet" type="text/css" href="https://www.ebi.ac.uk/pdbe/pdb-component-library/css/pdbe-molstar-1.2.1.css" />
      <Script 
        src="https://www.ebi.ac.uk/pdbe/pdb-component-library/js/pdbe-molstar-plugin-1.2.1.js" 
        strategy="lazyOnload"
        onReady={initMolstar}
      />

      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-lab-cyan animate-spin mb-4" />
          <p className="text-xs text-slate-400">Loading AlphaFold Structure (AF-P9WPP1-F1)...</p>
        </div>
      )}

      {/* Viewer Canvas */}
      <div ref={containerRef} className="flex-1 w-full h-full relative" />

      {/* Floating UI Controls */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <span className="bg-black/60 border border-lab-cyan/30 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-lab-cyan backdrop-blur-md">
          Rv1908c (KatG)
        </span>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/60 backdrop-blur-md border border-white/10 p-1.5 rounded-xl shadow-xl">
        <button 
          onClick={() => handleViewChange("cartoon")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${viewMode === "cartoon" ? "bg-lab-cyan text-black" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
        >
          Ribbon
        </button>
        <button 
          onClick={() => handleViewChange("surface")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${viewMode === "surface" ? "bg-lab-cyan text-black" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
        >
          Surface
        </button>
        <div className="w-px bg-white/20 mx-1 my-1" />
        <button 
          onClick={highlightHotspot}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-lab-mint hover:bg-lab-mint/20 transition-colors"
        >
          <Crosshair className="w-3.5 h-3.5" />
          Highlight Hotspot
        </button>
      </div>
    </div>
  );
}
