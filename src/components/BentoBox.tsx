import { Component, JSXElement } from "solid-js";

type ContainerProps = {
  children: JSXElement;
  backgroundDark?: string;
  backgroundLight?: string;
};

const defaultLight = "bg-gray-200";
const defaultDark = "dark:bg-gray-800";

const BentoBox: Component<ContainerProps> = ({
  backgroundDark,
  backgroundLight,
  children,
}: ContainerProps) => {
  const bgLight = backgroundLight ?? defaultLight;
  const bgDark = backgroundDark ?? defaultDark;

  return (
    <div
      class={`rounded-lg border-solid px-6 py-6 w-full h-fit ${bgLight} ${bgDark} `}
    >
      {children}
    </div>
  );
};

export default BentoBox;
