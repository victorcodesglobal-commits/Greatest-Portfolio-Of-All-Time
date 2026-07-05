import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import FadeIn from "@/components/ui/FadeIn";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Firebase",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24">
      <Glow />

      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <FadeIn>
          <div>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              ● Available for Freelance
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Victor
              <br />
              Nwaokobia
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Full Stack Developer creating premium,
              modern web applications with beautiful UI,
              powerful backend systems and exceptional
              user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button href="#projects">
                View Projects
              </Button>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            {/* TECH */}

            <div className="mt-14 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* RIGHT */}

        <FadeIn>
          <div className="relative flex justify-center">

            <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

              <img
                src="/images/profile.png"
                alt="Victor"
                className="h-[520px] w-[400px] rounded-[30px] object-cover"
              />

            </div>

            {/* FLOATING CARD */}

            <div className="absolute -bottom-8 -left-8 rounded-3xl border border-white/10 bg-[#0b1023]/90 p-6 backdrop-blur-xl">

              <p className="text-gray-400 text-sm">
                Experience
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                3+
              </h3>

              <p className="text-cyan-400">
                Years Building
              </p>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}