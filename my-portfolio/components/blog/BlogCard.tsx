import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1023]">

      <div className="relative h-56 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          quality={75}
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="text-sm text-cyan-400">
          {post.category}
        </span>

        <h2 className="mt-3 text-2xl font-semibold">
          {post.title}
        </h2>

        <p className="mt-4 text-gray-400">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-block font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Read More →
        </Link>
      </div>

    </div>
  );
}