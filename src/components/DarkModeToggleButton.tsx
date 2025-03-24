import { ToggleButton } from "@kobalte/core/toggle-button";
import { Component, Show } from "solid-js";
import { Icon } from "solid-heroicons";
import { arrowDown } from "solid-heroicons/solid-mini";
import { Moon, Sun } from "lucide-solid";
import { Toggle } from "./ui/toggle";

export default function DarkModeToggleButton(onClick: () => void) {
  return (
    <div class="border-2 border-solid rounded-xl dark:border-gray-500 border-black">
      <Toggle aria-label="Dark mode toggle button" onClick={onClick}>
        {(state) => (
          <Show when={state.pressed()} fallback={<Moon color="white" />}>
            <Sun />
          </Show>
        )}
      </Toggle>
    </div>
  );
}
