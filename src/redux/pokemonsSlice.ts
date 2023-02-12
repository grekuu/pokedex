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
}

const initialState: PokemonsState = {
  pokemons: [],
};

export const counterSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemons: (state, { payload }) => {
      state.pokemons = payload;
    },
  },
});

export const { addPokemons } = counterSlice.actions;

export const getAllPokemons = (state: RootState) => state.pokemons.pokemons;

export default counterSlice.reducer;
