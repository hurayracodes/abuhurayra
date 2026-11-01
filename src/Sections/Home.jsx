
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
        <div className="min-h-screen font-sans transition-colors duration-300">
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
