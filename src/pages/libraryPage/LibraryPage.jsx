import { useState } from "react";
import "./LibraryPage.css";
import LibraryDisplay from "../../components/libraryComponents/libraryDisplay/LibraryDisplay";

function LibraryPage() {
  return (
    <div className="main-library">
      <LibraryDisplay />
    </div>
  );
}

export default LibraryPage;
