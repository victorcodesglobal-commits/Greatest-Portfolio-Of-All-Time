"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  fetchProjects,
  removeProject,
} from "@/services/projects";

export default function ProjectList() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProjects() {
    const data = await fetchProjects();
    setProjects(data);
    setLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleDelete(id: string) {
    const confirmed = confirm(
      "Delete this project?"
    );

    if (!confirmed) return;

    await removeProject(id);

    loadProjects();
  }

  if (loading) {
    return (
      <p className="text-gray-400">
        Loading projects...
      </p>
    );
  }

  if (!projects.length) {
    return (
      <p className="text-gray-400">
        No projects yet.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <h2 className="text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-2 text-gray-400">
              {project.description}
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href={`/admin/projects/${project.id}`}
              className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(project.id)}
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