"use client";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-black  rounded-2xl shadow-lg h-120 mx-auto mt-10 mb-20 align-middle justify-center">
      {/* Left: Profile image and title */}
      <div className="flex flex-col items-center w-full md:w-1/3">
        <img
          src="/aboutUs.png"
          alt="Your Name"
          className="w-70 h-100 rounded-lg object-cover border-4 border-gray-500"
        />
        <h2 className="text-xl  text-gray-900 dark:text-white mt-4">
          Muhammad Umar
        </h2>
        <p className="text-gray-600 font-medium text-sm">Founder</p>
      </div>

      {/* Right: Social links and description */}
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Social Links */}
        <div className="flex gap-4 text-xl text-gray-600 mb-4 justify-center align-middle">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-green-800 transition duration-200" />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-green-800 transition duration-200" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-green-800 transition duration-200" />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          Hi! I’m Muhammad Umar, the founder of this platform. I&aposm
          passionate about building meaningful digital experiences and using
          technology to solve real-world problems. With a background in Computer
          Science, I’ve always believed in the power of innovation, creativity,
          and continuous learning. Whether it’s writing code, exploring new
          ideas, or leading projects, I’m driven by a desire to create something
          impactful.
          <br />
          This space is where vision meets execution — and I’m excited to have
          you here!
        </p>
        <div className="flex flex-row items-center justify-center mt-6">
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-600 hover:text-white transition duration-200">
            <a href="https://google.com" className="inline-block  text-center">
              Visit My Website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
