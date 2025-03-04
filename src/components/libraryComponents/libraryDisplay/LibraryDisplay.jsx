import { useState } from "react";
import "./LibraryDisplay.css";
import Header from "../../header/Header";
import LibraryTitle from "../libraryTitle/LibraryTitle";
import LibraryButtons from "../libraryButtons/LibraryButtons";

function LibraryDisplay() {
  return (
    <div className="library-display">
      <Header />
      <LibraryTitle />
      <LibraryButtons />
    </div>
  );
}

export default LibraryDisplay;
