import type { Plugin } from "vite";

import { resolve, join } from "path";
import { readdirSync, statSync, writeFileSync } from "fs";
import { readSync } from "to-vfile";
import { matter } from "vfile-matter";
import { PostMetaData } from "~/data/posts";

const BLOG_FOLDER = "src/routes/blog";
const BLOG_POST_JSON = "src/data/posts.json";

const processFiles = () => {
  const outputFile = resolve(BLOG_POST_JSON);
  const blogDir = resolve(BLOG_FOLDER);
  const files = readdirSync(blogDir);

  const blogPosts = files
    .filter(
      (file) => statSync(join(blogDir, file)).isFile() && file.endsWith(".mdx")
    )
    .map((file) => {
      // process fontmatter inside each file
      const vfile = readSync(resolve(BLOG_FOLDER, file));
      matter(vfile);
      return {
        ...(vfile.data.matter as PostMetaData),
        slug: file.replace(".mdx", ""),
      };
    });
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
