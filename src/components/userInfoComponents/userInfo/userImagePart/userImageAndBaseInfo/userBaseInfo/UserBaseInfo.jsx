import { useState } from "react";
import "./UserBaseInfo.css";

function UserBaseInfo({ userData }) {
  return (
    <div className="user-base-info-holder">
      <p className="user-base-info-text">
        {userData[2]} {userData[3]}
        <br />
        {userData[1]}
      </p>
    </div>
  );
}

export default UserBaseInfo;
