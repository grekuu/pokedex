import "./pokemonDetail.scss";
import { useParams } from "react-router-dom";
import data from "../../pokedex.json";

const PokemonDetail = () => {
  const { name } = useParams();

  const pokemonDetail = data.filter((pokemon) =>
    pokemon.name.english.toLowerCase().includes(name!.toLowerCase())
  );

  console.log(pokemonDetail);

  let imgID = pokemonDetail[0].id;

  let imgStringID = imgID.toString();

  if (imgID <= 9) {
    imgStringID = "00" + imgID;
  } else if (imgID <= 99) {
    imgStringID = "0" + imgID;
  }

  return (
    <div className="pokemon-detail-container">
      <div className="title">
        <h2>{pokemonDetail[0].name.english}</h2>
        <h2 className="id">#{imgStringID}</h2>
      </div>

      <div className="detail-image">
        <img
          src={`assets/images/${imgStringID}.png`}
          alt={pokemonDetail[0].name.english}
          loading="lazy"
        />
      </div>

      <div className="types">
        <h2>Type</h2>
        <div className="type-cards">
          {pokemonDetail[0].type.map((singleType) => {
            return <div className="type-card">{singleType}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
