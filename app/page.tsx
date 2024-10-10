'use client'


import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

export default function IntroSection() {
  const [text, setText] = useState('');
  const typingText = "Hi there\nI am Ashar Khan\nMERN stack developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setText(text + typingText[index]);
        setIndex(index + 1);
      }, 100); // Adjust typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text, typingText]);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-6 md:py-12 px-8 md:px-16 bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400 text-white min-h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl font-bold leading-tight whitespace-pre-line">
          {text}
        </h1>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src={'/app/assets/website.avif'} // Ensure your image path is correct
          width={300}
          height={300}
          alt="Ashar Khan"
          
        />
      </div>
    </div>
  );
}