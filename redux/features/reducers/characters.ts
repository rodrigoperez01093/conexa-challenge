import { createReducer } from "@reduxjs/toolkit";
import {
  resetCharactersReducer,
  setSelectedCharacter,
} from "../actions/characters";

const initialState: any = {
  charactersSelected: [
    { character: undefined, episode: [] },
    { character: undefined, episode: [] },
  ],
};

export const charactersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetCharactersReducer, (state, action) => {
      return initialState;
    })
    .addCase(setSelectedCharacter, (state, action) => {
      const { character, section, episode } = action.payload;
      const isCharacterAlreadySelected =
        state.charactersSelected[section].character?.id === character?.id;
      if (isCharacterAlreadySelected) {
        state.charactersSelected[section].character = undefined;
        state.charactersSelected[section].episode = [];
        return;
      }
      state.charactersSelected[section].character = character;
      state.charactersSelected[section].episode = episode;
    });
});
