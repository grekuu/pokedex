import React from "react";
import "./pokemonCard.scss";

const PokemonCard = ({ id, name }: any) => {
  let imgID = id;

  if (imgID <= 9) {
    imgID = "00" + imgID;
  } else if (imgID <= 99) {
    imgID = "0" + imgID;
  }

  return (
    <div className="single-card">
      <img
        src={`assets/images/${imgID}.png`}
        alt={name.english}
        loading="lazy"
      />
      <div className="card-info">
        <div className="card-name">{name.english}</div>
        <div className="card-id">{id}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
