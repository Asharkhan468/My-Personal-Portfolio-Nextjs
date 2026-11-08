import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { ArticleActions } from "@/components/blog/ArticleActions";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogCard } from "@/components/blog/BlogCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/Reveal";
import { blogPosts } from "@/data/blog/posts";
import { productionUrl } from "@/data/site";
import { formatPostDate, getBlogPost, getPostUrl, getReadingTime, getRelatedPosts } from "@/lib/blog";

type ArticlePageProps = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const canonical = `${productionUrl}${getPostUrl(post.slug)}`;
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonical,
      publishedTime: new Date(`${post.publishedAt}T00:00:00Z`).toISOString(),
      ...(post.updatedAt && {
        modifiedTime: new Date(`${post.updatedAt}T00:00:00Z`).toISOString(),
      }),
      authors: [post.author],
      images: [{ url: post.featuredImage, alt: post.featuredImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [{ url: post.featuredImage, alt: post.featuredImageAlt }],
    },
  };
}

function ArticleBreadcrumbs({ title }: { title: string }) {
  return (
    <nav className="article-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link href="/blog">Journal</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{title}</li>
      </ol>
    </nav>
  );
}

function ArticleTableOfContents({
  headings,
}: {
  headings: { id: string; text: string }[];
}) {
  if (headings.length < 4) return null;
  return (
    <nav className="article-toc" aria-label="Table of contents">
      <h2>In this article</h2>
      <ol>
        {headings.map((heading) => (
          <li key={heading.id}><a href={`#${heading.id}`}>{heading.text}</a></li>
        ))}
      </ol>
    </nav>
  );
}

export default function BlogArticlePage({ params }: ArticlePageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post, 3);
  const headings = post.content.filter(
    (block): block is Extract<(typeof post.content)[number], { type: "heading" }> =>
      block.type === "heading",
  );
  const canonical = `${productionUrl}${getPostUrl(post.slug)}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${productionUrl}${post.featuredImage}`],
    datePublished: new Date(`${post.publishedAt}T00:00:00Z`).toISOString(),
    ...(post.updatedAt && {
      dateModified: new Date(`${post.updatedAt}T00:00:00Z`).toISOString(),
    }),
    author: { "@type": "Organization", name: post.author, url: productionUrl },
    publisher: {
      "@type": "Organization",
      name: "Innovate Software Solution",
      url: productionUrl,
    },
    mainEntityOfPage: canonical,
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: productionUrl },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${productionUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="article-page">
        <header className="article-header">
          <div className="container article-header-inner">
            <ArticleBreadcrumbs title={post.title} />
            <Link href="/blog" className="article-back"><ArrowLeft size={15} /> All insights</Link>
            <Link className="article-category" href={`/blog?category=${encodeURIComponent(post.category)}`}>
              {post.category}
            </Link>
            <h1>{post.title}</h1>
            <p className="article-description">{post.description}</p>
            <div className="article-byline">
              <span>{post.author}</span>
              <span className="byline-separator" aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
              {post.updatedAt && (
                <>
                  <span className="byline-separator" aria-hidden="true">·</span>
                  <span>Updated <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt)}</time></span>
                </>
              )}
              <span className="byline-separator" aria-hidden="true">·</span>
              <span className="article-reading-time"><Clock3 size={14} /> {getReadingTime(post)} min read</span>
              <ArticleActions />
            </div>
          </div>
        </header>
        <div className="container article-feature-image">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            width={1440}
            height={850}
            priority
            sizes="(max-width: 760px) 100vw, 1200px"
          />
        </div>
        <div className="container article-layout">
          <aside className="article-sidebar">
            <ArticleTableOfContents headings={headings} />
          </aside>
          <div className="article-main-column">
            <Reveal>
              <ArticleBody blocks={post.content} />
            </Reveal>
            <div className="article-tags">
              {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="article-service-link">
              <p>Looking for help with this?</p>
              <Link href={`/services/${post.serviceSlug}`}>
                Explore our {post.category.toLowerCase()} services <ArrowUpRight size={15} />
              </Link>
            </div>
            <BlogCTA />
          </div>
        </div>
        <section className="section article-related">
          <div className="container">
            <div className="section-heading-row">
              <div><p className="eyebrow">Keep exploring</p><h2>Related insights</h2></div>
              <Link className="text-link" href="/blog">All articles <ArrowUpRight size={15} /></Link>
            </div>
            <StaggerGroup className="blog-grid">
              {relatedPosts.map((related) => (
                <StaggerItem key={related.slug}><BlogCard post={related} /></StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </article>
    </>
  );
}
