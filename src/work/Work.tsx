import SectionHeader from "../components/SectionHeader.tsx";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  website: string;
  source: string;
};

const ProjectCard = ({ id, title, description, image, website, source }: ProjectCardProps) => {
  return (
    <div id={id} className="flex flex-col xl:flex-row gap-10 lg:gap-20">
      <div className="relative w-full min-w-[300px] max-w-[600px] aspect-video rounded-4xl shadow-lg">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl border-2 border-[var(--primary)]" />
        <img src={image} alt={title} className="relative w-full h-full rounded-4xl object-cover" />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-[clamp(1.6rem,4.8vw+0.8rem,2rem)] font-semibold text-[var(--text)]">{title}</h3>

        {description && <p className="mb-10">{description}</p>}

        <div className="flex flex-wrap gap-5">
          <a className="inline-flex items-center gap-2 border-2 border-[var(--primary)] px-6 py-3 rounded-md text-[var(--primary)] transition-all duration-300 hover:text-[var(--text)] hover:border-[var(--text)]">
            Desgin <span>→</span>
          </a>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[var(--text)] px-6 py-3 rounded-md text-[var(--text)] transition-all duration-300 hover:text-[var(--primary)] hover:border-[var(--primary)]"
            >
              Website <span>↗</span>
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[var(--text)] px-6 py-3 rounded-md text-[var(--text)] transition-all duration-300 hover:text-[var(--primary)] hover:border-[var(--primary)]"
            >
              Source <span>↗</span>
            </a>
          )}
        </div>
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
          <ProjectCard
            id="sar-visualization"
            title="SAR Visualization"
            description="Developed an interactive React + D3 dashboard with five views to analyze 105 antimalarial compounds, accelerating potency comparisons by 4× using fisheye-enhanced visualizations."
            image="/work/SAR.png"
            website="https://sar-visualization.onrender.com"
            source="https://github.com/pleaselukau/SAR-Visualization"
          />

          <ProjectCard
            id="simpligami"
            title="Simpligami"
            description="Developed an interactive Three.js 3D origami tutorial with perspective-aware folding and ghost animations, reducing beginner mistakes by 18%."
            image="/work/simpligami.png"
            website="https://simpligami.onrender.com"
            source="https://github.com/HrushikeshJoshiUIC/Simpligami"
          />

          <ProjectCard
            id="flavor-charter"
            title="Flavor Charter"
            description="Developed an interactive data visualization tool to explore multivariate flavor perception patterns, outliers, and demographic differences across food preferences."
            image="/work/flavor_charter_dashboard.png"
            website="https://flavorcharter.org/"
            source="https://github.com/francescobotto/FlavorCharterInfo"
          />

          <ProjectCard
            id="ask-your-crush"
            title="Ask Your Crush Out Online"
            description="Built a user-friendly React + TypeScript web app for personalized online date proposals, featuring simplified customization and automated email notifications for responses."
            image="/work/ask_your_crush_out_online.png"
            website="https://iwaswondering.netlify.app"
            source="https://github.com/HrushikeshJoshi187/Ask_Your_Crush_Out_Online"
          />

          <ProjectCard
            id="rhythpic"
            title="Rhythpic"
            description="Developed an AI-powered music visualization platform using React and Node.js, generating synchronized images from Spotify lyrics with Stable Diffusion."
            image="/work/rhythpic.png"
            website="https://rhythpic-front.onrender.com"
            source="https://github.com/skris56uic/RhythPic"
          />

          <ProjectCard
            id="kevin-rush-portfolio"
            title="Kevin Rush Portfolio"
            description="Built a responsive website using Tailwind CSS, TypeScript, and Framer Motion, exploring modern UI design and smooth animations."
            image="/work/kevin_rush_portfolio.png"
            website="https://kevinrushportfoliowebsite.netlify.app"
            source="https://github.com/HrushikeshJoshi187/Kevin_Rush_Portfolio_Website"
          />

          <ProjectCard
            id="forever"
            title="Forever"
            description="Built a responsive E-Commerce website using React, TypeScript, and Tailwind CSS, featuring GSAP animations, smooth scrolling, glassmorphism, and EmailJS integration."
            image="/work/forever.png"
            website="https://ecommercewebsitehrushijoshi.netlify.app"
            source="https://github.com/HrushikeshJoshi187/E_Commerce_Website"
          />

          <ProjectCard
            id="john-doe-portfolio"
            title="John Doe Portfolio"
            description="Built a responsive portfolio website using React, TypeScript, and Tailwind CSS, featuring GSAP animations, smooth scrolling, glassmorphism, and EmailJS integration."
            image="/work/john_doe_portfolio.png"
            website="https://johndoeportfoliowebsite.netlify.app"
            source="http://github.com/HrushikeshJoshi187/John_Doe_Portfolio_Website"
          />

          <ProjectCard
            id="led-cube"
            title="Led Cube"
            description="Designed and built an 8×8×8 programmable LED cube using flip-flop registers and an Arduino microcontroller, implementing layer-by-layer multiplexing and persistence of vision to create 3D light patterns."
            image="/work/led.jpg"
            website=""
            source=""
          />

          <ProjectCard
            id="3d-printer"
            title="3D Printer"
            description="Designed and built a custom 3D printer from scratch using wood and drawer sliders, implementing G-code-based motion control and calibration to achieve 0.2 mm printing precision."
            image="/work/3d.jpg"
            website=""
            source=""
          />

          <ProjectCard
            id="quadcopter"
            title="Quadcopter"
            description="Designed and implemented a self-stabilizing quadcopter by developing a flight controller, RF transmitter and receiver, and PID-based control system."
            image="/work/quadcopter.jpg"
            website=""
            source=""
          />
        </div>
      </section>
    </main>
  );
}
