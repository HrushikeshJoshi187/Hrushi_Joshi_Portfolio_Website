import SectionHeader from "../components/SectionHeader";

type ProjectCardProps = { title: string; description: string; image: string; className?: string };

const ProjectCard = ({ title, description, image, className = "" }: ProjectCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-4xl shadow-md 
        bg-cover bg-center 
        bg-contain bg-no-repeat
        ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="
          absolute inset-0
          bg-sky-700/70
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
          backdrop-blur-xl
          border border-white/10
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
        "
      >
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>

        <p className="text-white/90 text-sm max-w-md">{description}</p>

        <div className="rounded-lg bg-white flex p-2 mt-4">
          <img src="/skills/react.svg" alt="View Project" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader title="Websites I’m Proud Of" />

      <div className="grid grid-cols-12 auto-rows-[180px] gap-5 w-full mt-5">
        <ProjectCard
          title="Kevin Rush Portfolio"
          description="A modern portfolio experience built with React and Tailwind."
          image="/work/SAR.png"
          className="col-span-12 md:col-span-8 row-span-2"
        />

        <ProjectCard
          title="Analytics Dashboard"
          description="Interactive data visualizations with D3.js."
          image="/work/ask_your_crush_out_online.png"
          className="col-span-12 md:col-span-4 row-span-2"
        />

        <ProjectCard
          title="Flavor Charter App and Dashboard"
          description="Reusable component architecture and design system."
          image="/work/flavor_charter.png"
          className="col-span-12 md:col-span-3 row-span-2"
        />

        <ProjectCard
          title="Finance Platform"
          description="Responsive financial management dashboard."
          image="/work/simpligami.png"
          className="col-span-12 md:col-span-6 row-span-2"
        />

        <ProjectCard
          title="3D Experience"
          description="Interactive WebGL and motion-based experiences."
          image="/work/rhythpic2.png"
          className="col-span-12 md:col-span-3 row-span-2"
        />

        <ProjectCard
          title="Finance Platform"
          description="Responsive financial management dashboard."
          image="/work/kevin_rush_portfolio.jpg"
          className="col-span-12 md:col-span-3 row-span-2"
        />

        <ProjectCard
          title="Forever"
          description="Interactive WebGL and motion-based experiences."
          image="/work/forever.png"
          className="col-span-12 md:col-span-6 row-span-2"
        />

        <ProjectCard
          title="John Doe Portfolio"
          description="Responsive financial management dashboard."
          image="/work/john_doe_portfolio.png"
          className="col-span-12 md:col-span-3 row-span-2"
        />
      </div>
    </section>
  );
}
