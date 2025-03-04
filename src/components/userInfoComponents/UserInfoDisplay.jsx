import { useState } from "react";
import "./UserInfoDisplay.css";
import UserImagePart from "./userInfo/userImagePart/userImagePart";
import UserDataPart from "./userInfo/userDataPart/userDataPart";
import Header from "../header/Header";

function UserInfoDisplay() {
  return (
    <div className="user-info">
      <Header />
      <UserImagePart />
      <UserDataPart />
    </div>
  );
}

export default UserInfoDisplay;
