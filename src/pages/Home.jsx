import React from "react";
import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../ui/Hero";
import Info from "../ui/info";
import Projects from "./Projects";
import Testimonils from "./Testimonials";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <StarsCanvas />
      <Hero />
      <Info />
      <Projects />
      <Testimonils />
      <Contact />
    </>
  );
}

export default Home;
