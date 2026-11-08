import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/Reveal";
import { blogPosts } from "@/data/blog/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function BlogPreview() {
  return (
    <section className="section section-blog-preview">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="From the journal"
            title="Ideas for building better digital products"
            description="Practical perspectives on software, AI, and making thoughtful technology decisions."
          />
          <Link className="button button-outline work-link" href="/blog">
            Visit the journal <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <StaggerGroup className="blog-grid blog-preview-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
