// ProjectPage.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import weatherAppImg from "../../public/weather-app.png"
import buySellWebsite from '../../public/buy-sell-website.png'
import quizAppImg from "../../public/quiz-app.png"
import blogApppImg from "../../public/blog-app.png"
import priceOyeImge from '../../public/priceoye-website.png'
import noonWeb from "../../public/noon-website.png"
import passwordGenerator from '../../public/password-generator.png'
import currencyConverter from '../../public/currency-converter.png'
import saltAndPepper from '../../public/salt-and-peper.png'





const projects = [
  {
    title: "Weather App",
    description: 'This responsive weather app provides real-time global weather updates, featuring key data like temperature and wind speed, built using JavaScript and API integration.',
    image: weatherAppImg,
    github: "https://github.com/Asharkhan468/Weather-App",
    liveDemo: "https://myweatherforcastapp.netlify.app/",
  },
  {
    title: "Blogging App - React App",
    description:"This dynamic blogging app, built with React.js and Firebase, allows users to create, manage, and share their blog posts seamlessly, featuring a responsive design for optimal user engagement.",
    image:blogApppImg,
    github:'https://github.com/Asharkhan468/Blogging-App-React-js',
    liveDemo:'https://blogging-app-react-js-henna.vercel.app/'
  },
  
  {
    title: "Interactive Quiz App",
    description:"This interactive quiz app allows users to participate in engaging quizzes with features like progress tracking and completion notifications, all designed for a seamless and responsive user experience.",
    image:quizAppImg,
    github:'https://github.com/Asharkhan468/Quiz-App',
    liveDemo:'https://practice-6def6.web.app/'
  },
  {
    title: "Buy/Sell Corner – Product Listing Platform",
    description: "This platform enables users to easily post and browse products for sale, featuring a responsive design and secure login/logout functionality",
    image: buySellWebsite,
    github: "https://github.com/Asharkhan468/Buy-Sell-Corner-App",
    liveDemo: "https://66c2f051a07baf66b1ff7841--coruscating-malabi-bdfc10.netlify.app/",
  },
  {
    title: "Password Generator - React App",
    description: "A dynamic and responsive password generator built with React, allowing users to create secure and customizable passwords effortlessly.",
    image: passwordGenerator,
    github: "https://github.com/Asharkhan468/React-password-generator",
    liveDemo: "https://react-password-generator-lime.vercel.app/",
  },
  {
    title: "Currency Converter - React App",
    description: "A dynamic currency converter built with React, offering real-time exchange rate calculations and a user-friendly interface for seamless conversions.",
    image: currencyConverter,
    github: "https://github.com/Asharkhan468/React-currency-converter",
    liveDemo: "https://react-project-seven-sandy.vercel.app/",
  },
  {
    title: "PriceOye UI Clone",
    description: "This UI clone webpage showcases a responsive design for displaying mobile phones and electronic devices, built with HTML and CSS to provide a seamless user experience.",
    image: priceOyeImge,
    github: "https://github.com/Asharkhan468/Priceoye-website-clone",
    liveDemo: "https://wwwclonewebpage.netlify.app/",
  },
  {
    title: "Noon UI Clone",
    description: "A pixel-perfect, responsive UI clone of the Noon website created using HTML and CSS, delivering a sleek and modern user interface.",
    image: noonWeb,
    github: "https://github.com/Asharkhan468/Noon-website-assignment",
    liveDemo: "https://asharkhan468.github.io/Noon-website-assignment/",
  },
  {
    title: "Salt and Pepper - Restaurant Website UI",
    description: " A visually appealing restaurant website UI for Salt and Pepper, built using HTML and CSS to deliver a modern and clean design.",
    image: saltAndPepper,
    github: "https://github.com/Asharkhan468/Salt-and-pepper-website",
    liveDemo: "https://asharkhan468.github.io/Salt-and-pepper-website/",
  },
  
  // Add more projects as needed
];

const ProjectPage = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Recent <span className='text-blue-600'>Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-transform mt-5"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
                width={400} height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-md font-semibold text-gray-800 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 px-4 py-2 rounded-md inline-flex items-center hover:bg-gray-900 transition"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </Link>
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 px-4 py-2 rounded-md inline-flex items-center hover:bg-blue-700 transition"
                  >
                    <FiExternalLink className="mr-2" />
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
