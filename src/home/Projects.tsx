import { Link } from "react-router-dom";

import SectionHeader from "../components/SectionHeader.tsx";

type ProjectCardProps = { id: string; title: string; description: string; image: string; className?: string };

const ProjectCard = ({ id, title, description, image, className = "" }: ProjectCardProps) => {
  return (
    <Link
      to={`/work#${id}`}
      className={`group relative overflow-hidden rounded-4xl shadow-lg 
        bg-cover bg-center 
        bg-contain bg-no-repeat
        ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-sky-700/0
          to-75% to-sky-700/100
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      <div
        className="
          absolute inset-0
          flex flex-col justify-end
          p-6
          bg-white/5
          backdrop-blur-[1px]
          border border-white/10
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
        "
      >
        <h3 className="text-white text-2xl font-semibold mb-2">
          {title}
          <span className="ml-2">→</span>
        </h3>

        <p className="text-white/90 text-sm max-w-md">{description}</p>
      </div>
    </Link>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader title="Projects I’m Proud Of" />

      <div className="grid grid-cols-12 auto-rows-[180px] gap-5 w-full mt-5">
        <ProjectCard
          id="sar-visualization"
          title="SAR Visualization"
          description=""
          image="/work/SAR.png"
          className="col-span-12 md:col-span-8 row-span-2"
        />

        <ProjectCard
          id="ask-your-crush"
          title="Ask Your Crush Out Online"
          description=""
          image="/work/ask_your_crush_out_online.png"
          className="col-span-12 md:col-span-4 row-span-2"
        />

        <ProjectCard
          id="flavor-charter"
          title="Flavor Charter"
          description=""
          image="/work/flavor_charter.png"
          className="col-span-12 md:col-span-3 row-span-2"
        />

        <ProjectCard
          id="simpligami"
          title="Simpligami"
          description=""
          image="/work/simpligami.png"
          className="col-span-12 md:col-span-6 row-span-2"
        />

        <ProjectCard
          id="rhythpic"
          title="Rhythpic"
          description=""
          image="/work/rhythpic2.png"
          className="col-span-12 md:col-span-3 row-span-2"
        />

        <ProjectCard
          id="forever"
          title="Forever"
          description=""
          image="/work/forever.png"
          className="col-span-12 md:col-span-6 row-span-2"
        />

        <ProjectCard
          id="led-cube"
          title="Led Cube"
          description=""
          image="/work/led.jpg"
          className="col-span-12 md:col-span-6 row-span-2"
        />
      </div>
    </section>
  );
}
