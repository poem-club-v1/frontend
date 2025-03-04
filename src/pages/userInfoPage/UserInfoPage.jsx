import { useState } from "react";
import "./UserInfoPage.css";
import UserInfoDisplay from "../../components/userInfoComponents/UserInfoDisplay";

function UserInfoPage() {
  return (
    <div className="main-user-info">
      <UserInfoDisplay />
    </div>
  );
}

export default UserInfoPage;
