"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/", icon: <FaHome className="mr-2" /> },
  { label: "About", href: "/about", icon: <FaUser className="mr-2" /> },
  {
    label: "Projects",
    href: "/projects",
    icon: <FaProjectDiagram className="mr-2" />,
  },
  { label: "Contact", href: "/contact", icon: <FaEnvelope className="mr-2" /> },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* ✅ Logo with link to Home */}
          <Link href="/" className="cursor-pointer">
            <div className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:scale-105 transition-transform duration-300">
              Ashar<span className="text-white">.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 font-medium text-lg relative group transition-all duration-300"
              >
                {icon}
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Sidebar */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-64 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-r border-gray-800 text-gray-200 shadow-2xl p-0 overflow-hidden"
              >
                <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border-b border-gray-800">
                  {/* ✅ Mobile Logo also clickable */}
                  <Link href="/" onClick={handleLinkClick}>
                    <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 cursor-pointer">
                      Ashar<span className="text-white">.</span>
                    </h2>
                  </Link>
                </div>

                <div className="flex flex-col space-y-3 px-5 py-6">
                  {navItems.map(({ label, href, icon }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 text-gray-300 text-lg font-medium px-4 py-2 rounded-md bg-gray-900/40 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_10px_#00ffff40] transition-all duration-300"
                    >
                      {icon}
                      {label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
