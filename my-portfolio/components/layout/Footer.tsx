import { socials } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-3xl font-bold">
          Victor<span className="text-blue-500">.</span>
        </h2>

        <div className="flex gap-8 mt-8">

          {socials.map((social) => (

            <a
              key={social.name}
              href={social.url}
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              {social.name}
            </a>

          ))}

        </div>

        <p className="text-gray-500 mt-12">
          © {new Date().getFullYear()} Victor Nwaokobia.
          Built with Next.js & Firebase.
        </p>

      </div>

    </footer>
  );
}