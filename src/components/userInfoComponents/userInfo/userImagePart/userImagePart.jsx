import { useState } from "react";
import "./userImagePart.css";
import UserImage from "./userImageAndBaseInfo/userImage/UserImage";
import UserBaseInfo from "./userImageAndBaseInfo/userBaseInfo/UserBaseInfo";

function UserImagePart() {
  return (
    <div className="user-image-and-text-block">
      <UserImage />
      <UserBaseInfo />
    </div>
  );
}

export default UserImagePart;
