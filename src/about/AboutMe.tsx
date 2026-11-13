import hrushikesh_joshi_hero from "/images/hrushikesh_joshi_hero_2.jpg";
import SectionHeader from "../components/SectionHeader.tsx";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pt-20 pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader title="About Me" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 ">
        <div className="flex-1 min-w-0 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)]">
          <p className="mb-4">
            I’m a frontend engineer obsessed with building interfaces that just work, and look good doing it. I love
            turning complex data and messy designs into intuitive, accessible experiences.
          </p>

          <p className="mb-4">
            Recently, I graduated from the University of Illinois Chicago with a M.S. in Computer Science.
          </p>

          <p>
            Outside of coding, you’ll find me climbing mountains, playing tennis, or 3D printing things that probably
            shouldn’t exist.
          </p>
        </div>

        <figure className="relative w-[280px] sm:w-[320px]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-4xl border-2 border-[var(--primary)]"
          />

          <img
            src={hrushikesh_joshi_hero}
            alt="Portrait of Hrushikesh Joshi"
            className="relative aspect-[3/4] w-full rounded-4xl object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
