import { experiences } from "../ui/Data";

// Resume file ka path. Agar PDF ko public/docs/resume.pdf main move karo to yahan update karna.
const RESUME_URL = "/Abuhurara.pdf";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 text-body">
      <div className="mx-auto max-w-[1300px] grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-x-10 gap-y-8">
        {/* ── Left: Resume link ─────────────────────────────── */}
        <div className="lg:pt-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-tight text-accent hover:opacity-70 transition-opacity"
          >
            <span aria-hidden="true">↳</span>
            Resume
          </a>
        </div>

        {/* ── Right: Heading + list ─────────────────────────── */}
        <div>
          {/* Heading row */}
          <div className="flex items-end justify-between gap-4 pb-10 border-b border-line-strong">
            <h2 className="text-[clamp(3rem,9vw,6rem)] font-semibold uppercase leading-[0.9] tracking-tighter text-heading">
              Experience
            </h2>
            <span className="hidden sm:block text-sm font-semibold uppercase tracking-tight pb-2 whitespace-nowrap text-accent">
              [ My Experience ]
            </span>
          </div>

          {/* Rows */}
          <ul>
            {experiences.map((exp) => (
              <li
                key={exp.id}
                className="group grid grid-cols-1 md:grid-cols-[20%_43%_37%] gap-y-3 py-10 border-b border-line"
              >
                {/* Date */}
                <p className="text-sm font-semibold tracking-tight text-accent">
                  {exp.duration}
                </p>

                {/* Title + company */}
                <div className="md:pr-8">
                  <h3 className="text-2xl font-medium leading-tight tracking-tight text-heading group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm text-muted underline underline-offset-4 hover:text-accent transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-muted underline underline-offset-4">
                      {exp.company}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed text-body group-hover:text-strong transition-colors">
                  {exp.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}