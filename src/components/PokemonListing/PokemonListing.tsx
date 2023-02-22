import { useAppSelector } from "../../redux/hooks";
import {
  getAllPokemons,
  getDarkMode,
  Pokemon,
} from "../../redux/pokemonsSlice";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./pokemonListing.scss";

const PokemonListing = () => {
  const pokemons = useAppSelector(getAllPokemons);
  const darkMode = useAppSelector(getDarkMode);

  const flatPokemons = pokemons.flat();

  return (
    <div
      className={
        darkMode
          ? "pokemon-listing-container dark-mode-container"
          : "pokemon-listing-container"
      }
    >
      {flatPokemons.map((pokemon: Pokemon) => {
        return <PokemonCard key={pokemon.id} {...pokemon} />;
      })}
    </div>
  );
};

export default PokemonListing;
