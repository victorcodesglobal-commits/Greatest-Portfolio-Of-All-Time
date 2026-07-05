import DashboardLayout from "@/components/admin/DashboardLayout";
import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] p-10 text-white">
        <h1 className="mb-8 text-4xl font-bold">
          New Project
        </h1>

        <ProjectForm />
      </main>
    </DashboardLayout>
  );
}