import { useState } from "react";
import "./LibrarySingleButton.css";

function LibrarySingleButton({ text, image }) {
  return (
    <button className="library-single-button">
      <img src={image}></img>
      {text}
    </button>
  );
}

export default LibrarySingleButton;
