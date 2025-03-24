import React from "react";
import Image from "next/image";
import iconNotFound from "../../../../public/icon-not-found.svg";

const NotFoundIcon: React.FC = () => {
  return <Image src={iconNotFound} width={48} height={36} alt="Not found" />;
};

export default NotFoundIcon;
