import type { LiHTMLAttributes, ReactElement, ReactNode } from "react";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  onDelete: () => void;
}

const Tag = ({ children, onDelete, ...props }: Props): ReactElement => {
  return (
    <li
      className="group flex items-center cursor-pointer"
      {...props}
      onClick={onDelete}
    >
      <p className="text-sm group-hover:text-gray-400">{children}</p>
    </li>
  );
};

export default Tag;
