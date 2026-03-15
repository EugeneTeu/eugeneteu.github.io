"use client";

import React, { useState, useEffect } from "react";
import { initLCPObserver, PerfMetric } from "@/lib/performance";

const PerformanceProfiler: React.FC = () => {
  const [perfMetric, setPerfMetric] = useState<null | PerfMetric>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    initLCPObserver((metric) => {
      setPerfMetric(metric);
    });
  }, []);

  if (!isVisible || perfMetric === null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-white/20 dark:bg-black/20 backdrop-blur-sm p-2 rounded-md border border-zinc-200/20 dark:border-zinc-800/20 text-[10px] font-mono shadow-sm group">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-zinc-800 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-xs"
      >
        &times;
      </button>
      <div>
        <span className="font-bold opacity-70">{perfMetric.type}:</span>{" "}
        <span className="tabular-nums">{perfMetric.value}ms</span>
      </div>
    </div>
  );
};

export default PerformanceProfiler;
