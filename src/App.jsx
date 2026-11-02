import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Testimonials from "./Sections/Testimonials";

function ScrollToTop() {
  const { hash, pathname, search } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          target.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "start",
          });
          return;
        }
      }
      window.scrollTo(0, 0);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname, search]);

  return null;
}

export default function App() {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<div id="home"><Home /></div>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonils" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={null} />
      </Routes>
      <Footer />
    </>
  );
}
