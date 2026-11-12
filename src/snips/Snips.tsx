import { contacts, degrees, skills, experiences, projects, texts } from "./data.ts";
import Snip from "./Snip.tsx";

export default function Snips() {
  return (
    <main className="w-full h-full text-md">
      <section className="w-full min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl flex flex-col justify-center gap-2 md:gap-4 overflow-hidden break-normal">
        <div className="w-full border rounded-xl p-8 my-8 text-sm">
          <div className="flex flex-col">
            <Snip text={contacts.name} className="font-bold text-4xl text-[var(--text)]" />

            <div className="flex flex-wrap">
              <Snip text={contacts.phone} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.email} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.address} />

              <span className="px-1"></span>
              <Snip text={contacts.city} />

              <span className="px-1"></span>
              <Snip text={contacts.state} />

              <span className="opacity-50 px-1.5">-</span>
              <Snip text={contacts.pincode} />

              <span className="px-1"></span>
              <Snip text={contacts.country} />
            </div>

            <div className="flex flex-wrap mt-2">
              <Snip text={contacts.linkedin} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.resume} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.portfolio} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.github} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.instagram} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.facebook} />

              <span className="opacity-50 px-1.5">|</span>
              <Snip text={contacts.X} />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-xl text-[var(--text)] border-b border-current pb-0.5 mb-1.5">Education</h2>

            {degrees.map((degree, index) => {
              const baseId = `education-${index}`;

              return (
                <div key={baseId} className="mt-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[var(--text)]">
                    <span className="min-w-0">
                      <Snip text={degree.university} className="font-bold" />

                      <span className="opacity-50 px-1.5">|</span>
                      <Snip text={degree.location} />
                    </span>

                    <span className="whitespace-nowrap tabular-nums">
                      <Snip text={degree.startDate} />

                      <span className="opacity-50 px-1.5">-</span>
                      <Snip text={degree.endDate} />
                    </span>
                  </div>

                  <div>
                    <Snip text={degree.degree} />

                    <span className="opacity-50 px-1.5">|</span>
                    <Snip text={degree.gpa} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-xl text-[var(--text)] border-b border-current pb-0.5 mb-1.5">Skills</h2>

            <div className="flex flex-wrap gap-x-4">
              {skills.map((skill, index) => {
                const baseId = `skill-${index}`;

                return (
                  <div key={baseId}>
                    <Snip text={skill} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8">
            <h2 className=" font-bold text-xl text-[var(--text)] border-b pb-0.5 mb-1.5">Professional Experience</h2>
            {experiences.map((experience, index) => {
              const baseId = `experience-${index}`;

              return (
                <div key={baseId} className="mt-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[var(--text)]">
                    <span className="min-w-0">
                      <Snip text={experience.company} className="font-bold" />

                      <span className="opacity-50 px-1.5">|</span>
                      <Snip text={experience.role} />

                      {experience?.location && (
                        <>
                          <span className="opacity-50 px-1.5">|</span>
                          <Snip text={experience.location} />
                        </>
                      )}
                    </span>
                    <span className="whitespace-nowrap tabular-nums">
                      <Snip text={experience.startDate} />

                      <span className="opacity-50 px-1.5">-</span>
                      <Snip text={experience.endDate} />
                    </span>
                  </div>

                  {experience?.reference && (
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[var(--text)]">
                      <span className="min-w-0">
                        <Snip text={experience.reference} className="font-bold" />

                        <span className="opacity-50 px-1.5">|</span>
                        <Snip text={experience.referenceEmail} />

                        <span className="opacity-50 px-1.5">|</span>
                        <Snip text={experience.referencePhone} />

                        <span className="opacity-50 px-1.5">|</span>
                        <Snip text={experience.address} />

                        <span className="px-1"></span>
                        <Snip text={experience.city} />

                        <span className="px-1"></span>
                        <Snip text={experience.state} />

                        <span className="opacity-50 px-1.5">-</span>
                        <Snip text={experience.pincode} />

                        <span className="px-1"></span>
                        <Snip text={experience.country} />
                      </span>
                    </div>
                  )}

                  {experience?.work ? <Snip text={experience.work} className="mb-4" /> : <div className="mb-6"></div>}
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-xl text-[var(--text)] border-b border-current pb-0.5 mb-1.5">Projects</h2>

            {projects.map((project, index) => {
              const baseId = `project-${index}`;

              return (
                <div key={baseId} className="mt-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[var(--text)]">
                    <span className="min-w-0">
                      <Snip text={project.name} className="font-bold" />

                      <span className="opacity-50 px-1.5">|</span>
                      <Snip text={project.url} className="font-bold" />
                    </span>
                    <Snip text={project.dates} className="whitespace-nowrap tabular-nums" />
                  </div>
                  <Snip text={project.work} className="mb-4" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl flex flex-col justify-center gap-2 md:gap-4 overflow-hidden break-normal">
        <div className="flex flex-col text-sm">
          {texts.map((text, index) => {
            const baseId = `text-${index}`;

            return (
              <div key={baseId} className="mb-4 border rounded-xl p-2">
                <Snip text={text.text} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
