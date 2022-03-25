import type { HTMLAttributes, ReactElement } from "react";
import type { SkillCategory } from "@/skills";
import { useData } from "@/hooks/useData";

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories: SkillCategory[];
}

const SkillCategories = ({ categories, ...props }: Props): ReactElement => {
  const { tags, addTag, removeTag } = useData();

  return (
    <div
      className="grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-3"
      {...props}
    >
      {categories.map((category) => (
        <div key={category.name}>
          <p className="text-xl">{category.name}</p>
          <hr className="mt-2 mb-3" />
          <ul>
            {category.skills.map((skill) => (
              <li key={skill}>
                <button
                  className={`${
                    tags.includes(skill)
                      ? "text-gray-500 hover:text-gray-600 pl-2 "
                      : "text-gray-300 hover:text-gray-400 "
                  }underline-offset-4 focus:outline-none group flex`}
                  onClick={(): void => {
                    if (tags.includes(skill)) {
                      removeTag(skill);
                    } else {
                      addTag(skill);
                    }
                  }}
                  type="button"
                >
                  <span className="group-hover:underline ">{skill}</span>
                  <span className="hidden group-hover:block pl-2">
                    {tags.includes(skill) ? "-" : "+"}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillCategories;
