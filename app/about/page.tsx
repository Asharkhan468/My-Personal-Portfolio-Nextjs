import React from 'react'
import developer from '../../public/about-page-image.webp'
import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux, SiTypescript, SiFirebase, SiBootstrap, SiExpress } from 'react-icons/si';


function page() {

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact className="text-cyan-500" />, color: "text-cyan-500" },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" />, color: "text-gray-700" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, color: "text-teal-500" },
    { name: "Node.js", icon: <FaNode className="text-green-600" />, color: "text-green-600" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-800" />, color: "text-green-800" },
    { name: "Redux", icon: <SiRedux className="text-purple-500" />, color: "text-purple-500" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, color: "text-blue-600" },
    { name: "Git", icon: <FaGitAlt className="text-red-500" />, color: "text-red-500" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600" />, color: "text-yellow-600" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-500" />, color: "text-indigo-500" },
    { name: "Express.js", icon: <SiExpress className="text-black" />, color: "text-black" },
  ];

  return (
    <>
  
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-12 px-6 md:px-20">
    {/* Text Section */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Who I Am
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mt-8">
        Hi, I’m <span className="font-semibold text-blue-600">Ashar Khan</span>, a passionate <span className='text-blue-600 font-semibold'>MERN stack developer</span> with experience in building dynamic web applications. I enjoy creating seamless digital experiences and solving complex problems through code.
      </p><br />
      <p className='text-lg text-gray-600 leading-relaxed'> My goal is to deliver professional, high-quality solutions that meet the needs of my clients.</p>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Whether it's a mobile app or a full-fledged website, I’m here to help you bring your ideas to life with my expertise in modern web technologies and design principles.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image src={developer} width={300} height={300} alt='dhd'/>
      
    </div>
  </section>






  <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My <span className='text-blue-600'>Skill Set</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 flex flex-col items-center"
            >
              <div className="text-5xl mb-4 text-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-gray-900">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>


  

  </>



  )
}

export default page