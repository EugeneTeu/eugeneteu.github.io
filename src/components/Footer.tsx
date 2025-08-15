import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <footer class="bg-yellow-200 dark:bg-black text-white py-6 mt-8">
      <div class={`mx-auto mt-6 w-fit`}>
        <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
          <div class="not-prose flex justify-center">
            <a href="https://www.linkedin.com/in/eugeneteu">
              <img alt="linkedin" class="w-8 h-8 mx-2" src="/linkedin.svg" />
            </a>
            <a href="https://t.me/debee45" target="_blank">
              <img alt="telegram" class="w-8 h-8 mx-2" src="/telegram.png" />
            </a>
            <a href="https://github.com/EugeneTeu">
              <img alt="github" class="w-8 h-8 mx-2" src="/github.svg" />
            </a>
          </div>
          <p class="text-sm mx-auto w-fit">
            &copy; {new Date().getFullYear()} eugeneteu All rights reserved.
          </p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
