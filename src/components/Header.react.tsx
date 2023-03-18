import { Switch } from "@headlessui/react";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Theme, useTheme } from "./context/theme.context";

type Props = {};

const Header = ({}: Props) => {
  const { mode, setMode } = useTheme();

  const onModeChange = () => {
    return mode == Theme.dark ? setMode(Theme.light) : setMode(Theme.dark);
  };

  return (
    <div className="bg-yellow-200 dark:bg-black">
      <div className="max-w-5xl mx-auto ">
        <div className="flex h-14 mx-8 items-center justify-center justify-items-center">
          <div className="flex-grow text-black dark:text-white ">
            <h1>Eugene Teu 👋</h1>
          </div>
          <div className="items-center justify-center justify-items-center mx-3">
            <Switch.Group>
              <div className="flex items-center">
                <Switch.Label className="mr-4">
                  {mode === Theme.light ? (
                    <SunIcon color="black" className="h-6 w-6 " />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </Switch.Label>
                <Switch
                  checked={mode === Theme.dark}
                  onChange={onModeChange}
                  className={`${
                    mode === Theme.light ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Dark Mode toggle</span>
                  <span
                    className={`${
                      mode === Theme.light ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            </Switch.Group>
          </div>
          {/* <div className="items-center justify-center justify-items-center mt-1">
                        <Button label="Try Me" onClick={onModeChange} />
                    </div> */}
        </div>
      </div>
    </div>
  );
};
export default Header;
