import { createSignal, createEffect, onCleanup, JSXElement } from "solid-js";
import { For } from "solid-js/web";
import Button from "./Button";

const items = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  { id: 4, text: "Item 4" },
  { id: 5, text: "Item 5" },
];

function Card({ children }: { children: JSXElement }) {
  return (
    <div class="bg-[#9d7cce]  grid place-items-center rounded-lg p-5 transition-transform duration-500 ease-in-out">
      {children}
    </div>
  );
}

export default function Carousel() {
  const [index, setIndex] = createSignal(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const inFocus = (i: number) => {
    return i === index();
  };
  const total = items.length;

  return (
    <div class="container flex-col items-center justify-center overflow-hidden bg-white w-96 h-fit py-5">
      <h1>Carousel Component</h1>
      <div class="relative h-80 w-full">
        <For each={items}>
          {(item, i) => {
            return (
              <div
                class={`absolute inset-0 flex items-center justify-center transition-opacity duration-500  ${
                  inFocus(i()) ? "opacity-100" : "opacity-0"
                }`}
              >
                <Card>{item.text}</Card>
              </div>
            );
          }}
        </For>
      </div>

      <div class="relative w-full h-80 overflow-hidden">
        <div class="flex w-full transition-transform duration-500 justify-center">
          <For each={items}>
            {(item, i) => {
              const position = () => {
                console.log(index());
                const diff = (i() - index() + total) % total;
                if (diff === 0)
                  return "translate-x-0 scale-100 opacity-100 z-10";
                if (diff === 1)
                  return "translate-x-[100%] scale-90 opacity-50 z-0";
                if (diff === 2)
                  return "translate-x-[-100%] scale-90 opacity-50 z-0";
                return "hidden";
              };

              return (
                <div
                  class={`absolute transition-all duration-500 ${position()}`}
                >
                  <Card>{item.text}</Card>
                </div>
              );
            }}
          </For>
        </div>
      </div>

      <div class="mt-5 flex justify-center">
        <Button label="prev" onClick={prev} />
        <Button label="next" onClick={next} />
      </div>
    </div>
  );
}
