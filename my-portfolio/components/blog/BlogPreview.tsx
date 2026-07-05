import Link from "next/link";
import { fetchPosts } from "@/services/posts";
import BlogCard from "./BlogCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function BlogPreview() {
  const posts = await fetchPosts();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          title="Latest Articles"
          subtitle="Blog"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {posts.slice(0,3).map((post)=>(
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            href="/blog"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold"
          >
            View All Posts
          </Link>

        </div>

      </div>
    </section>
  );
}