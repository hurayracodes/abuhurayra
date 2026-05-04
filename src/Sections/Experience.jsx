import { useState } from "react";
import { Button } from "../ui/MovingBorder";
import TitleHeader from "../ui/TitleHeader";

// ── Experience data ───────────────────────────────────────────────────────────

const experiences = [
  {
    id: 1,
    title: "Freelancer",
    company: "Fiverr",
    type: "Freelance",
    duration: "2025 – Present",
    icon: "🌐",
    tags: ["Web Dev", "Full Stack", "Remote"],
    description:
      "Currently offering freelance web development services on Fiverr, building modern websites and web applications for clients globally.",
    skills: ["React", "Node.js", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Full Stack Web Dev Intern",
    company: "NavTCC & DevelopersHub Corp",
    type: "Internship (Offered)",
    duration: "2025",
    icon: "💻",
    tags: ["FSWD", "Internship", "Lahore"],
    description:
      "Received internship offer from NavTCC and DevelopersHub Corporation after completing Full Stack Web Development course.",
    skills: ["Full Stack", "Web Development"],
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    company: "IdeaUniversity – DevHub",
    type: "Course",
    duration: "2025 · 6 Months",
    icon: "🎓",
    tags: ["FSWD", "NavTCC", "Lahore"],
    description:
      "Completed a 6-month Full Stack Web Development course at IdeaUniversity Lahore, certified by NavTCC and DevelopersHub Corporation.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Office Management Intern",
    company: "VTI Chichawatni",
    type: "Internship",
    duration: "2025 · 3 Months",
    icon: "🗂️",
    tags: ["Office Mgmt", "VTI", "Diploma"],
    description:
      "Completed Office Management diploma and 3-month internship at VTI Chichawatni, gaining administrative and organizational skills.",
    skills: ["Office Management", "Administration", "MS Office"],
  },
  {
    id: 5,
    title: "Production & Packing Operator",
    company: "Punjab Cash & Carry, Islamabad",
    type: "Full-time",
    duration: "2024 · 6 Months",
    icon: "🏭",
    tags: ["Production", "Islamabad", "Operations"],
    description:
      "Handled bread cutting & packing, Zinger Burger machine operation, Suwarma packing, Lofa and Shermall production. Operated cutting machinery independently.",
    skills: ["Machine Operation", "Food Packing", "Quality Control", "Team Work"],
  },
  {
    id: 6,
    title: "Cream Filling & QC Operator",
    company: "Golden Pearl, Lahore",
    type: "Full-time",
    duration: "2022 · 4 Months",
    icon: "⚗️",
    tags: ["Manufacturing", "Lahore", "QC"],
    description:
      "Worked in Golden Pearl cosmetics facility, filling cream into packaging and performing weight checks to ensure quality control standards.",
    skills: ["Cream Filling", "Weight QC", "Packaging", "Manufacturing"],
  },
];

// ── Card inner content ────────────────────────────────────────────────────────

function CardContent({ exp, isActive }) {
  return (
    <div className="w-full h-full p-4 text-left">
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <span className="inline-block text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5 bg-slate-800 text-slate-400 border border-slate-700">
            {exp.type}
          </span>
          <h3 className="text-white font-bold text-sm leading-tight">{exp.title}</h3>
          <p className="text-slate-500 text-xs mt-0.5">{exp.company}</p>
        </div>
        <span className="flex-shrink-0 text-[10px] font-mono text-slate-600 whitespace-nowrap pt-1">
          {exp.duration}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-mono text-slate-600 border border-slate-800 rounded px-1.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Expandable section */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-400 text-xs leading-relaxed mb-3 pt-2 border-t border-slate-700/50">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {exp.skills.map((s) => (
            <span
              key={s}
              className="text-[10px] px-2 py-0.5 rounded font-medium text-slate-300 bg-slate-700/60"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Expand hint */}
      <div className="mt-2 flex items-center gap-1 text-slate-700 text-[10px] font-mono">
        <span className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}>
          ▾
        </span>
        <span>{isActive ? "collapse" : "details"}</span>
      </div>
    </div>
  );
}

// ── Reusable card renderer ────────────────────────────────────────────────────

function ExperienceCard({ exp, isActive, onToggle }) {
  if (isActive) {
    return (
      <Button
        key={exp.id}
        duration={Math.floor(Math.random() * 5000) + 5000}
        borderRadius="1.5rem"
        as="div"
        style={{
          background: "rgb(4,7,29)",
          backgroundImage:
            "linear-gradient(90deg, rgba(4, 7, 29, 0.95) 0%, rgba(12, 14, 35, 0.95) 100%)",
          borderRadius: "1.5rem",
        }}
        containerClassName="w-full"
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
        onClick={onToggle}
      >
        <CardContent exp={exp} isActive={isActive} />
      </Button>
    );
  }

  return (
    <div
      className="w-full rounded-[1.5rem] border border-slate-800 bg-slate-900/60 hover:border-slate-700 cursor-pointer transition-all duration-300"
      onClick={onToggle}
    >
      <CardContent exp={exp} isActive={isActive} />
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Experience() {
  const [active, setActive] = useState(null);

  const toggle = (id) => setActive((prev) => (prev === id ? null : id));

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Soft centered glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-linear-to-b from-cyan-300/20 to-purple-600/30 blur-[160px]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <TitleHeader title="My Journey " subTitle="Work Experience" />

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              const isActive = active === exp.id;

              return (
                <div key={exp.id} className="relative">

                  {/* ── MOBILE ── */}
                  <div className="flex md:hidden items-start gap-4 w-full">
                    <div className="flex-shrink-0 mt-2">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-base border transition-all duration-300 ${
                          isActive
                            ? "border-slate-400 bg-slate-800"
                            : "border-slate-800 bg-slate-900"
                        }`}
                      >
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <ExperienceCard
                        exp={exp}
                        isActive={isActive}
                        onToggle={() => toggle(exp.id)}
                      />
                    </div>
                  </div>

                  {/* ── DESKTOP ── */}
                  <div className="hidden md:flex w-full items-center">

                    {/* LEFT */}
                    <div className="w-[46%] flex justify-end pr-6">
                      {isLeft && (
                        <div className="relative w-full max-w-[300px]">
                          {/* Connector line */}
                          <div
                            className={`absolute right-[-25px] top-1/2 -translate-y-px h-px w-[25px] transition-colors duration-300 ${
                              isActive ? "bg-slate-400" : "bg-slate-800"
                            }`}
                          />
                          <ExperienceCard
                            exp={exp}
                            isActive={isActive}
                            onToggle={() => toggle(exp.id)}
                          />
                        </div>
                      )}
                    </div>

                    {/* CENTER DOT */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border transition-all duration-300 ${
                          isActive
                            ? "border-slate-400 bg-slate-800 shadow-[0_0_20px_rgba(148,163,184,0.15)]"
                            : "border-slate-800 bg-[#0d0d0d] hover:border-slate-600"
                        }`}
                      >
                        {exp.icon}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-[46%] flex justify-start pl-6">
                      {!isLeft && (
                        <div className="relative w-full max-w-[300px]">
                          {/* Connector line */}
                          <div
                            className={`absolute left-[-25px] top-1/2 -translate-y-px h-px w-[25px] transition-colors duration-300 ${
                              isActive ? "bg-slate-400" : "bg-slate-800"
                            }`}
                          />
                          <ExperienceCard
                            exp={exp}
                            isActive={isActive}
                            onToggle={() => toggle(exp.id)}
                          />
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Years Active", value: "3+" },
            { label: "Roles", value: "6" },
            { label: "Domains", value: "3" },
            { label: "Currently", value: "Fiverr" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-center"
            >
              <p className="text-2xl font-black text-white mb-1">{s.value}</p>
              <p className="text-slate-600 text-[10px] font-mono uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}