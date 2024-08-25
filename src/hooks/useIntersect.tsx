import {
  createEffect,
  createSignal,
  onCleanup,
} from "solid-js/types/server/reactive.js";

export default function useIntersect<HTMLElement>(ref: HTMLDivElement) {
  const [isIntersecting, setIntersecting] = createSignal<boolean>(false);
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIntersecting(entry.isIntersecting);
    },
    {
      rootMargin: "0px",
      threshold: 0,
    }
  );

  createEffect(() => {
    const value = ref;
    if (value) {
      observer.observe(value);
    }

    return () => {
      if (value) {
        observer.unobserve(value);
      }
    };
  });

  onCleanup(() => observer.disconnect());

  return isIntersecting;
}
