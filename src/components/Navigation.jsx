import { Sparkles } from "lucide-react";
import { useState } from "react";

const MenuIcon = ({ open }) => (
  <div className="flex flex-col gap-1 transition-all duration-300">
    <span className={`h-[2px] w-7 relative right-3 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : ''}`}></span>
    <span className={`h-[2px] w-7 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
  </div>
);

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    // { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonils", href: "#testimonils" },
    { label: "Contact", href: "#contact" },
  ];

  const newBtn = [{
   label: "Let’s talk", href: "#cta"

  }]
  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full px-6 py-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          {/* Mobile Menu Toggle */}
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon open={isOpen} />
          </button>

        </div>
      </header>

      {/* FULL SCREEN OVERLAY MENU (Mobile) */}
      <div
        className={`fixed inset-0 z-[999] bg-gradient-to-br from-[#18183bbe] to-[#241238] border-white/20 backdrop-blur-xl flex flex-col justify-center items-center gap-10 text-white text-4xl transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6  right-6 text-white text-3xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="hover:text-orange-300 transition tracking-wide"
          >
            {item.label}
          </button>
          
        ))}
         {newBtn.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="text-xl border border-white/30 px-6 py-3 rounded-full hover:border-white transition"
          >
            {item.label}
          </button>
          
        ))}
        
      </div>
    </>
  );
}

export default Navigation;
