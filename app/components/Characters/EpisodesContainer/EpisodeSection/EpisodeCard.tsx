import { Chip } from "@mui/material";
import React from "react";

const EpisodeCard = ({ name, episode, broadcasted }: any) => {
  return (
    <div className="w-full border h-[100px] border-black rounded-lg flex mt-2 overflow-hidden">
      <div className="w-full h-full flex flex-col items-start font-semibold px-2 pt-2">
        <span>{name}</span>
        <div className="w-full flex mt-2">
          <Chip
            label={episode}
            size="small"
            color={"primary"}
            variant="filled"
            className="w-fit truncate scale-75"
          />
          <Chip
            label={broadcasted}
            size="small"
            color={"secondary"}
            variant="filled"
            className="w-fit truncate scale-75"
          />
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
