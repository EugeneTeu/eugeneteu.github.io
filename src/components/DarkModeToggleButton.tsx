import { ToggleButton } from "@kobalte/core/toggle-button";
import { Component, Show } from "solid-js";
import { Icon } from "solid-heroicons";
import { arrowDown } from "solid-heroicons/solid-mini";
import { Moon, Sun } from "lucide-solid";
import { Toggle } from "./ui/toggle";

export default function DarkModeToggleButton(onClick: () => void) {
  return (
    <Toggle aria-label="Dark mode toggle button" onClick={onClick}>
      {(state) => (
        <Show when={state.pressed()} fallback={<Moon color="white" />}>
          <Sun />
        </Show>
      )}
    </Toggle>
  );
}
