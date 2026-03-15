import { createSignal, useContext } from "solid-js";
import { Theme, useTheme } from "./context/theme.context";

export default function Counter() {
  const [state, { changeMode }] = useTheme();

  return (
    <button
      class="hover:scale-110 ease-in-out inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 dark:bg-blue-800 bg-blue-400 text-black dark:text-white"
      onClick={() => {
        state.mode === Theme.dark
          ? changeMode(Theme.light)
          : changeMode(Theme.dark);
      }}
    >
      Clicks
    </button>
  );
}
