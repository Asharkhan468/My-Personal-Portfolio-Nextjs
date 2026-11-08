import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Innovate Software Solution website.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms | Innovate Software Solution",
    description: "Terms for using the Innovate Software Solution website.",
    url: "/terms",
  },
  twitter: {
    title: "Terms | Innovate Software Solution",
    description: "Terms for using the Innovate Software Solution website.",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero page-hero-simple">
        <div className="container"><p className="eyebrow">Terms</p><h1>Using this website.</h1></div>
      </section>
      <section className="section">
        <div className="container legal-copy">
          <p>
            This website provides general information about Innovate Software
            Solution and its services. Details on this site are not a project
            proposal or a guarantee of a particular result.
          </p>
          <h2>Project work</h2>
          <p>
            The scope, deliverables, schedule, fees, and support arrangements
            for any software project are agreed separately in writing before
            work begins.
          </p>
          <h2>External links</h2>
          <p>
            This site may link to external websites and portfolio demonstrations.
            Those destinations are operated independently and have their own
            content and terms.
          </p>
          <h2>Contact</h2>
          <p>
            If you have a question about this website or a potential project,
            please use the contact page.
          </p>
        </div>
      </section>
    </>
  );
}
