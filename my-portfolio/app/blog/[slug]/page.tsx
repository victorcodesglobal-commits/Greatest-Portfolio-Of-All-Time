import { fetchPosts } from "@/services/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({
  params,
}: Props) {

  const { slug } = await params;

  const posts = await fetchPosts();

  const post = posts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">

      <p className="text-cyan-400">
        {post.category}
      </p>

      <h1 className="mt-4 text-5xl font-bold">
        {post.title}
      </h1>

      <img
        src={post.image}
        alt={post.title}
        className="mt-10 rounded-3xl"
      />

      <p className="mt-10 whitespace-pre-wrap text-lg leading-9">
        {post.content}
      </p>

    </main>
  );
}