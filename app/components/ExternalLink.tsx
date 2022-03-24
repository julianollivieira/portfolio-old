import type { AnchorHTMLAttributes, ReactElement, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const ExternalLink = ({ children, ...props }: Props): ReactElement => {
  return (
    <a
      className="hover:text-gray-300 underline underline-offset-4"
      rel="noreferrer noopener"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
