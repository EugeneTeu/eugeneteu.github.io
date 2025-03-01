import React, { ReactElement } from "react";
import Header from "../../../src/components/Header.react";
import { useTheme } from "../../../src/components/context/theme.context";

export default function PageWrapper({ children }: { children: ReactElement }) {
  const { mode } = useTheme();

  return (
    <div className={`${mode}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Header />
        {children}
      </div>
    </div>
  );
}
