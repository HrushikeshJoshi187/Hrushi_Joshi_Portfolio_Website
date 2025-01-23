import "./SkillCard.css";

interface SkillCardProps {
  skill_logo: string;
  skill_name: string;
  skill_description: string;
}

export default function SkillCard({
  skill_logo,
  skill_name,
  skill_description,
}: SkillCardProps) {
  return (
    <div className="skill_card">
      <figure className="skill_card_figure">
        <img className="skill_card_image" src={skill_logo} alt={skill_name} />
      </figure>
      <div>
        <h3 className="skill_name">{skill_name}</h3>
        <p className="skill_description">{skill_description}</p>
      </div>
    </div>
  );
}
