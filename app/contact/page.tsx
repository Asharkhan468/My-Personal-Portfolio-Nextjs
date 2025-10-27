"use client";
import React from "react";

function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-200 px-6 py-16">
      <div className="max-w-2xl w-full bg-gray-900 border border-gray-800 rounded-2xl shadow-lg shadow-blue-500/20 p-8 md:p-10 transition-all duration-500">
        <h2 className="text-4xl font-bold text-center mb-8">
          Get in <span className="text-blue-500">Touch</span>
        </h2>

        <form
          action="https://formspree.io/f/mrbggenw"
          method="POST"
          className="space-y-2"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md hover:shadow-blue-500/40 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
