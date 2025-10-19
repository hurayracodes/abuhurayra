import React from "react";
import Hero from "../ui/Hero";
import Info from "../ui/info";
import Projects from "./Projects";
import Testimonils from "./Testimonials";
import Contact from "./Contact";
import CtaSection from "../ui/CtaSection";

function Home() {
  return (
    <>
    <Hero/>
    <Info/>
    <Projects/>
    <Testimonils/>
    <Contact/>
    <CtaSection/>
    </>
  );
}

export default Home;
