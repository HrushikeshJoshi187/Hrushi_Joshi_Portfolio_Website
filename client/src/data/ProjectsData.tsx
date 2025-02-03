import project_1 from "../assets/project_images/project-1.jpg";
import project_2 from "../assets/project_images/project-2.jpg";
import project_3 from "../assets/project_images/project-3.jpg";
import project_4 from "../assets/project_images/project-4.jpg";
import project_5 from "../assets/project_images/project-5.jpg";
import project_6 from "../assets/project_images/project-6.jpg";

type Project = {
  image: string;
  title: string;
  tags: string[];
  link: string;
};

// const website_url = "https://hrushikeshjoshi.netlify.app";
const website_url = "http://localhost:5173";

export const projects: Project[] = [
  {
    image: project_1,
    title: "Kevin Rush Portfolio Website",
    tags: ["API", "MVC", "Development"],
    link: `${website_url}/kevin_rush_portfolio_website`,
  },
  {
    image: project_2,
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    link: `${website_url}/John_Doe_portfolio_website`,
  },
  {
    image: project_3,
    title: "Recipe app",
    tags: ["Development", "API"],
    link: "",
  },
  {
    image: project_4,
    title: "Real state website",
    tags: ["Web-design", "Development"],
    link: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    image: project_5,
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    link: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    image: project_6,
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    link: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];
