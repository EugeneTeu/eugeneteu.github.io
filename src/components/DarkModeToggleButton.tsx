"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 border-2 border-zinc-900 dark:border-zinc-500 rounded-xl"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 border-2 border-zinc-900 dark:border-zinc-500 rounded-xl transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-zinc-100" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-900" />
      )}
    </button>
  );
}
