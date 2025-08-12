"use client";

import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactUs() {
  return (
    <footer className="bg-gray-100 text-black font-bebas-neue p-0 pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 px-4 sm:px-8">
        {/* Left Column - Contact Info and Socials */}
        <div className="space-y-4 text-center md:text-left mt-8 md:mt-14">
          <h3 className="text-3xl sm:text-5xl mb-6 tracking-wide">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>
              <a
                href="mailto:support@concisio.ai"
                className="text-lg sm:text-2xl hover:underline break-words"
              >
                support@concisio.ai
              </a>
            </li>
            <li className="flex justify-center md:justify-start space-x-4 text-lg sm:text-xl mt-2">
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <p className="text-base sm:text-xl text-gray-600 mt-8 md:mt-16">
            Concisio simplifies the blog-reading experience using advanced AI.
          </p>
        </div>

        {/* Center Column - Policies */}
        <div className="space-y-4 text-center mt-8 md:mt-14">
          <h3 className="text-3xl sm:text-5xl mb-6 tracking-wide">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>
              <a href="#" className="hover:underline text-lg sm:text-2xl">
                Investor Privacy Notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-lg sm:text-2xl">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-lg sm:text-2xl">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-lg sm:text-2xl">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <form className="space-y-4 px-2 md:px-0">
          <h3 className="text-3xl sm:text-5xl text-center mb-2 tracking-wide">
            Get in Touch
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 sm:p-3 bg-transparent border border-gray-500 text-black placeholder-gray-600 rounded-md outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 sm:p-3 bg-transparent border border-gray-500 text-black placeholder-gray-600 rounded-md outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 sm:p-3 bg-transparent border border-gray-500 text-black placeholder-gray-600 rounded-md outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <hr className="mt-10 border-gray-300" />
      <p className="text-center p-4 md:p-0 mt-4 md:mt-8 text-base sm:text-xl text-gray-600">
        &copy; {new Date().getFullYear()} Concisio. All rights reserved.
      </p>
    </footer>
  );
}
