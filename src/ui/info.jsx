import { motion } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaReact, FaServer, FaCube } from "react-icons/fa";
import Logo from "../ui/Logo";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const steps = [
  {
    year: "2020",
    title: "Frontend Foundation",
    tech: "HTML, CSS, JavaScript",
    icon: <FaCode />,
  },
  {
    year: "2021",
    title: "React Mastery",
    tech: "React, Redux, Hooks",
    icon: <FaReact />,
  },
  {
    year: "2022",
    title: "Full-Stack Evolution",
    tech: "Node.js, Express, MongoDB",
    icon: <FaServer />,
  },
  {
    year: "2023",
    title: "Modern Web & 3D",
    tech: "Next.js, WebGL, Three.js",
    icon: <FaCube />,
  },
];

function Info() {
  // 3D hover motion tilt
  const handleMouseMove = (e, ref) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 25;
    const rotateX = (y / rect.height - 0.5) * -25;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
  };

  const handleMouseLeave = (ref) => {
    const card = ref.current;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        <div
          style={{
            background:
              "radial-linear(circle at center, rgba(139,92,246,0.25), transparent 70%)",
          }}
          className="container mx-auto max-w-6xl px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30 -z-10"></div>
                <div className="relative transform transition duration-500 hover:scale-105 w-full h-full rounded-full overflow-hidden bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900 shadow-xl z-10">
                  <img
                    className="object-cover w-full h-full"
                    src="assets/2.png"
                    alt="Abu Huraira"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-full shadow-lg animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full shadow-lg animate-bounce" />
                <div className="absolute top-1/2 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full shadow-lg animate-pulse" />
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                I'm a passionate creative developer who bridges the gap between
                imagination and reality. With expertise in modern web
                technologies and 3D design, I create immersive digital
                experiences that captivate and engage users.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                My journey combines technical precision with artistic vision,
                resulting in projects that are not just functional, but truly
                memorable. I believe in pushing the boundaries of what's
                possible on the web.
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
                Skills & Technologies
              </h3>
              <Logo />
            </div>
          </div>

          {/* 🌌 Updated Timeline (3D motion tilt) */}
          <h3 className="text-4xl text-center sm:text-4xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            Journey Timeline
          </h3>
          <div className="relative mt-20 flex flex-wrap justify-center gap-10 perspective-1000">
            <div className="absolute top-[42%] left-0 w-full h-[3px] bg-linear-to-r from-transparent via-cyan-400/40 to-transparent blur-[3px]" />
            {steps.map((step, i) => {
              const ref = useRef(null);
              return (
                <motion.div
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onMouseMove={(e) => handleMouseMove(e, ref)}
                  onMouseLeave={() => handleMouseLeave(ref)}
                  className="relative w-[230px] bg-linear-to-br from-[#15152272] to-[#09090f63] border border-gray-800 rounded-2xl p-5 flex flex-col items-start gap-3 shadow-lg hover:border-cyan-400 hover:shadow-cyan-400/30 group overflow-hidden transition-all duration-300"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(0deg) rotateX(0deg)",
                  }}
                >
                  {/* Back glow lines */}
                  <div className="absolute inset-0 z-0">
                    <div className="absolute top-[25%] left-0 w-full h-1px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent blur-sm" />
                    <div className="absolute top-[50%] left-0 w-full h-1px bg-linear-to-r from-transparent via-blue-500/40 to-transparent blur-[2px]" />
                    <div className="absolute bottom-[25%] left-0 w-full h-1px bg-linear-to-r from-transparent via-purple-500/40 to-transparent blur-sm" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-3xl text-cyan-400 relative z-10"
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-400">{step.tech}</p>
                    <span className="text-xs text-gray-500 mt-2 block">
                      {step.year}
                    </span>
                  </div>

                  {/* Hover pulse line */}
                  <motion.div
                    className="absolute top-1/2 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 blur-[2px]"
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-12">
            {[
              { number: "100+", label: "Projects" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stats, i) => (
              <div key={i} className="text-center p-4 sm:p-8">
                <h3 className="text-3xl sm:text-4xl font-bold bg-linear-to-b from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.number}
                </h3>
                <div className="mb-1 text-white text-base sm:text-lg">
                  {stats.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Info;
