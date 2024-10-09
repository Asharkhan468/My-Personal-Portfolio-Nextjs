import React from 'react';

const Navbar:React.FC = () => {

  return (
    <nav className="bg-background/50 sticky border-b backdrop-blur">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="text-black text-2xl font-bold">Ashar</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-black-300 hover:text-white">Home</a>
            <a href="#about" className="text-black-300 hover:text-white">About</a>
            <a href="#projects" className="text-black-300 hover:text-white">Projects</a>
            <a href="#contact" className="text-black-300 hover:text-white">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
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
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div id="menu" className="hidden">
          <a href="#home" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
          <a href="#about" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
          <a href="#projects" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
