import PostForm from "@/components/admin/PostForm";

export default function NewPostPage() {
  return (
    <main className="min-h-screen bg-[#050816] p-10 text-white">
      <h1 className="mb-8 text-4xl font-bold">
        Create New Post
      </h1>

      <PostForm />
    </main>
  );
}