import { useState } from "react";
import "./UserSetting.css";
import DropdownMenu from "./dropdownMenu/DropdownMenu";

function UserSetting() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-bar-user-setting">
      <div className="user-name">Soso</div>
      <div className="user-image" onClick={toggleDropdown}></div>
      <span className={`arrow ${isDropdownOpen ? "open" : ""}`}>⮟</span>
      {isDropdownOpen && <DropdownMenu isDropdownOpen={isDropdownOpen} />}
    </div>
  );
}

export default UserSetting;
