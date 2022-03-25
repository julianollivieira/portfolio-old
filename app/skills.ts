enum Skill {
  HTML = "html",
  CSS = "css",
  JavaScript = "javascript",
  TypeScript = "typescript",
  React = "react",
  NextJS = "nextjs",
  InertiaJS = "inertiajs",
  TailwindCSS = "tailwindcss",
  PHP = "php",
  Laravel = "laravel",
  NodeJS = "nodejs",
  ExpressJS = "expressjs",
  REST = "rest",
  GraphQL = "graphql",
  Rust = "rust",
  Git = "git",
  Docker = "docker",
  PostgreSQL = "postgresql",
  MySQL = "mysql",
  MariaDB = "mariadb",
  SQL = "sql",
  Firebase = "firebase",
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories = [
  {
    name: "front-end",
    skills: [
      Skill.HTML,
      Skill.CSS,
      Skill.JavaScript,
      Skill.TypeScript,
      Skill.React,
      Skill.NextJS,
      Skill.InertiaJS,
      Skill.TailwindCSS,
    ],
  },
  {
    name: "back-end",
    skills: [
      Skill.PHP,
      Skill.Laravel,
      Skill.NodeJS,
      Skill.ExpressJS,
      Skill.REST,
      Skill.GraphQL,
      Skill.Rust,
    ],
  },
  {
    name: "devops",
    skills: [Skill.Git, Skill.Docker],
  },
  {
    name: "database",
    skills: [Skill.PostgreSQL, Skill.MySQL, Skill.MariaDB, Skill.SQL],
  },
  {
    name: "cloud service",
    skills: [Skill.Firebase],
  },
  {
    name: "soft",
    skills: [],
  },
];

export { skillCategories };
export type { Skill, SkillCategory };
