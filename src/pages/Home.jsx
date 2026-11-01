
// import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../ui/Hero";
import Projects from "../Sections/Projects";
import  Testimonials  from "../Sections/Testimonials";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import Knowledge from "../Sections/Knowledge";
import SkillsSection from "../Sections/SkillsSection";
import Experience from "../Sections/Experience";

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
