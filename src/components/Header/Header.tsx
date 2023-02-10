import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h2>Pokedex</h2>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Header;
