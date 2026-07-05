"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  fetchProject,
  editProject,
} from "@/services/projects";

export default function EditProjectForm({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");

  useEffect(() => {
    async function loadProject() {
      const project: any = await fetchProject(id);

      setTitle(project.title);
      setDescription(project.description);
      setGithub(project.github);
      setLive(project.live);
    }

    loadProject();
  }, [id]);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    await editProject(id, {
      title,
      description,
      github,
      live,
    });

    alert("Project updated!");

    router.push("/admin/projects");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-6"
    >
      <input
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Title"
      />

      <textarea
        className="h-40 w-full rounded-xl border border-white/10 bg-white/5 p-4"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        placeholder="Description"
      />

      <input
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
        value={github}
        onChange={(e) =>
          setGithub(e.target.value)
        }
        placeholder="GitHub URL"
      />

      <input
        className="w-full rounded-xl border border-white/10 bg-white/5 p-4"
        value={live}
        onChange={(e) =>
          setLive(e.target.value)
        }
        placeholder="Live Demo URL"
      />

      <button
        className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black"
      >
        Save Changes
      </button>
    </form>
  );
}