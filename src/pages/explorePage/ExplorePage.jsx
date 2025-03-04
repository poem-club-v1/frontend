import { useState } from "react";
import "./ExplorePage.css";
import ExploreDisplay from "../../components/exploreComponents/ExploreDisplay";

function ExplorePage() {
  return (
    <div className="explore-main">
      <ExploreDisplay />
    </div>
  );
}

export default ExplorePage;
