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
      class={`lg:mx-4 my-4 rounded-lg border-solid px-6 py-6 w-full h-fit xl:h-full  `}
    >
      {children}
    </div>
  );
};

export default BentoBox;
