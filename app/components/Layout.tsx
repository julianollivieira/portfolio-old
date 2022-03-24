import type { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): ReactElement => {
  return <div className="min-h-screen bg-secondary-700">{children}</div>;
};

export default Layout;
