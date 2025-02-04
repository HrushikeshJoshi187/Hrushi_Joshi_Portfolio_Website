import project_1 from "../assets/project_images/project_1.png";
import project_2 from "../assets/project_images/project_2.png";
import project_3 from "../assets/project_images/project_3.png";

type Project = {
  image: string;
  title: string;
  project_page_link: string;
  website_link: string;
};

const website_url = "https://hrushikeshjoshi.netlify.app";
// const website_url = "http://localhost:5173";

export const projects: Project[] = [
  {
    image: project_1,
    title: "Kevin Rush Portfolio Website",
    project_page_link: `${website_url}/kevin_rush_portfolio_website`,
    website_link: "https://kevinrushportfoliowebsite.netlify.app",
  },
  {
    image: project_2,
    title: "John Doe Portfolio Website",
    project_page_link: `${website_url}/John_Doe_portfolio_website`,
    website_link: "https://johndoeportfoliowebsite.netlify.app",
  },
  {
    image: project_3,
    title: "Ask Your Crush Out Online",
    project_page_link: `${website_url}/ask_your_crush_out_online`,
    website_link: "https://iwaswondering.netlify.app",
  },
];
