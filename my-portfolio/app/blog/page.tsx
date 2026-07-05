import SectionTitle from "@/components/ui/SectionTitle";
import BlogList from "@/components/blog/BlogList";
import { fetchPosts } from "@/services/posts";

export default async function BlogPage() {

  const posts = await fetchPosts();

  return (
    <main className="min-h-screen px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <SectionTitle
          title="Blog"
          subtitle="Latest Articles"
        />

        <div className="mt-16">

          <BlogList posts={posts} />

        </div>

      </div>

    </main>
  );
}