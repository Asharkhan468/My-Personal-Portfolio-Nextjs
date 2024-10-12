'use client'

import React from 'react';
import Image from 'next/image';
import developer from '../public/developer.png'
import guyAvatar from '../public/avatar.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';




const TypingEffectSection = () => {
  return (
    <>
<div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 bg-gray-100 min-h-screen">
  <div className="flex-1 px-10 mb-8 md:mb-0 md:mr-12 lg:mr-16 ">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
      Hi there,
    </h1>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
      I am <span className='text-[#b5179e]'>Ashar Khan</span>
    </h2>
    <h3 className="text-xl md:text-2xl lg:text-3xl text-[#0081a7] font-semibold">
      <div className="relative">
        <span className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-black animate-typing pr-2">
          MERN Stack Developer
        </span>
      </div>
    </h3>
  </div>
  <div className="flex-1 md:ml-12 lg:ml-16">
    
    <Image className='w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg object-cover' src={developer} width={300} height={300} alt='Image'/>
  </div>
</div>

{/* let me introduce section started */}

<div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 bg-gray-100 min-h-screen">
  <div className="flex-1 mb-8 md:mb-0 px-4 md:px-8">
    <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-4">
      Let me <span className='text-[#0081a7]'>introduce</span> myself
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mt-9">
      <span>
      My journey into programming has been amazing, and I've learned quite a bit so far! 😊


      </span><br /><br />
  
<span>I’m well-versed in popular technologies like <span className='text-[#b5179e]'>JavaScript,</span> <span className='text-[#b5179e]'>React.js,</span> and <span className='text-[#b5179e]'>Next js.</span></span><br /><br />

<span>I have a strong passion for creating <span className='text-[#b5179e]'>innovative web solutions </span>and <span className='text-[#b5179e]'>enhancing user experiences.</span> I'm eager to explore <span className='text-[#b5179e]'>emerging technologies</span> and am particularly drawn to areas where I believe the <span className='text-[#b5179e]'>future of development lies</span></span><br /><br />

<span>In my free time, I enjoy working on projects using <span className='text-[#b5179e]'> modern JavaScript frameworks and libraries</span> such as <span className='text-[#b5179e]'>React.js</span> to bring ideas to life.</span>
    </p>
  </div>
  <div className="flex-1 justify-center items-center md:ml-12 lg:ml-16 ml-10">
  <Image src={guyAvatar} width={500} height={500} alt='Avatar'/>
  </div>
</div>



{/* social media icons */}


<div className="flex flex-col items-center py-12 px-6 sm:px-8 bg-transparent text-gray-900">
      {/* Header Text */}
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-900 tracking-wide transition-all duration-300 ease-in-out ">
  Find <span className='text-[#b5179e]'>me</span> on
</h2>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4">
      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="w-8 h-8 text-gray-800 transition-all duration-300 ease-in-out"
        />
        <span className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 ease-in-out group-hover:border-gray-800"></span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-8 h-8 text-gray-800 transition-all duration-300 ease-in-out group-hover:text-blue-600"
        />
        <span className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 ease-in-out group-hover:border-blue-600"></span>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="w-8 h-8 text-gray-800 transition-all duration-300 ease-in-out group-hover:text-blue-500"
        />
        <span className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 ease-in-out group-hover:border-blue-400"></span>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="w-8 h-8 text-gray-800 transition-all duration-300 ease-in-out group-hover:text-pink-500"
        />
        <span className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 ease-in-out group-hover:border-pink-500"></span>
      </a>
    </div>
    </div>
</>
  );
};

export default TypingEffectSection;