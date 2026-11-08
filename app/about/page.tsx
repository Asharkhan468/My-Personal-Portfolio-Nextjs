import type { Metadata } from "next";
import { ContactCTASection } from "@/components/sections/HomeSections";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the business-first engineering principles and collaborative approach behind Innovate Software Solution.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Innovate Software Solution",
    description:
      "Learn about the business-first engineering principles and collaborative approach behind Innovate Software Solution.",
    url: "/about",
  },
  twitter: {
    title: "About Innovate Software Solution",
    description:
      "Learn about the business-first engineering principles and collaborative approach behind Innovate Software Solution.",
  },
};

const values = [
  {
    number: "01",
    title: "Start with understanding",
    description:
      "We make space to understand your audience, constraints, and definition of success before recommending a technical direction.",
  },
  {
    number: "02",
    title: "Build for the long term",
    description:
      "We value clear, maintainable foundations so your product can be understood, supported, and improved over time.",
  },
  {
    number: "03",
    title: "Work openly",
    description:
      "We keep collaboration practical: share progress, explain trade-offs, and make decisions together at each milestone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-simple">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>Good engineering begins with listening.</h1>
          <p>
            Innovate Software Solution partners with businesses and founders to
            turn meaningful challenges into dependable digital products.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-intro">
          <div className="about-copy">
            <SectionHeading eyebrow="Our perspective" title="Technology should move your work forward." />
            <p>
              We believe software works best when it fits the people, processes,
              and priorities around it. That means asking thoughtful questions,
              being deliberate about scope, and selecting tools for a reason.
            </p>
            <p>
              Our work spans web and mobile applications, AI assistants, and
              connected workflows. Across each, we focus on clear user
              experiences, maintainable engineering, and useful outcomes—not
              technology for its own sake.
            </p>
          </div>
          <aside className="about-aside">
            <p className="eyebrow">How we collaborate</p>
            <h2>One team, working toward a clear goal.</h2>
            <p>
              We work remotely with clients and keep the process visible from
              early discovery through delivery and handover.
            </p>
          </aside>
        </div>
      </section>
      <section className="section section-principles">
        <div className="container">
          <SectionHeading eyebrow="What guides us" title="A thoughtful approach at every stage." />
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTASection />
    </>
  );
}
