import { Component, JSXElement, Show } from "solid-js";
import useIntersect from "~/hooks/useIntersect";

type ContainerProps = {
  children: JSXElement;
};

const VisibilityContainer: Component<ContainerProps> = ({
  children,
}: ContainerProps) => {
  let myElement!: HTMLDivElement;

  const isIntersecting = useIntersect(myElement);

  return (
    <div ref={myElement}>
      {
        // needs fallback
      }
      <Show when={isIntersecting}>{children}</Show>
    </div>
  );
};

export default VisibilityContainer;
