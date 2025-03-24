import React, { type ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  width?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, width }) => {
  return (
    <section className={`flex flex-col m-auto flex-auto ${width}`}>
      {children}
    </section>
  );
};

export default PageLayout;
