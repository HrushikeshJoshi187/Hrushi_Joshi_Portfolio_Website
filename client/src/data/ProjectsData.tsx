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

export const projects: Project[] = [
  {
    image: project_1,
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    link: "https://musify-5al0.onrender.com/",
  },
  {
    image: project_2,
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    link: "https://pixstock-official.vercel.app/",
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


