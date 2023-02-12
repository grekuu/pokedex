import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addPokemons, getAllPokemons } from "../../redux/pokemonsSlice";
import "./header.scss";
import data from "../../pokedex.json";

const Header = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useAppDispatch();

  let initialized = false;

  useEffect(() => {
    if (!initialized) {
      initialized = true;

      let filteredArray = data.filter((pokemon) =>
        pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
      );

      dispatch(addPokemons(filteredArray));
    }
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
