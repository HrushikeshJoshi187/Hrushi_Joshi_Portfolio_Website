import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import SkillCard from "./SkillCard.tsx";

import { john_doe_portfolio_website_skills } from "../data/JohnDoePortfolioWebsiteData.tsx";

import john_doe_portfolio_website_image_0 from "../assets/john_doe_portfolio_website/hero_section_and_navbar.png";
import john_doe_portfolio_website_image_1 from "../assets/john_doe_portfolio_website/about_section.png";
import john_doe_portfolio_website_image_2 from "../assets/john_doe_portfolio_website/skills_section.png";
import john_doe_portfolio_website_image_3 from "../assets/john_doe_portfolio_website/projects_section.png";
import john_doe_portfolio_website_image_4 from "../assets/john_doe_portfolio_website/reviews_section.png";
import john_doe_portfolio_website_image_5 from "../assets/john_doe_portfolio_website/contact_section.png";
import john_doe_portfolio_website_image_6 from "../assets/john_doe_portfolio_website/footer_section.png";

import john_doe_portfolio_website_image_7 from "../assets/john_doe_portfolio_website/mobile_hero_section.jpg";
import john_doe_portfolio_website_image_8 from "../assets/john_doe_portfolio_website/mobile_navbar.jpg";
import john_doe_portfolio_website_image_9 from "../assets/john_doe_portfolio_website/mobile_about_section.jpg";
import john_doe_portfolio_website_image_10 from "../assets/john_doe_portfolio_website/mobile_skills_section.jpg";
import john_doe_portfolio_website_image_11 from "../assets/john_doe_portfolio_website/mobile_projects_section.jpg";
import john_doe_portfolio_website_image_12 from "../assets/john_doe_portfolio_website/mobile_reviews_section.jpg";
import john_doe_portfolio_website_image_13 from "../assets/john_doe_portfolio_website/mobile_contact_section.jpg";
import john_doe_portfolio_website_image_14 from "../assets/john_doe_portfolio_website/mobile_footer_section.jpg";

import "./ProjectPage.css";

const project_implementation_images = [
  {
    src: john_doe_portfolio_website_image_0,
    caption: "Hero Section and navigation Bar",
  },
  { src: john_doe_portfolio_website_image_1, caption: "About Section" },
  {
    src: john_doe_portfolio_website_image_2,
    caption: "Technologies Section",
  },
  { src: john_doe_portfolio_website_image_3, caption: "Experience Section" },
  { src: john_doe_portfolio_website_image_4, caption: "Projects Section" },
  { src: john_doe_portfolio_website_image_5, caption: "Contact Section" },
  { src: john_doe_portfolio_website_image_6, caption: "Footer Section" },
];

const mobile_images = [
  { src: john_doe_portfolio_website_image_7, caption: "Mobile Hero Section" },
  { src: john_doe_portfolio_website_image_8, caption: "Mobile Navigation Bar" },
  { src: john_doe_portfolio_website_image_9, caption: "Mobile About Section" },
  {
    src: john_doe_portfolio_website_image_10,
    caption: "Mobile Technologies Section",
  },
  {
    src: john_doe_portfolio_website_image_11,
    caption: "Mobile Experience Section",
  },
  {
    src: john_doe_portfolio_website_image_12,
    caption: "Mobile Projects Section",
  },
  {
    src: john_doe_portfolio_website_image_13,
    caption: "Mobile Contact Section",
  },
  {
    src: john_doe_portfolio_website_image_14,
    caption: "Mobile Footer Section",
  },
];

const JohnDoePortfolioWebsite = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const goToSlide = (index: number) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const imagesToDisplay = isMobile
    ? mobile_images
    : project_implementation_images;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (slideIndex + 1 >= imagesToDisplay.length) goToSlide(0);
      else goToSlide(slideIndex + 1);
    },
    onSwipedRight: () => {
      if (slideIndex - 1 <= -1) goToSlide(imagesToDisplay.length - 1);
      else goToSlide(slideIndex - 1);
    },
    trackMouse: true,
    touchEventOptions: { passive: false },
  });

  return (
    <div className="project_page">
      <div className="project_page_container">
        <h1 className="project_page_headline">John Doe Portfolio Website</h1>

        <p className="project_page_description">
          A Sleek and Responsive Portfolio Website
        </p>

        <figure className="project_page_figure" {...handlers}>
          <div className="project_page_carousel">
            {imagesToDisplay.map((image, index) => (
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
          {imagesToDisplay.map((_, index) => (
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
          This project was a great opportunity for me to take my TailwindCSS
          skills to the next level, while following the fantastic tutorial by
          CodeWithSadee. Throughout this journey, I deepened my knowledge of
          TypeScript and also learned how to use the GSAP library for stunning,
          smooth animations that feel natural to the eye. The color selection
          and typography choices truly elevate the overall experience.
          Additionally, I implemented Lenis for smooth scrolling effects, and
          EmailJS for handling form submissions directly from the frontend in a
          serverless manner. I also implemented the Glassmorphism design style
          to enhance the visual appeal. While following his tutorial, I learned
          a lot, and I also implemented several of the techniques covered to
          create a truly unique and visually appealing portfolio.
        </p>

        <div>
          &#128279; Live Website:{" "}
          <a
            className="project_page_link"
            href="https://johndoeportfoliowebsite.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://johndoeportfoliowebsite.netlify.app
          </a>
        </div>
        <div>
          &#128279; GitHub Repository:{" "}
          <a
            className="project_page_link"
            href="https://github.com/HrushikeshJoshi187/John_Doe_Portfolio_Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/HrushikeshJoshi187/John_Doe_Portfolio_Website
          </a>
        </div>
        <div>
          &#128279; CodeWithSadee's Tutorial:{" "}
          <a
            className="project_page_link"
            href="https://www.youtube.com/watch?v=k3JMkRwd_Nw"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/watch?v=k3JMkRwd_Nw
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
            <li className="project_page_card_list_item">
              Exploring Design Trends
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Learning Glassmorphism and keeping up with modern UI styling
                techniques.
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
          {john_doe_portfolio_website_skills.map(
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
              Responsive Design
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Fully optimized for desktop and mobile views.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Smooth Animations
              <span className="project_page_blue">:</span>
              {"  "}
              <span className="project_page_card_description">
                Stunning, subtle animations using GSAP.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Glassmorphism Design
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Seamless scrolling powered by Lenis.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Email Form Submission
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Integrated EmailJS to handle form submissions serverlessly.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Scalable Codebase
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Built with TypeScript for type safety and maintainability.
              </span>
            </li>
            <li className="project_page_card_list_item">
              TailwindCSS Styling
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Fast, efficient, and modern styling with Tailwind's
                utility-first framework.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="project_page_headline_2 reveal-up">
          What challenges did I overcome?
        </h2>

        <p className="project_page_description">
          Throughout this project, I tackled multiple challenges, including
          mastering GSAP animations, which required extensive practice to
          achieve smooth and natural motion effects. Ensuring cross-browser
          compatibility was another hurdle, as fine-tuning styles and animations
          for consistency across different browsers was crucial. Implementing
          Glassmorphism required careful balancing of transparency and blur
          effects to maintain both aesthetic appeal and readability. Performance
          optimization was key, as I worked on reducing unnecessary re-renders
          and refining animations for a seamless experience. Lastly, integrating
          EmailJS efficiently posed challenges in ensuring reliable form
          submissions, which I overcame through thorough testing and debugging.
        </p>
      </div>
    </div>
  );
};

export default JohnDoePortfolioWebsite;
