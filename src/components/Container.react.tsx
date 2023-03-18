import react, { ReactElement } from "react";

type ContainerProps = {
  children: react.ReactElement;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="bg-stone-400">{children}</div>;
};

export default Container;
