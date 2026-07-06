import Link from "next/link";

import EditPostForm from "@/components/admin/EditPostForm";
import DashboardLayout from "@/components/admin/DashboardLayout";
import { fetchPost } from "@/services/posts";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPostPage({
  params,
}: Props) {
  const { id } = await params;

  const post = await fetchPost(id);

  return (
    <DashboardLayout>
      <main className="min-h-screen bg-[#050816] px-10 pb-10 pt-36 text-white">

        <Link
          href="/admin/posts"
          className="inline-flex items-center rounded-xl border border-cyan-500/30 px-5 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
        >
          ← Back to Posts
        </Link>

        <h1 className="mt-8 mb-10 text-4xl font-bold">
          Edit Post
        </h1>

        <EditPostForm post={post} />

      </main>
    </DashboardLayout>
  );
}