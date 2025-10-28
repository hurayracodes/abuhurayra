import React from "react";
import { Bot, Sparkles } from "lucide-react";
import projects from "./Gallery";
function Hero() {
  // const img = "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg";
  const img = "assets/4.png";

  return (
    <div className="relative overflow-hidden">
      {/* ⭐ Stars Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-80 animate-starMove"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          ></div>
        ))}
      </div>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Text Section */}
          <div className="space-y-8 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block glow">Abu Hurayra</span>
              <span className="block text-4xl lg:text-5xl mt-4 text-gray-300">
                Hi, I'm Website <br /> 
                <span className="bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent text-3xl md:text-5xl font-semibold mb-8 drop-shadow animate-pulse">
                  Developer
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-400 glow">
              <span className="">I Can Create Modern Websites</span>
            </p>

            {/* Chat Bubble */}
            <div className="bg-gradient-to-br from-[#18183bbe] to-[#241238] border border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transform transition duration-500 p-6 rounded-3xl animate-float-bounce relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 ">
                  <p className="text-gray-300 text-sm mb-3">
                    Welcome aboard! Ready to explore futuristic web experiences?
                  </p>

                  <button className="transform hover:scale-105 flex transition text-white border border-gray-500 rounded-lg px-8 py-3">
                    Scroll to explore more
                    <Sparkles className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Floating Side */}
          <div className="relative animate-float-bounce">
            <div className="rounded-3xl overflow-hidden border border-blue-500/40 bg-gray-900/40 backdrop-blur-md">
              <img src={img} alt="workspace" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Badges */}
            <div className="absolute -top-6 -right-6 bg-gray-900/70 backdrop-blur-sm border border-blue-500/40 px-3 py-1 rounded-full">
              <span className="text-blue-400 font-medium">React</span>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-gray-900/70 backdrop-blur-sm border border-green-500/40 px-3 py-1 rounded-full">
              <span className="text-green-400 font-medium">Node.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animation CSS */}
      <style jsx>{`
        .glow {
          text-shadow: 0 0 12px rgba(96, 165, 250, 0.9),
            0 0 24px rgba(96, 165, 250, 0.6), 0 0 36px rgba(96, 165, 250, 0.4);
        }

        @keyframes floatBounce {
          0%,
          100% {
            transform: translateY(-12px);
          }
          50% {
            transform: translateY(12px);
          }
        }
        .animate-float-bounce {
          animation: floatBounce 4.5s ease-in-out infinite;
        }

        @keyframes smoothFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-smooth-fade-up {
          animation: smoothFadeUp 1.2s ease-out forwards;
        }

        @keyframes starMove {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(200px);
            opacity: 0.4;
          }
        }
        .animate-starMove {
          animation: starMove linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;
