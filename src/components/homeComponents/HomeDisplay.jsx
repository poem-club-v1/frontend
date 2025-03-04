import { useState } from "react";
import "./HomeDisplay.css";
import Header from "../header/Header";
import HomeTitle from "./homeTitle/HomeTitle";
import HomeTrending from "./homeTrending/HomeTrending";
import HomeLatest from "./homeLatest/HomeLatest";

function HomeDisplay() {
  const [isTrending, setIsTrending] = useState(true);
  return (
    <div className="home-display">
      <Header />
      <HomeTitle isTrending={isTrending} setIsTrending={setIsTrending} />
      {isTrending ? <HomeTrending /> : <HomeLatest />}
    </div>
  );
}

export default HomeDisplay;
