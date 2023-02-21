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
import { MdLanguage } from "react-icons/md";

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
          <MdLanguage
            className="change-theme-icon"
            style={{ fontSize: "35px" }}
          />
          <ul className="dropdown-menu">
            <li className="dropdown-item-1 li">Chinese</li>
            <li className="dropdown-item-2 li">English</li>
            <li className="dropdown-item-3 li">French</li>
            <li className="dropdown-item-4 li">Japanese</li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
