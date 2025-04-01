import { Construction } from "lucide-solid";
import { JSXElement } from "solid-js";
import BentoBox from "~/components/BentoBox";
import { Blog } from "~/content/content";

export default function BlogHome(): JSXElement {
  const blogSection = <BentoBox>{Blog()}</BentoBox>;
  return (
    <>
      <main class="bg-white dark:bg-gray-900 pb-safe min-h-screen overflow-auto mb-10">
        <div
          class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto md:w-fit lg:mx-auto pt-4 pb-4`}
        >
          {blogSection}
        </div>
      </main>
    </>
  );
}
