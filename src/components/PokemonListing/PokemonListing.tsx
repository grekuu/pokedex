import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllPokemons, Pokemon } from "../../redux/pokemonsSlice";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./pokemonListing.scss";

const PokemonListing = () => {
  const pokemons = useAppSelector(getAllPokemons);

  console.log(pokemons);

  return (
    <div className="pokemon-listing-container">
      {pokemons.map((pokemon: Pokemon, id: number) => {
        console.log(pokemon);
        return <PokemonCard key={id} {...pokemon}></PokemonCard>;
      })}
    </div>
  );
};

export default PokemonListing;
