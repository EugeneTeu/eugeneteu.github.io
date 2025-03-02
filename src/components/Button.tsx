import { Component } from "solid-js";

type ButtonProps = {
  label: string;
  onClick?: (e: MouseEvent) => void;
};
const Button: Component<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      class="hover:scale-110 ease-in-out inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 dark:bg-blue-800 bg-blue-400 text-black dark:text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
