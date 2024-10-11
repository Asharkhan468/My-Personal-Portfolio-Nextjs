import React from 'react';
import Image from 'next/image';
import developer from '../public/developer.png'
import guyAvatar from '../public/avatar.webp'



const TypingEffectSection = () => {
  return (
    <>
<div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 bg-gray-100 min-h-screen">
  <div className="flex-1 px-10 mb-8 md:mb-0 md:mr-12 lg:mr-16 ">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
      Hi there,
    </h1>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
      I am Ashar Khan
    </h2>
    <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-700">
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
      Let me introduce myself
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mt-9">
      <span>
      My journey into programming has been amazing, and I've learned quite a bit so far! 😊


      </span><br /><br />
  
<span>I’m well-versed in popular technologies like JavaScript, React.js, and Next js.</span><br /><br />

<span>I’m particularly excited about developing new web technologies and digital products, and I also have a growing interest in fields like Deep Learning and Natural Language Processing.</span><br /><br />

<span>In my free time, I enjoy working on projects using modern JavaScript frameworks and libraries such as React.js to bring ideas to life.</span>
    </p>
  </div>
  <div className="flex-1 justify-center items-center md:ml-12 lg:ml-16 ml-10">
  <Image src={guyAvatar} width={500} height={500} alt='Avatar'/>
  </div>
</div>



{/* social media icons */}



</>
  );
};

export default TypingEffectSection;