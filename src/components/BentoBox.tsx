import React from "react";

interface BentoBoxProps {
  children: React.ReactNode;
  className?: string;
}

const BentoBox: React.FC<BentoBoxProps> = ({ children, className = "" }) => {
  return (
    <div className={`lg:mx-4 my-2 rounded-lg border border-zinc-200 dark:border-zinc-800 px-6 py-6 w-full h-fit ${className}`}>
      {children}
    </div>
  );
};

export default BentoBox;
