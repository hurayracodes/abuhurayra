import React, { useRef } from "react";
import {
  FaUserGraduate,
  FaUniversity,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

// Journey timeline style ka common hover helper
const use3DHover = () => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 18;
    const rotateX = (y / rect.height - 0.5) * -18;
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return { ref, handleMouseMove, handleMouseLeave };
};

const workItems = [
  {
    title: "Frontend Developer & Team Lead",
    company: "HeapWare & IT Organisation",
    duration: "Aug 2025 – Present",
    description:
      "Led frontend architecture and development using React.js. Built reusable UI components and optimized performance. Mentored junior developers and conducted code reviews.",
    iconBg: "💻",
  },
  {
    title: "Founder & CEO",
    company: "HurayraCodes Technologies",
    duration: "Oct 2024 – Present",
    description:
      "Built an AI‑powered website builder platform. Delivered custom web solutions to clients, focusing on performance and user experience.",
    iconBg: "🚀",
  },
];

const educationItems = [
  {
    title: "Full Stack Web Development",
    institute: "deoversity - Best IT Training Institute",
    duration: "2025 – 2025 (6 months)",
    detail: "Studied JavaScript, React, Node.js, Express, and MongoDB.",
    icon: <FaUserGraduate />,
  },
  {
    title: "Intermediate Computer Science",
    institute: "Govt Degree Collage Ccw Pakistan",
    duration: "2019 – 2021",
    detail:
      "Focused on software engineering and web technologies.",
    icon: <FaUniversity />,
  },
  
  {
    title: "Matriculation (Biology Science)",
    institute: "Govt High School Ccw Pakistan",
    duration: "2015 – 2019",
    detail: "Completed secondary education with a focus on science subjects.",
    icon: <FaAward />,
  },
];

const certificationItems = [
  {
    title: "Modern React Development",
    provider: "Ideoversity - Advanced Web Development",
    duration: "2025",
    detail: "Deep dive into React, Express, and advanced Mern stack patterns.",
    icon: <FaCertificate />,
  },
  {
    title: "JavaScript",
    provider: "Online Program ( Shariyan Coding School & Apna College )",
    duration: "2023",
    detail: "Hands‑on projects with Node.js, Express, MongoDB, and React.",
    icon: <FaCertificate />,
  },
];

const InfoSection = () => {
  return (
    <section className="w-full text-slate-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-bold bg-linear-to-b from-blue-400 to-cyan-200 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        {/* Top Heading Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-sky-400">
            Work Experience
          </h2>
        </div>
        

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* LEFT: Work Experience timeline */}
          <div className="relative">
            {/* vertical line full height */}
            <div className="absolute left-10 top-8 bottom-8 bg-sky-500/40 w-[2px] pointer-events-none" />

            <div className="space-y-10">
              {workItems.map((item, idx) => {
                const { ref, handleMouseMove, handleMouseLeave } = use3DHover();
                return (
                  <div key={idx} className="relative flex gap-6">
                    {/* icon + outer circle */}
                    <div className="flex flex-col items-center">
                      <div className="h-16 w-16 rounded-full border-4px border-sky-500 bg-slate-950 flex items-center justify-center z-10 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                        <span className="text-2xl">{item.iconBg}</span>
                      </div>
                    </div>

                    {/* main card - same hover feeling as Journey Timeline */}
                    <div className="flex-1">
                      <div
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="group/card relative bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-cyan-400 hover:shadow-cyan-400/30 hover:shadow-2xl overflow-hidden transition-all duration-300"
                      >
                        {/* shimmer */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 z-0" />

                        <div className="relative z-10">
                          <p className="text-xs uppercase tracking-wide text-sky-400 mb-2">
                            {item.duration}
                          </p>
                          <h4 className="text-2xl font-semibold text-slate-50 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-300 mb-3">
                            {item.company}
                          </p>
                          <p className="text-sm text-slate-200 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Education + Certifications */}
          <div className="space-y-8">
            {/* Education heading */}
            <h3 className="text-2xl font-semibold text-sky-400">
              Education
            </h3>

            <div className="space-y-4">
              {educationItems.map((item, idx) => {
                const { ref, handleMouseMove, handleMouseLeave } = use3DHover();
                return (
                  <div
                    key={idx}
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group/card relative bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-lg hover:border-cyan-400 hover:shadow-cyan-400/30 hover:shadow-2xl overflow-hidden transition-all duration-300 flex gap-4"
                  >
                    {/* shimmer */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 z-0" />

                    <div className="relative z-10 shrink-0 h-11 w-11 rounded-xl bg-sky-500/15 border border-sky-500/40 flex items-center justify-center text-sky-300 text-xl">
                      {item.icon}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-sm font-semibold text-slate-50">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300">
                        {item.institute}
                      </p>
                      <p className="text-xs text-sky-300 mt-1">
                        {item.duration}
                      </p>
                      <p className="text-xs text-slate-200 mt-2">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-semibold text-sky-400 mt-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certificationItems.map((item, idx) => {
                const { ref, handleMouseMove, handleMouseLeave } = use3DHover();
                return (
                  <div
                    key={idx}
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group/card relative bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-lg hover:border-cyan-400 hover:shadow-cyan-400/30 hover:shadow-2xl overflow-hidden transition-all duration-300 flex gap-4"
                  >
                    {/* shimmer */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 z-0" />

                    <div className="relative z-10 shrink-0 h-11 w-11 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-300 text-xl">
                      {item.icon}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-sm font-semibold text-slate-50">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300">
                        {item.provider}
                      </p>
                      <p className="text-xs text-emerald-300 mt-1">
                        {item.duration}
                      </p>
                      <p className="text-xs text-slate-200 mt-2">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
