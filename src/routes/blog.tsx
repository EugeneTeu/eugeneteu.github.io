import { Meta, Title } from "@solidjs/meta";
import { RouteSectionProps } from "@solidjs/router";
//@ts-expect-error
import { MDXProvider } from "solid-mdx";
import { markdownComponents } from "~/components/Markdown";
import { PostMetaData, posts } from "~/data/posts";

export default function BlogLayout(props: RouteSectionProps) {
  const meta = () =>
    posts.find((p) => props.location.pathname.endsWith(p.slug)) as PostMetaData;

  return (
    <>
      <Title>{meta().title}</Title>
      <Meta name="og:title" content={meta().title} />
      <Meta name="description" content={meta().description} />
      <Meta name="og:description" content={meta().description} />
      <main class="bg-white dark:bg-gray-900 min-h-screen pb-safe overflow-auto">
        <div>
          <div class="pt-2 pb-2">
            <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`}>
              <div class="md:mx-auto md:w-fit">
                <article class="prose prose-md  prose-normal dark:prose-invert">
                  <MDXProvider components={markdownComponents}>
                    {props.children}
                  </MDXProvider>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
