"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    name: "Posts",
    href: "/admin/posts",
  },
  {
    name: "Projects",
    href: "/admin/projects",
  },
  {
    name: "New Post",
    href: "/admin/posts/new",
  },
  {
    name: "Messages",
    href: "/admin/messages",
  },
  {
    name: "New Project",
    href: "/admin/projects/new",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-white/10 bg-[#08101f] p-6">
      <h1 className="mb-12 text-2xl font-bold text-cyan-400">
        Admin CMS
      </h1>

      <nav className="space-y-2">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-cyan-500 text-black font-semibold"
                  : "text-gray-300 hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}