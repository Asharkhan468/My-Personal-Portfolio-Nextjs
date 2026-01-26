"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import guyAvatar from "../public/avatar.webp";
import avatar from "../public/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faGraduationCap,
  faSchool,
  faLaptopCode,
  faUniversity,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Typewriter from "typewriter-effect";

import developer from "../public/about-page-image.webp";
import weatherAppImg from "../public/weather-app.png";
import buySellWebsite from "../public/buy-sell-website.png";
import quizAppImg from "../public/quiz-app.png";
import blogApppImg from "../public/blog-app.png";
import priceOyeImge from "../public/priceoye-website.png";
import noonWeb from "../public/noon-website.png";
import passwordGenerator from "../public/password-generator.png";
import currencyConverter from "../public/currency-converter.png";
import saltAndPepper from "../public/salt-and-peper.png";
import ExpenseTracker from "../public/Expense Tracker SS.jpg";
import job2do from "../public/MYJOB2DO SS.jpg";
import shinyService from "../public/Claening.png";
import NextBiz from "../public/NextBitz.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaPython,
  FaGithub,
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
  SiCplusplus,
  SiPython,
  SiFastapi,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const TypingEffectSection = () => {
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
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
  ];

  const projects = [
    {
      title: "Shiny Spaces Service - Next App",
      description:
        "A modern, responsive landing page built with Next.js to showcase space cleaning services with a sleek and professional design.",
      image: shinyService,
      github: "https://github.com/Asharkhan468/Pulizie-De-Casa-Landing-Page",
      liveDemo: "https://pulizie-de-casa-landing-page.vercel.app/",
    },
    {
      title: "Blogging App - React App",
      description:
        "A dynamic blogging app built with React.js and Firebase, allowing users to create, manage, and share their blog posts seamlessly.",
      image: blogApppImg,
      github: "https://github.com/Asharkhan468/Blogging-App-React-js",
      liveDemo: "https://blogging-app-react-js-henna.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather app providing real-time global weather updates using JavaScript and API integration.",
      image: weatherAppImg,
      github: "https://github.com/Asharkhan468/Weather-App",
      liveDemo: "https://myweatherforcastapp.netlify.app/",
    },
    {
      title: "NextBiz - Next App",
      description:
        "A sleek and responsive Next.js landing page designed to showcase modern business services professionally.",
      image: NextBiz,
      github: "https://github.com/Asharkhan468/Demo-Bussiness-Website",
      liveDemo: "https://demo-bussiness-website.vercel.app/",
    },
    {
      title: "Interactive Quiz App",
      description:
        "An engaging quiz app with progress tracking and completion notifications, designed for a seamless user experience.",
      image: quizAppImg,
      github: "https://github.com/Asharkhan468/Quiz-App",
      liveDemo: "https://practice-6def6.web.app/",
    },
    {
      title: "Buy/Sell Corner – Product Listing Platform",
      description:
        "A responsive platform enabling users to post and browse products for sale with secure login/logout functionality.",
      image: buySellWebsite,
      github: "https://github.com/Asharkhan468/Buy-Sell-Corner-App",
      liveDemo:
        "https://66c2f051a07baf66b1ff7841--coruscating-malabi-bdfc10.netlify.app/",
    },
    {
      title: "Password Generator - React App",
      description:
        "A dynamic password generator built with React, allowing users to create secure and customizable passwords.",
      image: passwordGenerator,
      github: "https://github.com/Asharkhan468/React-password-generator",
      liveDemo: "https://react-password-generator-lime.vercel.app/",
    },
    {
      title: "Currency Converter - React App",
      description:
        "A real-time currency converter built with React for seamless exchange rate calculations.",
      image: currencyConverter,
      github: "https://github.com/Asharkhan468/React-currency-converter",
      liveDemo: "https://react-project-seven-sandy.vercel.app/",
    },
    {
      title: "PriceOye UI Clone",
      description:
        "A responsive UI clone for displaying electronics, built with HTML and CSS.",
      image: priceOyeImge,
      github: "https://github.com/Asharkhan468/Priceoye-website-clone",
      liveDemo: "https://wwwclonewebpage.netlify.app/",
    },
    {
      title: "Noon UI Clone",
      description:
        "A clean, responsive UI clone of the Noon website built using HTML and CSS.",
      image: noonWeb,
      github: "https://github.com/Asharkhan468/Noon-website-assignment",
      liveDemo: "https://asharkhan468.github.io/Noon-website-assignment/",
    },
    {
      title: "Salt and Pepper - Restaurant Website UI",
      description:
        "A visually appealing restaurant website UI built with HTML and CSS, delivering a modern and clean design.",
      image: saltAndPepper,
      github: "https://github.com/Asharkhan468/Salt-and-pepper-website",
      liveDemo: "https://asharkhan468.github.io/Salt-and-pepper-website/",
    },
  ];

  const mobileProjects = [
    {
      title: "MYJOB2Do – Service Marketplace App",
      description:
        "A React Native app connecting users and service providers with secure chat and Stripe payments.",
      github: "#",
      liveDemo:
        "https://drive.google.com/file/d/1ZSVUR2RT0tWykZAqXYdYO00tkMrrEYhX/view?usp=drive_link",
      image: job2do,
    },
    {
      title: "Expense Tracker – React Native App",
      description:
        "A mobile app to manage personal expenses with categorization and charts using local state management.",
      github: "https://github.com/Asharkhan468/Expense",
      liveDemo:
        "https://drive.google.com/file/d/1AWV3GmRb2YnNOiPgO8TwxNcQaAR6TM-C/view?usp=drive_link",
      image: ExpenseTracker,
    },
  ];

  const sectionFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sectionAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headingAnim = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const listStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const leftAnim = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const inputAnim = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ easeOut curve
    },
  },
};


const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};


  return (
    <>
      <section
        id="hero"
        className="relative pt-24 md:pt-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-200 overflow-hidden"
      >
        {/* Animated circles background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 px-6 md:px-10 mb-12 md:mb-0 z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-lg">
            Hi there,
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Ashar Ullah Khan
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold h-10 text-green-400 mb-6">
            <Typewriter
              options={{
                delay: 90,
                autoStart: true,
                loop: true,
                cursor: "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Software Engineer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Full Stack Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Freelancer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Web & Mobile App Developer")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </h3>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            {[
              {
                href: "https://github.com/Asharkhan468",
                icon: faGithub,
                color: "text-cyan-400",
              },
              {
                href: "https://www.linkedin.com/in/ashar-ullah-khan-644a20374/",
                icon: faLinkedin,
                color: "text-blue-500",
              },
              {
                href: "https://www.instagram.com/dev_ashar_khan/",
                icon: faInstagram,
                color: "text-pink-500",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-300 group-hover:${social.color}`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center z-10"
        >
          <Image
            className="rounded-2xl transition-transform hover:scale-105 duration-500 h-[380px] w-[350px]"
            src={avatar}
            width={350}
            height={350}
            alt="Developer"
          />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-start justify-center p-8 md:p-12 lg:p-16 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-pink-500/10 rounded-full blur-3xl top-10 right-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-10 left-10 animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 mb-10 md:mb-0 px-4 md:px-8 z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Let me <span className="text-cyan-400">introduce</span> myself
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            My journey into programming has been incredible full of learning and
            creativity.
            <br />
            <br />
            I’m skilled in technologies like
            <span className="text-pink-400">
              {" "}
              JavaScript, React.js, React Native
            </span>
            , and <span className="text-pink-400">Next.js.</span>
            <br />
            <br />
            I’m passionate about building{" "}
            <span className="text-cyan-400">
              modern web and mobile solutions
            </span>{" "}
            with seamless user experiences and futuristic UI concepts.
            <br />
            <br />
            When I’m not coding, I love exploring{" "}
            <span className="text-purple-400">new frameworks</span> and turning
            ideas into digital realities using
            <span className="text-purple-400"> React & Next.js.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center z-10"
        >
          <Image
            src={guyAvatar}
            width={450}
            height={450}
            alt="Avatar"
            className="rounded-2xl shadow-[0_0_30px_#a855f740] transition-transform hover:scale-105 duration-500"
          />
        </motion.div>
      </section>

      <section
        id="skills"
        className="relative py-16 md:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-hidden"
      >
        {/* Background Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 rounded-full blur-3xl top-10 right-10 md:right-20 animate-pulse"></div>
          <div className="absolute w-64 md:w-80 h-64 md:h-80 bg-purple-500/10 rounded-full blur-3xl bottom-10 left-6 md:left-10 animate-pulse"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          My <span className="text-purple-400">Skill Set</span>
        </motion.h2>

        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {[skills.slice(0, 9), skills.slice(9, 18)].map(
            (rowSkills, rowIndex) => (
              <div
                key={rowIndex}
                className="relative w-full overflow-hidden group mt-2 md:mt-4"
              >
                <div
                  className={`flex gap-6 sm:gap-8 md:gap-12 w-max
  group-hover:[animation-play-state:paused]
  ${rowIndex === 0 ? "animate-slide-left" : "animate-slide-right"}`}
                >
                  {[...rowSkills, ...rowSkills].map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center min-w-[90px] sm:min-w-[120px] md:min-w-[150px]"
                    >
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-1 md:mb-2">
                        {skill.icon}
                      </div>
                      <h3 className="text-sm sm:text-base md:text-xl font-semibold text-center text-gray-200">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-hidden"
      >
        <section
          id="projects"
          className="relative flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
            >
              My Recent <span className="text-blue-500">Projects</span>
            </motion.h2>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 sm:h-60 md:h-64 lg:h-60 object-cover"
                    width={400}
                    height={400}
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-800 rounded-md text-sm sm:text-base font-medium text-white flex items-center gap-2 hover:bg-gray-700 transition"
                      >
                        <FaGithub /> GitHub
                      </Link>
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 rounded-md text-sm sm:text-base font-medium text-white flex items-center gap-2 hover:bg-blue-700 transition"
                      >
                        <FiExternalLink /> Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mobile Projects */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-16 sm:mt-24 mb-12 sm:mb-16">
              Mobile <span className="text-blue-500">Applications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {mobileProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Mobile preview container */}
                  <div className="flex justify-center items-center bg-gray-950 py-4 sm:py-6">
                    <div className="relative w-36 sm:w-44 md:w-48 h-72 sm:h-80 md:h-96 rounded-3xl border-4 border-gray-800 shadow-inner overflow-hidden bg-black">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        width={300}
                        height={600}
                      />
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-800 rounded-md text-sm sm:text-base font-medium text-white flex items-center gap-2 hover:bg-gray-700 transition"
                      >
                        <FaGithub /> GitHub
                      </Link>
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 rounded-md text-sm sm:text-base font-medium text-white flex items-center gap-2 hover:bg-blue-700 transition"
                      >
                        <FiExternalLink /> Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.section>

      <motion.section
        id="education"
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="
  min-h-[auto] md:min-h-screen
  bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950
  text-gray-200
  px-4 sm:px-6 lg:px-20
  py-10 sm:py-20
"

      >
        {/* SECTION HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          My <span className="text-blue-500">Education</span>
        </h2>
        {/* EDUCATION CARDS - CENTER ALIGNED */}

        <motion.div
          variants={listStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6"
        >
          {/* BACHELORS */}
          <motion.div
            variants={cardAnim}
            whileHover={{ x: 4, scale: 1.02 }}
            className="relative bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-blue-500/20 transition w-full"
          >
            {/* PRESENT BADGE */}
            <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-500 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
              Present
            </span>

            <div className="flex items-start gap-3 sm:gap-4">
              <FontAwesomeIcon
                icon={faUniversity}
                className="text-blue-500 text-xl sm:text-2xl mt-1"
              />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Bachelor’s in Software Engineering
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Mohammad Ali Jinnah University
                </p>
              </div>
            </div>
          </motion.div>

          {/* INTERMEDIATE */}
          {/* <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-blue-500/20 transition w-full"> */}
          <motion.div
            variants={cardAnim}
            whileHover={{ x: 4, scale: 1.02 }}
            className="relative bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-blue-500/20 transition w-full"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-blue-500 text-xl sm:text-2xl mt-1"
              />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Intermediate (Computer Science)
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Govt. Superior Science College
                </p>
              </div>
            </div>
          </motion.div>

          {/* DIPLOMA */}
          {/* <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-blue-500/20 transition w-full"> */}
          <motion.div
            variants={cardAnim}
            whileHover={{ x: 4, scale: 1.02 }}
            className="relative bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-blue-500/20 transition w-full"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="text-blue-500 text-xl sm:text-2xl mt-1"
              />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Diploma in Web & Mobile App Development
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Saylani Mass IT Training Program (1 Year)
                </p>
              </div>
            </div>
          </motion.div>

          {/* MATRIC */}
          <motion.div
            variants={cardAnim}
            whileHover={{ x: 4, scale: 1.02 }}
            className="relative bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-blue-500/20 transition w-full"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <FontAwesomeIcon
                icon={faSchool}
                className="text-blue-500 text-xl sm:text-2xl mt-1"
              />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold">
                  Matriculation
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  M. W. Academy School
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
       className="
  bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950
  text-gray-200
  px-4 sm:px-6 lg:px-20
  pt-4 pb-10 sm:pt-16 sm:pb-16
"

      >
        <motion.h2
          variants={headingAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 sm:gap-14 items-start mt-6">
          {/* LEFT SIDE */}
          <motion.div
            variants={leftAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl text-center md:text-left md:text-4xl font-bold leading-tight">
              Let’s <span className="text-blue-500">Work</span> Together
            </h3>

            <p className="text-base sm:text-lg md:text-lg text-center md:text-left text-gray-400 leading-relaxed max-w-full sm:max-w-xl">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, feel free to reach out. I’ll do
              my best to get back to you as soon as possible.
            </p>

            {/* <div className="space-y-4 sm:space-y-5 text-gray-300 "> */}
            <div className="space-y-4 sm:space-y-5 text-gray-300 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 sm:gap-4 ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-blue-500 text-lg sm:text-xl"
                />
                <span className="text-sm sm:text-base">
                  ashar@innovatesoftwaresolution.com
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-blue-500 text-lg sm:text-xl"
                />
                <span className="text-sm sm:text-base">+92 317 2597708</span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-blue-500 text-lg sm:text-xl"
                />
                <span className="text-sm sm:text-base">Karachi, PK</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            variants={rightAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg shadow-blue-500/20 p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
              Send <span className="text-blue-500">Message</span>
            </h3>

            <motion.form
              variants={formStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              action="https://formspree.io/f/mrbggenw"
              method="POST"
              className="space-y-4 sm:space-y-6"
            >
              <motion.div variants={inputAnim}>
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition text-sm sm:text-base"
                  />
                </div>
              </motion.div>
              <motion.div variants={inputAnim}>
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition text-sm sm:text-base"
                  />
                </div>
              </motion.div>

              <motion.div variants={inputAnim}>
                <div>
                  <label className="block text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Your Message"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition text-sm sm:text-base"
                  ></textarea>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-2.5 sm:py-3 rounded-md font-semibold text-white shadow-md hover:shadow-blue-500/40 transition text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Icons Section */}
      <motion.section
        // initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 50, backgroundColor: "#000" }} // same as gray-950
        viewport={{ once: true }}
        className="flex flex-col items-center py-16 px-6 sm:px-8 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-200"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide">
          Find <span className="text-purple-400">me</span> on
        </h2>

        <motion.div
          className="flex justify-center flex-wrap gap-6"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              href: "https://github.com/Asharkhan468",
              icon: faGithub,
              color: "text-cyan-400",
            },
            {
              href: "https://www.linkedin.com/in/ashar-ullah-khan-644a20374/",
              icon: faLinkedin,
              color: "text-blue-500",
            },
            {
              href: "https://www.instagram.com/dev_ashar_khan/",
              icon: faInstagram,
              color: "text-pink-500",
            },
            {
              href: "mailto:asharullah.khan2468@gmail.com",
              icon: faEnvelope,
              color: "text-purple-400",
            },
          ].map((social, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out shadow-lg"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className={`w-8 h-8 text-gray-300 group-hover:${social.color}`}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default TypingEffectSection;
