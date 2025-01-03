import { RouteSectionProps } from "@solidjs/router";
//@ts-expect-error
import { MDXProvider } from "solid-mdx";
import { markdownComponents } from "~/components/Markdown";

export default function BlogLayout(props: RouteSectionProps) {
  return (
    <main class="bg-white dark:bg-gray-900 min-h-screen">
      <div>
        <div class="pt-6">
          <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`}>
            <div class="md:mx-auto md:w-fit">
              <article class="prose prose-md lg:prose-xl prose-normal dark:prose-invert">
                <MDXProvider components={markdownComponents}>
                  {props.children}
                </MDXProvider>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
