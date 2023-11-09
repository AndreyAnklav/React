import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Nav">
      <div className="nav-title">Navbar</div>
      <ul className="Nav1">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </div>
  );
}
