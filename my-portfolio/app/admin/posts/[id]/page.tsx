import EditPostForm from "@/components/admin/EditPostForm";
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
    <main className="min-h-screen bg-[#050816] p-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Edit Post
      </h1>

      <EditPostForm post={post} />
    </main>
  );
}