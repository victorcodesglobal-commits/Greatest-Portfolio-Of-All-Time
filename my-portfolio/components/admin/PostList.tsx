"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { fetchPosts, removePost } from "@/services/posts";

export default function PostList() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadPosts() {
    const data = await fetchPosts();
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function handleDelete(id: string) {
    const confirmed = confirm(
      "Delete this post?"
    );

    if (!confirmed) return;

    await removePost(id);

    loadPosts();
  }

  if (loading) {
    return (
      <p className="text-gray-400">
        Loading...
      </p>
    );
  }

  if (!posts.length) {
    return (
      <p className="text-gray-400">
        No posts yet.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="text-gray-400">
              {post.category}
            </p>
          </div>

          <div className="flex gap-3">

            <Link
              href={`/admin/posts/${post.id}`}
              className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold"
            >
              Edit
            </Link>

            <button
              onClick={() =>
                handleDelete(post.id)
              }
              className="rounded-xl bg-red-500 px-5 py-2 font-semibold"
            >
              Delete
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}