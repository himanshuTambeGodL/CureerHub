import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full bg-[#0d0d0f]/90 text-gray-300 border-t border-gray-700 backdrop-blur-md shadow-md mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm">
        
        {/* 🔹 Left - Brand or Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400">
          <span className="text-blue-400 font-semibold text-base">CareerHub</span>
          <span className="hidden sm:block">|</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>

        {/* 🔹 Middle - Links */}
        <div className="flex gap-6 mt-3 sm:mt-0">
          <a
            href="#"
            className="hover:text-blue-400 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Privacy
          </a>
        </div>

        {/* 🔹 Right - Social Icons */}
        <div className="flex gap-4 mt-3 sm:mt-0 text-gray-400">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
