import { Component, JSXElement } from "solid-js";

type ContainerProps = {
  children: JSXElement;
};

const Container: Component<ContainerProps> = ({ children }: ContainerProps) => {
  return <div class="bg-stone-400">{children}</div>;
};

export default Container;
