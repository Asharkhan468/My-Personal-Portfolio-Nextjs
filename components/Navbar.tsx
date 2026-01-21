"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Ashar
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-semibold text-lg">
          {links.map((link, i) => (
            <li key={i} className="hover:text-cyan-400 transition">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          {[faGithub, faLinkedin, faInstagram].map((icon, i) => (
            <a
              key={i}
              href={
                icon === faGithub
                  ? "https://github.com/Asharkhan468"
                  : icon === faLinkedin
                  ? "https://www.linkedin.com/in/ashar-ullah-khan-644a20374/"
                  : "https://www.instagram.com/ashar_2347/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition text-xl"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setNavOpen(!navOpen)} className="text-gray-200 text-2xl focus:outline-none">
            <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-12 text-2xl transition-transform duration-500 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            onClick={() => setNavOpen(false)}
            className="text-gray-200 hover:text-cyan-400 transition"
          >
            {link.name}
          </a>
        ))}

        <div className="flex gap-6 mt-6">
          {[faGithub, faLinkedin, faInstagram].map((icon, i) => (
            <a
              key={i}
              href={
                icon === faGithub
                  ? "https://github.com/Asharkhan468"
                  : icon === faLinkedin
                  ? "https://www.linkedin.com/in/ashar-ullah-khan-644a20374/"
                  : "https://www.instagram.com/ashar_2347/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-cyan-400 transition text-3xl"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
