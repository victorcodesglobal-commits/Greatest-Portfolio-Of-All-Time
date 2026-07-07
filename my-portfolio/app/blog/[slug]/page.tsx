import Image from "next/image";
import Link from "next/link";
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
    (p: any) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">

      <Link
        href="/blog"
        className="inline-flex items-center rounded-xl border border-cyan-500/30 px-5 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
      >
        ← Back to Blog
      </Link>

      <p className="mt-10 text-cyan-400">
        {post.category}
      </p>

      <h1 className="mt-4 text-5xl font-bold">
        {post.title}
      </h1>

      <div className="relative mt-10 h-[450px] w-full overflow-hidden rounded-3xl">

        <Image
          src={post.image}
          alt={post.title}
          fill
          quality={75}
          sizes="100vw"
          className="object-cover"
        />

      </div>

      <p className="mt-10 whitespace-pre-wrap text-lg leading-9">
        {post.content}
      </p>

    </main>
  );
}