import HTML5 from "../assets/logos/HTML5.svg";
import CSS3 from "../assets/logos/CSS3_old.svg";
import JS from "../assets/logos/JS.svg";
import TypeScript from "../assets/logos/typescript.svg";
import ReactLogo from "../assets/logos/react.svg";
import Express from "../assets/logos/express.svg";
import Node from "../assets/logos/node.svg";
import MongoDB from "../assets/logos/mongo_DB.svg";
import MySQL from "../assets/logos/mysql.svg";
import Three from "../assets/logos/three.svg";
import Playwright from "../assets/logos/playwright.svg";
import Cypress from "../assets/logos/cypress.svg";
import Webpack from "../assets/logos/webpack.svg";
import Vite from "../assets/logos/vite.svg";
import C from "../assets/logos/c.svg";
import Cpp from "../assets/logos/c++.svg";
import Git from "../assets/logos/git.svg";
import Tailwind_CSS from "../assets/logos/tailwind_CSS.svg";
// import FramerMotion from "../assets/logos/framer_motion.png";
// import SASS_CSS from "../assets/logos/SASS_CSS.svg";
// import LESS_CSS from "../assets/logos/LESS_CSS.svg";
// import JQuery from "../assets/logos/jquery.svg";
// import PHP from "../assets/logos/PHP.svg";
import Python from "../assets/logos/python.svg";

type Skill = {
  skill_logo: string;
  skill_name: string;
  skill_description: string;
};

export const skills: Skill[] = [
  {
    skill_logo: HTML5,
    skill_name: "HTML5",
    skill_description: "Structure",
  },
  {
    skill_logo: CSS3,
    skill_name: "CSS3",
    skill_description: "Styling",
  },
  {
    skill_logo: JS,
    skill_name: "Javascript",
    skill_description: "Interaction",
  },
  {
    skill_logo: TypeScript,
    skill_name: "TypeScript",
    skill_description: "Interaction & Reliability",
  },
  {
    skill_logo: ReactLogo,
    skill_name: "React.js",
    skill_description: "Component-based UI",
  },
  {
    skill_logo: Express,
    skill_name: "Express.js",
    skill_description: "Server-side Framework",
  },
  {
    skill_logo: Node,
    skill_name: "node.js",
    skill_description: "Server Side Programming",
  },
  // {
  //   skill_logo: PHP,
  //   skill_name: "PHP",
  //   skill_description: "Server-side scripting",
  // },
  {
    skill_logo: MongoDB,
    skill_name: "Mongo DB",
    skill_description: "NoSQL database",
  },
  {
    skill_logo: MySQL,
    skill_name: "MySQL",
    skill_description: "Relational database",
  },
  {
    skill_logo: Tailwind_CSS,
    skill_name: "Tailwind CSS",
    skill_description: "Utility-first CSS framework",
  },
  // {
  //   skill_logo: FramerMotion,
  //   skill_name: "Framer Motion",
  //   skill_description: "Animation Library",
  // },
  // {
  //   skill_logo: SASS_CSS,
  //   skill_name: "SASS",
  //   skill_description: "CSS preprocessor",
  // },
  // {
  //   skill_logo: LESS_CSS,
  //   skill_name: "LESS",
  //   skill_description: "CSS preprocessor",
  // },
  {
    skill_logo: Three,
    skill_name: "Three.js",
    skill_description: "3D web graphics",
  },
  {
    skill_logo: Playwright,
    skill_name: "Playwright",
    skill_description: "Web testing automation",
  },
  {
    skill_logo: Cypress,
    skill_name: "Cypress",
    skill_description: "Web testing automation",
  },
  {
    skill_logo: Webpack,
    skill_name: "Webpack",
    skill_description: "Module bundler",
  },
  {
    skill_logo: Vite,
    skill_name: "Vite",
    skill_description: "Module bundler",
  },
  {
    skill_logo: C,
    skill_name: "C",
    skill_description: "Low-level programming",
  },
  {
    skill_logo: Cpp,
    skill_name: "C++",
    skill_description: "Object-oriented programming",
  },
  {
    skill_logo: Python,
    skill_name: "Python",
    skill_description: "General-purpose programming",
  },
  // {
  //   skill_logo: JQuery,
  //   skill_name: "JQuery",
  //   skill_description: "Javascript Library",
  // },
  {
    skill_logo: Git,
    skill_name: "Git",
    skill_description: "Version Control",
  },
];
