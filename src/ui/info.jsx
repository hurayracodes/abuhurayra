import React from "react";

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Bootstrap", icon: "🎯" },
  { name: "TailwindCss", icon: "✨" },
];

function Info() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
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
            width: "900px",
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.25), transparent 70%)",
          }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
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

            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-5xl w-full font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-white">
                I'm a passionate creative developer who bridges the gap between
                imagination and reality. With expertise in modern web
                technologies and 3D design, I create immersive digital
                experiences that captivate and engage users.
              </p>
              <p className="text-lg text-white">
                My journey combines technical precision with artistic vision,
                resulting in projects that are not just functional, but truly
                memorable. I believe in pushing the boundaries of what's
                possible on the web.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-12 p-3 sm:mt-16 flex flex-col gap-8 text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-32 h-28 transform transition duration-500 hover:scale-105 bg-gradient-to-br from-[#21204ba9] to-[#261935a4] 
                  hover:bg-gradient-to-br hover:from-cyan-700 hover:to-purple-800 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                  focus:ring-4 focus:outline-none focus:ring-blue-300 text-white rounded-2xl inline-flex items-center justify-center px-4 py-2.5"
                >
                  <div className="text-center">
                    <div className="mb-1 text-2xl">{skill.icon}</div>
                    <div className="-mt-1 font-sans text-base font-semibold">
                      {skill.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4">
            {[
              { number: "100+", label: "Projects" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stats, i) => (
              <div key={i} className="text-center p-8">
                <h3 className="text-4xl font-bold bg-gradient-to-b from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.number}
                </h3>
                <div className="mb-1 text-white text-base">{stats.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
