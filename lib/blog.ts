import { blogPosts } from "@/data/blog/posts";
import type { BlogPost } from "@/types/blog";

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getReadingTime(post: BlogPost): number {
  return post.readingTime;
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort(
      (left, right) =>
        Number(right.category === post.category) -
        Number(left.category === post.category),
    )
    .slice(0, limit);
}

export function getPostUrl(slug: string): string {
  return `/blog/${slug}`;
}
