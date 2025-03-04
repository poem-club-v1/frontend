import { useState } from "react";
import "./ExploreFilters.css";
import ExploreFiltersButton from "./exploreFiltersButton/ExploreFiltersButton";

function ExploreFilters({
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
  return (
    <div className="explore-filters-container">
      <div className="explore-title">Explore Poems...</div>
      <ExploreFiltersButton
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
    </div>
  );
}

export default ExploreFilters;
