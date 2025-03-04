import { useState } from "react";
import "./UserImage.css";
import ChangeUserImage from "./changeUserImage/ChangeUSerImage";

function UserImage() {
  return (
    <div className="user-image-holder">
      <ChangeUserImage />
    </div>
  );
}

export default UserImage;
