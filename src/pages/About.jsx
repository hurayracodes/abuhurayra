import React, { useRef, useEffect, useState } from "react";
import { FaUserGraduate, FaUniversity, FaAward, FaCertificate } from "react-icons/fa";

// Journey timeline hover effect helper
const use3DHover = () => {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (y / rect.height - 0.5) * -12;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.01)`;
  };
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };
  return { ref, handleMouseMove, handleMouseLeave };
};

// Data arrays (Work, Education etc) wahi rahengi jo pehle thin...

const About = () => { // Maine naam change kar diya taaki confusion na ho
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Jab section screen ke beech mein aaye tab progress start ho
      const viewportHeight = window.innerHeight;
      const progress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bioText = "I’m Abu Hurayra, a passionate Software Developer and Founder of hurayraCodes Technologies. I specialize in building fast, scalable, and secure web applications using the MERN stack with over 2+ years of experience in creating modern digital products.";

  return (
    <section id="about" className="w-full text-slate-100 py-24 px-4 md:px-16 bg-[#0a0a0a]" ref={containerRef}>
      {/* --- NEW SCROLL REVEAL SECTION --- */}
      <div className="mx-auto max-w-4xl mb-32">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
             <span className="text-[#8aff4c] text-lg">✦</span>
             <span className="text-[#8aff4c] font-mono text-xs tracking-[0.3em] uppercase font-bold">About Me</span>
          </div>
          
          <p 
            className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff ${scrollProgress * 150}%, #2d2d2d ${scrollProgress * 150 + 20}%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              transition: "background-position 0.1s ease-out"
            }}
          >
            {bioText}
          </p>
        </div>
      </div>

      {/* --- EXISTING WORK & EDUCATION GRID --- */}
      <div className="mx-auto max-w-6xl">
         {/* Yahan aapka baqi ka sara code (Work Experience grid, etc.) aayega */}
         <h2 className="text-3xl font-bold mb-12 text-sky-400">Work Experience</h2>
         {/* ... (Existing map logic) ... */}
      </div>
    </section>
  );
};

export default About;