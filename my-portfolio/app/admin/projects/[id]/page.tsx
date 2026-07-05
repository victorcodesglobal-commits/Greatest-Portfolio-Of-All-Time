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
        <h1 className="mb-10 text-4xl font-bold">
          Edit Project
        </h1>

        <EditProjectForm id={id} />
      </main>
    </DashboardLayout>
  );
}