import React, { type ReactNode } from "react";

interface PageTitleProps {
  title: string;
  title2?: string;
  logo?: any;
  rightAction?: ReactNode;
  styles?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  title2 = "",
  logo,
  rightAction,
  styles = "",
}) => {
  return (
    <section
      className={`flex flex-row items-center justify-between mb-[30px] ${styles}`}
    >
      <h1 className={"text-3xl lg:text-4xl font-semibold"}>
        {title}{" "}
        {title2 !== "" && <span className="text-stamm-primary">{title2}</span>}
      </h1>
        {logo}
      {rightAction}
    </section>
  );
};

export default PageTitle;
