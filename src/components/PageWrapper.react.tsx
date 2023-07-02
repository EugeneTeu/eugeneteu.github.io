import React from "react";
import Header from "./Header.react";
import { useTheme } from "./context/theme.context";

export default function PageWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  const { mode } = useTheme();

  return (
    <div className={`${mode}`}>
      <div className="bg-white dark:bg-gray-900">
        <Header />
        {children}
      </div>
    </div>
  );
}
