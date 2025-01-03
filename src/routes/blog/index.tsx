import { A } from "@solidjs/router";
import { Component, For, JSXElement } from "solid-js";

import { posts } from "~/data/posts";

export default function Home(): JSXElement {
  return (
    <main class="bg-white dark:bg-gray-900 min-h-screen">
      <div>
        <div class="pt-6">
          <div class={`max-w-5xl mx-5 sm:mx-10 md:mx-auto lg:mx-auto`}>
            <div>hi</div>
            <For each={posts} fallback={<div>null</div>}>
              {(post) => (
                <div>
                  <a href={`/blog/${post.slug}`}>{post.slug}</a>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </main>
  );
}
