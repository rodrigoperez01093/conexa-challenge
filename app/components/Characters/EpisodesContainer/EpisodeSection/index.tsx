import React from "react";
import EpisodeCard from "./EpisodeCard";
import { type Episode } from "@/interfaces/interfaces";

interface EpisodeSectionProps {
  episodes: Episode[];
  title?: string;
  section?: number;
}

const EpisodeSection = ({ episodes, title, section }: EpisodeSectionProps) => {
  return (
    <div className="w-full lg:w-1/4 px-4 mt-4 lg:mt-0">
      <div className="text-lg font-semibold">
        {`${section ? `#${section} - ` : ""}`}
        {title} - {episodes.length > 0 && episodes.length}
      </div>
      <div className="max-h-[300px] overflow-y-auto overflow-x-hidden mt-4 scrollbar">
        {episodes && episodes.length > 0 ? (
          episodes.map((ep: Episode, i: number) => (
            <EpisodeCard
              key={i}
              name={ep.name}
              episode={ep.episode}
              broadcasted={ep.air_date}
            />
          ))
        ) : (
          <div className="w-full text-center font-semibold text-violet">
            <span>No episodes founded</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EpisodeSection;
