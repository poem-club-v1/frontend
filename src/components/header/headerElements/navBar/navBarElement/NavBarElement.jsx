import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBarElement.css";

function NavBarElement({ text }) {
  const navigate = useNavigate();

  const changePage = () => {
    if (text === "Home") {
      navigate("/");
    } else if (text === "Explore") {
      navigate("/explore");
    } else {
      navigate("/library");
    }
  };

  return (
    <div className="nav-bar-element" onClick={changePage}>
      {text}
    </div>
  );
}

export default NavBarElement;
