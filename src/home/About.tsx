import hrushikesh_joshi_hero from "/images/hrushikesh_joshi_hero.webp";

export default function About() {
  return (
    <section className="px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80">
      <div className="w-full flex items-center justify-center gap-4">
        <div className=" w-12 h-px bg-zinc-400 mb-4"></div>
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4">About Me</h2>
        <div className=" flex-1 h-px bg-zinc-400 mb-4"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 ">
        <div className="flex-1  min-w-0  text-zinc-300">
          <p className="mb-4">
            I’m a frontend engineer obsessed with building interfaces that just work, and look good doing it. My toolkit spans React, TypeScript, Tailwind,
            Material-UI, and D3.js, and I love turning complex data and messy designs into intuitive, accessible experiences.
          </p>

          <p className="mb-4">
            Currently, I’m diving deeper into CS at the University of Illinois Chicago, modernizing dashboards and upgrading legacy apps, one TypeScript
            migration at a time. Previously, I’ve tinkered with everything from 3D dashboards to automated pipelines at places like Persistent Systems and
            Ingenio Care Inc.
          </p>

          <p>
            When I’m not coding, I’m climbing mountains, swinging a tennis racket, or 3D printing something that probably shouldn’t exist, all in the name of
            curiosity and creativity.
          </p>
        </div>

        <figure className="flex-shrink-0 w-[320px] h-[480px] rounded-2xl overflow-hidden">
          <img src={hrushikesh_joshi_hero} alt="Portrait of Hrushikesh Joshi" className="w-full h-full object-cover rounded-4xl" />
        </figure>
      </div>
    </section>
  );
}
