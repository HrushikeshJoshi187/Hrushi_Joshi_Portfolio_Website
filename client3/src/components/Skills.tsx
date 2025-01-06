import SkillCard from "./SkillCard";

import { skills } from "../data/data.tsx";

export default function Skills() {
  return (
    <section>
      {skills.map(({ skill_logo, skill_name, skill_description }, key) => (
        <SkillCard
          key={key}
          skill_logo={skill_logo}
          skill_name={skill_name}
          skill_description={skill_description}
        />
      ))}
    </section>
  );
}
