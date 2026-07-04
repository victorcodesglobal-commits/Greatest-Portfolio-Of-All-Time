"use client";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        <FadeIn>

          <div>

            <p className="uppercase tracking-[10px] text-blue-400 mb-5">
              Full Stack Developer
            </p>

            <h1 className="text-7xl lg:text-8xl font-black leading-none">

              Victor

              <br />

              <span className="text-blue-500">
                Nwaokobia
              </span>

            </h1>

            <p className="mt-10 text-gray-400 text-xl leading-9 max-w-xl">

              Passionate developer dedicated to crafting premium web
              experiences, solving real-world problems, and never
              stopping the pursuit of learning.

            </p>

            <div className="flex gap-5 mt-12">

              <Button href="#projects">

                View Projects

              </Button>

              <Button
                href="/blog"
                variant="secondary"
              >

                Read Blog

              </Button>

            </div>

          </div>

        </FadeIn>

        <FadeIn delay={0.3}>

          <div className="flex justify-center">

            <img
              src="/images/profile.png"
              alt="Victor"
              className="w-[420px] h-[420px] rounded-full object-cover border-4 border-blue-500 shadow-[0_0_80px_rgba(37,99,235,.4)]"
            />

          </div>

        </FadeIn>

      </div>

    </section>
  );
}