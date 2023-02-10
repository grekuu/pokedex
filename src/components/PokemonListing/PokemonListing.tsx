import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllPokemons } from "../../redux/pokemonsSlice";
import "./pokemonListing.scss";

const PokemonListing = () => {
  const pokemons = useAppSelector(getAllPokemons);

  console.log(pokemons);

  return <div>PokemonListing</div>;
};

export default PokemonListing;
