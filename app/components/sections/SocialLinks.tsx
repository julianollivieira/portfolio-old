import type { HTMLAttributes, ReactElement } from "react";
import ExternalLink from "@/components/ExternalLink";

const SocialLinks = ({
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div {...props} className="flex flex-row gap-4 pt-3 lg:flex-col lg:gap-0.5">
      <ExternalLink href="https://www.linkedin.com/in/julianollivieira/">
        {"linkedin"}
      </ExternalLink>
      <ExternalLink href="https://github.com/julianollivieira">
        {"github"}
      </ExternalLink>
    </div>
  );
};

export default SocialLinks;
