import { useState } from "react";
import "./ExploreFiltersDropdown.css";
import DropdownGenre from "./dropdownGenre/DropdownGenre";
import DropdownLanguage from "./dropdownLanguage/DropdownLanguage";
import DropdownLike from "./dropdownLike/DropdownLike";
import DropdownUser from "./dropdownUser/DropdownUser";

function ExploreFiltersDropdown({
  countries,
  selectedCountry,
  setSelectedCountry,
  selectedBox,
  setSelectedBox,
  username,
  setUsername,
  genres,
  selectedGenre,
  setSelectedGenre,
  setFilters,
}) {
  const applyFilters = () => {
    const newFilters = [selectedBox, selectedGenre, selectedCountry, username];
    setFilters(newFilters);
  };
  return (
    <div className="dropdown-container">
      <div className="explore-dropdown-container">
        <DropdownLike
          selectedBox={selectedBox}
          setSelectedBox={setSelectedBox}
        />
        <DropdownGenre
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <DropdownLanguage
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <DropdownUser username={username} setUsername={setUsername} />
      </div>
      <button className="apply-filters" onClick={applyFilters}>
        Apply filters
      </button>
    </div>
  );
}

export default ExploreFiltersDropdown;
