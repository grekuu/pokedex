import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addPokemons,
  changeMode,
  getDarkMode,
} from "../../redux/pokemonsSlice";
import "./header.scss";
import data from "../../pokedex.json";
import { Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Header = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(getDarkMode);

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
      <div className="header-left">
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          <h2>Pokedex</h2>
        </Link>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="header-right">
        <button onClick={() => dispatch(changeMode(!darkMode))}>
          {darkMode ? (
            <BsFillSunFill className="change-theme-icon" />
          ) : (
            <BsFillMoonFill className="change-theme-icon" />
          )}
        </button>
        <li className="dropdown">
          Language
          <ul className="dropdown-menu">
            <li className="dropdown-item-1">1</li>
            <li className="dropdown-item-2">2</li>
            <li className="dropdown-item-3">3</li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
