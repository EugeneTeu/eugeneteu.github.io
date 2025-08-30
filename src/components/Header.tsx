import { Theme, useTheme } from "./context/theme.context";
import { Rss } from "lucide-solid";
import DarkModeToggleButton from "./DarkModeToggleButton";
import { A } from "@solidjs/router";
type Props = {};

const Header = ({}: Props) => {
  const [state, { changeMode }] = useTheme();

  const blogLink = (
    <div class="px-3">
      <A href="/blog-list">
        <Rss />
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
          <div>{blogLink}</div>
          <div>{DarkModeToggleButton(onModeChange)}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
