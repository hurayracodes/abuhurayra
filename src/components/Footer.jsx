import { Code, ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "GitHub", icon: "💻", href: "https://github.com/hurayracodes" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "Dribbble", icon: "🎨", href: "#" },
];

function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-bold text-blue-400">Abu Hurayra</div>
            <p className="text-white opacity-80">
              Creative developer crafting immersive digital experiences with
              cutting-edge technology and artistic vision.
            </p>
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
          {/* Social Links */}
                      <div className="flex items-start text-white gap-4">
                        {[
                          { icon: Code, href: "#", label: "Code" },
                          { icon: Github, href: "https://github.com/hurayracodes", label: "GitHub" },
                          { icon: Linkedin, href: "#", label: "LinkedIn" },
                        ].map(({ icon: Icon, href, label }) => (
                          <a
                            key={label}
                            href={href}
                            className="p-3 rounded-lg border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                            aria-label={label}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        ))}
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
