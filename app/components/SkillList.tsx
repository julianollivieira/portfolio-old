import type { HTMLAttributes, ReactElement } from "react";
import ExternalLink from "@/components/ExternalLink";

interface SkillListProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  items: { label: string; url: string }[];
}

const SkillList = ({
  title,
  items,
  ...props
}: SkillListProps): ReactElement => {
  return (
    <div {...props}>
      <p className="text-xl">{title}</p>
      <hr className="mt-2 mb-3" />
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <ExternalLink href={item.url}>{item.label}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
