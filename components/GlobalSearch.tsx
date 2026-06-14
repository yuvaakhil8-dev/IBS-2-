"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [proteins, setProteins] = useState<string[]>([]);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load protein IDs from CSV once
    async function loadProteins() {
      try {
        const res = await fetch("/data/top_ranked_pairs.csv");
        const text = await res.text();
        const lines = text.trim().split("\n").slice(1);
        const uniqueIds = new Set<string>();
        lines.forEach(row => {
          const cols = row.split(",");
          if (cols.length > 2) {
            uniqueIds.add(cols[1].replace("83332.", ""));
            uniqueIds.add(cols[2].replace("83332.", ""));
          }
        });
        setProteins(Array.from(uniqueIds));
      } catch (err) {
        console.error("Error loading proteins for search", err);
      }
    }
    loadProteins();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = query 
    ? proteins.filter(p => p.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : proteins.slice(0, 8);

  const handleSelect = (id: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(`/protein/${id}`);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-8 z-40" ref={searchRef}>
      <div 
        className="relative group cursor-text"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="w-5 h-5 text-slate-400 group-hover:text-lab-cyan transition-colors" />
        </div>
        <input 
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          className="w-full bg-slate-900/50 border border-white/10 rounded-xl pl-12 pr-12 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-lab-cyan/50 focus:ring-1 focus:ring-lab-cyan/50 backdrop-blur-md shadow-lg transition-all"
          placeholder="Search proteins by ID (e.g. Rv1908c)..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <kbd className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-slate-400 font-mono">
            <Command className="w-3 h-3" /> K
          </kbd>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Suggestions
              </div>
              {filtered.length > 0 ? (
                filtered.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleSelect(id)}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-lab-cyan/10 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4 text-slate-500 group-hover:text-lab-cyan" />
                      <span className="font-mono">{id}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase">Protein</span>
                  </button>
                ))
              ) : (
                <div className="px-3 py-4 text-sm text-slate-400 text-center">
                  No proteins found matching "{query}"
                </div>
              )}
            </div>
            <div className="bg-white/5 border-t border-white/5 p-3 text-[10px] text-slate-400 flex justify-between items-center">
              <span>Press <kbd className="bg-black/30 px-1.5 py-0.5 rounded border border-white/10">Esc</kbd> to close</span>
              <span>Searches {proteins.length || "..."} TB Proteins</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
