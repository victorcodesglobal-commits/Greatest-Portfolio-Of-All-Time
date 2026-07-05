"use client";

import { useState } from "react";
import { createProject } from "@/services/projects";

export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [image, setImage] = useState("");
  const [tech, setTech] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    await createProject({
      title,
      description,
      github,
      live,
      image,
      tech,
    });

    alert("Project published!");

    setTitle("");
    setDescription("");
    setGithub("");
    setLive("");
    setImage("");
    setTech("");

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl space-y-5"
    >
      <input
        className="w-full rounded-xl bg-white/10 p-4"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="h-40 w-full rounded-xl bg-white/10 p-4"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="w-full rounded-xl bg-white/10 p-4"
        placeholder="Screenshot URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        className="w-full rounded-xl bg-white/10 p-4"
        placeholder="GitHub URL"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
      />

      <input
        className="w-full rounded-xl bg-white/10 p-4"
        placeholder="Live Demo URL"
        value={live}
        onChange={(e) => setLive(e.target.value)}
      />

      <input
        className="w-full rounded-xl bg-white/10 p-4"
        placeholder="Tech Stack (comma separated)"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      />

      <button
        disabled={loading}
        className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black"
      >
        {loading ? "Publishing..." : "Publish Project"}
      </button>
    </form>
  );
}