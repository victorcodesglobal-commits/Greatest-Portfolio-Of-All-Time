import Link from "next/link";

import DashboardLayout from "@/components/admin/DashboardLayout";
import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <DashboardLayout>
      <main className="p-10">

        <Link
          href="/admin/projects"
          className="inline-flex items-center rounded-xl border border-cyan-500/30 px-5 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
        >
          ← Back to Projects
        </Link>

        <h1 className="mt-8 text-4xl font-bold">
          New Project
        </h1>

        <div className="mt-10">
          <ProjectForm />
        </div>

      </main>
    </DashboardLayout>
  );
}