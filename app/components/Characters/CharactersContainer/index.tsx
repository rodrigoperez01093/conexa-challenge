import { CHARACTER_SECTIONS } from "@/config";
import React from "react";
import CharactersSection from "./CharactersSection";

const CharactersContainer = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between bg-white py-2">
      {CHARACTER_SECTIONS.map((_, index: number) => (
        <CharactersSection key={index} characterSectionId={index} />
      ))}
    </div>
  );
};

export default CharactersContainer;
