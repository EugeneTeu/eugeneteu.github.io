"use client";

export function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iP(hone|od|ad)/.test(navigator.userAgent);
}

export type PerfMetric = {
  type: "LCP" | "HeroImg" | "FCP" | "Now";
  value: number;
};

export function initLCPObserver(callback: (val: PerfMetric) => void) {
  if (typeof window === "undefined") return;

  // does not work in safari since safari does not report LCP.
  if ("PerformanceObserver" in window && !isIOS()) {
    try {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
          startTime: number;
        };
        if (lastEntry) {
          callback({ type: "LCP", value: Math.round(lastEntry.startTime) });
        }
      });
      observer.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      // fall through
    }
  }

  if ("PerformanceObserver" in window) {
    try {
      const fcpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === "first-contentful-paint") {
            callback({ type: "FCP", value: Math.round(entry.startTime) });
            fcpObserver.disconnect();
          }
        }
      });
      fcpObserver.observe({ type: "paint", buffered: true });
    } catch {
      // fallback
    }
  } else {
    callback({ type: "Now", value: Math.round(performance.now()) });
  }
}
