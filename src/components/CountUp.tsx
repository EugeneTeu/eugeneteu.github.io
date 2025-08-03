import { Accessor, createEffect, createSignal, JSXElement } from "solid-js";

export default function CountUp({
  start = 0,
  timer = 50,
  end,
}: {
  start: number;
  end: number;
  timer: number;
}): Accessor<Number> {
  const [starting, setStarting] = createSignal(start);

  createEffect(() =>
    setInterval(() => {
      if (starting() === end) {
        return;
      }
      setStarting(starting() + 5);
    }, timer)
  );

  return starting;
}
