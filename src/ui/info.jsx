import { motion } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaReact, FaServer, FaCube } from "react-icons/fa";
import Logo from "../ui/Logo";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
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
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        <div
          // style={{
          //   background:
          //     "radial-linear(circle at center, rgba(139,92,246,0.25), transparent 70%)",
          // }}
          className="container mx-auto max-w-6xl px-4"
        >
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative w-48 h-48 transform transition duration-500 hover:scale-105 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-900 via-purple-800 to-pink-900 blur-2xl opacity-30 -z-10"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative w-full h-full rounded-full overflow-hidden bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900 shadow-xl z-10"
                >
                  <img
                    className="object-cover w-full h-full"
                    src="assets/2.png"
                    alt="Abu Huraira"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-full shadow-lg animate-pulse" 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full shadow-lg animate-bounce" 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="absolute top-1/2 -right-6 sm:-right-8 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full shadow-lg animate-pulse" 
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-gray-400 leading-relaxed"
              >
                I'm a passionate creative developer who bridges the gap between
                imagination and reality. With expertise in modern web
                technologies and 3D design, I create immersive digital
                experiences that captivate and engage users.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-gray-400 leading-relaxed"
              >
                My journey combines technical precision with artistic vision,
                resulting in projects that are not just functional, but truly
                memorable. I believe in pushing the boundaries of what's
                possible on the web.
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent"
              >
                Skills & Technologies
              </motion.h3>
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Logo />
              </motion.div>
            </motion.div>
          </div>

          {/* Journey Timeline Header */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl text-center sm:text-4xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent mt-20"
          >
            Journey Timeline
          </motion.h3>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mt-20 flex flex-wrap justify-center gap-10 perspective-1000"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-[42%] left-0 w-full h-[3px] bg-linear-to-r from-transparent via-cyan-400/40 to-transparent blur-[3px]"
            />
            
            {steps.map((step, i) => {
              const ref = useRef(null);
              return (
                <motion.div
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
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
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-12"
          >
            {[
              { number: "100+", label: "Projects" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stats, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-8"
              >
                <h3 className="text-3xl sm:text-4xl font-bold bg-linear-to-b from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.number}
                </h3>
                <div className="mb-1 text-white text-base sm:text-lg">
                  {stats.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Info;