import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PokemonName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

interface PokemonBaseStats {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
}

export interface Pokemon {
  id: number;
  name: PokemonName;
  type: string[];
  base: PokemonBaseStats;
}

interface PokemonsState {
  pokemons: Pokemon[];
  darkMode: boolean;
}

const initialState: PokemonsState = {
  pokemons: [],
  darkMode: false,
};

export const counterSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemons: (state, { payload }) => {
      state.pokemons = payload;
    },
    changeMode: (state, { payload }) => {
      state.darkMode = payload;
    },
  },
});

export const { addPokemons, changeMode } = counterSlice.actions;

export const getAllPokemons = (state: RootState) => state.pokemons.pokemons;
export const getDarkMode = (state: RootState) => state.pokemons.darkMode;

export default counterSlice.reducer;
