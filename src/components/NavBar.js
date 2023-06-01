import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav id={"navBar"}>
      <div id={"tabs"}>
        <Link to="/">H𝙹ᒲᒷ</Link>
        <Link to="/News">Nᒷ∴ᓭ</Link>
        <Link to="/Contact">C𝙹リℸ ̣ ᔑᓵℸ ̣</Link>
      </div>
      <Search />
      <div id={"cart"}>
        <a>
          <img
            src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
            height={"25px"}
            width={"25px"}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
