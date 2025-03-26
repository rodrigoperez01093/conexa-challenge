import { setSelectedCharacter } from "@/redux/features/actions/characters";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CharacterAttributes from "./CharacterAttributes";

const CharacterCard = ({
  characterSectionId,
  character,
  id,
  name,
  status,
  species,
  location,
  image,
}: any) => {
  const dispatch = useAppDispatch();
  const charactersState = useAppSelector(
    (state) => state.characters.charactersSelected
  );
  const handleCharacterSelection = () => {
    dispatch(
      setSelectedCharacter({
        character,
        section: characterSectionId,
      })
    );
  };

  return (
    <div
      className={`w-full xl:w-1/3 border h-[100px] ${charactersState[characterSectionId].character?.id === id ? "border-violet border-[2px]" : "border-black"} rounded-lg flex mt-2 mr-2 ml-2 overflow-hidden cursor-pointer`}
      onClick={handleCharacterSelection}
    >
      <Image src={image} alt={name} width={100} height={100} />
      <div className="w-1/2 h-full flex flex-col items-start font-semibold px-2 pb-4">
        <Tooltip
          title={name}
          placement="bottom"
          arrow
          sx={{ fontSize: "14px", marginTop: "4px", fontWeight: "bold" }}
        >
          <Typography color="text.primary">
            {name.length > 10 ? name.slice(0, 10) + "..." : name}
          </Typography>
        </Tooltip>
        <CharacterAttributes
          species={species}
          status={status}
          location={location}
        />
      </div>
    </div>
  );
};

export default CharacterCard;
