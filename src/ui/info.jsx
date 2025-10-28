import React from "react";

const skills = [
  { name: "HTML5 🌐", level: 95, color: "text-cyan-400", category: "Frontend" },
  { name: "CSS3 🎨", level: 95, color: "text-cyan-400", category: "Frontend" },
  {
    name: "JavaScript ⚡",
    level: 90,
    color: "text-cyan-400",
    category: "Frontend",
  },
  { name: "React ⚛️", level: 92, color: "text-cyan-400", category: "Frontend" },
  {
    name: "TailwindCSS ✨",
    level: 95,
    color: "text-cyan-400",
    category: "Liborery",
  },
  {
    name: "Bootstrap 🚀",
    level: 90,
    color: "text-cyan-400",
    category: "Liborery",
  },
  {
    name: "TypeScript 🌙",
    level: 60,
    color: "text-cyan-400",
    category: "Frontend",
  },
  { name: "Node.js ", level: 85, color: "text-cyan-400", category: "Backend" },
  {
    name: "Express.js",
    level: 35,
    color: "text-cyan-400",
    category: "Backend",
  },
  { name: "MongoDB", level: 30, color: "text-cyan-400", category: "Database" },
  {
    name: "WebGL/Three.js",
    level: 25,
    color: "text-cyan-400",
    category: "3D/VR",
  },
];

function Info() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* 🌟 Static Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div
          style={{
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.25), transparent 70%)",
          }}
          className="container mx-auto max-w-6xl px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                {/* Glow behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30 -z-10"></div>

                {/* Image */}
                <div className="relative transform transition duration-500 hover:scale-105 w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 shadow-xl z-10">
                  <img
                    className="object-cover w-full h-full"
                    src="assets/2.png"
                    alt="Abu Huraira"
                  />
                </div>

                {/* Floating Orbs */}
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-full shadow-lg animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full shadow-lg animate-bounce" />
                <div className="absolute top-1/2 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full shadow-lg animate-pulse" />
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-base sm:text-lg text-white">
                I'm a passionate creative developer who bridges the gap between
                imagination and reality. With expertise in modern web
                technologies and 3D design, I create immersive digital
                experiences that captivate and engage users.
              </p>
              <p className="text-base sm:text-lg text-white">
                My journey combines technical precision with artistic vision,
                resulting in projects that are not just functional, but truly
                memorable. I believe in pushing the boundaries of what's
                possible on the web.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12 sm:mt-16 flex flex-col gap-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Skills & Technologies
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="relative group p-6 rounded-2xl bg-gradient-to-br from-[#290b3a43] to-[#38136233] border border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transform duration-500 transition-all hover:scale-105 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div
                      className="absolute inset-0 blur-xl opacity-25"
                      style={{ backgroundColor: `rgba(255,255,255,0.25)` }}
                    ></div>
                  </div>

                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <h3 className={`text-lg font-bold ${skill.color}`}>
                      {skill.name}
                    </h3>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/60">
                      {skill.category}
                    </span>
                  </div>

                  {/* Level Indicator */}
                  <div className="space-y-2 relative z-10">
                    <div className="flex justify-between text-sm text-white/70">
                      <span>Mastery</span>
                      <span className={`${skill.color} font-semibold`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/20 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${skill.color.replace(
                          "text",
                          "bg"
                        )}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-12">
            {[
              { number: "100+", label: "Projects" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stats, i) => (
              <div key={i} className="text-center p-4 sm:p-8">
                <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.number}
                </h3>
                <div className="mb-1 text-white text-base sm:text-lg">
                  {stats.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
