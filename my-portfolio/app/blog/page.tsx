import Link from "next/link";

import SectionTitle from "@/components/ui/SectionTitle";
import BlogList from "@/components/blog/BlogList";
import { fetchPosts } from "@/services/posts";

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main className="min-h-screen px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="inline-flex items-center rounded-xl border border-cyan-500/30 px-5 py-3 text-cyan-300 transition hover:bg-cyan-500/10"
        >
          ← Back to Home
        </Link>

        <div className="mt-10">
          <SectionTitle
            title="Blog"
            subtitle="Latest Articles"
          />
        </div>

        <div className="mt-16">
          <BlogList posts={posts} />
        </div>

      </div>

    </main>
  );
}