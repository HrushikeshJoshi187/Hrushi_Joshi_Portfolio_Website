import "./ProjectPage.css";

import SkillCard from "./SkillCard";

import { kevin_rush_portfolio_website_skills } from "../data/data.tsx";

import kevin_rush_portfolio_website from "../assets/kevin_rush_portfolio_website/hero_section_and_navbar.png";

const KevinRushPortfolioWebsite = (): JSX.Element => {
  return (
    <div className="project_page">
      <div className="project_page_container">
        <h1 className="project_page_headline">Kevin Rush Portfolio Website</h1>
        <p className="project_page_description">
          A Sleek and Responsive Portfolio Website
        </p>
        <figure className="project_page_figure">
          <img
            className="project_page_image"
            src={kevin_rush_portfolio_website}
            alt="Kevin Rush Portfolio Website"
          />
        </figure>

        <p className="project_page_description">
          This project was a hands-on way to learn TailwindCSS, Framer Motion,
          and TypeScript, inspired by the incredible compiletab tutorial. Their
          stunning design choices, like gradient backgrounds and typography,
          were the perfect foundation for creating a captivating website.
          <br />
          <br />
          <div>
            &#128279; Live Website:{" "}
            <a
              className="project_page_link"
              href="https://kevinrushportfoliowebsite.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://kevinrushportfoliowebsite.netlify.app
            </a>
          </div>
          <div>
            &#128279; GitHub Repository:{" "}
            <a
              className="project_page_link"
              href="github.com/HrushikeshJoshi187/Kevin_Rush_Portfolio_Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/HrushikeshJoshi187/Kevin_Rush_Portfolio_Website
            </a>
          </div>
          <div>
            &#128279; CompileTab's Tutorial:{" "}
            <a
              className="project_page_link"
              href="https://www.youtube.com/watch?v=_63mEm3AMSY&t=29s"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.youtube.com/watch?v=_63mEm3AMSY&t=29s
            </a>
          </div>
        </p>

        <h2 className="project_page_headline_2 reveal-up">
          Project Objectives
        </h2>

        <div className="project_page_card">
          <div>
            <p className="project_page_card_description">
              The primary goal of this project was to create a highly responsive
              and interactive portfolio website that effectively highlights
              professional experience, skills, and projects. The focus areas
              included:
              <br />
              <br />
              Optimized Performance: Ensuring seamless user experience across
              all devices.
              <br />
              Modern UI/UX: Implementing cutting-edge design trends with smooth
              animations.
              <br />
              Scalability: Writing maintainable and extensible TypeScript code.
              <br />
              Efficient Styling: Utilizing TailwindCSS for rapid, responsive
              styling.
              <br />
              <br />
              This project also served as an opportunity to strengthen my
              proficiency in React development, experiment with animation
              libraries like Framer Motion, and deploy a production-ready
              application.
            </p>
          </div>
        </div>

        <h2 className="project_page_headline_2 reveal-up">Tools I used</h2>

        <div className="project_page_skills">
          {kevin_rush_portfolio_website_skills.map(
            ({ skill_logo, skill_name, skill_description }, key) => (
              <SkillCard
                key={key}
                skill_logo={skill_logo}
                skill_name={skill_name}
                skill_description={skill_description}
              />
            )
          )}
        </div>

        <h2 className="project_page_headline_2 reveal-up">Key Features</h2>
        <p className="project_page_description">
          Fully Responsive Design: Adapted for all screen sizes, ensuring a
          seamless experience on desktops, tablets, and mobile devices.
          <br />
          Framer Motion Animations: Engaging micro-interactions and transitions
          enhance the visual appeal and usability.
          <br />
          Scalable TypeScript Codebase: Type safety and improved maintainability
          ensure long-term flexibility.
          <br />
          TailwindCSS for Efficient Styling: A utility-first approach for faster
          styling and consistent design.
          <br />
          Performance Optimization: Best practices implemented for fast loading
          and minimal re-renders.
        </p>

        <h2 className="project_page_headline_2 reveal-up">Challenges</h2>
        <p className="project_page_description">
          The primary challenge I faced during this project was implementing
          complex animations and transitions using Framer Motion. I had to
          experiment with various properties and settings to achieve the desired
          effects while maintaining optimal performance. Additionally, ensuring
          a consistent design across different screen sizes required meticulous
          testing and tweaking of the layout. However, these challenges provided
          valuable learning opportunities and honed my skills in front-end
          development.
        </p>
      </div>
    </div>
  );
};

export default KevinRushPortfolioWebsite;
