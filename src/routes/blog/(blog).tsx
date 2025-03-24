import { Meta, Title } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";
//@ts-expect-error
import { MDXProvider } from "solid-mdx";
import { markdownComponents } from "~/components/Markdown";
import { PostMetaData, posts } from "~/data/posts";
import { ArrowLeft, Construction, MoveUpLeftIcon } from "lucide-solid";
import { JSXElement } from "solid-js";

export default function Blog(): JSXElement {
  return (
    <>
      <main class="bg-white dark:bg-gray-900 pb-safe min-h-screen overflow-auto mb-10">
        <div
          class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto md:w-fit lg:mx-auto pt-4 pb-4`}
        >
          <div class="flex flex-row w-100">
            <div class="mx-3">
              <Construction />
            </div>
            <div>
              <h1>Sorry still under construction</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
