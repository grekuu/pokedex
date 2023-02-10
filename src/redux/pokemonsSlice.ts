import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface PokemonsType {}

interface PokemonsState {
  pokemons: PokemonsType[];
}

const initialState: PokemonsState = {
  pokemons: [],
};

export const counterSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<PokemonsType>) => {
      state.pokemons.push(action.payload);
    },
  },
});

export const { addPokemons } = counterSlice.actions;

export const getAllPokemons = (state: RootState) => state.pokemons.pokemons;

export default counterSlice.reducer;
