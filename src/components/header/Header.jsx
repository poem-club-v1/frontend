import { useState } from "react";
import "./Header.css";
import PoetryClubLogo from "./headerElements/poetryClubLogo/PoetryClubLogo";
import NavBar from "./headerElements/navBar/NavBar";
import UserSetting from "./headerElements/userSettings/UserSetting";

function Header() {
  return (
    <div className="header">
      <PoetryClubLogo />
      <NavBar />
      <UserSetting />
    </div>
  );
}

export default Header;
