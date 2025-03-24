import React from "react";
import Image from "next/image";
import iconDown from "../../../../public/icon-flecha-down.svg";

interface DownIconProps {
  styles?: string;
  width?: string;
}

const DownIcon: React.FC<DownIconProps> = ({ styles = "", width = "18px" }) => {
  return (
    <Image
      src={iconDown}
      sizes="100vw"
      width={0}
      height={0}
      style={{
        width,
        height: "auto",
      }}
      alt="Not found"
      className={`${styles}`}
    />
  );
};

export default DownIcon;
