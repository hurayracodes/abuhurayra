import React from "react";

const CtaSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1615438c] to-[#311f4667] overflow-hidden">
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
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
      {/* Glass effect panel */}
      <div
        className="z-10 px-8 py-16 rounded-xl shadow-lg border bg-gradient-to-br from-[#18183bbe] to-[#241238] border-white/20
        flex flex-col items-center max-w-xl w-full"
      >
        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-8 drop-shadow">
          Let's create something amazing together.
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className='text-white shadow-lg shadow-cyan-500/50 text-lg bg-gray-900 border border-gray-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-8 py-3 text-center me-2 mb-2 dark:border-cyan-400  dark:focus:ring-purple-900'>
            abuhuraira3912l@gmail.com
            <span className="ml-2">→</span>
          </button>
          <button
                type="button"
                className='text-white shadow-lg shadow-gray-500/50 text-lg bg-gradient-to-br from-[#21204ba9] to-[#261935a4] border border-gray-500  focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-8 py-3 text-center me-2 mb-2 dark:border-gray-400  dark:focus:ring-purple-900'
              >
                <span className="flex items-center justify-center">
                  Hire Me
                </span>
              </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
