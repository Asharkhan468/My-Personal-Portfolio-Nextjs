import type { Metadata } from "next";
import { contactEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Innovate Software Solution handles information submitted through its project inquiry form.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy | Innovate Software Solution",
    description: "How Innovate Software Solution handles information submitted through its project inquiry form.",
    url: "/privacy",
  },
  twitter: {
    title: "Privacy | Innovate Software Solution",
    description: "How Innovate Software Solution handles information submitted through its project inquiry form.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero page-hero-simple">
        <div className="container"><p className="eyebrow">Privacy</p><h1>Your information, handled with care.</h1></div>
      </section>
      <section className="section">
        <div className="container legal-copy">
          <p>
            This page describes information submitted through the project
            inquiry form on the Innovate Software Solution website.
          </p>
          <h2>Information you provide</h2>
          <p>
            If you submit the form, the details you enter—including your name,
            email, company, project preferences, and message—are sent to
            Formspree, the form delivery provider used by this site, so the team
            can respond to your inquiry. Please do not include passwords,
            payment details, or other sensitive information.
          </p>
          <h2>Third-party processing</h2>
          <p>
            Form submissions are handled by Formspree under its own privacy and
            service terms. Please review Formspree&apos;s policies for information
            about its processing and retention practices.
          </p>
          <h2>Questions</h2>
          <p>
            For questions about an inquiry you submitted, contact{" "}
            <a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
