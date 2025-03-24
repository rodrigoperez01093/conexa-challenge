import { setSelectedCharacter } from "@/redux/features/actions/characters";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";

const CharacterCard = ({
  characterSectionId,
  character,
  id,
  name,
  image,
  episode,
}: any) => {
  const dispatch = useAppDispatch();
  const charactersState = useAppSelector(
    (state) => state.characters.charactersSelected
  );
  console.log("charactersState", charactersState);
  const handleCharacterSelection = () => {
    dispatch(
      setSelectedCharacter({
        character,
        section: characterSectionId,
        episode,
      })
    );
  };

  return (
    <div
      className={`w-1/3 border h-[100px] ${charactersState[characterSectionId].character?.id === id ? "border-primary" : "border-black"} rounded-lg flex mt-2 mr-2 ml-2 overflow-hidden cursor-pointer`}
      onClick={handleCharacterSelection}
    >
      <Image src={image} alt={name} width={100} height={100} />
      <div className="w-1/2 h-full flex flex-col items-center font-semibold px-2">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
