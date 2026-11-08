import type { Metadata } from "next";
import { BlogCTA } from "@/components/blog/BlogCTA";
import BlogListing from "@/components/blog/BlogListing";
import { blogCategories } from "@/data/blog/categories";
import { productionUrl } from "@/data/site";
import type { BlogCategory } from "@/types/blog";

export const metadata: Metadata = {
  title: "Insights on Software, AI & Digital Innovation",
  description:
    "Practical insights, engineering perspectives, and ideas to help businesses make smarter technology decisions.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Insights on Software, AI & Digital Innovation",
    description:
      "Practical insights, engineering perspectives, and ideas to help businesses make smarter technology decisions.",
    url: `${productionUrl}/blog`,
  },
  twitter: {
    card: "summary",
    title: "Insights on Software, AI & Digital Innovation",
    description:
      "Practical insights, engineering perspectives, and ideas to help businesses make smarter technology decisions.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Innovate Software Solution Insights",
  url: `${productionUrl}/blog`,
  publisher: {
    "@type": "Organization",
    name: "Innovate Software Solution",
    url: productionUrl,
  },
};

type BlogPageProps = {
  searchParams?: { category?: string | string[] };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const requestedCategory = searchParams?.category;
  const initialCategory =
    typeof requestedCategory === "string" &&
    blogCategories.includes(requestedCategory as BlogCategory)
      ? requestedCategory as BlogCategory
      : "All";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="page-hero blog-hero">
        <div className="container">
          <p className="eyebrow">The journal / Ideas for what&apos;s next</p>
          <h1>Insights on software, AI &amp; digital innovation.</h1>
          <p>
            Practical insights, engineering perspectives, and ideas to help
            businesses make smarter technology decisions.
          </p>
        </div>
      </section>
      <section className="section blog-list-section">
        <div className="container">
          <BlogListing initialCategory={initialCategory} />
          <BlogCTA />
        </div>
      </section>
    </>
  );
}
