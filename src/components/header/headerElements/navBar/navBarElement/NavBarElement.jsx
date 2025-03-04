import { useState } from "react";
import "./NavBarElement.css";

function NavBarElement({ text }) {
  return <div className="nav-bar-element">{text}</div>;
}

export default NavBarElement;
