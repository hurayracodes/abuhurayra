import React, { useRef } from "react";
import {
  FaUserGraduate,
  FaUniversity,
  FaAward,
  FaCertificate,
  FaBriefcase,
  FaRocket,
  FaLaptopCode,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";
import { MdWork, MdSchool, MdVerified } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";

// 3D Hover Effect Hook
const use3DHover = () => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

// Fade up animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const workItems = [
  {
    title: "Frontend Developer & Team Lead",
    company: "HeapWare & IT Organisation",
    duration: "Aug 2025 – Present",
    description:
      "Led frontend architecture and development using React.js. Built reusable UI components and optimized performance. Mentored junior developers and conducted code reviews.",
    icon: <FaBriefcase />,
    color: "from-blue-500 to-cyan-400",
    bgGlow: "rgba(59,130,246,0.15)",
  },
  {
    title: "Founder & CEO",
    company: "HurayraCodes Technologies",
    duration: "Oct 2024 – Present",
    description:
      "Built an AI‑powered website builder platform. Delivered custom web solutions to clients, focusing on performance and user experience.",
    icon: <FaRocket />,
    color: "from-purple-500 to-pink-400",
    bgGlow: "rgba(168,85,247,0.15)",
  },
];

const educationItems = [
  {
    title: "Full Stack Web Development",
    institute: "deoversity - Best IT Training Institute",
    duration: "2025 – 2025 (6 months)",
    detail: "Studied JavaScript, React, Node.js, Express, and MongoDB.",
    icon: <FaUserGraduate />,
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Intermediate Computer Science",
    institute: "Govt Degree College Ccw Pakistan",
    duration: "2019 – 2021",
    detail: "Focused on software engineering and web technologies.",
    icon: <FaUniversity />,
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "Matriculation (Biology Science)",
    institute: "Govt High School Ccw Pakistan",
    duration: "2015 – 2019",
    detail: "Completed secondary education with a focus on science subjects.",
    icon: <FaAward />,
    color: "from-rose-500 to-red-400",
  },
];

const certificationItems = [
  {
    title: "Modern React Development",
    provider: "Ideoversity - Advanced Web Development",
    duration: "2025",
    detail: "Deep dive into React, Express, and advanced MERN stack patterns.",
    icon: <FaCertificate />,
    color: "from-indigo-500 to-violet-400",
  },
  {
    title: "JavaScript Mastery",
    provider: "Shariyan Coding School & Apna College",
    duration: "2023",
    detail: "Hands‑on projects with Node.js, Express, MongoDB, and React.",
    icon: <FaCertificate />,
    color: "from-sky-500 to-blue-400",
  },
];

const Card = ({ item, type, index }) => {
  const { ref, handleMouseMove, handleMouseLeave } = use3DHover();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={fadeUp}
      custom={index}
      className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
      style={{
        borderImage: "linear-gradient(to bottom, rgba(56,189,248,0.3), transparent) 1",
      }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="relative z-10 flex gap-4">
        {/* Icon with animated gradient */}
        <div
          className={`shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} p-[2px] shadow-lg`}
        >
          <div className="h-full w-full rounded-xl bg-slate-900 flex items-center justify-center text-white text-xl">
            {item.icon}
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
            {item.title}
          </h4>
          {type !== "certification" && (
            <p className="text-sm text-slate-300 mb-2 flex items-center gap-2">
              <FaBuilding className="text-cyan-400 text-xs" />
              {item.institute || item.company}
            </p>
          )}
          {type === "certification" && (
            <p className="text-sm text-slate-300 mb-2">{item.provider}</p>
          )}
          <p className="text-xs text-cyan-400 mb-2 flex items-center gap-1">
            <FaCalendarAlt className="text-xs" />
            {item.duration}
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">{item.detail || item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ item, index }) => {
  const { ref, handleMouseMove, handleMouseLeave } = use3DHover();

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline Line */}
      {index !== workItems.length - 1 && (
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500" />
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${item.color} p-[2px]`}>
                <div className="h-full w-full rounded-xl bg-slate-900 flex items-center justify-center text-white text-lg">
                  {item.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-300">{item.company}</p>
              </div>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {item.duration}
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed mt-3">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const InfoSection = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <MdVerified className="text-cyan-400 text-sm" />
            <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">
              My Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Timeline
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A glimpse into my professional experience, education, and certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Work Experience with Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500" />
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <MdWork className="text-cyan-400" />
                Work Experience
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workItems.map((item, idx) => (
                <TimelineItem key={idx} item={item} index={idx} />
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Education + Certifications */}
          <div>
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-500" />
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <MdSchool className="text-emerald-400" />
                Education
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-500" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-12"
            >
              {educationItems.map((item, idx) => (
                <Card key={idx} item={item} type="education" index={idx} />
              ))}
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500" />
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <FaCertificate className="text-purple-400" />
                Certifications
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certificationItems.map((item, idx) => (
                <Card key={idx} item={item} type="certification" index={idx} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;