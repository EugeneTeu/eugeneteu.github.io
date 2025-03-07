import { Bitcoin, CodeXml, Coffee, Tally1 } from "lucide-solid";
import { JSXElement, onMount } from "solid-js";
import gsap from "gsap";

export default function HeroLogo(): JSXElement {
  let containerRef: HTMLDivElement | undefined;
  let codeRef: SVGSVGElement | undefined;
  let coffeeRef: SVGSVGElement | undefined;
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
    <div ref={containerRef} class="flex gap-2 w-fit">
      <Bitcoin />
      <CodeXml />
      <Coffee ref={coffeeRef} />
    </div>
  );
}
