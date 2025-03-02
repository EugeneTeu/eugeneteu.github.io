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

// index

// [0,1,2,3,4]

// active = 2

// 1 , 3 , the rest hidden

// active = 4

// 3, 0, the rest hidden

// 0 -1

function jsModHack(x: number, mod: number): number {
  //web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
  const v = ((x % mod) + mod) % mod;
  return v;
}

function Card({ children }: { children: JSXElement }) {
  return (
    <div class="bg-[#9d7cce]  grid place-items-center rounded-lg p-5 transition-transform duration-500 ease-in-out">
      {children}
    </div>
  );
}

export default function Carousel() {
  const [activeIndex, setActiveIndex] = createSignal(0);

  const next = () => setActiveIndex((i) => (i + 1) % items.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const inFocus = (i: number) => {
    return i === activeIndex();
  };
  const total = items.length;

  // Swipe Gesture Tracking
  let startX = 0;
  let isClicked = false;

  const onPointerMove = (e: PointerEvent) => {
    if (isClicked) {
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? next() : prev();
      }
    }
  };

  const onPointerDown = (e: PointerEvent) => {
    isClicked = true;
    startX = e.clientX;
  };

  const onPointerUp = (e: Event) => {
    isClicked = false;
  };

  const onTouchStart = (e: PointerEvent) => {
    isClicked = true;
    startX = e.clientX;
  };

  const onTouchEnd = (e: Event) => {
    isClicked = false;
  };

  const onTouchMove = (e: PointerEvent) => {
    if (isClicked) {
      console.log("touched");
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? next() : prev();
      }
    }
  };

  createEffect(() => {
    setInterval(() => next(), 5000);
  });

  return (
    <div class="container flex-col items-center justify-center overflow-hidden bg-white w-96 h-fit py-5">
      <h1>Carousel Component</h1>
      <div class="relative h-80 w-full overflow-x-hidden">
        <For each={items}>
          {(item, i) => {
            return (
              <div
                class={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500  ${
                  inFocus(i()) ? "opacity-100" : "opacity-0"
                }`}
              >
                <Card>{item.text}</Card>
              </div>
            );
          }}
        </For>
      </div>

      <div
        class="relative w-full h-80 overflow-hidden"
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div class="flex w-full transition-transform duration-500 justify-center">
          <For each={items}>
            {(item, i) => {
              const position = () => {
                const leftNum = jsModHack(activeIndex() - 1, total);
                const rightNum = jsModHack(activeIndex() + 1, total);

                const left = i() === leftNum;
                const middle = i() === activeIndex();
                const right = i() === rightNum;

                if (left) return "translate-x-[-100%] scale-90 opacity-100 z-0";
                if (middle) return "translate-x-0 scale-100 opacity-100 z-10";
                if (right) return "translate-x-[100%] scale-90 opacity-100 z-0";
                return "opacity-0 z-0";
                // // these index are wrong
                // if (i() < leftNum) {
                //   const multiplier = activeIndex() - i();
                //   const translateValueX = Math.abs(100 * multiplier);
                //   return `translate-x-[-${translateValueX}%] scale-90 z-0`;
                // }
                // if (i() > rightNum) {
                //   const multiplier = i() - activeIndex() - 1;
                //   const translateValueX = Math.abs(100 * multiplier);
                //   console.log(translateValueX);
                //   return `translate-x-[${translateValueX}%] scale-90 z-0`;
                // }
              };

              return (
                <div
                  class={`absolute transition-all duration-700 ${position()}`}
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
