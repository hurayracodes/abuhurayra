"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, Linkedin, Github, Youtube, Sun, Moon } from "lucide-react";
import { useTheme } from "../../ui/Theme.jsx";

const DOCK_LINKS = [
  { label: "Home",     href: "#home", icon: Home,     internal: true },
  { label: "Blog",     href: "#blog", icon: BookOpen, internal: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hurayracodes",   icon: Linkedin },
  { label: "GitHub",   href: "https://github.com/hurayracodes",       icon: Github },
  { label: "YouTube",  href: "https://www.youtube.com/@jslogicbyte", icon: Youtube },
];

const smoothScrollTo = (href) => {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

function DockItem({ item }) {
  const Icon = item.icon;
  const external = !item.internal;
  return (
    <a
      href={item.href}
      aria-label={item.label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : { onClick: (e) => { e.preventDefault(); smoothScrollTo(item.href); } })}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full
                 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:h-12 sm:w-12"
    >
      <Icon className="h-5 w-5" />
      <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-white px-2 py-1
                       text-xs text-slate-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {item.label}
      </span>
    </a>
  );
}

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Bottom floating dock */}
      <motion.nav
        aria-label="Quick links"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 160, delay: 0.3 }}
        className="fixed left-1/2 z-90 -translate-x-1/2"
        style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)" }}
      >
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/70 px-2 py-1.5
                        shadow-xl shadow-black/20 backdrop-blur-xl sm:gap-2 sm:px-3">
          {DOCK_LINKS.map((item) => (
            <DockItem key={item.label} item={item} />
          ))}

          <span className="mx-1 h-6 w-px bg-white/20" aria-hidden="true" />

          {/* Dark / Light button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="relative flex h-11 w-11 items-center justify-center rounded-full cursor-pointer
                       text-slate-200 transition hover:bg-white/15 sm:h-12 sm:w-12"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>
    </>
  );
}