import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "GitHub", icon: "💻", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "Dribbble", icon: "🎨", href: "#" },
];
function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* my brand */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-blue-400">Abu Hurayra</div>
            <p className="text-white">
              Creative developer crafting immersive digital experiences with
              cutting-edge technology and artistic vision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((socialId) => {
                return (
                  <a
                    className="w-10 h-10 bg-gray-900 rounded-lg glass flex items-center justify-center hover:glow-hover transition-all duration-300 group"
                    href={socialId.href}
                  >
                    {socialId.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 p-3 flex flex-col justify-center items-start">
              <h4 className="text-blue-400 font-bold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Home</Link>
          <Link to="/about" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>About</Link>
          <Link to="/projects" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Projects</Link>
          <Link to="/testimonils" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Testimonials</Link>
          <Link to="/contact" className='relative text-white font-semibold hover:text-accent transition-colors duration-300'>Contact</Link>
            </nav>
          </div>

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
      </div>
    </footer>
  );
}

export default Footer;
