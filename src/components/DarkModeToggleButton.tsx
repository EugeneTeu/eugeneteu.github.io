import { Component, Show } from "solid-js";

import { Toggle } from "./ui/toggle"

import { Icon } from '@iconify-icon/solid';

export default function DarkModeToggleButton(onClick: () => void) {
  return (
    <div class="border-2 border-solid rounded-xl dark:border-gray-500 border-black">
      <Toggle aria-label="Dark mode toggle button" onClick={onClick}>
        {(state) => (
          <Show when={state.pressed()} fallback={

          <Icon icon="solar:moon-bold"  />
          }>
            <Icon icon="si:sun-fill" />
          </Show>
        )}
      </Toggle>
    </div>
  );
}
