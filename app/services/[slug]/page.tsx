import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { services, faqs, productionUrl } from "@/data/site";
import { blogPosts } from "@/data/blog/posts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { ContactCTASection } from "@/components/sections/HomeSections";
import { StaggerGroup, StaggerItem } from "@/components/animations/Reveal";

type ServicePageProps = { params: { slug: string } };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Innovate Software Solution`,
      description: service.description,
      url: `${productionUrl}/services/${service.slug}`,
    },
    twitter: {
      title: `${service.title} | Innovate Software Solution`,
      description: service.description,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Innovate Software Solution",
      url: productionUrl,
    },
    url: `${productionUrl}/services/${service.slug}`,
  };
  const relatedPosts = blogPosts.filter((post) => post.serviceSlug === service.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <section className="page-hero page-hero-service">
        <div className="container">
          <p className="eyebrow">Service {service.number} / Innovate Software Solution</p>
          <h1>{service.title} shaped around your goals.</h1>
          <p>{service.intro}</p>
          <Link className="button button-primary" href="/contact">
            Discuss your project <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-detail-layout">
            <div>
              <SectionHeading eyebrow="The value" title="Start with the problem. Build toward the outcome." />
              <ul className="benefit-list">
                {service.benefits.map((benefit) => (
                  <li key={benefit}><Check size={17} aria-hidden="true" />{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Capabilities</h2>
              <div className="detail-capability-grid">
                {service.capabilities.map((capability) => (
                  <div className="detail-capability" key={capability}><Check size={15} aria-hidden="true" />{capability}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="detail-approach">
            <h2>A considered development approach</h2>
            <p>{service.approach}</p>
          </div>
          <div className="detail-faq">
            <SectionHeading eyebrow="Potential use cases" title="Where this work can fit" />
            <div className="detail-capability-grid">
              {service.examples.map((example) => (
                <div className="detail-capability" key={example}><Check size={15} aria-hidden="true" />{example}</div>
              ))}
            </div>
          </div>
          <div className="detail-faq">
            <SectionHeading eyebrow="Before we begin" title="Questions about getting started?" />
            <div className="faq-list">
              {faqs.slice(0, 4).map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          {relatedPosts.length > 0 && (
            <div className="detail-faq">
              <SectionHeading eyebrow="From the journal" title="More on this topic" />
              <StaggerGroup className="blog-grid service-blog-grid">
                {relatedPosts.map((post) => (
                  <StaggerItem key={post.slug}><BlogCard post={post} /></StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          )}
        </div>
      </section>
      <ContactCTASection />
    </>
  );
}
