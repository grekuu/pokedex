import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { getAllPokemons } from "../../redux/pokemonsSlice";
import "./header.scss";

const Header = () => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="header">
      <h2>Pokedex</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Header;
