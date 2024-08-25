import { Theme, useTheme } from "./context/theme.context";

type Props = {};

const Header = ({}: Props) => {
  const [state, { changeMode }] = useTheme();
  const { mode } = state;

  const onModeChange = () => {
    return mode == Theme.dark
      ? changeMode(Theme.light)
      : changeMode(Theme.dark);
  };

  return (
    <div class="bg-yellow-200 dark:bg-black">
      <div class="max-w-5xl mx-auto ">
        <div class="flex h-14 mx-8 items-center justify-center justify-items-center">
          <div class="flex-grow text-black dark:text-white ">
            <a href="/">
              <h1>Eugene Teu 👋</h1>{" "}
            </a>
          </div>
          <div class="items-center justify-center justify-items-center mx-3">
            {/* <Switch.Group>
              <div class="flex items-center">
                <Switch.Label class="mr-4">
                  {mode === Theme.light ? (
                    <SunIcon color="black" class="h-6 w-6 " />
                  ) : (
                    <MoonIcon class="h-6 w-6" />
                  )}
                </Switch.Label>
                <Switch
                  checked={mode === Theme.dark}
                  onChange={onModeChange}
                  class={`${
                    mode === Theme.light ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span class="sr-only">Dark Mode toggle</span>
                  <span
                    class={`${
                      mode === Theme.light ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </Switch.Group> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
