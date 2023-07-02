import react, { ReactElement } from "react";

type ContainerProps = {
  children: react.ReactElement;
};

const BentoBox = ({ children }: ContainerProps) => {
  return (
    <div className="rounded-lg bg-white dark:bg-gray-800 border-solid px-6 py-6 w-fit h-fit">
      {children}
    </div>
  );
};

export default BentoBox;
