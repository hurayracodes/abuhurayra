"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skiper58 } from "../ui/TextRollNavigation.jsx";
import { LucidePanelRightClose, X } from "lucide-react";

const smoothScrollTo = (href) => {
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
    closeMenu();
  };

  return (
    <>
      {/* Menu Button - Always visible */}
      <div className="fixed top-5 right-5 z-100">
        <button
          onClick={toggleMenu}
          className="group relative flex h-7 w-7 items-center justify-between rounded-full bg-transparent transition-all duration-300 border-transparent cursor-pointer"
          aria-label="Menu"
          style={{ cursor: 'pointer' }}
        >
          <div className="relative h-9 w-9 pointer-events-none">
            
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-white rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Higher z-index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-200 bg-black/50 backdrop-blur-sm"
              style={{ cursor: 'pointer' }}
            />
            
            {/* Menu Panel - Highest z-index */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-201 h-full w-full max-w-md bg-linear-to-tr from-cyan-950 to-slate-900 shadow-2xl overflow-y-auto"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Close button inside menu */}
              <button
                onClick={closeMenu}
                className="absolute top-5 right-5 z-202 flex h-10 w-10 items-center justify-center rounded-full shadow-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                aria-label="Close"
                style={{ cursor: 'pointer' }}
              >
               <X className="h-7 w-7 text-gray-800 pointer-events-none"/>
              </button>

              {/* Navigation Links */}
              <div className="flex h-full items-center justify-center py-20 px-4">
                <Skiper58 onLinkClick={handleLinkClick} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}