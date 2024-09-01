import { Component, Show } from "solid-js";
import { Icon } from "solid-heroicons";
import { moon, sun } from "solid-heroicons/solid-mini";
import { Toggle } from "./base-components/ETDSToggle";

const ETDSToggleButton: Component<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <Toggle
      class="inline-flex rounded-mid w-10 h-10 border border-black dark:border-white"
      aria-label="Mute"
      onClick={onClick}
    >
      {(state) => (
        <Show when={state.pressed()} fallback={<Icon path={moon} />}>
          <Icon path={sun} color="black" />
        </Show>
      )}
    </Toggle>
  );
};

export default ETDSToggleButton;
