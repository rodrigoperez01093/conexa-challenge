import React, { type ReactNode } from "react";

interface InputsLayoutProps {
  children: ReactNode;
}

const InputsLayout: React.FC<InputsLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:mt-4 mt-0">
      {children}
    </div>
  );
};

export default InputsLayout;
