import { useTheme } from "../context/ThemeContext.tsx";

import SectionHeader from "../components/SectionHeader.tsx";

interface SkillCardProps {
  skill_logo: string;
  skill_name: string;
  skill_description: string;
}

function SkillCard({ skill_logo, skill_name, skill_description }: SkillCardProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-2xl ring-2 ring-inset ring-[var(--surface)]">
      <figure className="bg-[var(--surface)] rounded-lg overflow-hidden w-12 h-12 p-2">
        <img className="w-8 h-8" src={skill_logo} alt={skill_name} />
      </figure>
      <div className="flex flex-col">
        <h3 className="font-bold text-[var(--text)]">{skill_name}</h3>
        <p className="text-sm text-[var(--text-muted)]">{skill_description}</p>
      </div>
    </div>
  );
}

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-8 md:px-12 mx-auto xl:max-w-6xl pb-20 sm:pb-32 md:pb-40 lg:pb-60 xl:pb-80 overflow-hidden break-normal"
    >
      <SectionHeader title="Skills I've Acquired" />

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mt-5">
        <SkillCard key="skills_react" skill_logo="./skills/react.svg" skill_name="React" skill_description="" />
        <SkillCard
          key="skills_react_native"
          skill_logo="./skills/react.svg"
          skill_name="React Native"
          skill_description=""
        />
        <SkillCard key="skills_ts" skill_logo="./skills/ts.svg" skill_name="TypeScript" skill_description="" />
        <SkillCard
          key="skills_tailwindcss"
          skill_logo="./skills/tailwindcss.svg"
          skill_name="Tailwind CSS"
          skill_description=""
        />
        {theme == "dark" && (
          <SkillCard key="skills_threejs" skill_logo="./skills/three2.svg" skill_name="Three.js" skill_description="" />
        )}
        {theme != "dark" && (
          <SkillCard key="skills_threejs" skill_logo="./skills/three.svg" skill_name="Three.js" skill_description="" />
        )}
        <SkillCard key="skills_html" skill_logo="./skills/html.svg" skill_name="HTML" skill_description="" />
        <SkillCard key="skills_css" skill_logo="./skills/css.svg" skill_name="CSS" skill_description="" />
      </div>

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mt-10">
        <SkillCard key="skills_nodejs" skill_logo="./skills/node.svg" skill_name="Node.js" skill_description="" />
        <SkillCard
          key="skills_express"
          skill_logo="./skills/express.svg"
          skill_name="Express.js"
          skill_description=""
        />
        <SkillCard key="skills_mongodb" skill_logo="./skills/mongo.svg" skill_name="MongoDB" skill_description="" />
        <SkillCard key="skills_mysql" skill_logo="./skills/mysql.svg" skill_name="MySQL" skill_description="" />
        <SkillCard key="skills_vite" skill_logo="./skills/vite.svg" skill_name="Vite" skill_description="" />
        <SkillCard key="skills_webpack" skill_logo="./skills/webpack.svg" skill_name="Webpack" skill_description="" />
        <SkillCard key="skills_git" skill_logo="./skills/git.svg" skill_name="Git" skill_description="" />
        <SkillCard
          key="skills_playwright"
          skill_logo="./skills/playwright.svg"
          skill_name="Playwright"
          skill_description=""
        />
        {theme == "dark" && (
          <SkillCard key="skills_cypress" skill_logo="./skills/cypress.svg" skill_name="Cypress" skill_description="" />
        )}
        {theme != "dark" && (
          <SkillCard
            key="skills_cypress2"
            skill_logo="./skills/cypress2.svg"
            skill_name="Cypress"
            skill_description=""
          />
        )}
      </div>

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] mt-10">
        <SkillCard key="skills_python" skill_logo="./skills/python.svg" skill_name="Python" skill_description="" />
        <SkillCard key="skills_c" skill_logo="./skills/c.svg" skill_name="C" skill_description="" />
        <SkillCard key="skills_cpp" skill_logo="./skills/c++.svg" skill_name="C++" skill_description="" />
      </div>
    </section>
  );
}
