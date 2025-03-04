import { useState, useEffect } from "react";
import "./HomeLatest.css";
import Poem from "../../poemComponent/Poem";
import { fetchLatestPoems } from "../../../utils/Fetch";

function HomeLatest() {
  const [latestPoems, setLatestPoems] = useState([]);

  useEffect(() => {
    const getPoems = async () => {
      const data = await fetchLatestPoems();
      setLatestPoems(data);
    };
    getPoems();
  }, []);

  if (latestPoems.length === 0)
    return <div className="loading-block">Loading...</div>;

  return (
    <div className="home-latest">
      {latestPoems.map((poem, index) => (
        <Poem key={index} data={poem} />
      ))}
    </div>
  );
}

export default HomeLatest;
