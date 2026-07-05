"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { logout } from "@/lib/auth";
import DashboardLayout from "@/components/admin/DashboardLayout";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/admin/login");
  }

  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] p-10 text-white">
        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4 text-gray-400">
          Welcome back! Authentication is working.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/admin/posts"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
          >
            Manage Posts
          </Link>

          <Link
            href="/admin/posts/new"
            className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black"
          >
            New Post
          </Link>

          <Link
            href="/admin/projects/new"
            className="rounded-xl bg-purple-500 px-6 py-3 font-semibold text-white"
          >
            New Project
          </Link>

          <Link
            href="/admin/projects"
            className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black"
          >
            Manage Projects
          </Link>
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 rounded-xl bg-red-500 px-6 py-3 font-semibold"
        >
          Logout
        </button>
      </main>
    </DashboardLayout>
  );
}