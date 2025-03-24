import React, { type ReactNode } from "react";
import Image from "next/image";
import blackArrow from "../../../../public/blackArrow.svg";
import grayArrow from "../../../../public/grayArrow.svg";

interface CtaProps {
  title: string;
  action: any;
  width?: string;
  disabled?: boolean;
  onlyText?: boolean;
  styles?: string;
  hasCustomIcon?: boolean;
  customIconComponent?: ReactNode;
}

const Cta: React.FC<CtaProps> = ({
  title,
  action,
  width = "",
  disabled = false,
  onlyText = false,
  styles = "",
  hasCustomIcon = false,
  customIconComponent,
}) => {
  return (
    <section
      className={`cursor-pointer ${!disabled ? `${onlyText ? "underline" : "underline transition-all ease-in-out hover:pr-0 delay-75 duration-300 pr-3"}` : "text-stamm-gray cursor-default"} justify-between flex flex-row items-center ${styles}`}
      style={{ width: width === "" ? "auto" : `${width}px` }}
      onClick={() => !disabled && action()}
    >
      <span className={`${!onlyText && "mr-0.5"} text-sm`}>{title}</span>
      {!onlyText && (
        <Image
          src={disabled ? grayArrow : blackArrow}
          width={31}
          height={8}
          alt="arrow"
        />
      )}
      {hasCustomIcon && customIconComponent}
    </section>
  );
};

export default Cta;
