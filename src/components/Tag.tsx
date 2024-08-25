import { Component } from "solid-js";

export type TagProps = {
  label: string;
  custom?: string;
};

const Tag: Component<TagProps> = ({ label, custom }: TagProps) => {
  return (
    <span
      class={`transition duration-150 transform hover:-translate-y-1 hover:scale-110 ease-in-out inline-block rounded-full px-3 py-1 text-sm text-white dark:text-black dark:font-semibold mr-2 mb-2 ${custom}`}
    >
      {label}
    </span>
  );
};

export default Tag;
