"use client";

import { useState } from "react";
import { createPost } from "@/services/posts";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-");

    await createPost({
      title,
      slug,
      excerpt,
      content,
      category,
      image,
      date: new Date().toLocaleDateString(),
    });

    alert("Post published!");

    setTitle("");
    setCategory("");
    setImage("");
    setExcerpt("");
    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-5"
    >
      <input
        className="w-full rounded-xl border p-3"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <textarea
        className="w-full rounded-xl border p-3"
        placeholder="Excerpt"
        rows={3}
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />

      <textarea
        className="w-full rounded-xl border p-3"
        placeholder="Content"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold"
      >
        Publish
      </button>
    </form>
  );
}