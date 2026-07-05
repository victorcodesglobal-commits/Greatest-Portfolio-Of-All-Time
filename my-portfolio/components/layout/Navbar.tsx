"use client";

import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-6 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide"
        >
          Victor.dev
        </Link>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Link
          href="#contact"
          className="rounded-full bg-cyan-500 px-5 py-2 font-medium text-black transition hover:bg-cyan-400"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
}