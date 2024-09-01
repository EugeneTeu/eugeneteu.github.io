import { Component, JSXElement } from "solid-js";

type MainProps = {
  children: JSXElement;
};

const Main: Component<MainProps> = ({ children }: MainProps) => {
  return <main class="bg-white dark:bg-gray-900 min-h-screen">{children}</main>;
};

export default Main;
