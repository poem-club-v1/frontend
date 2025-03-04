import { useState } from "react";
import "./LibraryButtons.css";
import LibrarySingleButton from "./librarySingleButton/LibrarySingleButton";
import hearthImage from "../../../images/hearth.png";
import savedImage from "../../../images/savedPoems.png";
import yourPoemsImage from "../../../images/yourPoetry.png";
import albumImage from "../../../images/poetryAlbum.png";
import addImage from "../../../images/addPoem.png";

function LibraryButtons() {
  const buttonOptions = [
    ["My poems", yourPoemsImage],
    ["Saved poems", savedImage],
    ["Liked poems", hearthImage],
    ["Album #1", albumImage],
    ["Album #2", albumImage],
    ["Album #3", albumImage],
    ["Add poem", addImage],
    ["Add album", addImage],
  ];
  return (
    <div className="library-buttons-display">
      {buttonOptions.map((option, index) => (
        <LibrarySingleButton key={index} text={option[0]} image={option[1]} />
      ))}
    </div>
  );
}

export default LibraryButtons;
