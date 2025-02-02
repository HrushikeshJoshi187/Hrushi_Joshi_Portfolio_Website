import ProjectCard from "./ProjectCard.tsx";

import { projects } from "../data/data.tsx";

import "./Projects.css";

const Projects = (): JSX.Element => {
  return (
    <section id="projects_section" className="projects_section">
      <div className="projects_container">
        <h2 className="projects_headline reveal-up">My Portfolio Highlights</h2>

        <div className="projects">
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
};

export default Projects;
