"use client";

import React from 'react';
import MultiOrbitSemiCircle from '../ui/Skillboxs';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4"
    >

      <div className="max-w-6xl mx-auto">
        <MultiOrbitSemiCircle />
      </div>
    </motion.section>
  );
}
