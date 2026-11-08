import type { Metadata } from "next";
import {
  ContactCTASection,
  FAQSection,
  HeroSection,
  PrinciplesSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TechnologySection,
} from "@/components/sections/HomeSections";
import BlogPreview from "@/components/blog/BlogPreview";

export const metadata: Metadata = {
  title: "Innovate Software Solution | Software & AI Development",
  description:
    "Build a better digital product with Innovate Software Solution. Explore web development, mobile applications, AI chatbots, and practical automation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Innovate Software Solution | Software & AI Development",
    description:
      "Business websites, mobile applications, and AI solutions designed around real business needs.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <PrinciplesSection />
      <ProcessSection />
      <TechnologySection />
      <FAQSection />
      <BlogPreview />
      <ContactCTASection />
    </>
  );
}
