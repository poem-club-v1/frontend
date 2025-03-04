import { useState } from "react";
import "./ExploreFiltersButton.css";
import ExploreFiltersDropdown from "./exploreFiltersDropdown/ExploreFiltersDropdown";

function ExploreFiltersButton({
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdownMenu = () => {
    isDropdownOpen ? setIsDropdownOpen(false) : setIsDropdownOpen(true);
  };

  return (
    <div className="explore-filters-button-container">
      <button
        className="explore-filters-button"
        onClick={() => toggleDropdownMenu()}
      >
        <div className="explore-filters-text">Add filters</div>
        <div className="explore-filters-icon">⮟</div>
      </button>
      {isDropdownOpen && (
        <ExploreFiltersDropdown
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedBox={selectedBox}
          setSelectedBox={setSelectedBox}
          username={username}
          setUsername={setUsername}
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          setFilters={setFilters}
        />
      )}
    </div>
  );
}

export default ExploreFiltersButton;
