import React from "react";
import EpisodeCard from "./EpisodeCard";
import { Episode } from "@/interfaces/interfaces";

interface EpisodeSectionProps {
  episodes: Episode[];
  title?: string;
}

const EpisodeSection = ({ episodes, title }: EpisodeSectionProps) => {
  return (
    <div className="w-1/4 px-4 max-h-[300px] text-center overflow-y-auto overflow-x-hidden">
      <span>{title}</span>
      {episodes &&
        episodes.length > 0 &&
        episodes.map((ep: Episode, i: number) => (
          <EpisodeCard
            key={i}
            name={ep.name}
            episode={ep.episode}
            broadcasted={ep.air_date}
          />
        ))}
    </div>
  );
};

export default EpisodeSection;
