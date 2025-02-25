import JSONPosts from "./posts.json";

export type PostMetaData = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  description: string;
  vanity: string;
};

export const posts: PostMetaData[] = JSONPosts;
