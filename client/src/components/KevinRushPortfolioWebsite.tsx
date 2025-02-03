import { useState } from "react";

import SkillCard from "./SkillCard.tsx";

import { kevin_rush_portfolio_website_skills } from "../data/KevinRushPortfolioWebsiteData.tsx";

import kevin_rush_portfolio_website_image_0 from "../assets/kevin_rush_portfolio_website/hero_section_and_navbar.png";
import kevin_rush_portfolio_website_image_1 from "../assets/kevin_rush_portfolio_website/about_section.png";
import kevin_rush_portfolio_website_image_2 from "../assets/kevin_rush_portfolio_website/technologies_section.png";
import kevin_rush_portfolio_website_image_3 from "../assets/kevin_rush_portfolio_website/experience_section.png";
import kevin_rush_portfolio_website_image_4 from "../assets/kevin_rush_portfolio_website/projects_section.png";
import kevin_rush_portfolio_website_image_5 from "../assets/kevin_rush_portfolio_website/contact_section.png";

import "./ProjectPage.css";

const project_implementation_images = [
  {
    src: kevin_rush_portfolio_website_image_0,
    caption: "Hero Section and navigation Bar",
  },
  { src: kevin_rush_portfolio_website_image_1, caption: "About Section" },
  {
    src: kevin_rush_portfolio_website_image_2,
    caption: "Technologies Section",
  },
  { src: kevin_rush_portfolio_website_image_3, caption: "Experience Section" },
  { src: kevin_rush_portfolio_website_image_4, caption: "Projects Section" },
  { src: kevin_rush_portfolio_website_image_5, caption: "Contact Section" },
];

const KevinRushPortfolioWebsite = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="project_page">
      <div className="project_page_container">
        <h1 className="project_page_headline">Kevin Rush Portfolio Website</h1>

        <p className="project_page_description">
          A Sleek and Responsive Portfolio Website
        </p>

        <figure className="project_page_figure">
          <div className="project_page_carousel">
            {project_implementation_images.map((image, index) => (
              <div
                key={index}
                className={`project_page_carousel_slide ${
                  index === slideIndex ? "active" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="project_page_carousel_image"
                />
              </div>
            ))}
          </div>
        </figure>

        <div className="project_page_carousel_indicators">
          {project_implementation_images.map((_, index) => (
            <span
              key={index}
              className={`project_page_carousel_indicator ${
                slideIndex === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <p className="project_page_description">
          This project was a hands-on way to learn TailwindCSS, Framer Motion,
          and TypeScript, inspired by the incredible compiletab tutorial. Their
          stunning design choices, like gradient backgrounds and typography,
          were the perfect foundation for creating a captivating website.
        </p>

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

        <h2 className="project_page_headline_2 reveal-up">
          Why I did this project?
        </h2>

        <div className="project_page_card reveal-up">
          <p className="project_page_card_description">
            The main objective of this project was to build a sleek, responsive,
            and interactive portfolio website that effectively showcases my
            professional experience, skills, and projects. I focused on:
            <br />
            <br />
          </p>

          <ul className="project_page_card_list">
            <li className="project_page_card_list_item">
              Performance Optimization
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Ensuring the website loads quickly and runs smoothly across all
                devices.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Modern UI/UX
              <span className="project_page_blue">:</span>
              {"  "}
              <span className="project_page_card_description">
                Crafting an engaging user interface with smooth animations,
                focusing on enhancing the overall user experience.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Scalability
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Writing clean, maintainable, and extensible TypeScript code to
                ensure long-term flexibility.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Efficient Styling
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Leveraging TailwindCSS for fast, consistent, and responsive
                design, while minimizing manual styling work.
              </span>
            </li>
          </ul>

          <p className="project_page_card_description">
            <br />
            Beyond just a portfolio, this project was a hands-on learning
            experience to strengthen my React skills, explore animation
            techniques, and deploy a production-ready application.
          </p>
        </div>

        <h2 className="project_page_headline_2 reveal-up">
          What technologies and tools did I use?
        </h2>

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

        <h2 className="project_page_headline_2 reveal-up">
          What are the key features?
        </h2>

        <div className="project_page_card reveal-up">
          <ul className="project_page_card_list">
            <li className="project_page_card_list_item">
              Fully Responsive Design
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                The site adapts seamlessly to desktops, tablets, and mobile
                devices, ensuring a great experience on all screen sizes.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Framer Motion Animations
              <span className="project_page_blue">:</span>
              {"  "}
              <span className="project_page_card_description">
                Smooth transitions and micro-interactions are used throughout
                the site to make the user experience more dynamic and visually
                appealing.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Scalable TypeScript Codebase
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Type safety ensures fewer bugs, and the maintainable structure
                makes it easy to extend and scale the project in the future.
              </span>
            </li>
            <li className="project_page_card_list_item">
              TailwindCSS for Efficient Styling
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                This utility-first CSS framework allowed for rapid styling,
                keeping the design consistent and responsive across various
                devices.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Performance Optimization
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                The website is built for fast loading times, with minimal
                re-renders, using best practices for performance across all
                devices.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="project_page_headline_2 reveal-up">
          What challenges did I overcome?
        </h2>

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
