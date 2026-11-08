export const services = [
  {
    slug: "website-development",
    number: "01",
    title: "Website development",
    shortTitle: "Websites & platforms",
    description:
      "High-performance websites and custom web applications designed around your users, operations, and business goals.",
    intro:
      "From a focused business website to a full-featured SaaS platform, we design and engineer web products that are useful, fast, and ready to grow.",
    capabilities: [
      "Business websites and redesigns",
      "Custom web applications",
      "eCommerce and SaaS platforms",
      "API and third-party integrations",
      "Responsive UI engineering",
      "Performance and accessibility improvements",
    ],
    benefits: [
      "A clear, considered experience on every screen",
      "Maintainable foundations that support new features",
      "Search-friendly structure and performance-minded delivery",
    ],
    examples: [
      "A business website that makes its offering easy to understand",
      "A marketplace or eCommerce storefront",
      "A SaaS dashboard tailored to an existing workflow",
    ],
    approach:
      "We align on users and outcomes first, then shape the information architecture and interface before building, testing, and preparing your product for launch.",
    icon: "globe",
  },
  {
    slug: "mobile-app-development",
    number: "02",
    title: "Mobile app development",
    shortTitle: "Mobile applications",
    description:
      "Modern cross-platform applications designed to make everyday tasks feel intuitive on iOS and Android.",
    intro:
      "We help turn product ideas into mobile experiences, pairing thoughtful interaction design with dependable application and API engineering.",
    capabilities: [
      "Cross-platform app development",
      "React Native applications",
      "Mobile UI and interaction design",
      "Backend and API integrations",
      "App store preparation",
      "Ongoing maintenance and improvements",
    ],
    benefits: [
      "Consistent experiences across mobile platforms",
      "A reusable product foundation for future releases",
      "Clear handover and practical post-launch support",
    ],
    examples: [
      "A booking flow for a service business",
      "A mobile companion for an existing web product",
      "A field-team application connected to business systems",
    ],
    approach:
      "We map the core user journeys, validate the product scope, build the shared application experience, and test key flows before release.",
    icon: "smartphone",
  },
  {
    slug: "ai-chatbots",
    number: "03",
    title: "AI chatbots",
    shortTitle: "AI chatbots",
    description:
      "Useful conversational experiences that make your business knowledge easier to find and your customer interactions easier to manage.",
    intro:
      "We build AI assistants around real information and clearly defined tasks, connecting chat interfaces to knowledge sources and business systems where appropriate.",
    capabilities: [
      "Knowledge-based customer assistants",
      "Retrieval-augmented generation (RAG)",
      "Document question-and-answer tools",
      "Website chat experiences",
      "API and business-system integrations",
      "Conversation testing and refinement",
    ],
    benefits: [
      "Answers grounded in your provided knowledge",
      "An approachable way to navigate complex information",
      "A measured rollout with clear limits and fallback paths",
    ],
    examples: [
      "A website assistant for common product questions",
      "A document search tool for internal reference materials",
      "A support assistant that routes complex requests to a person",
    ],
    approach:
      "We review your content and use cases, select an appropriate retrieval and integration approach, then evaluate responses and refine the assistant before launch.",
    icon: "messages",
  },
  {
    slug: "ai-agents",
    number: "04",
    title: "AI agents & automation",
    shortTitle: "AI agents & automation",
    description:
      "Purposeful AI-powered workflows that connect tools and reduce repetitive operational work without obscuring human oversight.",
    intro:
      "We help identify where automation can make a practical difference, then build workflows with clear inputs, outputs, and sensible review points.",
    capabilities: [
      "Task-focused AI agents",
      "Workflow automation",
      "n8n and API integrations",
      "Lead intake and qualification flows",
      "Business process automation",
      "Human review and exception handling",
    ],
    benefits: [
      "Less manual effort on repeatable tasks",
      "Connected systems with traceable workflow steps",
      "Appropriate human review for important decisions",
    ],
    examples: [
      "A lead intake workflow that organizes new inquiries",
      "A routine handoff between connected business tools",
      "A review-assisted process for recurring administrative tasks",
    ],
    approach:
      "We map the existing workflow, agree where automation is appropriate, prototype a bounded solution, and test failure cases before integrating it into operations.",
    icon: "workflow",
  },
] as const;

export type Service = (typeof services)[number];

export const projects = [
  {
    title: "Playable – E-commerce Website",
    category: "AI application",
    description:
      "A modern, responsive e-commerce platform for toys and gadgets, featuring product browsing, search, filters, shopping cart, checkout, and a custom admin dashboard for seamless store management.",
    image: "/playable.png",
    alt: "AI Resume Analyzer application interface",
    technologies: ["Next.js", "Mongo DB", "Cloudinary", "Vercel"],
    live: "https://playable-store.vercel.app/",
    label: "Independent project",
  },
  {
    title: "Professional Roofing Service Website",
    category: "Web application",
    description:
      "Modern business showcase website designed to present commercial and residential roofing services, client testimonials, service quotes, and contact integration.",
    image: "/roofing.png",
    alt: "Professional Roofing Service Website",
    technologies: ["Next.js", "React"],

    live: "https://roofing-website-xi.vercel.app/",
    label: "Independent project",
  },
  {
    title: "CleanPro service platform",
    category: "Web application",
    description:
      "A service-business website and booking experience paired with an administrative interface for managing requests and service details.",
    image: "/cleaning-pro.png",
    alt: "CleanPro service booking website",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],

    live: "https://cleanpro-system-7p8j.vercel.app/",
    label: "Independent project",
  },
] as const;

export const faqs = [
  {
    question: "What services does Innovate Software Solution provide?",
    answer:
      "We work on websites and web applications, mobile apps, AI chatbots, and AI-enabled workflow automation. The right scope depends on your goals and existing systems.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. The team is available to collaborate remotely with businesses and founders across different locations and time zones.",
  },
  {
    question: "Can you develop custom software from scratch?",
    answer:
      "Yes. We can help shape an idea into a practical scope and build a custom product, or work on a focused feature within an existing application.",
  },
  {
    question: "How does the development process work?",
    answer:
      "We start by understanding your goals and requirements, agree on scope and approach, then design, build, test, and prepare the work for launch with regular communication.",
  },
  {
    question: "How can I get a project estimate?",
    answer:
      "Share the problem you are solving, your intended users, the main features, and any timing or budget context through the contact form. We will follow up to clarify the scope.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Post-launch support and maintenance can be discussed as part of your project scope, including a handover and follow-up improvements.",
  },
  {
    question: "Can you integrate AI into an existing application?",
    answer:
      "Yes. We can assess your current application and use case, then recommend a bounded AI integration that fits your data, workflows, and user experience.",
  },
] as const;

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const contactEmail = "ashar@innovatesoftwaresolution.com";
export const productionUrl = "https://innovatesoftwaresolution.com";
