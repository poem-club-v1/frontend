import { useState, useEffect } from "react";
import "./ExploreDisplay.css";
import Header from "../header/Header";
import ExploreFilters from "./exploreFilters/ExploreFilters";
import ExplorePoems from "./explorePoems/ExplorePoems";
import { fetchCountries } from "../../utils/Fetch";

function ExploreDisplay() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("none");

  const [selectedBox, setSelectedBox] = useState(undefined);

  const [username, setUsername] = useState("");

  const [genres, setGenres] = useState();
  const [selectedGenre, setSelectedGenre] = useState("none");

  const [filters, setFilters] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    };

    const getGenres = () => {
      setGenres(["happy", "sad"]);
    };

    getGenres();
    getCountries();
  }, []);

  return (
    <div className="explore-display">
      <Header />
      <ExploreFilters
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
      <ExplorePoems />
    </div>
  );
}

export default ExploreDisplay;
