'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: 'Home', href: '/', icon: <FaHome className="mr-2" /> },
  { label: 'About', href: '/about', icon: <FaUser className="mr-2" /> },
  { label: 'Projects', href: '/projects', icon: <FaProjectDiagram className="mr-2" /> },
  { label: 'Contact', href: '/contact', icon: <FaEnvelope className="mr-2" /> },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // Close sidebar on link click
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-[#082240] hover:text-[#b5179e] transition-colors duration-300 cursor-pointer">
            Ashar
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center text-[#082240] font-medium text-lg relative group transition-colors duration-300"
              >
                {icon}
                {label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#b5179e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Mobile Sidebar Trigger */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="text-black hover:text-[#b5179e] focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </SheetTrigger>

              <SheetContent side="left" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-[#082240]">Ashar</SheetTitle>
                  <SheetDescription className="mt-4 space-y-2">
                    {navItems.map(({ label, href, icon }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={handleLinkClick}
                        className="flex items-center px-4 py-2 rounded-md text-[#082240] hover:bg-blue-600 hover:text-white transition duration-200"
                      >
                        {icon}
                        {label}
                      </Link>
                    ))}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
