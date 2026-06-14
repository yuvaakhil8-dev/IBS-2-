"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

interface TooltipProps {
  children: ReactNode;
  content: string;
  title?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ children, content, title, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const posClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

  return (
    <div 
      className="relative inline-flex items-center cursor-help"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 w-64 p-3 bg-slate-900/95 border border-white/10 shadow-2xl rounded-xl backdrop-blur-md pointer-events-none ${posClasses[position]}`}
          >
            {title && (
              <div className="flex items-center gap-2 mb-1.5 border-b border-white/10 pb-1.5">
                <Info className="w-3.5 h-3.5 text-lab-cyan" />
                <span className="text-xs font-semibold text-white">{title}</span>
              </div>
            )}
            <p className="text-[11px] text-slate-300 leading-relaxed font-sans normal-case tracking-normal">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
