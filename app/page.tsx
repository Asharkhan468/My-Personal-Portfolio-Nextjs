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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const TypingEffectSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-200 overflow-hidden">
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
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold h-10 text-green-400">
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
        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center z-10"
        >
          <Image
            className="rounded-2xl transition-transform hover:scale-105 duration-500 h-[380px] w-[350px] "
            src={avatar}
            width={350}
            height={350}
            alt="Developer"
          />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-hidden">
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
            My journey into programming has been incredible — full of learning
            and creativity. 🚀
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
              href: "https://www.instagram.com/ashar_2347/",
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
