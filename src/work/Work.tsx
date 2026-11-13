import SectionHeader from "../components/SectionHeader.tsx";

type ProjectCardProps = { title: string; description: string; image: string };

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <div className="group flex flex-col md:flex-row">
      <div className="relative w-full md:w-[600px] h-[400px]">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl border-2 border-[var(--primary)]" />
        <img src={image} alt={title} className="relative w-full h-full rounded-4xl object-cover" />
      </div>

      <div className="flex flex-1 flex-col pl-20 p-5">
        <h3
          className="
            text-[clamp(1rem,2.8vw+0.5rem,1.25rem)]
            font-bold
            mb-3
            transition-colors duration-300
            text-[var(--text)]
            group-hover:text-[var(--primary)]
          "
        >
          {title}
          <span className="ml-2">↗</span>
        </h3>

        {description && <p className="text-sm sm:text-base text-white/70 leading-relaxed">{description}</p>}
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <main className="w-full h-full">
      <section
        id="work"
        className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pt-20 pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
      >
        <SectionHeader title="All Projects" />

        <div className="flex flex-col gap-20 mt-5">
          <ProjectCard title="SAR Visualization" description="" image="/work/SAR.png" />
          <ProjectCard title="Ask Your Crush Out Online" description="" image="/work/ask_your_crush_out_online.png" />
          <ProjectCard title="Flavor Charter" description="" image="/work/flavor_charter.png" />
          <ProjectCard title="Simpligami" description="" image="/work/simpligami.png" />
          <ProjectCard title="Rhythpic" description="" image="/work/rhythpic2.png" />
          <ProjectCard title="Kevin Rush Portfolio" description="" image="/work/kevin_rush_portfolio.jpg" />
          <ProjectCard title="Forever" description="" image="/work/forever.png" />
          <ProjectCard title="John Doe Portfolio" description="" image="/work/john_doe_portfolio.png" />
          <ProjectCard title="Led Cube" description="" image="/work/led.jpg" />
          <ProjectCard title="3D Printer" description="" image="/work/3d.jpg" />
          <ProjectCard title="Quadcopter" description="" image="/work/quadcopter.jpg" />
        </div>
      </section>
    </main>
  );
}
