"use client";

import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../ui/Data";
import TitleHeader from "../ui/TitleHeader";

const fadeIn = (direction, type, delay, duration) => ({
  hidden: { opacity: 0, y: direction === "up" ? 30 : 0 },
  show: { opacity: 1, y: 0, transition: { delay, duration, ease: "easeOut" } }
});

const textVariant = () => ({
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
});

export default function Projects() {
  return (
    <div id="projects" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <TitleHeader title="A small selection of "
        subTitle="my recent projects"
        />

        {/* Projects Grid */}
        <div className="mt-20 flex flex-wrap gap-7 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}