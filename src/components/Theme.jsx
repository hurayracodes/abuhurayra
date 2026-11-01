"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { KEY, getInitialTheme, applyTheme } from "../ui/theme-utils.js";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => { applyTheme(theme); }, [theme]);

  const toggleTheme = useCallback(
    (event) => {
      const next = theme === "dark" ? "light" : "dark";
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Animation support nahi ya user ne motion band rakhi hai: seedha change
      if (!document.startViewTransition || reduceMotion) {
        setTheme(next);
        return;
      }

      // Animation button ke center se shuru hogi
      const rect = event?.currentTarget?.getBoundingClientRect();
      const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
      const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        flushSync(() => setTheme(next));
        applyTheme(next);
      });

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 650,
              easing: "cubic-bezier(0.65, 0, 0.35, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {});
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
};