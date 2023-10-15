import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav">
        <div>
          <h1>.saf</h1>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"market"}>Market</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
