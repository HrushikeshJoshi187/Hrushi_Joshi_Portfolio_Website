import ProjectCard from "./ProjectCard";

import { projects } from "../data/data.tsx";

import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects_section" className="projects_section">
      <div className="projects_container">
        <h2 className="projects_headline reveal-up">My Portfolio Highlights</h2>

        <div className="projects grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map(({ image, title, tags, link }, key) => (
            <ProjectCard
              key={key}
              image={image}
              title={title}
              tags={tags}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
