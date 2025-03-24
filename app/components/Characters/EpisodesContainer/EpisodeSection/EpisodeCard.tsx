import React from "react";

const EpisodeCard = ({ name, episode, broadcasted }: any) => {
  return (
    <div className="w-full border h-[100px] border-black rounded-lg flex mt-2 overflow-hidden cursor-pointer">
      <div className="w-full h-full flex flex-col items-start font-semibold px-2">
        <span>{name}</span>
        <span>{episode}</span>
        <span>{broadcasted}</span>
      </div>
    </div>
  );
};

export default EpisodeCard;
