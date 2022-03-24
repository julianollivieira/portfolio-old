import type { ReactElement } from "react";
import SkillList from "@/components/SkillList";

const Skills = (): ReactElement => {
  return (
    <>
      <p className="pt-10 text-3xl font-bold">{"skills"}</p>
      <div className="grid grid-cols-1 gap-10 pt-5 text-lg md:grid-cols-2 2xl:grid-cols-5">
        <SkillList
          items={[
            {
              label: "javascript",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              label: "typescript",
              url: "https://www.typescriptlang.org/",
            },
            { label: "react", url: "https://reactjs.org/" },
            { label: "nextjs", url: "https://nextjs.org/" },
            { label: "inertiajs", url: "https://inertiajs.com/" },
          ]}
          title="front-end"
        />
        <SkillList
          items={[
            { label: "php", url: "https://www.php.net/" },
            { label: "laravel", url: "https://laravel.com/" },
            { label: "nodejs", url: "https://nodejs.org/en/" },
            { label: "expressjs", url: "https://expressjs.com/" },
          ]}
          title="back-end"
        />
        <SkillList
          items={[
            { label: "docker", url: "https://www.docker.com/" },
            { label: "git", url: "https://git-scm.com/" },
          ]}
          title="devops"
        />
      </div>
    </>
  );
};

export default Skills;
