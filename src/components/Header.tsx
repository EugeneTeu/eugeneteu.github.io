import { Icon } from "@iconify-icon/solid";
import { Theme, useTheme } from "./context/theme.context";

import DarkModeToggleButton from "./DarkModeToggleButton";
import { A } from "@solidjs/router";
type Props = {};

const Header = ({}: Props) => {
  const [state, { changeMode }] = useTheme();

  const blogLink = (
      <div class="px-3 pt-2">
      <A href="/writings">
        <Icon icon="mdi:blog-outline" />
      </A>
    </div>
  );

  const onModeChange = () => {
    return state.mode === Theme.dark
      ? changeMode(Theme.light)
      : changeMode(Theme.dark);
  };

  return (
    <div class="bg-yellow-200 dark:bg-black">
      <div class="max-w-screen-xl mx-auto ">
        <div class="flex h-14 sm:mx-4 mx-8 items-center justify-center justify-items-center">
          <div class="flex-grow text-black dark:text-white">
            <a href="/">
              <h1>Eugene Teu 👋</h1>
            </a>
          </div>
          <div >{blogLink}</div>
          <div>{DarkModeToggleButton(onModeChange)}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
