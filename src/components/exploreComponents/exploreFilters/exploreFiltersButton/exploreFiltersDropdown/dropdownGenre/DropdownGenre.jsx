import { useState } from "react";
import "./DropdownGenre.css";

function DropdownGenre({ genres, selectedGenre, setSelectedGenre }) {
  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const removeFilter = () => {
    setSelectedGenre("none");
  };

  if (genres.length === 0)
    return <div className="loading-block">Loading...</div>;

  return (
    <div className="dropdown-genre">
      <div>Genre</div>
      <hr className="separator" />
      <div className="select-genre-text">Select genre:</div>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={handleChange}
        className="genre-input"
      >
        <option value="none" disabled>
          None
        </option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <button className="remove-filter" onClick={() => removeFilter()}>
        Remove filter
      </button>
    </div>
  );
}

export default DropdownGenre;
