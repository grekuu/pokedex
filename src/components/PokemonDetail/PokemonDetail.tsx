import "./pokemonDetail.scss";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getAllPokemons } from "../../redux/pokemonsSlice";
import data from "../../pokedex.json";

const PokemonDetail = () => {
  const { name } = useParams();

  const pokemonDetail = data.filter((pokemon) =>
    pokemon.name.english.toLowerCase().includes(name!.toLowerCase())
  );

  return <div>{pokemonDetail[0].id}</div>;
};

export default PokemonDetail;
