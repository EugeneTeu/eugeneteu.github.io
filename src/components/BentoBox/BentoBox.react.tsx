import react, { ReactElement } from "react";

type ContainerProps = {
  children: react.ReactElement;
  backgroundDark?: string;
  backgroundLight?: string;
};

const defaultLight = "bg-gray-200";
const defaultDark = "dark:bg-gray-800";

const BentoBox = ({
  children,
  backgroundDark,
  backgroundLight,
}: ContainerProps) => {
  const bgLight = backgroundLight ?? defaultLight;
  const bgDark = backgroundDark ?? defaultDark;

  return (
    <div
      className={`rounded-lg border-solid px-6 py-6 w-full h-fit ${bgLight} ${bgDark} `}
    >
      {children}
    </div>
  );
};

export default BentoBox;
