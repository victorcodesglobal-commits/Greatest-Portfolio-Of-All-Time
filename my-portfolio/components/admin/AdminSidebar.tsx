"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

const links = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: "🏠",
  },
  {
    name: "Posts",
    href: "/admin/posts",
    icon: "📝",
  },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: "📁",
  },
  {
    name: "Messages",
    href: "/admin/messages",
    icon: "💬",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sidebar");

    if (saved === "collapsed") {
      setCollapsed(true);
    }
  }, []);

  function toggleSidebar() {
    const next = !collapsed;

    setCollapsed(next);

    localStorage.setItem(
      "sidebar",
      next ? "collapsed" : "expanded"
    );
  }

  async function handleLogout() {
    await signOut(auth);
    router.push("/admin/login");
  }

  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen border-r border-white/10 bg-[#08101f] transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex h-full flex-col p-4">

        <button
          onClick={toggleSidebar}
          className="mb-8 rounded-xl bg-cyan-500 px-3 py-2 text-xl font-bold text-black transition hover:bg-cyan-400"
        >
          ☰
        </button>

        {!collapsed && (
          <h1 className="mb-10 text-2xl font-bold text-cyan-400">
            Admin CMS
          </h1>
        )}

        <nav className="space-y-2">

          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-cyan-500 font-semibold text-black"
                    : "text-gray-300 hover:bg-white/10"
                }`}
              >
                <span className="text-xl">
                  {link.icon}
                </span>

                {!collapsed && (
                  <span className="ml-3">
                    {link.name}
                  </span>
                )}
              </Link>
            );
          })}

        </nav>

        <div className="mt-auto space-y-2 border-t border-white/10 pt-6">

          <Link
            href="/"
            className="flex items-center rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/10"
          >
            <span className="text-xl">🌐</span>

            {!collapsed && (
              <span className="ml-3">
                View Portfolio
              </span>
            )}
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center rounded-xl px-4 py-3 text-left text-gray-300 transition hover:bg-red-500/20 hover:text-red-300"
          >
            <span className="text-xl">🚪</span>

            {!collapsed && (
              <span className="ml-3">
                Logout
              </span>
            )}
          </button>

        </div>

      </div>
    </aside>
  );
}