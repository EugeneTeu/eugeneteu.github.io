import { Component, createSignal, JSXElement, onMount, Show } from "solid-js";
import { initLCPObserver } from "~/lib/performance";

type ContainerProps = {};

const PerformanceProfiler: Component<ContainerProps> = ({}: ContainerProps) => {
  const [lcp, setLCP] = createSignal<null | number>(null);
 const [isVisible, setIsVisible] = createSignal(true); // New signal for visibility

  onMount(() => {
    initLCPObserver(setLCP);
  });

  return (
    <Show when={lcp() !== null  && isVisible()}>
     <div class="fixed bottom-4 right-4 z-50 bg-white/20  p-1">
        <button
          onClick={() => setIsVisible(false)} // onClick handler to hide the component
          class="absolute -top-3 -right-1 text-white text-lg"
        >
          &times;
        </button>
        <div>
        LCP: {lcp()}ms
        </div>
      </div>
    </Show>
  );
};

export default PerformanceProfiler;
