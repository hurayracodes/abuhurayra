import { useState, useEffect } from "react";
import { X, Menu, Home, User, FolderGit2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "projects", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { label: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { label: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { label: "Testimonials", href: "#testimonials", icon: <MessageCircle className="w-4 h-4" /> },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.replaceState(null, null, href);
    }
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 w-full px-6 md:px-12 py-4 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 whileHover={{ scale: 1.05 }} className="font-semibold text-xl text-white">{corverBarkect2}<span className="bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">Abu Hurayra</span>{corverBarkect1}</h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-cyan-400 bg-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
            
            <motion.button
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 px-5 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 text-sm font-medium hover:bg-cyan-500/10 transition-all duration-200"
            >
              Let's talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {!isOpen ? (
              <Menu className="w-5 h-5 text-white" />
            ) : (
              <X className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" />
            
            {/* Menu Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
              <div className="w-full space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-cyan-400">{item.icon}</span>
                    <span className="text-white text-lg font-medium">{item.label}</span>
                  </motion.button>
                ))}
                
                <motion.button
                  onClick={() => scrollToSection("#contact")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.05 }}
                  className="w-full mt-4 px-4 py-4 rounded-xl border border-cyan-500/50 text-cyan-400 text-lg font-medium text-center hover:bg-cyan-500/10 transition-colors"
                >
                  Let's talk
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;