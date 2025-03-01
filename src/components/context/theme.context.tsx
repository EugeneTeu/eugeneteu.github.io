import { createContext, useContext, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";

export enum Theme {
  light = "light",
  dark = "dark",
}

export type ThemeContextState = {
  readonly mode: Theme;
};

export type ThemeContextValue = [
  state: ThemeContextState,
  actions: {
    changeMode: (mode: Theme) => void;
  }
];

const defaultState = {
  mode: Theme.dark,
};

const ThemeContext = createContext<ThemeContextValue>([
  defaultState,
  {
    changeMode: () => undefined,
  },
]);

export const ThemeProvider: ParentComponent<{
  mode?: Theme;
}> = (props) => {
  const [state, setState] = createStore({
    mode: props.mode ?? defaultState.mode,
  });

  const changeMode = (modeInput: Theme) => {
    document.documentElement.setAttribute("data-theme", modeInput);
    setState("mode", modeInput);
  };

  return (
    <ThemeContext.Provider value={[state, { changeMode }]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
