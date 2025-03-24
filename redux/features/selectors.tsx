import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const characters = (state: RootState): any => state.characters;

export const charactersSelector = createSelector(characters, (state) => state);
