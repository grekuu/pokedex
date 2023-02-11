import React from "react";
import "./pokemonCard.scss";

const PokemonCard = ({ id }: any) => {
  let imgID = id;

  if (imgID <= 9) {
    imgID = "00" + imgID;
  } else if (imgID <= 99) {
    imgID = "0" + imgID;
  }

  return (
    <div className="single-card">
      <img src={`assets/images/${imgID}.png`} alt="" />
    </div>
  );
};

export default PokemonCard;
