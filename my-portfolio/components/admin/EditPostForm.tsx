"use client";

import { useState } from "react";
import { editPost } from "@/services/posts";

export default function EditPostForm({ post }: any) {
  const [title, setTitle] = useState(post.title);
  const [excerpt, setExcerpt] = useState(post.excerpt);
  const [content, setContent] = useState(post.content);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await editPost(post.id, {
      title,
      excerpt,
      content,
    });

    alert("Post updated successfully!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-5"
    >
      <input
        className="w-full rounded-xl border p-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full rounded-xl border p-3"
        rows={3}
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />

      <textarea
        className="w-full rounded-xl border p-3"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="rounded-xl bg-cyan-500 px-6 py-3">
        Save Changes
      </button>
    </form>
  );
}