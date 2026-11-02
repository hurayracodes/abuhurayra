import { experiences } from "../ui/Data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 text-body">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <header className="mb-14 border-b border-line-strong pb-8">
          <p className="font-mono text-sm uppercase tracking-wide text-accent">
            Career
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
            Experience
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">
            Where I have worked and what I have built along the way.
          </p>
        </header>

        {/* Timeline */}
        <ol className="relative ml-3 border-l border-line-strong sm:ml-4">
          {experiences.map((exp) => (
            <li key={exp.id} className="group relative pb-10 pl-8 last:pb-0 sm:pl-12">
              {/* Dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-accent bg-page transition duration-300 group-hover:scale-125 group-hover:bg-accent"
              />

              {/* Card */}
              <article className="rounded-2xl border border-line bg-chip p-5 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-[0_0_40px_rgb(var(--accent-rgb)/0.25)] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-snug text-heading transition-colors group-hover:text-accent sm:text-2xl">
                      {exp.title}
                    </h3>
                    {exp.link ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-muted">
                        {exp.company}
                      </p>
                    )}
                  </div>

                  <span className="w-fit shrink-0 rounded-full bg-accent/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">
                    {exp.duration}
                  </span>
                </div>

                <p className="mt-4 text-base leading-relaxed text-body">
                  {exp.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}