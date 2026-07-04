import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8 max-w-5xl mx-auto text-center"
    >
      <SectionTitle
        title="Let's Build Something Amazing"
        subtitle="CONTACT"
      />

      <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto">
        I'm always open to discussing exciting opportunities,
        collaborations, freelance work, or simply connecting
        with fellow developers.
      </p>

      <div className="mt-12">
        <Button href="mailto:nwaokobiavictore@gmail.com">
          Contact Me
        </Button>
      </div>
    </section>
  );
}