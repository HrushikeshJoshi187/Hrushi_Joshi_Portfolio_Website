import SectionHeader from "../components/SectionHeader";

import kevin_rush_portfolio from "/work/kevin_rush_portfolio.png";

export default function Work() {
  return (
    <section
      id="work"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader number="02." title="Websites I’m Proud Of" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 ">
        <figure className=" flex-1 rounded-2xl overflow-hidden">
          <img
            src={kevin_rush_portfolio}
            alt="Kevin Rush Portfolio"
            className="w-full h-full object-cover rounded-4xl"
          />
        </figure>

        <div className="flex-1 min-w-0 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)]"></div>
      </div>
    </section>
  );
}
