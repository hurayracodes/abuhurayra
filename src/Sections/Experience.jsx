import { useState } from "react";
import { Button } from "../ui/MovingBorder";
import TitleHeader from "../ui/TitleHeader";
import { experiences } from "../ui/Data";


// ── Experience data ───────────────────────────────────────────────────────────



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
    <section className="relative py-24 px-4">
      <TitleHeader title="My Journey " subTitle="Work Experience" />
      <div className="max-w-3xl mx-auto">

        {/* Experience List */}
        <ul className="divide-y divide-slate-800">
          {experiences.map((exp) => {
            const isOpen = active === exp.id;
            return (
              <li key={exp.id}>
                {/* Row */}
                <div
                  className="flex items-start justify-between gap-4 py-5 cursor-pointer groupp"
                  onClick={() => toggle(exp.id)}
                >
                  {/* Left: icon + title */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm leading-tight">
                        {exp.title}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Right: date + chevron */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-slate-400 text-sm hidden sm:block">
                      {exp.duration}
                    </span>
                    <span
                      className={`text-slate-500 text-xs transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </div>
                </div>

                {/* Mobile date */}
                <p className="text-slate-600 text-xs pb-1 pl-14 sm:hidden">
                  {exp.duration}
                </p>

                {/* Expandable Detail */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-14 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}