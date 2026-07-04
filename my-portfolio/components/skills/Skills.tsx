"use client";

import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/lib/constants";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 max-w-7xl mx-auto px-8"
    >
      <SectionTitle
        title="Skills"
        subtitle="TECH STACK"
      />

      <div className="grid lg:grid-cols-3 gap-8">

        {skills.map((skill, index) => (

          <FadeIn
            key={skill}
            delay={index * 0.05}
          >

            <Card>

              <h3 className="text-2xl font-bold">
                {skill}
              </h3>

            </Card>

          </FadeIn>

        ))}

      </div>

    </section>
  );
}