import { MutableRefObject, useEffect, useState } from "react";

export default function useIntersect<HTMLElement>(
  ref: MutableRefObject<HTMLDivElement | null>
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );
    const value = ref.current;
    if (value) {
      observer.observe(value);
    }

    return () => {
      if (value) {
        observer.unobserve(value);
      }
    };
  }, [ref]);

  return isIntersecting;
}
