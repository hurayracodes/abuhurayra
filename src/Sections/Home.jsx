import React, { useState, useEffect } from "react";
// import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../ui/Hero";
import Projects from "./Projects";
import  Testimonials  from "./Testimonials";
import Contact from "./Contact";
import About from "./About";
import Knowledge from "./Knowledge";
import SkillsSection from "./SkillsSection";
import Experience from "./Experience";

function Home() {

  return (
    <>
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
          <Hero />
          {/* Info section */}
            <About />
            <Experience />
          {/* Projects section */}
            <Projects />
            <Knowledge/>
            <SkillsSection/>
          {/* Testimonials section */}
            <Testimonials />

          {/* Contact section */}
            <Contact />

          
        </div>
    </>
  );
}

export default Home;
