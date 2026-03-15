import { Component, createSignal, JSXElement, onMount, Show } from "solid-js";
import { initLCPObserver, PerfMetric } from "~/lib/performance";

type ContainerProps = {};

const PerformanceProfiler: Component<ContainerProps> = ({}: ContainerProps) => {
  const [perfMetric, setPerfMetric] = createSignal<null | PerfMetric>(null);
  const [isVisible, setIsVisible] = createSignal(true); // New signal for visibility

  initLCPObserver(setPerfMetric);

  return (
    <Show when={perfMetric() !== null && isVisible()}>
      <div class="fixed bottom-4 right-4 z-50 bg-white/20  p-1">
        <button
          onClick={() => setIsVisible(false)} // onClick handler to hide the component
          class="absolute -top-3 -right-1 text-white text-lg"
        >
          &times;
        </button>
        <div>
          <span class="font-bold">{perfMetric()!.type}:</span>{" "}
          {perfMetric()!.value}ms
        </div>
      </div>
    </Show>
  );
};

export default PerformanceProfiler;
