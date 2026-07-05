import DashboardLayout from "@/components/admin/DashboardLayout";
import ViewMessage from "@/components/admin/ViewMessage";

export default async function MessagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] px-10 pb-10 pt-36 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-10 text-4xl font-bold">
            Message
          </h1>

          <ViewMessage id={id} />
        </div>
      </main>
    </DashboardLayout>
  );
}