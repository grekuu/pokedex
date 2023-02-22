import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getLanguage } from "../../redux/pokemonsSlice";
import "./pokemonCard.scss";

const PokemonCard = ({ id, name }: any) => {
  let imgID = id;
  const language = useAppSelector(getLanguage);

  if (imgID <= 9) {
    imgID = "00" + imgID;
  } else if (imgID <= 99) {
    imgID = "0" + imgID;
  }

  return (
    <div className="single-card">
      <Link
        to={`/${name.english}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          src={`assets/images/${imgID}.png`}
          alt={name[language]}
          loading="lazy"
        />
        <div className="card-info">
          <div className="card-name">{name[language]}</div>
          <div className="card-id">{id}</div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
