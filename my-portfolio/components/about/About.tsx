import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-32 px-8"
    >
      <SectionTitle
        title="About Me"
        subtitle="WHO I AM"
      />

      <Card>

        <p className="text-lg leading-9 text-gray-300">

          Hello! I'm <span className="font-semibold text-white">Victor Nwaokobia</span>,
          a passionate Full Stack Developer who enjoys transforming ideas into
          modern, responsive, and engaging web applications.

        </p>

        <p className="mt-6 text-lg leading-9 text-gray-300">

          I believe learning never truly ends. Every project gives me the
          opportunity to improve my problem-solving skills, explore new
          technologies, and become a better software engineer.

        </p>

        <p className="mt-6 text-lg leading-9 text-gray-300">

          My long-term goal is to build products that create real impact while
          continuously growing into a world-class developer through consistency,
          curiosity, and hard work.

        </p>

      </Card>
    </section>
  );
}