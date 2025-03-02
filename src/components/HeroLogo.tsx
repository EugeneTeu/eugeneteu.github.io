import { Bitcoin, CodeXml, Coffee, Tally1 } from "lucide-solid";
import { JSXElement, onMount } from "solid-js";
import gsap from "gsap";

export default function HeroLogo(): JSXElement {
  let containerRef: HTMLDivElement | undefined;
  let codeRef: SVGSVGElement | undefined;
  let coffeeRef: SVGSVGElement | undefined;
  let tween2: gsap.core.Tween | undefined;
  let tl = gsap.timeline();
  const enterAnimation = () => {
    if (codeRef && coffeeRef) {
      tl.to(codeRef, {
        translateX: "200%",
        duration: 2,
        ease: "elastic",
        rotation: 90,
      });
      tl.to(codeRef, {
        rotation: 90,
        duration: 3,
      });
      tween2 = gsap.to(coffeeRef, {
        translateX: "200%",
        duration: 3,
        ease: "elastic",
      });
    }
  };

  const exitAnimation = () => {
    if (codeRef && coffeeRef) {
      if (tl) {
        tl.reverse();
      }

      if (tween2) {
        tween2.reverse();
      }
    }
  };

  const tapAnimation = (e: Event) => {
    if (codeRef && coffeeRef) {
      tl.to(codeRef, {
        translateX: "200%",
        duration: 2,
        ease: "elastic",
        rotation: 90,
      });
      tl.to(codeRef, {
        rotation: 90,
        duration: 3,
      });
      tween2 = gsap.to(coffeeRef, {
        translateX: "200%",
        duration: 3,
        ease: "elastic",
      });
    }
  };

  onMount(() => {
    if (containerRef) {
      containerRef.addEventListener("mouseenter", () => {
        enterAnimation();
      });
      containerRef.addEventListener("mouseleave", () => {
        exitAnimation();
      });
    }
  });

  return (
    <div
      ref={containerRef}
      class="flex gap-2 w-fit"
      on:touchstart={tapAnimation}
    >
      <Bitcoin />
      <CodeXml ref={codeRef} />
      <Coffee ref={coffeeRef} />
    </div>
  );
}
