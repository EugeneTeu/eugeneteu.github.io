export function initLCPObserver(callback: (val: number) => void): void {
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
    callback(lastEntry.startTime);
  });
  observer.observe({ type: "largest-contentful-paint", buffered: true });
}


export function initResourceObserver(): void {
   const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    for (const entry of entries) {
      console.log(entry)
    }

  });
  observer.observe({ type: "resource", buffered: true });
}