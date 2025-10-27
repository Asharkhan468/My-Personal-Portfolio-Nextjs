"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import weatherAppImg from "../../public/weather-app.png";
import buySellWebsite from "../../public/buy-sell-website.png";
import quizAppImg from "../../public/quiz-app.png";
import blogApppImg from "../../public/blog-app.png";
import priceOyeImge from "../../public/priceoye-website.png";
import noonWeb from "../../public/noon-website.png";
import passwordGenerator from "../../public/password-generator.png";
import currencyConverter from "../../public/currency-converter.png";
import saltAndPepper from "../../public/salt-and-peper.png";
import ExpenseTracker from "../../public/Expense Tracker SS.jpg";
import job2do from "../../public/MYJOB2DO SS.jpg";
import shinyService from "../../public/Claening.png";
import NextBiz from "../../public/NextBitz.png";

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

const ProjectPage = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My Recent <span className="text-blue-500">Projects</span>
        </h2>

        {/* Web Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-500"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
                width={400}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-gray-800 rounded-md text-sm font-medium text-white flex items-center gap-2 hover:bg-gray-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </Link>
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white flex items-center gap-2 hover:bg-blue-700 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Projects */}

        <h2 className="text-4xl md:text-5xl font-bold text-center mt-24 mb-16">
          Mobile <span className="text-blue-500">Applications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Mobile preview container */}
              <div className="flex justify-center items-center bg-gray-950 py-6">
                <div className="relative w-48 h-96 rounded-3xl border-4 border-gray-800 shadow-inner overflow-hidden bg-black">
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
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-3 py-2 bg-gray-800 rounded-md text-sm font-medium text-white flex items-center gap-2 hover:bg-gray-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </Link>
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="px-3 py-2 bg-blue-600 rounded-md text-sm font-medium text-white flex items-center gap-2 hover:bg-blue-700 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
