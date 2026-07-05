import BlogCard from "./BlogCard";
import { BlogPost } from "@/types/blog";

type Props = {
  posts: BlogPost[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}