import SkillCard from "./SkillCard.tsx";

import { skills } from "../data/data.tsx";

import "./Skills.css";

const Skills = (): JSX.Element => {
  return (
    <section id="skills_section" className="skills_section">
      <div className="skills_container">
        <h2 className="skills_headline reveal-up">Essential Tools I use</h2>

        <p className="skills_section_description">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="skills">
          {skills.map(({ skill_logo, skill_name, skill_description }, key) => (
            <SkillCard
              key={key}
              skill_logo={skill_logo}
              skill_name={skill_name}
              skill_description={skill_description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
