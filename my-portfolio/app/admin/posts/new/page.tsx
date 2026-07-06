import Link from "next/link";

import DashboardLayout from "@/components/admin/DashboardLayout";
import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <DashboardLayout>
      <main className="p-10">

        <Link
          href="/admin/posts"
          className="inline-flex items-center rounded-xl border border-cyan-500/30 px-5 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
        >
          ← Back to Posts
        </Link>

        <h1 className="mt-8 text-4xl font-bold">
          New Blog Post
        </h1>

        <div className="mt-10">
          <PostForm />
        </div>

      </main>
    </DashboardLayout>
  );
}