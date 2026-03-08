import React from "react";

type ExperienceCardProps = { title: string; time: string; location: string; points: React.ReactNode[] };

function ExperienceCard({ title, time, location, points }: ExperienceCardProps) {
  return (
    <div className="flex-1 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-start gap-4 mb-1">
        <div className="font-semibold text-lg">{title}</div>

        <div className="whitespace-nowrap text-sm font-medium text-gray-700">{time}</div>
      </div>

      <div className="text-gray-500 mb-4">{location}</div>

      <ul className="flex flex-col items-start space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex items-center justify-center w-5 h-5">
              <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></span>
            </span>
            <span className="text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="container px-4 mx-auto lg:px-8 xl:max-w-6xl">
      <ExperienceCard
        title="Graduate Research Assistant @ University of Illinois Chicago (Part Time)"
        time="Dec 2025 – Present"
        location="Chicago, IL"
        points={[
          <>
            Spearheaded the migration of a legacy Expo-based React Native app to TypeScript and NativeWind, resolving 15 state and navigation issues that caused
            runtime crashes and delivered a stable, maintainable platform.
          </>,
          <>
            Implemented a comprehensive digital marketing strategy across Reddit, email, and social media platforms, leveraging targeted content and outreach to
            increase app engagement, acquiring 47 new users in just three weeks.
          </>,
          <>
            Redesigned the dashboard storytelling using findings from 17 visualization studies, proposing 4 new Comparison and agreement-focused design concepts
            that result in intuitive visual exploration and engagement.
          </>,
        ]}
      />

      <ExperienceCard
        title="Building Services Aide @ University of Illinois Chicago - Campus Housing (Part Time)"
        time="May 2025 – Dec 2025"
        location="Chicago, IL"
        points={[
          <>Developed strong time management skills, effectively balancing multiple tasks and deadlines while maintaining focus and productivity.</>,
          <>
            Conducted candidate interviews, assessing skills, experience, and cultural fit, and provided structured feedback to inform hiring decisions, helping
            ensure the selection of strong, qualified candidates.
          </>,
        ]}
      />

      <ExperienceCard
        title="Full Stack Developer Intern @ Ingenio Care, Inc. (Internship)"
        time="May 2025 – Aug 2025"
        location="Chicago, IL"
        points={[
          <>
            Architected 3 dashboards and onboarding flows for patients, providers, and consultants using React, TypeScript, Material-UI, and Redux, streamlining
            multi-tenant access and ensuring a secure, fast experience.
          </>,
          <>
            Engineered a serialization pipeline on AWS EC2 to process 10GB deeply nested JSON files, reducing processing time from 2 hours to under 25 minutes,
            and enabling rapid internal access to pricing data.
          </>,
          <>
            Implemented a Cube.js proof-of-concept with advanced pre-aggregations and in-memory caching, reducing response times for aggregation-heavy dashboard
            queries by 25% and enabling sub-second analytics.
          </>,
        ]}
      />

      <ExperienceCard
        title="Self-Proprietor @ 3D Bakery"
        time="Aug 2023 – Aug 2024"
        location="Pune, MH, India"
        points={[
          <>
            Delivered 270+ 3D printing projects, including custom FreeCAD designs, which generated ₹20K in profit, while building three self-sustaining printers
            and a temperature-controlled lab.
          </>,
        ]}
      />

      <ExperienceCard
        title="Frontend Developer @ Persistent Systems (Full Time)"
        time="Dec 2021 – Aug 2023"
        location="Pune, MH, India"
        points={[
          <>
            Directed a team of three to build an automated Playwright + Jest + CircleCI framework, reducing cross-browser regression test time from 4 hours to
            30 minutes, enabling faster releases and earlier bug detection.
          </>,
          <>
            Developed a custom date picker with full localization support in React, TypeScript, and Nebula.js, resolving 2,000+ customer-reported date-entry
            issues and streamlining date selection by 38%.
          </>,
          <>
            Remediated 50+ critical defects across 7 DOMO API connectors using Cypress with parameterized tests, mocks, fixtures, and network stubbing, lowering
            production bug leakage by 35%.
          </>,
          <>
            Orchestrated a Playwright + OpenPyXL scraper to automate collection and transformation of 10K+ UI logs to Excel, reducing an 8-hour process to 3
            hours and enabling faster trend analysis.
          </>,
        ]}
      />

      <ExperienceCard title="End-of-Life Caregiver for Immediate Family Member" time="May 2021 – Dec 2021" location="Nashik, MH, India" points={[]} />

      <ExperienceCard
        title="Software Intern @ J.N.Engineering (Internship)"
        time="Nov 2019 – May 2020"
        location="Nashik, MH, India"
        points={[
          <>
            Designed and developed a role-based ERP system in PHP, integrating fragmented business data across Excel, Word, Tally, Workday, ledgers, and
            physical records, reducing decision-making time from 1 hour to 20 minutes.
          </>,
          <>
            Built interactive D3.js dashboards to monitor operational performance in real time, delivering live system updates within 10 seconds through AJAX
            polling and enabling stakeholders to quickly access critical insights.
          </>,
          <>
            Automated multi-format document generation (.docx, .xls, .pdf) for invoices, quotations, orders, and payroll using PHPWord, PhpSpreadsheet, and
            Dompdf, reducing preparation time from 30 minutes to under 10 minutes.
          </>,
        ]}
      />

      <ExperienceCard
        title="Software Intern @ Siemens (Internship)"
        time="Nov 2018 – Dec 2018"
        location="Nashik, MH, India"
        points={[
          <>
            Designed and implemented a feedback-based temperature control solution in C/C++ on an STM32 microcontroller, reducing manufacturing defects by 2.2%
            by eliminating overshooting, undershooting, and thermal oscillations.
          </>,
          <>
            Developed an adaptive auto-tuning mechanism using the Ziegler–Nichols algorithm, achieving stable system performance within 15 cycles and minimizing
            the risks associated with manual tuning under dynamic operating conditions.
          </>,
          <>
            Improved sensor input reliability by evaluating multiple filtering techniques and deploying a Kalman filter, resulting in a 60% reduction in
            high-frequency noise and more accurate feedback signals.
          </>,
        ]}
      />
    </section>
  );
}
