import React from "react";
import NotFoundIcon from "../Icons/NotFoundIcon";

const NoData: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <NotFoundIcon />
      <p className="text-center mt-5 text-stamm-black">No data found</p>
    </div>
  );
};

export default NoData;
