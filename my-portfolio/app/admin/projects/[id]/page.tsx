import Link from "next/link";

import DashboardLayout from "@/components/admin/DashboardLayout";
import EditProjectForm from "@/components/admin/EditProjectForm";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] px-10 pb-10 pt-36 text-white">

        <Link
          href="/admin/projects"
          className="inline-flex items-center rounded-xl border border-cyan-500/30 px-5 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
        >
          ← Back to Projects
        </Link>

        <h1 className="mt-8 mb-10 text-4xl font-bold">
          Edit Project
        </h1>

        <EditProjectForm id={id} />

      </main>
    </DashboardLayout>
  );
}