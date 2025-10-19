import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "GitHub", icon: "💻", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "Dribbble", icon: "🎨", href: "#" },
];

function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* 🌟 Stars background (same technique as Testimonials: many small absolutely positioned dots) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const size = Math.random() * 2 + 1; // 1px - 3px
          const opacity = 0.2 + Math.random() * 0.6; // 0.2 - 0.8
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                filter: "blur(0.3px)",
              }}
            />
          );
        })}
      </div>

      {/* Footer Content (on top of stars) */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-blue-400">Abu Hurayra</div>
            <p className="text-white opacity-80">
              Creative developer crafting immersive digital experiences with
              cutting-edge technology and artistic vision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((socialId, index) => (
                <a
                  key={index}
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                  href={socialId.href}
                >
                  {socialId.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6 p-3 flex flex-col justify-center items-start">
            <h4 className="text-blue-400 font-bold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="relative text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="relative text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                About
              </Link>
              <Link to="/projects" className="relative text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                Projects
              </Link>
              <Link to="/testimonials" className="relative text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                Testimonials
              </Link>
              <Link to="/contact" className="relative text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg mb-4">Get In Touch</h4>
            <a className="text-white" href="mailto:hello@abuhuraira3912l@gmail.com">
              <span className="flex items-center">
                <span className="mr-3 text-xl">✉️</span>
                abuhuraira3912l@gmail.com
              </span>
            </a>
            <div className="text-white">
              <span className="flex items-center">
                <span className="mr-3 text-xl">🌍</span>
                Remote / Global
              </span>
            </div>
            <div className="text-white">
              <span className="flex items-center">
                <span className="mr-3 text-xl">⚡</span>
                Available for projects
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Abu Hurayra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
