import Link from "next/link";
import { ArrowUpRight, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import BrandMark from "@/components/ui/BrandMark";
import { contactEmail, navigation, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          {/* <div className="footer-brand">
            <BrandMark />
            <p>
              Thoughtful software and AI solutions, built around the work your
              business needs to do.
            </p>
            <a className="footer-email" href={`mailto:${contactEmail}`}>
              <Mail size={16} aria-hidden="true" /> {contactEmail}
            </a>
            <div className="social-links" aria-label="Social profiles">
              <a href="https://github.com/Asharkhan468" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href="https://www.linkedin.com/in/ashar-ullah-khan-644a20374/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href="https://www.instagram.com/dev_ashar_khan/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={17} />
              </a>
            </div>
          </div> */}

          <div className="footer-brand">
  <BrandMark />

  <p>
    Thoughtful software and AI solutions, built around the work your
    business needs to do.
  </p>

  <a className="footer-email" href={`mailto:${contactEmail}`}>
    <Mail size={16} aria-hidden="true" /> {contactEmail}
  </a>

  <div className="social-links" aria-label="Social profiles">
    <a
      href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME"
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook"
    >
      <Facebook size={17} />
    </a>

    <a
      href="https://www.linkedin.com/in/ashar-ullah-khan-644a20374/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <Linkedin size={17} />
    </a>

    <a
      href="https://www.instagram.com/dev_ashar_khan/"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <Instagram size={17} />
    </a>
  </div>
</div>
          <div className="footer-column">
            <h2>Explore</h2>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <h2>Services</h2>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.shortTitle}
              </Link>
            ))}
          </div>
          <div className="footer-note">
            <span className="eyebrow">Have a project in mind?</span>
            <p>Let&apos;s make a plan that fits your goals.</p>
            <Link className="text-link" href="/contact">
              Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Innovate Software Solution</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
