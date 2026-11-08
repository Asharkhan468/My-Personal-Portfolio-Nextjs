import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/site";
import { blogPosts } from "@/data/blog/posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { StaggerGroup, StaggerItem } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTASection } from "@/components/sections/HomeSections";

export const metadata: Metadata = {
  title: "Software Development & AI Services",
  description:
    "Explore website and app development, AI chatbot engineering, and workflow automation services from Innovate Software Solution.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Software Development & AI Services",
    description:
      "Explore website and app development, AI chatbot engineering, and workflow automation services from Innovate Software Solution.",
    url: "/services",
  },
  twitter: {
    title: "Software Development & AI Services",
    description:
      "Explore website and app development, AI chatbot engineering, and workflow automation services from Innovate Software Solution.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Technology that makes good business sense.</h1>
          <p>
            Choose the capability you need—or bring us a challenge and we&apos;ll
            work with you to find a practical way forward.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What we can build together"
            title="A focused set of digital capabilities"
            description="From a first product release to a carefully scoped improvement, our work is shaped around your users and operations."
          />
          <div className="service-overview-grid">
            {services.map((service) => (
              <article className="service-overview-card" key={service.slug}>
                <div className="card-topline"><span>{service.number}</span><span>{service.shortTitle}</span></div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="capability-list">
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <li key={capability}><Check size={14} aria-hidden="true" />{capability}</li>
                  ))}
                </ul>
                <Link className="text-link" href={`/services/${service.slug}`}>
                  Service details <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-blog-preview">
        <div className="container">
          <SectionHeading
            eyebrow="From the journal"
            title="Make informed technology decisions"
            description="Practical notes on choosing and building the right digital solution."
          />
          <StaggerGroup className="blog-grid service-blog-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <StaggerItem key={post.slug}><BlogCard post={post} /></StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <ContactCTASection />
    </>
  );
}
