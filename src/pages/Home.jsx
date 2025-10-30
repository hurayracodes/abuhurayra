import React from "react";
import Hero from "../ui/Hero";
import Info from "../ui/info";
import Projects from "./Projects";
import Testimonils from "./Testimonials";
import Contact from "./Contact";
import LostLoveSection from "../ui/LostLoveSection";

function Home() {
  return (
    <>
    <Hero/>
    <Info/>
    <Projects/>
    <Testimonils/>
    <Contact/>
    <LostLoveSection/>
    </>
  );
}

export default Home;
