import type { HTMLAttributes, ReactElement } from "react";
import SkillCategories from "@/components/SkillCategories";
import { skillCategories } from "@/skills";

const Skills = ({ ...props }: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div {...props}>
      <p className="pb-5 text-3xl font-bold">{"skills"}</p>
      <SkillCategories categories={skillCategories} />
      <p className="pt-10 text-gray-400">
        {
          "💡 hint: click on technologies in the lists above to add them as filters for my projects!"
        }
      </p>
    </div>
  );
};

export default Skills;
