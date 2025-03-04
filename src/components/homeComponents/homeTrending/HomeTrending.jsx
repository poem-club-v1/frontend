import { useState, useEffect } from "react";
import "./HomeTrending.css";
import Poem from "../../poemComponent/Poem";
import { fetchMostLikedPoems } from "../../../utils/Fetch";

function HomeTrending() {
  const [trendPoems, setTrendPoems] = useState([]);

  useEffect(() => {
    const getPoems = async () => {
      const data = await fetchMostLikedPoems();
      setTrendPoems(data);
    };
    getPoems();
  }, []);

  if (trendPoems.length === 0)
    return <div className="loading-block">Loading...</div>;

  return (
    <div className="home-trending">
      {trendPoems.map((poem, index) => (
        <Poem key={index} data={poem} />
      ))}
    </div>
  );
}

export default HomeTrending;
