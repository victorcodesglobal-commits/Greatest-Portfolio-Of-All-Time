import DashboardLayout from "@/components/admin/DashboardLayout";
import PostList from "@/components/admin/PostList";
import Link from "next/link";

export default function PostsPage() {
  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] p-10 text-white">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Manage Posts
          </h1>

          <Link
            href="/admin/posts/new"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            + New Post
          </Link>
        </div>

        <PostList />
      </main>
    </DashboardLayout>
  );
}