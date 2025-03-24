import React from "react";
import CharacterCard from "./CharacterCard";
import { type Character } from "@/interfaces/interfaces";

interface CharacterCardsContainerProps {
  characters: Character[];
  characterSectionId: number;
}

const CharacterCardsContainer = ({
  characters,
  characterSectionId,
}: CharacterCardsContainerProps) => {
  console.log("datra aaaa", characters);
  return (
    <div className="w-full max-h-[300px] overflow-y-auto flex flex-wrap justify-evenly px-2">
      {characters &&
        characters.length > 0 &&
        characters.map((character: Character) => (
          <CharacterCard
            key={character.id}
            characterSectionId={characterSectionId}
            character={character}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            location={character.location.name}
            image={character.image}
            episode={character.episode}
          />
        ))}
    </div>
  );
};

export default CharacterCardsContainer;
