"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import guyAvatar from "../public/avatar.webp";
import avatar from "../public/My-whatsapp-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faGraduationCap,
  faSchool,
  faLaptopCode,
  faUniversity,
  faLocationDot,
  faArrowRight,
  faCode,
  faRobot,
  faLayerGroup,
  faCheckCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Typewriter from "typewriter-effect";

// Project Images
import buySellWebsite from "../public/buy-sell-website.png";
import quizAppImg from "../public/quiz-app.png";
import blogApppImg from "../public/blog-app.png";
import priceOyeImge from "../public/priceoye-website.png";
import noonWeb from "../public/noon-website.png";
import passwordGenerator from "../public/password-generator.png";
import currencyConverter from "../public/currency-converter.png";
import saltAndPepper from "../public/salt-and-peper.png";
import shinyService from "../public/Claening.png";
import NextBiz from "../public/NextBitz.png";
import multiVendor from "../public/multi-vendor.png";
import realEstate from "../public/real-estate.png";
import CleanPro from "../public/cleaning-pro.png";
import CleanProAdmin from "../public/cleanPro-admin.png";
import Roofing from "../public/roofing.png";
import ResumeAnalyzer from "../public/ResumeAI.png";

// Skill Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiBootstrap,
  SiExpress,
  SiCplusplus,
  SiPython,
  SiFastapi,
} from "react-icons/si";
import { FiExternalLink, FiGithub, FiArrowUpRight, FiZap, FiCpu, FiLayers, FiGlobe } from "react-icons/fi";
import Chatbot from "@/components/ChatBot";

export default function PortfolioPage() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [activeProjectCategory, setActiveProjectCategory] = useState("all");

  const skills = [
    { name: "React.js", category: "frontend", icon: <FaReact className="text-cyan-400" />, level: "Expert" },
    { name: "Next.js", category: "frontend", icon: <SiNextdotjs className="text-slate-100" />, level: "Expert" },
    { name: "TypeScript", category: "frontend", icon: <SiTypescript className="text-blue-400" />, level: "Advanced" },
    { name: "JavaScript (ES6+)", category: "frontend", icon: <FaJs className="text-yellow-400" />, level: "Expert" },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="text-teal-400" />, level: "Expert" },
    { name: "HTML5 / CSS3", category: "frontend", icon: <FaHtml5 className="text-orange-500" />, level: "Expert" },
    { name: "Redux Toolkit", category: "frontend", icon: <SiRedux className="text-purple-400" />, level: "Advanced" },
    
    { name: "Node.js", category: "backend", icon: <FaNode className="text-green-500" />, level: "Expert" },
    { name: "Express.js", category: "backend", icon: <SiExpress className="text-slate-300" />, level: "Expert" },
    { name: "FastAPI", category: "backend", icon: <SiFastapi className="text-emerald-400" />, level: "Advanced" },
    { name: "MongoDB", category: "backend", icon: <SiMongodb className="text-green-600" />, level: "Advanced" },
    { name: "Firebase", category: "backend", icon: <SiFirebase className="text-amber-400" />, level: "Advanced" },
    
    { name: "Python", category: "ai", icon: <SiPython className="text-[#3776AB]" />, level: "Advanced" },
    { name: "Gemini AI & RAG", category: "ai", icon: <FiCpu className="text-indigo-400" />, level: "Specialist" },
    { name: "C++", category: "backend", icon: <SiCplusplus className="text-blue-500" />, level: "Proficient" },
    
    { name: "React Native", category: "mobile", icon: <FaReact className="text-sky-400" />, level: "Advanced" },
    { name: "Git / GitHub", category: "tools", icon: <FaGitAlt className="text-red-500" />, level: "Expert" },
    { name: "Bootstrap", category: "frontend", icon: <SiBootstrap className="text-purple-500" />, level: "Advanced" },
  ];

  const filteredSkills = activeSkillCategory === "all"
    ? skills
    : skills.filter(s => s.category === activeSkillCategory);

  const projects = [
    {
      title: "AI Resume Analyzer & RAG Chatbot",
      category: "ai",
      description:
        "An AI-powered Resume Analyzer that allows users to upload their resume and interact with an intelligent chatbot for feedback, skill gap analysis, and career guidance. Built with RAG architecture, ChromaDB vector database, and Google Gemini AI.",
      image: ResumeAnalyzer,
      tags: ["Next.js", "FastAPI", "Google Gemini AI", "ChromaDB", "RAG"],
      github: "https://github.com/Asharkhan468/Resume-Analyzer",
      liveDemo: "https://resume-analyzer-bay-six.vercel.app/",
      featured: true,
    },
    {
      title: "Multi-Vendor E-Commerce Marketplace",
      category: "mern",
      description:
        "Comprehensive multi-vendor e-commerce platform featuring seller storefronts, product catalogs, customer checkouts, vendor analytics, and administrative management dashboard.",
      image: multiVendor,
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/multi-vendor-ecommerce",
      liveDemo: "https://multi-vendor-ecommerce-mauve.vercel.app/",
      featured: true,
    },
    {
      title: "CleanPro – Service Platform & Admin Suite",
      category: "mern",
      description:
        "End-to-end cleaning service booking system with customer landing page and administrative dashboard for managing schedules, service offerings, and booking records.",
      image: CleanPro,
      tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/cleanpro-system",
      liveDemo: "https://cleanpro-system-7p8j.vercel.app/",
      featured: true,
    },
    {
      title: "CleanPro – Admin Control Dashboard",
      category: "mern",
      description:
        "Admin portal for managing client service requests, monitoring platform metrics, managing users, and updating service status in real-time.",
      image: CleanProAdmin,
      tags: ["Next.js", "React", "Admin UI", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/cleanpro-system",
      liveDemo: "https://cleanpro-system-7p8j.vercel.app/admin",
      featured: false,
    },
    {
      title: "Real Estate Property Platform",
      category: "mern",
      description:
        "Modern property search platform showcasing real estate listings with search filters, dynamic image carousels, responsive grid layouts, and lead contact forms.",
      image: realEstate,
      tags: ["Next.js", "React", "Tailwind CSS", "REST API"],
      github: "https://github.com/Asharkhan468/real-state-listings",
      liveDemo: "https://real-state-listings-delta.vercel.app/",
      featured: true,
    },
    {
      title: "Professional Roofing Service Website",
      category: "web",
      description:
        "Modern business showcase website designed to present commercial and residential roofing services, client testimonials, service quotes, and contact integration.",
      image: Roofing,
      tags: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/Roofing-website",
      liveDemo: "https://roofing-website-xi.vercel.app/",
      featured: false,
    },
    {
      title: "Shiny Spaces Service Landing Page",
      category: "web",
      description:
        "High-converting residential and commercial space cleaning landing page built with Next.js, focused on clean aesthetics and user booking actions.",
      image: shinyService,
      tags: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/Pulizie-De-Casa-Landing-Page",
      liveDemo: "https://pulizie-de-casa-landing-page.vercel.app/",
      featured: false,
    },
    {
      title: "Full-Stack Blog Platform",
      category: "mern",
      description:
        "Dynamic blogging web application powered by React and Firebase, supporting post creation, real-time database updates, authentication, and content management.",
      image: blogApppImg,
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/Blogging-App-React-js",
      liveDemo: "https://blogging-app-react-js-henna.vercel.app/",
      featured: false,
    },
    {
      title: "NextBiz – Modern Enterprise Website",
      category: "web",
      description:
        "Sleek corporate agency landing page designed to showcase corporate solutions, service tiers, team experience, and client inquiries.",
      image: NextBiz,
      tags: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/Demo-Bussiness-Website",
      liveDemo: "https://demo-bussiness-website.vercel.app/",
      featured: false,
    },
    {
      title: "Interactive Quiz Application",
      category: "web",
      description:
        "Engaging real-time quiz application featuring score tracking, dynamic question sets, timed challenges, and completion analysis.",
      image: quizAppImg,
      tags: ["React", "JavaScript", "CSS3"],
      github: "https://github.com/Asharkhan468/Quiz-App",
      liveDemo: "https://practice-6def6.web.app/",
      featured: false,
    },
    {
      title: "Buy/Sell Corner Marketplace",
      category: "web",
      description:
        "Peer-to-peer product listing portal where users can list items for sale, browse local product categories, and manage item listings.",
      image: buySellWebsite,
      tags: ["React", "Firebase", "Bootstrap"],
      github: "https://github.com/Asharkhan468/Buy-Sell-Corner-App",
      liveDemo: "https://66c2f051a07baf66b1ff7841--coruscating-malabi-bdfc10.netlify.app/",
      featured: false,
    },
    {
      title: "Secure Password Generator App",
      category: "web",
      description:
        "Customizable security tool enabling users to generate randomized cryptographic passwords with adjustable length and symbol preferences.",
      image: passwordGenerator,
      tags: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/React-password-generator",
      liveDemo: "https://react-password-generator-lime.vercel.app/",
      featured: false,
    },
    {
      title: "Real-Time Currency Converter",
      category: "web",
      description:
        "Financial web application providing real-time international currency conversion rates using live external API data.",
      image: currencyConverter,
      tags: ["React", "API Integration", "Tailwind CSS"],
      github: "https://github.com/Asharkhan468/React-currency-converter",
      liveDemo: "https://react-project-seven-sandy.vercel.app/",
      featured: false,
    },
    {
      title: "PriceOye Electronics UI Clone",
      category: "web",
      description:
        "Pixel-perfect responsive e-commerce web application UI clone replicating product grids, categories, and shopping banners.",
      image: priceOyeImge,
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Asharkhan468/Priceoye-website-clone",
      liveDemo: "https://wwwclonewebpage.netlify.app/",
      featured: false,
    },
    {
      title: "Noon E-Commerce Platform UI",
      category: "web",
      description:
        "Clean, responsive front-end layout inspired by the Noon e-commerce platform with promotional sliders and product cards.",
      image: noonWeb,
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Asharkhan468/Noon-website-assignment",
      liveDemo: "https://asharkhan468.github.io/Noon-website-assignment/",
      featured: false,
    },
    {
      title: "Salt & Pepper Restaurant UI",
      category: "web",
      description:
        "Modern restaurant web layout featuring interactive food menu items, reservation forms, and brand story presentation.",
      image: saltAndPepper,
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Asharkhan468/Salt-and-pepper-website",
      liveDemo: "https://asharkhan468.github.io/Salt-and-pepper-website/",
      featured: false,
    },
  ];

  const filteredProjects = activeProjectCategory === "all"
    ? projects
    : activeProjectCategory === "featured"
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeProjectCategory);

  const services = [
    {
      icon: <FontAwesomeIcon icon={faRobot} className="w-6 h-6 text-blue-400" />,
      title: "AI Chatbots & RAG Systems",
      description: "Custom AI assistants powered by Google Gemini AI, LangChain, ChromaDB vector search, and Retrieval-Augmented Generation for business automation.",
      bullets: ["Context-aware knowledge base", "FastAPI backend integration", "Instant response accuracy", "Custom bot widget deployment"],
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      icon: <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-purple-400" />,
      title: "Full-Stack Web Development",
      description: "High-performance full-stack web applications using Next.js 14, React, Node.js, Express, and MongoDB engineered for scale and speed.",
      bullets: ["Server-Side Rendering (SSR)", "REST & GraphQL APIs", "Clean Architecture", "SEO & Speed Optimization"],
      gradient: "from-purple-500/20 to-violet-500/20",
    },
    {
      icon: <FontAwesomeIcon icon={faLayerGroup} className="w-6 h-6 text-cyan-400" />,
      title: "E-Commerce & SaaS Platforms",
      description: "Custom multi-vendor marketplaces, SaaS web portals, and internal management admin dashboards built with modern security standards.",
      bullets: ["Stripe / Payment integration", "Vendor & Admin controls", "Role-based authorization", "Database schema design"],
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} className="w-6 h-6 text-emerald-400" />,
      title: "Mobile Apps & API Automation",
      description: "Cross-platform mobile apps built with React Native and backend workflow automation connecting APIs and third-party services.",
      bullets: ["iOS & Android support", "Real-time state & data", "Custom API development", "High responsiveness"],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="relative bg-[#09090B] text-slate-100 overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] -top-40 -left-40 animate-pulse-glow" />
        <div className="absolute w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] top-1/3 -right-40 animate-pulse-glow" />
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] bottom-40 left-1/4 animate-pulse-glow" />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative z-10 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-12 flex flex-col justify-center bg-grid-pattern"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Freelance & Full-Time Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
               Full Stack &{" "}
              <span className="gradient-text">AI Chatbot</span> Developer
            </h1>

            {/* Typewriter Subtitle */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-300 h-10 flex items-center">
              <span className="mr-2 text-slate-400">Specialized in</span>
              <span className="text-blue-400 border-b-2 border-blue-500/50 pb-0.5">
                <Typewriter
                  options={{
                    delay: 75,
                    autoStart: true,
                    loop: true,
                    cursor: "|",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("AI Chatbots")
                      .pauseFor(2200)
                      .deleteAll()
                      .typeString("Next.js & MERN Stack")
                      .pauseFor(2200)
                      .deleteAll()
                      .typeString("FastAPI & Python Backends")
                      .pauseFor(2200)
                      .deleteAll()
                      .typeString("Scalable Web Applications")
                      .pauseFor(2200)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              I build production-ready AI chatbots, scalable MERN web applications, and fast digital platforms. Engineering clean code, high-converting UI/UX, and intelligent RAG systems for international clients.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore Featured Work</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span>Let's Discuss Project</span>
                <FiArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social & Proof Bar */}
            <div className="pt-8 border-t border-white/10 w-full grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">15+</div>
                <div className="text-xs text-slate-400 mt-1">Delivered Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">99%</div>
                <div className="text-xs text-slate-400 mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">Full Stack</div>
                <div className="text-xs text-slate-400 mt-1">AI & MERN Stack</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-30 blur-xl animate-pulse-glow" />

              {/* Profile Card Surface */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-center border border-white/10 shadow-2xl">
                {/* Image Container with status indicator */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-xl overflow-hidden">
                    <Image
                      src={avatar}
                      alt="Ashar Ullah Khan"
                      className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
              
                </div>

                {/* Developer Name & Title */}
                <h2 className="text-2xl font-bold text-white tracking-tight text-center">
                  Ashar Ullah Khan
                </h2>
                <p className="text-sm font-medium text-blue-400 text-center mt-1">
                  Full Stack Software Engineer
                </p>

                {/* Floating Tech Chips */}
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                    FastAPI RAG
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
                    MERN Stack
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
                    Gemini AI
                  </span>
                </div>

                {/* Social Icons Bar */}
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10 w-full justify-center">
                  {[
                    { href: "https://github.com/Asharkhan468", icon: faGithub, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/ashar-ullah-khan-644a20374/", icon: faLinkedin, label: "LinkedIn" },
                    { href: "https://www.instagram.com/dev_ashar_khan/", icon: faInstagram, label: "Instagram" },
                    { href: "mailto:asharullah.khan2468@gmail.com", icon: faEnvelope, label: "Email" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all duration-300"
                      aria-label={social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full mb-3">
              ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Engineering Modern Solutions With <span className="gradient-text">Precision</span>
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Story & Background Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              className="lg:col-span-7 glass-panel rounded-3xl p-8 flex flex-col justify-between border border-white/10"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-blue-400">#</span> Professional Summary
                </h3>
                <p className="text-slate-300 leading-relaxed text-base">
                  I am a passionate <strong className="text-white">Full Stack Software Developer</strong> specializing in creating modern web platforms and artificial intelligence integrations. My journey combines technical rigor with intuitive UI/UX design.
                </p>
                <p className="text-slate-300 leading-relaxed text-base">
                  I specialize in building intelligent <strong className="text-blue-400">AI Chatbots</strong> powered by Google Gemini AI, LangChain, and RAG architectures, alongside developing full-stack web applications using <strong className="text-blue-400">React, Next.js , Node.js, Express, and MongoDB</strong>.
                </p>
                <p className="text-slate-300 leading-relaxed text-base">
                  Whether building multi-vendor e-commerce platforms, real estate software, or administrative management systems, I prioritize performance, accessibility, and high conversion rates for my clients.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-white/10">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-sm font-bold text-white">Clean Code</div>
                  <div className="text-xs text-slate-400 mt-0.5">Scalable & Modular</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-sm font-bold text-white">Fast Execution</div>
                  <div className="text-xs text-slate-400 mt-0.5">Optimized Build</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] col-span-2 sm:col-span-1">
                  <div className="text-sm font-bold text-white">Client First</div>
                  <div className="text-xs text-slate-400 mt-0.5">Clear Communication</div>
                </div>
              </div>
            </motion.div>

            {/* Visual Avatar Banner */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
              className="lg:col-span-5 glass-panel rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 relative overflow-hidden"
            >
              <div className="w-56 h-56 sm:w-64 sm:h-64 relative mb-6">
                <Image
                  src={guyAvatar}
                  alt="Developer Illustration"
                  className="object-contain drop-shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Turning Complex Problems Into Elegant Code</h3>
              <p className="text-xs text-slate-400 mt-2 max-w-xs">
                Dedicated to continuous learning and implementing cutting-edge frontend & backend tech.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-violet-400 uppercase bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 rounded-full mb-3">
              SERVICES & SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              High-Value Engineering For <span className="gradient-text">Global Clients</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  {service.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 w-3.5 h-3.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full mb-3">
              TECH STACK & SKILLS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Technologies That Power <span className="gradient-text">My Code</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Skills" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "ai", label: "AI & FastAPI" },
              { id: "mobile", label: "Mobile & Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSkillCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeSkillCategory === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skill Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="glass-panel glass-panel-hover rounded-2xl p-4 flex flex-col items-center text-center border border-white/10 group"
                >
                  <div className="text-3xl sm:text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md mt-2">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Marquee Ticker */}
          <div className="mt-16 pt-12 border-t border-white/10 overflow-hidden relative group">
            <div className="animate-marquee-left flex gap-8 items-center">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5 whitespace-nowrap">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-xs font-semibold text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full mb-3">
              PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured Case Studies & <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Projects" },
              { id: "featured", label: "⭐ Featured" },
              { id: "ai", label: "AI & RAG" },
              { id: "mern", label: "Full-Stack MERN" },
              { id: "web", label: "Web Applications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveProjectCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeProjectCategory === tab.id
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={index}
                  className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Thumbnail */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={600}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
                      {project.featured && (
                        <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-[10px] font-semibold text-slate-300 bg-white/[0.05] border border-white/10 px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200"
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-500/20 transition-all duration-200"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full mb-3">
              QUALIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Education & <span className="gradient-text">Background</span>
            </h2>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-transparent">
            {/* Bachelor's */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faUniversity} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Bachelor’s in Software Engineering</h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">Mohammad Ali Jinnah University (MAJU)</p>
                  <p className="text-xs text-slate-400 mt-2">Specializing in Software Development, Database Management, Algorithms, and System Architecture.</p>
                </div>
              </div>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                Present
              </span>
            </motion.div>

            {/* Diploma */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faLaptopCode} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Diploma in Web & Mobile App Development</h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">Saylani Mass IT Training Program (1 Year)</p>
                  <p className="text-xs text-slate-400 mt-2">Intensive hands-on training in MERN Stack, React Native, REST API building, and git workflows.</p>
                </div>
              </div>
            </motion.div>

            {/* Intermediate */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Intermediate (Computer Science)</h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">Govt. Superior Science College</p>
                  <p className="text-xs text-slate-400 mt-2">Foundational studies in computer science logic, mathematics, and physics.</p>
                </div>
              </div>
            </motion.div>

            {/* Matriculation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-500/10 border border-slate-500/20 text-slate-300 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faSchool} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Matriculation</h3>
                  <p className="text-sm font-medium text-slate-300 mt-1">M. W. Academy School</p>
                  <p className="text-xs text-slate-400 mt-2">Secondary education with focus on Science and Mathematics.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Left */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Have a project idea or need AI integration?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you need a custom AI Chatbot with RAG capability, a full-stack Next.js app, or a mobile solution, I am ready to collaborate and deliver.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:ashar@innovatesoftwaresolution.com"
                  className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-blue-500/40 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-white">asharullah.khan2468@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+923172597708"
                  className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-blue-500/40 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Phone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white">+92 317 2597708</div>
                  </div>
                </a>

                <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white">Karachi, Pakistan (Remote Available)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me A Message</h3>

              <form
                action="https://formspree.io/f/mrbggenw"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Details / Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project requirements or goals..."
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/60 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 text-sm tracking-wide"
                >
                  Send Message Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-[#09090B] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="#hero" className="text-xl font-bold text-white">
              Ashar
            </Link>
            <p className="text-xs text-slate-400 mt-1">
              © {new Date().getFullYear()} Ashar Ullah Khan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <a
            href="#hero"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </footer>

      {/* AI Assistant Drawer */}
      <Chatbot />
    </div>
  );
}
