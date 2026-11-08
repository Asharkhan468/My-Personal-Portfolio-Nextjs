import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  MessagesSquare,
  Smartphone,
  Workflow,
} from "lucide-react";
import { faqs, projects, services } from "@/data/site";
import type { Service } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/Reveal";
import HeroVisual from "@/components/sections/HeroVisual";

function ServiceIcon({ service }: { service: Service }) {
  const iconProps = { size: 22, strokeWidth: 1.7, "aria-hidden": true as const };
  switch (service.icon) {
    case "globe":
      return <Globe2 {...iconProps} />;
    case "smartphone":
      return <Smartphone {...iconProps} />;
    case "messages":
      return <MessagesSquare {...iconProps} />;
    case "workflow":
      return <Workflow {...iconProps} />;
  }
}

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Software engineering × AI innovation</p>
          <h1>
            <span className="hero-heading-line">We build</span>
            <span className="hero-heading-line hero-heading-accent">intelligent</span>
            <span className="hero-heading-line">digital experiences.</span>
          </h1>
          <p className="hero-description">
            We design and develop powerful websites, mobile applications, and
            intelligent AI solutions that help businesses transform ideas into
            meaningful digital experiences.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">
              Start a Project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/work" className="button button-quiet">
              Explore Our Work <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-note">
            <span className="hero-note-rule" />
            <p>Thoughtful engineering. Meaningful innovation.</p>
          </div>
        </div>
        <HeroVisual />
      </div>
      <a className="scroll-cue" href="#services"><span>Discover what we do</span><ArrowDown size={14} /></a>
    </section>
  );
}

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section section-services" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Technology solutions built around your business"
          description="From digital products to intelligent automation, we build practical solutions designed around real business needs."
        />
        <StaggerGroup className="service-grid">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <article className="service-card">
                <div className="card-topline"><span>{service.number}</span><span className="service-icon"><ServiceIcon service={service} /></span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="capability-list">
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <li key={capability}><Check size={14} aria-hidden="true" />{capability}</li>
                  ))}
                </ul>
                <Link className="text-link" href={`/services/${service.slug}`}>
                  Explore service <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
        {!compact && <p className="service-footnote">Have a different challenge in mind? <Link href="/contact">Tell us about it <ArrowRight size={14} /></Link></p>}
      </div>
    </section>
  );
}

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <Link
        className="project-image-link"
        href={project.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} live project`}
      >
        <Image src={project.image} alt={project.alt} width={760} height={500} className="project-image" />
        <span className="project-image-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <div className="project-actions">
          <Link href={project.live} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15} /></Link>
          
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({ featuredOnly = true }: { featuredOnly?: boolean }) {
  const listedProjects = featuredOnly ? projects.slice(0, 3) : projects;
  return (
    <section className="section section-work" id="work">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Selected work"
            title="Digital products built to solve real problems"
            description="A selection of independent projects spanning web products, commerce, and applied AI."
          />
          {featuredOnly && <Link className="button button-outline work-link" href="/work">View all work <ArrowUpRight size={16} /></Link>}
        </div>
        <StaggerGroup className="project-grid">
          {listedProjects.map((project) => (
            <StaggerItem key={project.title}><ProjectCard project={project} /></StaggerItem>
          ))}
        </StaggerGroup>
        <p className="portfolio-disclaimer">Projects shown are independent portfolio work, not client endorsements.</p>
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  const principles = [
    { number: "01", title: "Business-first thinking", description: "We begin with your goals and the people you serve, then choose the technology that fits.", icon: <Layers3 /> },
    { number: "02", title: "Modern engineering", description: "We build with proven tools and clean foundations that are easier to maintain and extend.", icon: <Code2 /> },
    { number: "03", title: "Performance by design", description: "We consider speed, accessibility, and resilience throughout design and implementation.", icon: <Globe2 /> },
    { number: "04", title: "Clear collaboration", description: "You stay informed through defined milestones, practical decisions, and direct communication.", icon: <MessagesSquare /> },
  ];
  return (
    <section className="section section-principles">
      <div className="container principles-layout">
        <div className="principles-intro">
          <SectionHeading
            eyebrow="Why work with us"
            title="Built with purpose. Delivered with precision."
            description="Good software is more than code. It takes careful decisions, a clear process, and a focus on the outcome."
          />
          <Link className="text-link" href="/about">Get to know our approach <ArrowUpRight size={16} /></Link>
        </div>
        <StaggerGroup className="principle-list">
          {principles.map((item) => (
            <StaggerItem key={item.number}>
              <article className="principle-item">
                <span className="principle-number">{item.number}</span>
                <span className="principle-icon">{item.icon}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    ["01", "Discovery", "Understand the business, goals, audience, and project requirements."],
    ["02", "Strategy & design", "Define the project scope, architecture, and user experience."],
    ["03", "Development", "Build, test, and refine the solution through an organized process."],
    ["04", "Launch", "Deploy the product, provide handover, and plan the next stage."],
  ];
  return (
    <section className="section section-process">
      <div className="container">
        <SectionHeading eyebrow="How we work" title="A clear path from idea to launch" description="A transparent process keeps decisions grounded and the work moving in the right direction." />
        <StaggerGroup className="process-grid">
          {steps.map(([number, title, description]) => (
            <StaggerItem key={number}>
              <article className="process-step">
                <span className="process-number">{number}</span>
                <span className="process-line" aria-hidden="true" />
                <h3>{title}</h3><p>{description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function TechnologySection() {
  const groups = [
    {
      label: "Web Development",
      eyebrow: "Frontend & platforms",
      icon: <Code2 size={20} strokeWidth={1.7} aria-hidden="true" />,
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    },
    {
      label: "Mobile & Backend Applications",
      eyebrow: "Applications & services",
      icon: <Smartphone size={20} strokeWidth={1.7} aria-hidden="true" />,
      technologies: ["React Native", "FastAPI", "Python", "REST APIs"],
    },
    {
      label: "Data & AI",
      eyebrow: "Intelligence & data",
      icon: <Database size={20} strokeWidth={1.7} aria-hidden="true" />,
      technologies: ["MongoDB", "Firebase", "Gemini", "RAG systems"],
    },
    {
      label: "Automation & Integrations",
      eyebrow: "Connected workflows",
      icon: <Workflow size={20} strokeWidth={1.7} aria-hidden="true" />,
      technologies: ["n8n", "Workflow integrations", "Third-party APIs"],
    },
  ];
  return (
    <section className="section section-technology">
      <div className="container">
        <SectionHeading
          eyebrow="Our toolkit"
          title="The right tools for the job"
          description="We select technologies to suit your product, existing systems, and team—not to chase a trend."
        />
        <StaggerGroup className="technology-grid">
          {groups.map((group, index) => (
            <StaggerItem key={group.label}>
              <article className="technology-card">
                <div className="technology-card-top">
                  <span className="technology-icon">{group.icon}</span>
                  <span className="technology-index">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="technology-eyebrow">{group.eyebrow}</p>
                <h3>{group.label}</h3>
                <div className="technology-badges">
                  {group.technologies.map((technology) => (
                    <span className="technology-badge" key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section section-faq">
      <div className="container faq-layout">
        <SectionHeading eyebrow="Common questions" title="A few things you may want to know" description="Still have questions? Get in touch and tell us what you have in mind." />
        <Reveal className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
              <summary>{faq.question}<span aria-hidden="true">+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function ContactCTASection() {
  return (
    <section className="section section-cta">
      <div className="container">
        <Reveal className="cta-panel-reveal">
        <div className="cta-panel">
          <div className="cta-mark" aria-hidden="true"><Workflow size={25} /></div>
          <p className="eyebrow">Let&apos;s build what&apos;s next</p>
          <h2>Have an idea worth building?</h2>
          <p>Let&apos;s discuss your goals and explore how the right technology can bring your vision to life.</p>
          <Link className="button button-light" href="/contact">Start your project <ArrowUpRight size={17} /></Link>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
