import React from "react";

type EducationCardProps = { time: string; title: string; location: string; points: React.ReactNode[] };

function EducationCard({ time, title, location, points }: EducationCardProps) {
  return (
    <div className="w-full flex lg:flex-row flex-col items-start gap-4 lg:gap-0">
      <div className="w-[250px] text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-sky-300 font-semibold mt-2">{time}</div>
      <div className="flex-1 pl-4 md:pl-12 border-l-1 border-zinc-600 ">
        <div className="font-bold text-zinc-300 text-[clamp(1.5rem,2.8vw+0.5rem,1.75rem)]">{title}</div>
        <div className="italic text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-zinc-400 mb-4">{location}</div>
        <ul className="flex flex-col space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-[clamp(0.4rem,0.8vw,0.7rem)] w-2 h-2 bg-sky-300 rounded-full flex-shrink-0"></span>

              <span className="text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] leading-[1.5] text-zinc-300">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <div className="w-full flex items-center justify-center gap-4">
        <div className="w-12 h-px bg-zinc-600 mb-4"></div>
        <h2 className="text-zinc-500 text-[clamp(1.6rem,4.8vw+0.8rem,3.2rem)] font-bold mb-4">Education</h2>
        <div className=" flex-1 h-px bg-zinc-600 mb-4"></div>
      </div>

      <div className="flex flex-col gap-12 sm:gap-18 lg:gap-24 items-start mt-4">
        <EducationCard
          time="Aug 2024 – May 2026"
          title="Master of Science in Computer Science"
          location="University of Illinois at Chicago, Chicago, IL"
          points={[
            <>
              What I am learned:
              <br />
              User Interface Desgin and Programming, Database Systems, Secure Web Application Development, Distributed Systems, Artificial Intelligence, Human
              Computer Interface, Visual Data Science, Big Data Mining, Responsible Data Science and Algorithmic Fairness
            </>,
          ]}
        />

        <EducationCard
          time="Jul 2017 – Apr 2021"
          title="Bachelor of Engineering in Computer Engineering"
          location="Savitribai Phule Pune University, Pune, MH, India"
          points={[]}
        />
      </div>
    </section>
  );
}
