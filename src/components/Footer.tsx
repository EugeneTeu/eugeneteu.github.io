import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="bg-yellow-200 dark:bg-black text-white py-6 mt-8">
      <div class={`mx-auto mt-6 w-fit`}>
        <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
          <p class="text-sm mx-auto w-fit">
            &copy; {new Date().getFullYear()} eugeneteu All rights reserved.
          </p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
