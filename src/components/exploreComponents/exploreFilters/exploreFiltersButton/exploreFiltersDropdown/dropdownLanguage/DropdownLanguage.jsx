import { useState, useEffect } from "react";
import "./DropdownLanguage.css";

function DropdownLanguage({ countries, selectedCountry, setSelectedCountry }) {
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const removeFilter = () => {
    setSelectedCountry("none");
  };

  if (countries.length === 0)
    return <div className="loading-block">Loading...</div>;

  return (
    <div className="dropdown-language">
      <div>Language</div>
      <hr className="separator" />
      <div className="select-country-text">Select language:</div>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}
        className="country-input"
      >
        <option value="none" disabled>
          None
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <button className="remove-filter" onClick={() => removeFilter()}>
        Remove filter
      </button>
    </div>
  );
}

export default DropdownLanguage;
