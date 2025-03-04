import { useState } from "react";
import "./DropdownUser.css";

function DropdownUser({ username, setUsername }) {
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const removeFilter = () => {
    setUsername("");
  };

  return (
    <div className="dropdown-user">
      <div>User</div>
      <hr className="separator" />
      <div className="enter-user-text">Enter username:</div>
      <input
        type="text"
        className="enter-user-input"
        value={username}
        onChange={handleInputChange}
      />
      <button className="remove-filter" onClick={removeFilter}>
        Remove filter
      </button>
    </div>
  );
}

export default DropdownUser;
