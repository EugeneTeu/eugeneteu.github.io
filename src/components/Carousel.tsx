import { createSignal, createEffect, onCleanup } from "solid-js";
import { For } from "solid-js/web";

const items = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  { id: 4, text: "Item 4" },
  { id: 5, text: "Item 5" },
];

export default function Carousel() {
  const [index, setIndex] = createSignal(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  let interval: NodeJS.Timeout;

  createEffect(() => {
    interval = setInterval(next, 3000);
    onCleanup(() => clearInterval(interval));
  });

  return (
    <div class="relative w-full max-w-lg mx-auto overflow-hidden bg-white">
      <div class="flex justify-between absolute inset-0 z-10">
        <button class="p-2 bg-gray-800 text-white" onClick={prev}>
          <p>prev</p>
        </button>
        <button class="p-2 bg-gray-800 text-white" onClick={next}>
          <p>next</p>
        </button>
      </div>
      <div class="flex items-center justify-center overflow-hidden">
        <div class="flex w-full transition-transform duration-500 ease-in-out">
          <For each={items}>
            {(item, i) => {
              const pos = () => (i() - index() + items.length) % items.length;
              return (
                <div
                  class="absolute w-1/3 transition-transform duration-500 ease-in-out"
                  classList={{
                    "scale-110 z-10 opacity-100": pos() === 0, // Center item
                    "scale-90 opacity-75 -translate-x-1/3": pos() === 1, // Right
                    "scale-90 opacity-75 translate-x-1/3":
                      pos() === items.length - 1, // Left
                    "opacity-0 pointer-events-none": pos() > 1 || pos() < -1,
                  }}
                  style={{ transition: "all 0.5s ease" }}
                >
                  <div class="bg-gray-200 text-center p-6 rounded-lg shadow-lg">
                    {item.text}
                  </div>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </div>
  );
}
