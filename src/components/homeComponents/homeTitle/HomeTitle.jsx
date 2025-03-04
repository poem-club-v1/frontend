import { useState, useEffect } from "react";
import "./HomeTitle.css";

function HomeTitle({ isTrending, setIsTrending }) {
  const toggleSubtitle = (subtitle) => {
    if (subtitle === "latest") setIsTrending(false);
    else setIsTrending(true);
  };

  return (
    <div className="home-title">
      Welcome to Poetry Club
      <div className="home-subtitle">
        <div
          className={`subtitle ${isTrending ? "selected" : ""}`}
          onClick={() => toggleSubtitle("trending")}
        >
          Trending
        </div>
        <div
          className={`subtitle ${isTrending ? "" : "selected"}`}
          onClick={() => toggleSubtitle("latest")}
        >
          Latest
        </div>
      </div>
    </div>
  );
}

export default HomeTitle;
