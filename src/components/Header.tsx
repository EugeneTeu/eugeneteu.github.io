import { Theme, useTheme } from "./context/theme.context";
import { ToggleButton } from "@kobalte/core/toggle-button";
import EDSToggleButton from "./ToggleButton";
type Props = {};

const Header = ({}: Props) => {
  const [state, { changeMode }] = useTheme();

  const onModeChange = () => {
    return state.mode === Theme.dark
      ? changeMode(Theme.light)
      : changeMode(Theme.dark);
  };

  return (
    <div class="bg-yellow-200 dark:bg-black">
      <div class="max-w-5xl mx-auto ">
        <div class="flex h-14 mx-8 items-center justify-center justify-items-center">
          <div class="flex-grow text-black dark:text-white ">
            <a href="/">
              <h1>Eugene Teu 👋</h1>
            </a>
          </div>
          <div class="items-center justify-center justify-items-center mx-3">
            {/* {EDSToggleButton(onModeChange)} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
