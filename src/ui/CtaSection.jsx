import React from "react";

const CtaSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#21204b] to-[#311f4698] overflow-hidden">
      {/* Star background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: "white",
              opacity: Math.random() * 0.7 + 0.3,
              filter: "blur(0.5px)"
            }}
          />
        ))}
      </div>
      {/* Glass effect panel */}
      <div className="z-10 px-8 py-16 rounded-xl shadow-lg border border-white/20
        bg-white/10 backdrop-blur-lg bg-clip-padding
        flex flex-col items-center max-w-xl w-full">
        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-8 drop-shadow">
          Unlock The Knowledge Buried Inside Your Conversations
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow transition-all duration-200">
            Try Fireflies For Free
            <span className="ml-2">→</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-medium shadow transition-all duration-200">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
