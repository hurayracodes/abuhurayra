
// import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../Sections/Hero";
import Projects from "../Sections/Projects";
import  Testimonials  from "../Sections/Testimonials";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import Knowledge from "../Sections/Knowledge";
import Experience from "../Sections/Experience";

function Home({ children }) {

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
          {/* Testimonials section */}
            <Testimonials />

            {children}
            {/* Contact section */}
            <Contact />
        </div>
    </>
  );
}

export default Home;
