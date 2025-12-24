import { defineConfig } from "@solidjs/start/config";
import { blogPostsPlugin } from "./blogPostsPlugin";
import remarkFrontmatter from "remark-frontmatter";

//@ts-expect-error
import pkg from "@vinxi/plugin-mdx";
const { default: mdx } = pkg;

if(!mdx) {
  throw Error('mdx is undefined');
}

export default defineConfig({
  extensions: ["mdx", "md"],
  middleware: "src/middleware/index.tsx",
  server: {
    preset: "vercel"
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
