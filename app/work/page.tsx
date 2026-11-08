import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/HomeSections";
import { ContactCTASection } from "@/components/sections/HomeSections";

export const metadata: Metadata = {
  title: "Selected Software & AI Work",
  description:
    "Explore selected web application, eCommerce, and AI projects from Innovate Software Solution.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Software & AI Work",
    description:
      "Explore selected web application, eCommerce, and AI projects from Innovate Software Solution.",
    url: "/work",
  },
  twitter: {
    title: "Selected Software & AI Work",
    description:
      "Explore selected web application, eCommerce, and AI projects from Innovate Software Solution.",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero page-hero-simple">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h1>Digital products made with care.</h1>
          <p>
            A selection of independent portfolio projects exploring useful
            software, thoughtful interfaces, and applied AI.
          </p>
        </div>
      </section>
      <ProjectsSection featuredOnly={false} />
      <ContactCTASection />
    </>
  );
}
