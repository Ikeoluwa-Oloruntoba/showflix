import React, { useEffect } from "react";
import "./Nav.css";
import logo from "./Logo.svg";
import heart from "./Heart.svg";
import search from "./Search.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="sidebar">
      <img src={logo} alt="" />
      <ul class="nav">
        <li>
          <a href="#">
            <img src={search} alt="" className="search" />
            <span>Search</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={heart} alt="" className="watch" />
            <span>Watchlist</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
