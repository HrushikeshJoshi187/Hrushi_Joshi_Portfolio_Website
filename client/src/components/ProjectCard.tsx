import "./ProjectCard.css";

interface ProjectCardProps {
  image: string;
  title: string;
  project_page_link: string;
  website_link: string;
}

const ProjectCard = ({
  image,
  title,
  project_page_link,
  website_link,
}: ProjectCardProps): JSX.Element => {
  return (
    <div className="project_card reveal-up">
      <figure className="project_figure">
        {
          <img
            src={image}
            alt={title}
            className="project_image"
            loading="lazy"
          />
        }
      </figure>

      <div className="project_title_and_tags">
        <h3 className="project_title">{title}</h3>

        <div className="project_links">
          <a href={project_page_link} target="_blank" rel="noreferrer noopener">
            <div className="project_link_button project_link_outline_button">
              <span
                className="project_link_material_symbols_rounded"
                aria-hidden="true"
              >
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="none"
                >
                  <path
                    d="M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </a>

          <a href={website_link} target="_blank" rel="noreferrer noopener">
            <div className="project_link_button project_link_primary_button">
              <span
                className="project_link_material_symbols_rounded"
                aria-hidden="true"
              >
                Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="none"
                >
                  <path
                    d="M640-624 284-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l356-356H280q-17 0-28.5-11.5T240-720q0-17 11.5-28.5T280-760h400q17 0 28.5 11.5T720-720v400q0 17-11.5 28.5T680-280q-17 0-28.5-11.5T640-320v-304Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
