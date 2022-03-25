import type { HTMLAttributes, ReactElement } from "react";
import {
  backEndSkills,
  cloudServiceSkills,
  databaseSkills,
  devOpsSkills,
  frontEndSkills,
  softSkills,
} from "@/skills";
import SkillList from "@/components/SkillList";

const Skills = ({ ...props }: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div {...props}>
      <p className="pb-5 text-3xl font-bold">{"skills"}</p>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3">
        <SkillList items={frontEndSkills} title="front-end" />
        <SkillList items={backEndSkills} title="back-end" />
        <SkillList items={devOpsSkills} title="devops" />
        <SkillList items={softSkills} title="soft" />
        <SkillList items={databaseSkills} title="database" />
        <SkillList items={cloudServiceSkills} title="cloud service" />
      </div>
    </div>
  );
};

export default Skills;
