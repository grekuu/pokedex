import "./pokemonDetail.scss";
import { useParams } from "react-router-dom";
import data from "../../pokedex.json";
import { useAppSelector } from "../../redux/hooks";
import { getDarkMode, getLanguage } from "../../redux/pokemonsSlice";

const PokemonDetail = () => {
  const { name } = useParams();
  const darkMode = useAppSelector(getDarkMode);
  const language = useAppSelector(getLanguage);

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
    <div
      className={
        darkMode
          ? "pokemon-detail-container dark-mode-container"
          : "pokemon-detail-container"
      }
    >
      <div className="title">
        <h2>{(pokemonDetail[0].name as Record<string, string>)[language]}</h2>
        <h2>#{imgStringID}</h2>
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
          {pokemonDetail[0].type.map((singleType, index) => {
            return (
              <div className="type-card" key={index}>
                {singleType}
              </div>
            );
          })}
        </div>
      </div>

      <div className="stats">
        <h2>Statistics</h2>
        <div className="stat-name">Attack</div>
        <div
          className="stat-width"
          style={{ width: `${pokemonDetail[0].base.Attack}%` }}
        ></div>
        <div className="stat-name">Defense</div>
        <div
          className="stat-width"
          style={{ width: `${pokemonDetail[0].base.Defense}%` }}
        ></div>
        <div className="stat-name">HP</div>
        <div
          className="stat-width"
          style={{ width: `${pokemonDetail[0].base.HP}%` }}
        ></div>
        <div className="stat-name">Sp. Attack</div>
        <div
          className="stat-width"
          style={{ width: `${pokemonDetail[0].base["Sp. Attack"]}%` }}
        ></div>
        <div className="stat-name">Sp. Defence</div>
        <div
          className="stat-width"
          style={{ width: `${pokemonDetail[0].base["Sp. Defense"]}%` }}
        ></div>
        <div className="stat-name">Speed</div>
        <div
          className="stat-width"
          style={{
            width: `${pokemonDetail[0].base.Speed}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PokemonDetail;
