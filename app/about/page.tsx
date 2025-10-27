"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import developer from "../../public/about-page-image.webp";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

function Page() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNode className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-400" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  ];

  return (
    <>
      {/* About Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-200 py-12 px-6 md:px-20 overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 mb-10 md:mb-0 z-10 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Who I Am
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Hi, I’m{" "}
            <span className="font-semibold text-cyan-400">Ashar Khan</span>, a
            passionate{" "}
            <span className="text-purple-400 font-semibold">
              Web And Mobile Application Developer
            </span>{" "}
            experienced in crafting dynamic web and mobile applications. I love
            building seamless digital experiences and solving complex problems
            through clean, modern code.
          </p>
          <br />
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            My mission is to deliver{" "}
            <span className="text-cyan-400">high-quality, scalable</span> and{" "}
            <span className="text-purple-400">user-friendly solutions</span>{" "}
            that meet real-world needs.
          </p>
          <br />
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Whether it’s a mobile app or a full-stack web project, I bring ideas
            to life using technologies like{" "}
            <span className="text-cyan-400">React, Next.js,</span> and{" "}
            <span className="text-purple-400">Node.js</span>.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center z-10"
        >
          <Image
            src={developer}
            width={350}
            height={350}
            alt="Developer"
            className="rounded-2xl shadow-[0_0_30px_#38bdf840] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-10 right-20 animate-pulse"></div>
          <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl bottom-10 left-10 animate-pulse"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          My <span className="text-purple-400">Skill Set</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-20"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="group bg-gray-900/60 p-6 rounded-xl shadow-lg hover:shadow-[0_0_20px_#6366f140] hover:bg-gray-800 transition-transform transform hover:scale-105 flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-center text-gray-200 group-hover:text-cyan-400">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Page;
