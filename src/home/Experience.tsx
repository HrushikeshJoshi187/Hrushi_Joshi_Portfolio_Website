import React, { useState } from "react";

type ExperienceCardProps = { title: string; location: string; points: React.ReactNode[] };

function ExperienceCard({ title, location, points }: ExperienceCardProps) {
  return (
    <div className="flex-1 md:pl-12">
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
  );
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal">
      <div className="w-full flex items-center justify-center gap-4">
        <div className="w-12 h-px bg-zinc-600 mb-4"></div>
        <h2 className="text-zinc-500 text-[clamp(1.6rem,4.8vw+0.8rem,3.2rem)] font-bold mb-4">Experience</h2>
        <div className=" flex-1 h-px bg-zinc-600 mb-4"></div>
      </div>

      <div className="flex flex-col md:flex-row items-start mt-4">
        <div className="md:h-[400px] w-full md:w-[300px] relative flex md:flex-col items-start md:items-center justify-start md:justify-center overflow-x-scroll md:overflow-hidden mb-8 md:mb-0 pb-4 md:pb-0">
          <div
            className="h-[50px] absolute hidden md:flex top-0 right-0 w-[2px] bg-sky-300 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateY(${activeIndex * 50}px)` }}
          />
          {[
            "Dec 2025 – Present",
            "May 2025 – Dec 2025",
            "May 2025 – Aug 2025",
            "Aug 2023 – Aug 2024",
            "Dec 2021 – Aug 2023",
            "May 2021 – Dec 2021",
            "Nov 2019 – May 2020",
            "Nov 2018 – Dec 2018",
          ].map((title, index) => (
            <button
              key={title}
              type="button"
              aria-pressed={activeIndex === index}
              className={`h-[50px] md:w-full px-4 md:px-0 flex-shrink-0 md:flex-1 text-right font-bold md:pr-12 text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] border-b-2 md:border-b-0 border-r-0 md:border-r-2 ${activeIndex === index ? "text-sky-300 border-b-sky-400 md:border-r-zinc-600" : "text-zinc-500 border-b-zinc-600"} hover:text-zinc-300 transition-colors duration-300 ease-in-out`}
              onClick={() => setActiveIndex(index)}
            >
              {title}
            </button>
          ))}
        </div>

        {activeIndex === 0 && (
          <ExperienceCard
            title="Graduate Research Assistant"
            location="University of Illinois at Chicago, Chicago, IL"
            points={[
              <>Migrated a legacy React Native app to TypeScript + NativeWind, fixing 15 critical bugs and delivering a stable, maintainable platform.</>,
              <>Launched a digital marketing push across Reddit, email, and socials, gaining 47 new users in three weeks.</>,
              <>
                Redesigned dashboards using insights from 17 visualization studies, creating 4 new comparison-focused concepts for intuitive data exploration.
              </>,
            ]}
          />
        )}

        {activeIndex === 1 && (
          <ExperienceCard
            title="Building Services Aide"
            location="University of Illinois at Chicago, Chicago, IL"
            points={[
              <>DMastered time management, juggling multiple tasks and deadlines without losing focus or productivity.</>,
              <>Interviewed candidates and provided structured feedback, helping hire top-quality, culturally aligned talent.</>,
            ]}
          />
        )}

        {activeIndex === 2 && (
          <ExperienceCard
            title="Full Stack Developer Intern"
            location="Ingenio Care, Inc., Chicago, IL"
            points={[
              <>
                Built dashboards and onboarding flows for patients, providers, and consultants using React, TypeScript, Material-UI, and Redux, streamlining
                multi-tenant access.
              </>,
              <>Engineered an AWS EC2 pipeline to process 10GB JSON files, cutting processing time from 2 hours to under 25 minutes.</>,
              <>Implemented a Cube.js PoC with pre-aggregations and in-memory caching, reducing dashboard query times by 25% for sub-second analytics.</>,
            ]}
          />
        )}

        {activeIndex === 3 && (
          <ExperienceCard
            title="Self-Proprietor"
            location="3D Bakery, Pune, MH, India"
            points={[
              <>
                Delivered 270+ 3D printing projects, including custom FreeCAD designs, which generated ₹20K in profit, while building three self-sustaining
                printers and a temperature-controlled lab.
              </>,
            ]}
          />
        )}

        {activeIndex === 4 && (
          <ExperienceCard
            title="Frontend Developer"
            location="Persistent Systems, Pune, MH, India"
            points={[
              <>
                Led a 3-person team to build an automated Playwright + Jest + CircleCI framework, cutting cross-browser test time from 4 hours to 30 minutes.
              </>,
              <>Built a fully localized React/TypeScript/Nebula.js date picker, fixing 2,000+ customer issues and speeding date selection by 38%.</>,
              <>Remediated 50+ critical DOMO API defects using Cypress, reducing production bugs by 35%.</>,
              <>Automated 10K+ UI log transformations to Excel with Playwright + OpenPyXL, shrinking an 8-hour task to 3 hours.</>,
            ]}
          />
        )}

        {activeIndex === 5 && <ExperienceCard title="End-of-Life Caregiver for Immediate Family Member" location="Nashik, MH, India" points={[]} />}

        {activeIndex === 6 && (
          <ExperienceCard
            title="Software Intern"
            location="J.N.Engineering, Nashik, MH, India"
            points={[
              <>
                Developed a role-based PHP ERP system, consolidating Excel, Word, Tally, Workday, ledgers, and physical records, cutting decision time from 1
                hour to 20 minutes.
              </>,
              <>
                Built interactive D3.js dashboards with real-time updates within 10 seconds via AJAX polling, giving stakeholders instant operational insights.
              </>,
              <>
                Automated multi-format document generation (.docx, .xls, .pdf) for invoices, quotes, orders, and payroll, reducing prep time from 30 minutes to
                under 10.
              </>,
            ]}
          />
        )}

        {activeIndex === 7 && (
          <ExperienceCard
            title="Software Intern"
            location="Siemens, Nashik, MH, India"
            points={[
              <>
                Built a feedback-based STM32 temperature controller in C/C++, cutting manufacturing defects by 2.2% by eliminating overshoot, undershoot, and
                oscillations.
              </>,
              <>Implemented an adaptive Ziegler–Nichols auto-tuning mechanism, stabilizing performance within 15 cycles and reducing manual tuning risks.</>,
              <>Enhanced sensor reliability with a Kalman filter, reducing high-frequency noise by 60% for more accurate feedback.</>,
            ]}
          />
        )}
      </div>
    </section>
  );
}
