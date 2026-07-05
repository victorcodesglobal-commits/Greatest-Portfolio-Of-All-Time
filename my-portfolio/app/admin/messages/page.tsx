import DashboardLayout from "@/components/admin/DashboardLayout";
import MessageList from "@/components/admin/MessageList";

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] px-10 pb-10 pt-36 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-10 text-4xl font-bold">
            Messages
          </h1>

          <MessageList />
        </div>
      </main>
    </DashboardLayout>
  );
}