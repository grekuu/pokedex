import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllPokemons, Pokemon } from "../../redux/pokemonsSlice";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./pokemonListing.scss";

const PokemonListing = () => {
  const pokemons = useAppSelector(getAllPokemons);

  const flatPokemons = pokemons.flat();

  return (
    <div className="pokemon-listing-container">
      {flatPokemons.map((pokemon: Pokemon) => {
        return <PokemonCard key={pokemon.id} {...pokemon} />;
      })}
    </div>
  );
};

export default PokemonListing;
