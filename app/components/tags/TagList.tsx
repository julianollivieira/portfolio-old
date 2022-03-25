import type { HTMLAttributes, ReactElement } from "react";
import type { Skill } from "@/skills";
import Tag from "./Tag";
import { useData } from "@/hooks/useData";

interface Props extends HTMLAttributes<HTMLDivElement> {
  tags: Skill[];
  onDelete: (index: number) => void;
}

const TagList = ({ tags, onDelete, ...props }: Props): ReactElement => {
  const { tags: activeTags } = useData();

  return (
    <div
      className={`flex gap-4${activeTags.length > 0 ? " border-r pr-3 " : ""}`}
      {...props}
    >
      {tags.map((tag, index) => (
        <Tag key={tag} onDelete={() => onDelete(index)}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagList;
