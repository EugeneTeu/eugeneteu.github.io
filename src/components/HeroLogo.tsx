import { JSXElement, onMount } from "solid-js";
import { gsap } from "gsap";
import { Icon } from "@iconify-icon/solid";

export default function HeroLogo(): JSXElement {
  let containerRef: HTMLDivElement | undefined;
  let coffeeRef: HTMLDivElement | undefined;
  let tl = gsap.timeline({
    repeat: -1,
  });

  onMount(() => {
    setInterval(() => {
      if (coffeeRef) {
        tl.to(coffeeRef, {
          duration: 1,
        });
        tl.to(coffeeRef, {
          translateX: "200%",
          duration: 2,
          ease: "elastic",
        });
        tl.to(coffeeRef, {
          duration: 1,
        });
        tl.to(coffeeRef, { translateX: "0%", duration: 2, ease: "power1.out" });
        tl.to(coffeeRef, {
          duration: 2,
        });
      }
    }, 1000);
  });

  return (
    <div ref={containerRef} class="flex gap-3 w-fit mb-2">
      <div>
        <Icon icon="logos:bitcoin" height={24} width={24} />
      </div>
      <div>
        <Icon
          icon="streamline-ultimate:programming-book"
          height={24}
          width={24}
        />
      </div>
      <div ref={coffeeRef}>
        <Icon icon="mdi:coffee-outline" width="24" height="24" />
      </div>
    </div>
  );
}
