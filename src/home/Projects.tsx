import SectionHeader from "../components/SectionHeader";

import kevin_rush_portfolio from "/work/kevin_rush_portfolio.png";

function ProjectCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
      <figure className="w-full lg:w-[300px] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-4xl" />
      </figure>

      <div className="flex-1 min-w-0 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)]">
        <div className="font-bold text-[var(--text)] text-[clamp(1.25rem,3vw+0.5rem,1.75rem)] mb-2">{title}</div>
        <div className="text-[var(--text-muted)]">{description}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader title="Websites I’m Proud Of" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 ">
        <ProjectCard
          title="Kevin Rush Portfolio"
          description="A modern portfolio website showcasing Kevin Rush's work and skills."
          image={kevin_rush_portfolio}
        />
      </div>
    </section>
  );
}
