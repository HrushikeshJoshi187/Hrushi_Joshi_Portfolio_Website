import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import SkillCard from "./SkillCard.tsx";

import { ask_your_crush_out_online_skills } from "../data/AskYourCrushOutOnlineData.tsx";

import ask_your_crush_out_online_image_0 from "../assets/ask_your_crush_out_online/requirement_section.png";
import ask_your_crush_out_online_image_1 from "../assets/ask_your_crush_out_online/question_section.png";
import ask_your_crush_out_online_image_2 from "../assets/ask_your_crush_out_online/decision_section.png";
import ask_your_crush_out_online_image_3 from "../assets/ask_your_crush_out_online/victory_section.png";
import ask_your_crush_out_online_image_4 from "../assets/ask_your_crush_out_online/defeat_section.png";
import ask_your_crush_out_online_image_5 from "../assets/ask_your_crush_out_online/customize_section.png";
import ask_your_crush_out_online_image_6 from "../assets/ask_your_crush_out_online/winning.png";
import ask_your_crush_out_online_image_7 from "../assets/ask_your_crush_out_online/most_fun_part.png";

import ask_your_crush_out_online_image_8 from "../assets/ask_your_crush_out_online/mobile_requirement_section.jpg";
import ask_your_crush_out_online_image_9 from "../assets/ask_your_crush_out_online/mobile_question_section.jpg";
import ask_your_crush_out_online_image_10 from "../assets/ask_your_crush_out_online/mobile_decision_section.jpg";
import ask_your_crush_out_online_image_11 from "../assets/ask_your_crush_out_online/mobile_victory_section.jpg";
import ask_your_crush_out_online_image_12 from "../assets/ask_your_crush_out_online/mobile_defeat_section.jpg";
import ask_your_crush_out_online_image_13 from "../assets/ask_your_crush_out_online/mobile_customize_section.jpg";

import "./ProjectPage.css";

const project_implementation_images = [
  { src: ask_your_crush_out_online_image_0, caption: "Requirement Section" },
  { src: ask_your_crush_out_online_image_1, caption: "Question Section" },
  { src: ask_your_crush_out_online_image_2, caption: "Decision Section" },
  { src: ask_your_crush_out_online_image_3, caption: "Victory Section" },
  { src: ask_your_crush_out_online_image_4, caption: "Defeat Section" },
  { src: ask_your_crush_out_online_image_5, caption: "Customize Section" },
  { src: ask_your_crush_out_online_image_6, caption: "Winning" },
  { src: ask_your_crush_out_online_image_7, caption: "Most Fun Part" },
];

const mobile_images = [
  { src: ask_your_crush_out_online_image_8, caption: "Requirement Section" },
  { src: ask_your_crush_out_online_image_9, caption: "Question Section" },
  { src: ask_your_crush_out_online_image_10, caption: "Decision Section" },
  { src: ask_your_crush_out_online_image_11, caption: "Victory Section" },
  { src: ask_your_crush_out_online_image_12, caption: "Defeat Section" },
  { src: ask_your_crush_out_online_image_13, caption: "Customize Section" },
];

const AskYourCrushOutOnline = (): JSX.Element => {
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
        <h1 className="project_page_headline">Ask Your Crush Out Online</h1>

        <p className="project_page_description">
          Confessing your feelings has never been easier!
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
          This project is a fun and lighthearted way to ask your crush out
          online while keeping things interactive, engaging, and stress-free!
          Inspired by a tutorial from Web Design Mastery, I refined and enhanced
          the concept to create a user-friendly, accessible, and feature-rich
          experience for everyone—no coding knowledge required!
        </p>

        <div>
          &#128279; Live Website:{" "}
          <a
            className="project_page_link"
            href="https://iwaswondering.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://iwaswondering.netlify.app
          </a>
        </div>
        <div>
          &#128279; Make Your Own Custom Website:{" "}
          <a
            className="project_page_link"
            href="https://iwaswondering.netlify.app/customize"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://iwaswondering.netlify.app/customize
          </a>
        </div>
        <div>
          &#128279; GitHub Repository:{" "}
          <a
            className="project_page_link"
            href="https://github.com/HrushikeshJoshi187/Ask_Your_Crush_Out_Online"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/HrushikeshJoshi187/Ask_Your_Crush_Out_Online
          </a>
        </div>
        <div>
          &#128279; Web Design Mastery's Tutorial:{" "}
          <a
            className="project_page_link"
            href="https://www.youtube.com/watch?v=hKx50WdhTlM"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/watch?v=hKx50WdhTlM
          </a>
        </div>

        <h2 className="project_page_headline_2 reveal-up">
          Why I did this project?
        </h2>

        <div className="project_page_card reveal-up">
          <p className="project_page_card_description">
            The idea started as a simple experiment but quickly evolved into a
            full-fledged web app that makes confessing feelings less daunting
            and more exciting! While working through the tutorial, I noticed
            that the technical setup—downloading code, modifying it without
            errors, deploying it online—was too complicated for non-technical
            users. So, I decided to simplify the experience by:
            <br />
            <br />
          </p>

          <ul className="project_page_card_list">
            <li className="project_page_card_list_item">
              Effortless User Experience
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Creating a seamless and interactive user journey.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Instant Love Alerts
              <span className="project_page_blue">:</span>
              {"  "}
              <span className="project_page_card_description">
                Automating notifications so users instantly receive a response.
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
              Confession Confidentiality
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Enhancing security measures to protect user data.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Lightning-Fast Performance
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Optimizing performance for a smooth experience across all
                devices.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="project_page_headline_2 reveal-up">
          What technologies and tools did I use?
        </h2>

        <div className="project_page_skills">
          {ask_your_crush_out_online_skills.map(
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
              Customizable messages
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Write your own heartfelt (or hilarious) confession.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Real-time Notifications
              <span className="project_page_blue">:</span>
              {"  "}
              <span className="project_page_card_description">
                Get an email notification when your crush responds.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Secure & Private
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                No unnecessary data collection—just your email to notify you.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Multi-language support
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Supports English, Basic Latin, and Emojis.
              </span>
            </li>
            <li className="project_page_card_list_item">
              User-friendly
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Designed for everyone, even those with no tech experience.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Cheesy, but fun!
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Because life’s too short to not shoot your shot.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Sanitized Inputs
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Prevents XSS attacks with dompurify.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Security Headers
              <span className="project_page_blue">:</span>
              {"  "}
              <span className="project_page_card_description">
                helmet ensures safe HTTP headers.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Rate Limiting
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Protects against spam & DoS attacks.
              </span>
            </li>
            <li className="project_page_card_list_item">
              HTTPS-Only
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Forces secure communication.
              </span>
            </li>
            <li className="project_page_card_list_item">
              Email Queueing & Throttling
              <span className="project_page_blue">:</span>{" "}
              <span className="project_page_card_description">
                Efficient email handling to avoid overload.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="project_page_headline_2 reveal-up">
          How This Project Stands Out?
        </h2>

        <p className="project_page_description">
          Unlike generic message-sending apps, Ask Your Crush Out Online adds a
          fun, suspenseful, and interactive game-like experience to confessions!
          With real-time updates, smart notifications, and a playful design, it
          transforms the nervousness of asking someone out into an exciting
          challenge!
        </p>
      </div>
    </div>
  );
};

export default AskYourCrushOutOnline;
