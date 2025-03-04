import { useState } from "react";
import "./HomePage.css";
import HomeDisplay from "../../components/homeComponents/HomeDisplay";

function HomePage() {
  return (
    <div className="home-main">
      <HomeDisplay />
    </div>
  );
}

export default HomePage;
