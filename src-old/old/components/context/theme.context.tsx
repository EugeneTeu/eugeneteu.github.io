import React, { FC, useContext, useEffect, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  mode: Theme;
  setMode: (theme: Theme) => void;
};

export enum Theme {
  light = "light",
  dark = "dark",
}

export const ThemeContext = React.createContext<ThemeContextType>({
  mode: Theme.dark,
  setMode: () => {},
});

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<Theme>(Theme.dark);

  useEffect(() => {}, []);

  return (
    <ThemeContext.Provider value={{ mode: mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext<ThemeContextType>(ThemeContext);
};
