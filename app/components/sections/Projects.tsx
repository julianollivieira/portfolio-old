import type { HTMLAttributes, ReactElement } from "react";
import TagInput from "@/components/tags/TagInput";

const Projects = ({
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div {...props}>
      <p className="pb-5 text-3xl font-bold">{"projects"}</p>
      <TagInput />
      <div className="pt-5">
        <p>{"projects here"}</p>
      </div>
    </div>
  );
};

export default Projects;
