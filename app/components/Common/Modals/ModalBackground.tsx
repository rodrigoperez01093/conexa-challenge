import React, { type ReactNode } from "react";

interface ModalBackgroundProps {
  children: ReactNode;
  closer: any;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({
  children,
  closer,
}) => {
  return (
    <section
      className="w-screen h-screen z-20 fixed top-0 left-0 flex flex-col items-center justify-center bg-black bg-opacity-50"
      onClick={() => {
        closer();
      }}
    >
      {children}
    </section>
  );
};

export default ModalBackground;
