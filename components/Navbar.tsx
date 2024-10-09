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
    <nav className=" bg-transparent sticky border-1 top-0 backdrop-blur">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="text-black text-2xl font-bold">Ashar</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black font-semibold  hover:text-black">Home</Link>
            <Link href="/about" className="text-black font-semibold hover:text-black">About</Link>
            <Link href="/projects" className="text-black font-semibold hover:text-black">Projects</Link>
            <Link href="/contact" className="text-black font-semibold hover:text-black">Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
          <Sheet>
          <SheetTrigger>
            <button
              className="text-black hover:text-black focus:outline-none"
              id="menu-toggle"
            >
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
            </button>
            </SheetTrigger>

            <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-2xl font-bold'>Ashar</SheetTitle>
      <SheetDescription>
      <div id="menu" className='mt-4' >
          <a href="#home" className="block px-4 py-2 text-black-300 hover:bg-gray-700 hover:text-white">Home</a>
          <a href="#about" className="block px-4 py-2 text-black-300 hover:bg-gray-700 hover:text-white">About</a>
          <a href="#projects" className="block px-4 py-2 text-black-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-black-300 hover:bg-gray-700 hover:text-white">Contact</a>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
  </Sheet>
            
    
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">

      

  


        
      </div>

      
 
 




    </nav>
  );
};

export default Navbar;
