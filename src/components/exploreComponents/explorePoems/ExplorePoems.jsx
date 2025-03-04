import { useState, useEffect } from "react";
import "./ExplorePoems.css";
import Poem from "../../poemComponent/Poem";
import { filterPoems } from "../../../utils/Fetch";

function ExplorePoems({ filters }) {
  const [filteredPoems, setFilteredPoems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPoems = async () => {
      try {
        setError(false);
        const likeSortOrder =
          filters[0] === "Ascending"
            ? "asc"
            : filters[0] === "Descending"
            ? "desc"
            : undefined;

        const categoryId = filters[1] === "none" ? undefined : filters[1];

        const language = filters[2] === "none" ? undefined : filters[2];

        const authorUsername = filters[3] === "" ? undefined : filters[3];

        console.log("filters: ", filters);
        const data = await filterPoems(
          likeSortOrder,
          categoryId,
          language,
          authorUsername
        );
        console.log("vracene pisme: ", data);
        if (!data || data.length === 0) {
          setError(true);
        } else {
          setFilteredPoems(data);
        }
      } catch (err) {
        console.error("Error fetching poems:", err);
        setError(true);
      }
    };
    getPoems();
  }, [filters]);

  if (error) {
    return (
      <div className="error-block">
        Couldn't find poems with the given filters.
      </div>
    );
  }

  if (filteredPoems.length === 0)
    return <div className="loading-block">Loading...</div>;

  return (
    <div className="explore-poems-container">
      {filteredPoems.map((poem, index) => (
        <Poem key={index} data={poem} />
      ))}
    </div>
  );
}

export default ExplorePoems;
