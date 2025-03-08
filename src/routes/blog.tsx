import { Meta, Title } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";
//@ts-expect-error
import { MDXProvider } from "solid-mdx";
import { markdownComponents } from "~/components/Markdown";
import { PostMetaData, posts } from "~/data/posts";
import { ArrowLeft, MoveUpLeftIcon } from "lucide-solid";

export default function BlogLayout(props: RouteSectionProps) {
  const meta = () =>
    posts.find((p) => props.location.pathname.endsWith(p.slug)) as PostMetaData;

  return (
    <>
      <Title>{meta().title}</Title>
      <Meta name="og:title" content={meta().title} />
      <Meta name="description" content={meta().description} />
      <Meta name="og:description" content={meta().description} />
      <main class="bg-white dark:bg-gray-900 pb-safe min-h-screen overflow-auto mb-10">
        <div
          class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto md:w-fit lg:mx-auto pt-4 pb-4`}
        >
          <div class="prose prose-md  prose-normal dark:prose-invert pt-2 pb-2">
            <div class="flex items-center gap-1">
              <a href="/">
                <ArrowLeft size={16} class="inline" />
                Home
              </a>
            </div>
          </div>
          <article class="prose prose-md  prose-normal dark:prose-invert animate-fadeInPageTransition">
            <MDXProvider components={markdownComponents}>
              {props.children}
            </MDXProvider>
          </article>
        </div>
      </main>
    </>
  );
}
