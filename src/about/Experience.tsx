import React from "react";

import { useTheme } from "../context/ThemeContext.tsx";
import SectionHeader from "../components/SectionHeader.tsx";

type ExperienceCardProps = { time: string; title: string; location: string; points: React.ReactNode[] };

function ExperienceCard({ time, title, location, points }: ExperienceCardProps) {
  const { theme } = useTheme();
  return (
    <div className="w-full flex lg:flex-row flex-col items-start gap-4 lg:gap-0">
      <div
        className={`w-[250px] text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--primary)] ${theme === "dark" ? "" : "font-bold"}`}
      >
        {time}
      </div>
      <div className="flex-1 pl-4 md:pl-12 border-l-1 border-[var(--line)] ">
        <div className="font-bold text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--text)]">{title}</div>
        <div className="italic text-[clamp(1rem,2.8vw+0.5rem,1.25rem)] text-[var(--text-muted)] mb-4">{location}</div>
        <ul className="flex flex-col space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="[@media(max-width:300px)]:mt-2 mt-2.5 sm:mt-2.75 w-2 h-2 bg-[var(--primary)] rounded-full flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader title="Where I’ve Worked" />

      <div className="flex flex-col gap-12 sm:gap-18 lg:gap-24 items-start mt-4">
        <ExperienceCard
          time="Dec 2025 – Present"
          title="Graduate Research Assistant"
          location="University of Illinois at Chicago, Chicago, IL"
          points={[
            <>
              Migrated a legacy React Native app to TypeScript + NativeWind, fixing 15 critical bugs and delivering a
              stable, maintainable platform.
            </>,
            <>
              Launched a digital marketing push across Reddit, email, and socials, gaining 47 new users in three weeks.
            </>,
            <>
              Redesigned dashboards using insights from 17 visualization studies, creating 4 new comparison-focused
              concepts for intuitive data exploration.
            </>,
          ]}
        />

        <ExperienceCard
          time="May 2025 – Aug 2025"
          title="Full Stack Developer Intern"
          location="Ingenio Care, Inc., Chicago, IL"
          points={[
            <>
              Built dashboards and onboarding flows for patients, providers, and consultants using React, TypeScript,
              Material-UI, and Redux, streamlining multi-tenant access.
            </>,
            <>
              Engineered an AWS EC2 pipeline to process 10GB JSON files, cutting processing time from 2 hours to under
              25 minutes.
            </>,
            <>
              Implemented a Cube.js PoC with pre-aggregations and in-memory caching, reducing dashboard query times by
              25% for sub-second analytics.
            </>,
          ]}
        />

        <ExperienceCard
          time="Aug 2023 – Aug 2024"
          title="Self-Proprietor"
          location="3D Bakery, Pune, MH, India"
          points={[
            <>
              Delivered 270+ 3D printing projects, including custom FreeCAD designs, which generated ₹20K in profit,
              while building three self-sustaining printers and a temperature-controlled lab.
            </>,
          ]}
        />

        <ExperienceCard
          time="Dec 2021 – Aug 2023"
          title="Frontend Developer"
          location="Persistent Systems, Pune, MH, India"
          points={[
            <>
              Led a 3-person team to build an automated Playwright + Jest + CircleCI framework, cutting cross-browser
              test time from 4 hours to 30 minutes.
            </>,
            <>
              Built a fully localized React/TypeScript/Nebula.js date picker, fixing 2,000+ customer issues and speeding
              date selection by 38%.
            </>,
            <>Remediated 50+ critical DOMO API defects using Cypress, reducing production bugs by 35%.</>,
            <>
              Automated 10K+ UI log transformations to Excel with Playwright + OpenPyXL, shrinking an 8-hour task to 3
              hours.
            </>,
          ]}
        />

        <ExperienceCard
          time="May 2021 – Dec 2021"
          title="End-of-Life Caregiver for Immediate Family Member"
          location="Nashik, MH, India"
          points={[]}
        />

        <ExperienceCard
          time="Nov 2019 – May 2020"
          title="Software Intern"
          location="J.N.Engineering, Nashik, MH, India"
          points={[
            <>
              Developed a role-based PHP ERP system, consolidating Excel, Word, Tally, Workday, ledgers, and physical
              records, cutting decision time from 1 hour to 20 minutes.
            </>,
            <>
              Built interactive D3.js dashboards with real-time updates within 10 seconds via AJAX polling, giving
              stakeholders instant operational insights.
            </>,
            <>
              Automated multi-format document generation (.docx, .xls, .pdf) for invoices, quotes, orders, and payroll,
              reducing prep time from 30 minutes to under 10.
            </>,
          ]}
        />

        <ExperienceCard
          time="Nov 2018 – Dec 2018"
          title="Software Intern"
          location="Siemens, Nashik, MH, India"
          points={[
            <>
              Built a feedback-based STM32 temperature controller in C/C++, cutting manufacturing defects by 2.2% by
              eliminating overshoot, undershoot, and oscillations.
            </>,
            <>
              Implemented an adaptive Ziegler–Nichols auto-tuning mechanism, stabilizing performance within 15 cycles
              and reducing manual tuning risks.
            </>,
            <>
              Enhanced sensor reliability with a Kalman filter, reducing high-frequency noise by 60% for more accurate
              feedback.
            </>,
          ]}
        />
      </div>
    </section>
  );
}
