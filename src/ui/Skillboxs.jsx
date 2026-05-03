 "use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {skillsData} from '../ui/Data';



export default function SkillCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              {/* Card */}
              <div
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundImage: "linear-gradient(90deg, rgba(4, 7, 29, 0.95) 0%, rgba(12, 14, 35, 0.95) 100%)",
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    style={{
                      filter: skill.name === "Next.js" || skill.name === "Express.js" || skill.name === "GitHub" || skill.name === "Vercel"
                        ? "brightness(0) invert(1)"
                        : "none"
                    }}
                  />
                </div>
                
                {/* Name - Shows on hover */}
                <div className="mt-2 h-6 overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-cyan-400 font-medium whitespace-nowrap"
                  >
                    {skill.name}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}