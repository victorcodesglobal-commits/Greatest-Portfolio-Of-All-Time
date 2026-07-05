"use client";

import { useEffect, useState } from "react";

import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { fetchProjects } from "@/services/projects";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    }

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      className="py-32 max-w-7xl mx-auto px-8"
    >
      <SectionTitle
        title="Featured Projects"
        subtitle="MY WORK"
      />

      {loading ? (
        <p className="mt-10 text-center text-gray-400">
          Loading projects...
        </p>
      ) : (
        <div className="grid gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.2}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                github={project.github}
                live={project.live}
                image={project.image}
                tech={project.tech}
              />
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}