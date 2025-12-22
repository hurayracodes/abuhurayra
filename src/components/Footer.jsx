"use client";

import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail, Instagram } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden py-20 px-6 text-white bg-linear-to-br from-black/60 via-black/40 to-purple-700/40"
    >


      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <motion.div
            className="flex items-center gap-2"
          >
            <span className="font-semibold text-lg bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">Abu Hurayra</span>
          </motion.div>
            <p className="text-white/80 leading-relaxed">
              Creative developer crafting immersive digital experiences with
              cutting-edge technology and artistic vision.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4 bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Get In Touch
            </h4>
            <a
              href="mailto:abuhuraira3912l@gmail.com"
              className="flex items-center gap-3 hover:text-blue-400 transition-all"
            >
              <Mail className="w-5 h-5" /> abuhuraira3912l@gmail.com
            </a>
            <div className="flex items-center gap-3 opacity-80">
              <span>🌍</span> Remote / Global
            </div>
            <div className="flex items-center gap-3 text-green-400">
              <span>⚡</span> Available for freelance work
            </div>
          </div>

          {/* Social Icons */}
            <div className="flex flex-col justify-between">
              <p className="text-gray-400 mb-4">
              Let’s stay connected — I post dev notes and design experiments.
            </p>
              <div className="flex md:justify-start items-start gap-4">
            {[
              { icon: Code, href: "https://github.com/hurayracodes/abuhurayra", label: "Code" },
              {
                icon: Instagram,
                href: "https://instagram.com/hurayracodes/",
                label: "instagram",
              },
              {
                icon: Github,
                href: "https://github.com/hurayracodes",
                label: "GitHub",
              },
              { icon: Linkedin, href: "https://www.linkedin.com/in/hurayracodes/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl border border-white/10 hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
            </div>
          
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/10 pt-6 text-center text-white/60 text-sm"
        >
          © {new Date().getFullYear()}{" "}
          <span className="bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent font-medium">Abu Hurayra</span>. All
          rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
