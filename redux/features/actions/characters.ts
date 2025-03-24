import { createAction } from "@reduxjs/toolkit";

export const resetCharactersReducer: any = createAction(
  "characters/resetCharactersReducer"
);
export const setSelectedCharacter: any = createAction("characters/setSelectedCharacter");
