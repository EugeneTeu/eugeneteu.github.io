import { useParams } from "solid-start";
import { resolve, join } from "path";
import { readFileSync } from "fs";
import { Component } from "solid-js";

const postsDirectory = resolve("./src/data/blog-posts");

export function getPostById(id: string) {
  const filePath = join(postsDirectory, `${id}.md`);
  const fileContents = readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents); // Extract front matter and content

  return { data, content };
}
const BlogPost: Component = () => {
  const params = useParams();
  const post = getPostById(params.id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const { data, content } = post;

  return (
    <main>
      <h1>{data.title}</h1>
      <p>
        <strong>Date:</strong> {data.date}
      </p>
      {/* <article innerHTML={marked(content)} /> */}
      {/* <a href="/blog">Back to Blog</a> */}
    </main>
  );
};

export default BlogPost;
