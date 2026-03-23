import Link from "next/link";
import { Dumbbell, BookOpen } from "lucide-react";
import DarkModeToggleButton from "./DarkModeToggleButton";

const Header = () => {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-yellow-200/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Eugene Teu
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/fitness"
            className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
          >
            <Dumbbell size={16} />
          </Link>
          <Link
            href="/writings"
            className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
          >
            <BookOpen size={16} />
          </Link>
          <DarkModeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
