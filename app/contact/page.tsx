import type { Metadata } from "next";
import { Mail, Phone, Globe2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { contactEmail } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Tell Innovate Software Solution about your website, application, or AI project and start a conversation with the team.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Project Inquiries",
    description:
      "Tell Innovate Software Solution about your website, application, or AI project and start a conversation with the team.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Innovate Software Solution",
    description:
      "Tell us about your website, application, or AI project and start a conversation.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero-simple">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s talk about what you&apos;re building.</h1>
          <p>
            Share a little about your goals and what you need. We&apos;ll get back
            to you to learn more and discuss a useful next step.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us what success looks like.</h2>
            <p>
              A few details are enough to get started. If the idea is still
              taking shape, that&apos;s fine too—we can help clarify the scope.
            </p>
            <div className="contact-details">
              <a className="contact-detail" href={`mailto:${contactEmail}`}>
                <span className="contact-detail-icon"><Mail size={17} /></span>
                <span><strong>Email</strong>{contactEmail}</span>
              </a>
              <a className="contact-detail" href="tel:+923172597708">
                <span className="contact-detail-icon"><Phone size={17} /></span>
                <span><strong>Phone / WhatsApp</strong>+92 317 2597708</span>
              </a>
              <div className="contact-detail">
                <span className="contact-detail-icon"><Globe2 size={17} /></span>
                <span><strong>Collaboration</strong>Remote, including international projects</span>
              </div>
            </div>
          </aside>
          <div className="contact-form-wrap">
            <h2>Project inquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
