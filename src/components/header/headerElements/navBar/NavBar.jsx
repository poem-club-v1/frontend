import { useState } from "react";
import "./NavBar.css";
import NavBarElement from "./navBarElement/NavBarElement";

function NavBar() {
  const navBarELememnts = ["Home", "Explore", "Library"];
  return (
    <div className="nav-bar">
      {navBarELememnts.map((element, index) => (
        <NavBarElement key={index} text={element} />
      ))}
    </div>
  );
}

export default NavBar;
