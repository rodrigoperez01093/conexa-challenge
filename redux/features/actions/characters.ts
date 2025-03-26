import { createAction } from "@reduxjs/toolkit";

export const resetCharactersReducer: any = createAction(
  "characters/resetCharactersReducer"
);
export const setSelectedCharacter: any = createAction(
  "characters/setSelectedCharacter"
);
export const setEpisodes: any = createAction("characters/setEpisodes");
