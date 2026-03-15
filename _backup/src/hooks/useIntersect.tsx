import { createEffect, createSignal, onCleanup } from "solid-js";

export default function useIntersect<HTMLElement>(ref: HTMLDivElement) {
  const [isIntersecting, setIntersecting] = createSignal(false);
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    },
    {
      rootMargin: "0px",
      threshold: 0.1,
    }
  );
  if (ref) {
    observer.observe(ref);
  }
  onCleanup(() => observer.disconnect());

  return isIntersecting;
}
