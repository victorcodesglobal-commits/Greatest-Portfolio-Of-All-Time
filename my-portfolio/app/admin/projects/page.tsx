import DashboardLayout from "@/components/admin/DashboardLayout";
import ProjectList from "@/components/admin/ProjectList";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] px-10 pb-10 pt-36 text-white">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Manage Projects
          </h1>

          <Link
            href="/admin/projects/new"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400"
          >
            + New Project
          </Link>
        </div>

        <ProjectList />
      </main>
    </DashboardLayout>
  );
}