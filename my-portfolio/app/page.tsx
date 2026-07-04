import Glow from "@/components/ui/Glow";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Glow />
        
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

      <Footer />
    </>
  );
}