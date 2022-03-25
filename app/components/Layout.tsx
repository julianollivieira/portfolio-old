import type { HTMLAttributes, ReactElement, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Layout = ({ children, ...props }: Props): ReactElement => {
  return (
    <div className="min-h-screen bg-secondary-700" {...props}>
      {children}
    </div>
  );
};

export default Layout;
