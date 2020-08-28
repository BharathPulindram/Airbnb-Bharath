import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          alt="airbnb-icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        />
      </Link>

      <div className="header__center">
        <input type="text" placeholder="search..." />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host !</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar src="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE_400x400.jpg" />
      </div>
    </div>
  );
}

export default Header;
