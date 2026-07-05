import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import BlogPreview from "@/components/blog/BlogPreview";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <BlogPreview />

      <Contact />

      <Footer />
    </>
  );
}