"use client";

import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative p-10 mt-8 ">
      {/* Gradient border top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto ">
        {/* Bottom Bar */}
        <div className="relative">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="text-cyan-400">{"{ hurayraCodes }" }</span>
              . All rights reserved.
            </p>
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="mailto:abuhuraira3912l@gmail.com"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
              >
                Quick Email
              </a>
              <a
                href="/Abuhurara.pdf"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
