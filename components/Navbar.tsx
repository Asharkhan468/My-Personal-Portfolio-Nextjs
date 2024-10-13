'use client'

import React from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




const Navbar:React.FC = () => {
  return (


 <nav className="bg-transparent sticky border-1 top-0 backdrop-blur z-10">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center py-4">
      <div className="text-[#082240] text-2xl font-bold">Ashar</div>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-[#082240] font-semibold relative group">
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/about" className="text-[#082240] font-semibold relative group">
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/projects" className="text-[#082240] font-semibold relative group">
          Projects
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/contact" className="text-[#082240] font-semibold relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <div className="text-black hover:text-black focus:outline-none" id="menu-toggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className='text-2xl font-bold'>Ashar</SheetTitle>
              <SheetDescription>
                <div id="menu" className='mt-4'>
                  <Link href="/" className="block px-4 py-2 text-black-300 hover:bg-gray-900 hover:text-white">Home</Link>
                  <Link href="/about" className="block px-4 py-2 text-black-300 hover:bg-gray-900 hover:text-white">About</Link>
                  <Link href="/projects" className="block px-4 py-2 text-black-300 hover:bg-gray-900 hover:text-white">Projects</Link>
                  <Link href="/contact" className="block px-4 py-2 text-black-300 hover:bg-gray-900 hover:text-white">Contact</Link>
                </div>
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
















