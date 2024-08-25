import { ToggleButton } from "@kobalte/core/toggle-button";
import { Component, Show } from "solid-js";
import { Icon } from "solid-heroicons";
import { arrowDown } from "solid-heroicons/solid-mini";

export default function EDSToggleButton(onClick: () => void) {
  return (
    <ToggleButton
      class="inline-flex h-10 w-10 rounded-md"
      aria-label="Mute"
      onClick={onClick}
    >
      {(state) => (
        <Show
          when={state.pressed()}
          fallback={<Icon path={arrowDown} style="width: 40px; color: green" />}
        >
          <Icon path={arrowDown} style="width: 40px; color: yellow" />
        </Show>
      )}
    </ToggleButton>
  );
}
