"use client";

import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "./ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/lib/constants";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 max-w-7xl mx-auto px-8"
    >
      <SectionTitle
        title="Featured Projects"
        subtitle="MY WORK"
      />

      <div className="grid lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <FadeIn
            key={project.title}
            delay={index * 0.2}
          >

            <ProjectCard
              title={project.title}
              description={project.description}
            />

          </FadeIn>

        ))}

      </div>

    </section>
  );
}