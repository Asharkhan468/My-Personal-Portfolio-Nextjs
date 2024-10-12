import React from 'react'
import developer from '../../public/about-page-image.webp'
import Image from 'next/image'

function page() {
  return (
    <>
  
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-12 px-6 md:px-20">
    {/* Text Section */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Who I Am
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Hi, I’m <span className="font-semibold text-blue-600">Ashar Khan</span>, a passionate MERN stack developer with experience in building dynamic web and mobile applications. I enjoy creating seamless digital experiences and solving complex problems through code. My goal is to deliver professional, high-quality solutions that meet the needs of my clients.
      </p>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Whether it's a mobile app or a full-fledged website, I’m here to help you bring your ideas to life with my expertise in modern web technologies and design principles.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      {/* <img
        src="/path-to-your-image.jpg"
        alt="Ashar Khan"
        className="rounded-lg shadow-lg w-80 h-80 object-cover"
      /> */}
      <Image src={developer} width={300} height={300} alt='dhd'/>
      
    </div>
  </section>


  <section className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">My Skill Set</h2>
        <p className="text-gray-600 mt-4">
          Here's a quick overview of the technologies I work with:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className={`text-6xl ${skill.color} mb-4`}>
              <i className={skill.icon}></i>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>

  </>



  )
}

export default page