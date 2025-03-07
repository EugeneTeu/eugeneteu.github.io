import { Component } from "solid-js";

type ButtonProps = {
  label: string;
  onClick?: (e: MouseEvent) => void;
};
const CustomButton: Component<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      class="mt-1 mb-1 ease-in-out inline-block rounded-full px-3 py-1 text-sm font-semibold dark:bg-blue-800 bg-blue-400 text-black dark:text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
