import { createReducer } from "@reduxjs/toolkit";
import {
  resetCharactersReducer,
  setSelectedCharacter,
  setEpisodes,
} from "../actions/characters";

const initialState: any = {
  charactersSelected: [{ character: undefined }, { character: undefined }],
  episodes: [],
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
        return;
      }
      state.charactersSelected[section].character = character;
    })
    .addCase(setEpisodes, (state, action) => {
      state.episodes = action.payload;
    });
});
