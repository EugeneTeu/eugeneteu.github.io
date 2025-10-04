import { Icon } from "@iconify-icon/solid";
import { Meta, Title } from "@solidjs/meta";
import {
  A,
  AnchorProps,
  RouteSectionProps,
  useLocation,
} from "@solidjs/router";
import { ParentComponent } from "solid-js";
//@ts-expect-error
import { MDXProvider } from "solid-mdx";
import { markdownComponents } from "~/components/Markdown";
import { PostMetaData, posts } from "~/data/posts";

export default function BlogLayout(props: RouteSectionProps) {
  const meta = () =>
    posts.find((p) => props.location.pathname.endsWith(p.slug)) as PostMetaData;
  // handle index file for blog route
  if (!meta()) {
    return <>{props.children}</>;
  }

  return (
    <>
      <Title>{meta()?.title}</Title>
      <Meta name="og:title" content={meta()?.title} />
      <Meta name="description" content={meta()?.description} />
      <Meta name="og:description" content={meta()?.description} />
      <main class="pb-safe min-h-screen overflow-auto mb-10 mt-10">
        <div
          class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto md:w-fit lg:mx-auto pt-4 pb-4`}
        >
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
