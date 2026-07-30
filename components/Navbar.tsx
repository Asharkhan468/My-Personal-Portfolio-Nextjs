"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "services", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <nav
        className={`mx-auto max-w-6xl pointer-events-auto transition-all duration-300 rounded-full border ${
          scrolled
            ? "bg-[#09090B]/85 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-2.5 px-6"
            : "bg-[#09090B]/40 backdrop-blur-md border-white/5 py-3.5 px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 group text-xl font-bold tracking-tight text-white"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
              A
            </span>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              Ashar
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] p-1.5 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full block ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-violet-600/30 border border-blue-500/40 rounded-full shadow-inner"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/Asharkhan468"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashar-ullah-khan-644a20374/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Hire Me</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="p-2 rounded-full text-slate-200 hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <FontAwesomeIcon icon={navOpen ? faTimes : faBars} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto lg:hidden fixed inset-x-4 top-20 bg-[#09090B]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black z-50"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  )}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Asharkhan468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ashar-ullah-khan-644a20374/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/dev_ashar_khan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 text-slate-300 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={() => setNavOpen(false)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-500/20"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
