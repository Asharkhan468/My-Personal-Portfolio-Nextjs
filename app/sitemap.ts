import type { MetadataRoute } from "next";
import { productionUrl, services } from "@/data/site";
import { blogPosts } from "@/data/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/services", "/work", "/about", "/contact", "/privacy", "/terms", "/blog"];
  const servicePages = services.map((service) => `/services/${service.slug}`);
  const articlePages = blogPosts.map((post) => ({
    url: `${productionUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.updatedAt ?? post.publishedAt}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));
  const pageEntries: MetadataRoute.Sitemap = [...pages, ...servicePages].map((path) => ({
    url: `${productionUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.7 : 0.8,
  }));
  return [...pageEntries, ...articlePages];
}
