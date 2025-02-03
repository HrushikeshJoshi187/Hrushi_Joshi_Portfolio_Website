import ProjectCard from "./ProjectCard.tsx";

import { projects } from "../data/ProjectsData.tsx";

import "./Projects.css";

const Projects = (): JSX.Element => {
  return (
    <section id="projects_section" className="projects_section">
      <div className="projects_container">
        <h2 className="projects_headline reveal-up">My Portfolio Highlights</h2>

        <div className="projects">
          {projects.map(
            ({ image, title, project_page_link, website_link }, key) => (
              <ProjectCard
                key={key}
                image={image}
                title={title}
                project_page_link={project_page_link}
                website_link={website_link}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
