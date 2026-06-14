"use client";

import { useEffect, useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { Loader2, Maximize2, Search, SlidersHorizontal, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NetworkPreview({ proteinId }: { proteinId?: string }) {
  const [elements, setElements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(50);
  const [selectedNode, setSelectedNode] = useState<any | null>(null);

  useEffect(() => {
    async function loadNetwork() {
      setLoading(true);
      try {
        const res = await fetch("/data/top_ranked_pairs.csv");
        const text = await res.text();
        const lines = text.trim().split("\n");
        
        const newElements: any[] = [];
        const addedNodes = new Set();
        
        // Skip header
        const rows = lines.slice(1);
        let count = 0;
        
        rows.forEach(row => {
          if (!proteinId && count >= limit) return;
          
          const cols = row.split(",");
          if (cols.length < 11) return;
          
          const rawA = cols[1];
          const rawB = cols[2];
          const prob = parseFloat(cols[8]);
          
          const cleanA = rawA.replace("83332.", "");
          const cleanB = rawB.replace("83332.", "");
          
          if (proteinId && cleanA !== proteinId && cleanB !== proteinId) return;
          
          count++;
          
          if (!addedNodes.has(cleanA)) {
            newElements.push({
              data: { id: cleanA, label: cleanA, degree: 0 }
            });
            addedNodes.add(cleanA);
          }
          if (!addedNodes.has(cleanB)) {
            newElements.push({
              data: { id: cleanB, label: cleanB, degree: 0 }
            });
            addedNodes.add(cleanB);
          }
          
          newElements.push({
            data: {
              source: cleanA,
              target: cleanB,
              weight: prob
            }
          });
        });
        
        // Calculate degrees for node sizing
        const nodeDegrees: Record<string, number> = {};
        newElements.forEach(el => {
          if (el.data.source) {
            nodeDegrees[el.data.source] = (nodeDegrees[el.data.source] || 0) + 1;
            nodeDegrees[el.data.target] = (nodeDegrees[el.data.target] || 0) + 1;
          }
        });
        
        newElements.forEach(el => {
          if (!el.data.source) {
            el.data.degree = nodeDegrees[el.data.id] || 1;
          }
        });
        
        setElements(newElements);
      } catch (err) {
        console.error("Error loading network data", err);
      } finally {
        setLoading(false);
      }
    }
    
    loadNetwork();
  }, [limit, proteinId]);

  const handleNodeClick = (event: any) => {
    const node = event.target;
    const connectedEdges = node.connectedEdges();
    
    // Top partners
    const partners = connectedEdges.map((e: any) => {
      const s = e.source().id();
      const t = e.target().id();
      return {
        id: s === node.id() ? t : s,
        weight: e.data("weight")
      };
    }).sort((a: any, b: any) => b.weight - a.weight).slice(0, 5);
    
    setSelectedNode({
      id: node.id(),
      degree: node.data("degree"),
      partners
    });
  };

  const layout = {
    name: 'cose',
    idealEdgeLength: 100,
    nodeOverlap: 20,
    refresh: 20,
    fit: true,
    padding: 30,
    randomize: false,
    componentSpacing: 100,
    nodeRepulsion: 400000,
    edgeElasticity: 100,
    nestingFactor: 5,
  };

  const stylesheet = [
    {
      selector: 'node',
      style: {
        'background-color': '#55e6ff',
        'label': 'data(label)',
        'color': '#fff',
        'font-size': '10px',
        'text-valign': 'center',
        'text-halign': 'center',
        'width': 'mapData(degree, 1, 10, 20, 50)',
        'height': 'mapData(degree, 1, 10, 20, 50)',
        'text-outline-color': '#000',
        'text-outline-width': 1
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 'mapData(weight, 0.5, 1, 1, 4)',
        'line-color': '#2a4365',
        'curve-style': 'bezier',
        'opacity': 0.6
      }
    },
    {
      selector: 'node:selected',
      style: {
        'background-color': '#6ef5b3',
        'border-width': 3,
        'border-color': '#fff'
      }
    },
    {
      selector: 'edge:selected',
      style: {
        'line-color': '#6ef5b3',
        'opacity': 1,
        'width': 4
      }
    }
  ];

  return (
    <div className="relative h-[600px] flex overflow-hidden rounded-xl border border-lab-cyan/20 bg-slate-950">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-lab-cyan animate-spin" />
        </div>
      )}
      
      {/* Network Controls */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {!proteinId && (
          <button 
            onClick={() => setLimit(limit === 50 ? 100 : 50)}
            className="flex items-center gap-2 bg-black/60 border border-lab-cyan/30 px-3 py-1.5 rounded-lg text-xs font-medium text-white hover:bg-lab-cyan/20 transition-colors backdrop-blur-md"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {limit === 50 ? "Show Top 100" : "Show Top 50"}
          </button>
        )}
      </div>

      <div className="flex-1 w-full h-full">
        {elements.length > 0 && (
          <CytoscapeComponent 
            elements={elements} 
            style={{ width: '100%', height: '100%' }} 
            layout={layout}
            stylesheet={stylesheet as any}
            cy={(cy) => {
              cy.on('tap', 'node', handleNodeClick);
              cy.on('tap', (event) => {
                if (event.target === cy) setSelectedNode(null);
              });
            }}
          />
        )}
      </div>

      {/* Protein Detail Drawer */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 bottom-0 w-80 bg-slate-900/95 border-l border-white/10 backdrop-blur-xl p-6 shadow-2xl overflow-y-auto z-20"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-lab-cyan">{selectedNode.id}</h3>
                <p className="text-xs text-slate-400 mt-1">Mycobacterium tuberculosis H37Rv</p>
              </div>
              <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-white">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                <Info className="w-5 h-5 text-lab-mint" />
                <div>
                  <div className="text-xs text-slate-400">Interaction Degree</div>
                  <div className="text-lg font-semibold">{selectedNode.degree} partners</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Top Predicted Partners</h4>
                <div className="space-y-2">
                  {selectedNode.partners.map((p: any, i: number) => (
                    <div key={i} className="flex justify-between items-center text-sm p-2 bg-black/30 rounded border border-white/5">
                      <span className="text-slate-300 font-mono">{p.id}</span>
                      <span className="text-lab-cyan">{(p.weight * 100).toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Biological Summary</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sequence data extracted from UniProt. Prediction scores generated via Siamese Convolutional Neural Network. Contact map validation suggested for structural conformation.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
