import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { formatPostDate, getPostUrl, getReadingTime } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article className={`blog-card${featured ? " blog-card-featured" : ""}`}>
      <Link
        className="blog-card-image"
        href={getPostUrl(post.slug)}
        aria-label={`Read ${post.title}`}
      >
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          priority={featured}
          sizes={featured ? "(max-width: 760px) 100vw, 55vw" : "(max-width: 760px) 100vw, 33vw"}
        />
        <span className="blog-card-image-arrow"><ArrowUpRight size={17} /></span>
      </Link>
      <div className="blog-card-copy">
        <div className="blog-card-meta">
          <Link href={`/blog?category=${encodeURIComponent(post.category)}`}>{post.category}</Link>
          <span>{formatPostDate(post.publishedAt)}</span>
        </div>
        <h2><Link href={getPostUrl(post.slug)}>{post.title}</Link></h2>
        <p>{post.description}</p>
        <div className="blog-card-bottom">
          <span><Clock3 size={14} aria-hidden="true" /> {getReadingTime(post)} min read</span>
          <Link href={getPostUrl(post.slug)} aria-label={`Read ${post.title}`} className="blog-read-link">
            Read article <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
