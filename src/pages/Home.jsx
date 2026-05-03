import React, { useState, useEffect } from "react";
// import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../ui/Hero";
import InfoSection from "../ui/InfoSection";
import Projects from "./Projects";
import Testimonils from "./Testimonials";
import Contact from "./Contact";
import FAQ from "./FAQ";

function Home() {

  return (
    <>
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
          {/* Hero section first */}
          <div className="animate-fadeIn delay-100">
            {/* <StarsCanvas /> */}
            <Hero />
          </div>

          {/* Info section */}
          <div className="animate-fadeIn delay-300">
            <InfoSection />
          </div>

          {/* Projects section */}
          <div className="animate-fadeIn delay-500">
            <Projects />
          </div>
          {/* Contact section */}
          <div className="animate-fadeIn delay-900">
            <FAQ />
          </div>

          {/* Testimonials section */}
          <div className="animate-fadeIn delay-700">
            <Testimonils />
          </div>

          {/* Contact section */}
          <div className="animate-fadeIn delay-900">
            <Contact />
          </div>

          
        </div>
    </>
  );
}

export default Home;
