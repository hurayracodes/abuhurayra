import React, { useState, useEffect } from "react";
import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../ui/Hero";
import Info from "../ui/info";
import Projects from "./Projects";
import Testimonils from "./Testimonials";
import Contact from "./Contact";

function Home() {

  return (
    <>
        <div
          className={'transition-opacity duration-700 ease-in-out'}
        >
          {/* Hero section first */}
          <div className="animate-fadeIn delay-100">
            <StarsCanvas />
            <Hero />
          </div>

          {/* Info section */}
          <div className="animate-fadeIn delay-300">
            <Info />
          </div>

          {/* Projects section */}
          <div className="animate-fadeIn delay-500">
            <Projects />
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
