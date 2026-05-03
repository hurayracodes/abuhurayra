import React, { useState, useEffect } from "react";
// import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../ui/Hero";
import Projects from "./Projects";
import  Testimonials  from "./Testimonials";
import Contact from "./Contact";
import FAQ from "./FAQ";
import About from "./About";
import Knowledge from "./Knowledge";
import SkillsSection from "./SkillsSection";

function Home() {

  return (
    <>
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
          {/* Hero section first */}
            {/* <StarsCanvas /> */}
            <Hero />
          {/* Info section */}
            <About />

          {/* Projects section */}
            <Projects />
            <Knowledge/>
            <SkillsSection/>
          {/* Contact section */}
            <FAQ />

          {/* Testimonials section */}
            <Testimonials />

          {/* Contact section */}
            <Contact />

          
        </div>
    </>
  );
}

export default Home;
