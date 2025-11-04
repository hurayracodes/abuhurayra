import React, { useState, useEffect } from "react";
import { StarsCanvas } from "../ui/StarsCanvas";
import Hero from "../ui/Hero";
import Info from "../ui/info";
import Projects from "./Projects";
import Testimonils from "./Testimonials";
import Footer from "../components/Footer";
import Contact from "./Contact";
import LoadingScreen from "../ui/LoadingScreen";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Smooth transition after loading
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Preload important assets
  useEffect(() => {
    const preloadAssets = [
      "/assets/hero-bg.svg",
      "/assets/2.png"
      // Add other important images here
    ];

    preloadAssets.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
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

          {/* Footer last */}
          <div className="animate-fadeIn delay-1000">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
