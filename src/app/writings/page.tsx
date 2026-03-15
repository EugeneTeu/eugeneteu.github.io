import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function WritingsPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-4">
      <h1 className="text-4xl font-bold mb-10 tracking-tighter">Writings</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="group border-b border-zinc-200 dark:border-zinc-800 pb-8 last:border-0">
            <Link href={`/writings/${post.slug}`} className="block">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-zinc-500 tabular-nums">{post.date}</span>
                <h2 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="text-zinc-500">No writings found yet.</p>
        )}
      </div>
    </div>
  );
}
