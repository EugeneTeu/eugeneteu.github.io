import type { Plugin } from "vite";

import { resolve, join } from "path";
import { readdirSync, statSync, writeFileSync } from "fs";

const processFiles = () => {
  const outputFile = resolve("src/data/posts.json");
  const blogDir = resolve("src/routes/blog");
  const files = readdirSync(blogDir);

  const blogPosts = files
    .filter(
      (file) => statSync(join(blogDir, file)).isFile() && file.endsWith(".mdx")
    )
    .map((file) => ({ slug: file.replace(".mdx", "") }));

  writeFileSync(outputFile, JSON.stringify(blogPosts, null, 2), "utf-8");
};

export const blogPostsPlugin = (): Plugin => {
  return {
    name: "blog-posts-gen",
    async buildStart() {
      processFiles();
    },
    configureServer(server) {
      server.watcher.on("change", (filePath) => {
        if (filePath.includes("/src/routes/blog")) {
          processFiles();
        }
      });
    },
  };
};
