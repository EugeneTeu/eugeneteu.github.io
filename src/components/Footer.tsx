import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-8 px-8 mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p>© {new Date().getFullYear()} Eugene Teu. All rights reserved.</p>
          <p className="text-[10px] opacity-70">Built with Gemini CLI and Claude.</p>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://github.com/eugeneteu" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors flex items-center gap-2">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/eugeneteu" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
