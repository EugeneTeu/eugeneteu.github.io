import { defineConfig } from "@solidjs/start/config";
import { blogPostsPlugin } from "./blogPostsPlugin";
import remarkFrontmatter from "remark-frontmatter";

//@ts-expect-error
import pkg from "@vinxi/plugin-mdx";
const { default: mdx } = pkg;

export default defineConfig({
  extensions: ["mdx", "md"],
  server: {
    preset: "vercel",
  },
  vite: {
    plugins: [
      blogPostsPlugin(),
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        remarkPlugins: [remarkFrontmatter],
      }),
    ],
  },
});
