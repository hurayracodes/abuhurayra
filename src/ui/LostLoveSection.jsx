import React, { useEffect, useRef } from "react";

const LostLoveSection = () => {
  const starsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      starsRef.current.forEach((star, i) => {
        const speed = (i % 5) / 10;
        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;
        if (star) star.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="cta"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >


      {/* Floating 2D Stars (parallax layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            ref={(el) => (starsRef.current[i] = el)}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: "white",
              opacity: Math.random() * 0.7 + 0.3,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Glowing Heart & Card */}
      <div className="absolute w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute w-24 h-24 bg-fuchsia-600/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="z-10 max-w-xl text-center p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] transition-all duration-700">
        <p className="text-lg text-gray-300 mb-8 tracking-wide leading-relaxed">
          “Some memories don’t fade — they evolve into light.” <br />
          A tribute to what was, and what still echoes in the code of time.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:abuhuraira3912l@gmail.com">
            <button className="text-white border border-pink-500/50 bg-pink-600/10 hover:bg-pink-600/30 rounded-lg px-8 py-3 text-lg shadow-lg transition-all duration-300 hover:scale-105">
              Send a Signal 💌
            </button>
          </a>
          <a
            href="https://www.fiverr.com/s/YR1qWWK"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-white border border-cyan-500/40 bg-cyan-600/10 hover:bg-cyan-600/30 rounded-lg px-8 py-3 text-lg shadow-lg transition-all duration-300 hover:scale-105">
              Enter the Future 🚀
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LostLoveSection;
