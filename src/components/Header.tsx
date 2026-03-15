import Link from "next/link";
import DarkModeToggleButton from "./DarkModeToggleButton";

const Header = () => {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-yellow-200/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Eugene Teu
        </Link>
        <DarkModeToggleButton />
      </div>
    </header>
  );
};

export default Header;
