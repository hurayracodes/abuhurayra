import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative">
      {/* 🌟 Twinkling Stars Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-full h-full bg-black"></div>

        {/* Stars Layer */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="text-center flex flex-col items-center relative justify-center px-6">
          <h1 className="text-3xl md:text-7xl lg:text-8xl text-white font-bold mb-6">
            <span className="font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Hi, I'm Hurara
            </span>
            <span className="block text-foreground text-glow">
              Web Developer
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-white mb-8 font-light tracking-wide">
            I do Code &{" "}
            <span className="font-bold text-blue-400 ml-2">Chill</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
            <button
                type="button"
                className='text-white shadow-lg shadow-cyan-500/50 text-lg bg-gray-900 border border-gray-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-8 py-3 text-center me-2 mb-2 dark:border-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-900'
              >
                <span className="flex items-center justify-center">
                  Hire Me
                </span>
              </button>

              <button
                type="button"
                className='text-white shadow-lg shadow-cyan-500/50 text-lg bg-gray-900 border border-gray-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-8 py-3 text-center me-2 mb-2 dark:border-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-900'
              >
                <span className="flex items-center justify-center">
                  Download CV
                </span>
              </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 flex justify-center transform transition duration-500 hover:scale-110">
            <div className="w-7 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-2 h-2 animate-bounce bg-white/80 rounded-full mt-1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
