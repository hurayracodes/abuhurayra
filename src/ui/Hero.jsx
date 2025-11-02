import React from "react";
import { Code, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  const img = "/assets/hero-bg.svg";

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-blue-400 font-medium tracking-widest uppercase">
                Full Stack Developer
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 relative">
                  Abu Hurayra
                  <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
                </span>
              </h1>

              <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
                Crafting Digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Experiences
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-lg max-w-lg animate-smooth-fade-up">
              I specialize in building modern, responsive web applications with 
              cutting-edge technologies. Let's bring your digital vision to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 font-medium flex items-center gap-2 shadow-lg shadow-blue-500/25">
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="group px-8 py-4 rounded-xl border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 font-medium flex items-center gap-2 backdrop-blur-sm">
                <Code className="w-4 h-4" />
                <span>View Work</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-lg border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={img}
                alt="Developer workspace"
                className="rounded-3xl w-full object-cover shadow-2xl shadow-blue-500/20 animate-float-bounce"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
            
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-3xl scale-110"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .glow {
          text-shadow: 0 0 20px rgba(96, 165, 250, 0.8),
                       0 0 40px rgba(96, 165, 250, 0.4),
                       0 0 60px rgba(96, 165, 250, 0.2);
        }

        @keyframes floatBounce {
          0%, 100% {
            transform: translateY(-12px);
          }
          50% {
            transform: translateY(12px);
          }
        }
        .animate-float-bounce {
          animation: floatBounce 6s ease-in-out infinite;
        }

        @keyframes smoothFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-smooth-fade-up {
          animation: smoothFadeUp 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Hero;