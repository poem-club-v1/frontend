import { useState, useEffect } from "react";
import "./UserInfoDisplay.css";
import UserImagePart from "./userInfo/userImagePart/userImagePart";
import UserDataPart from "./userInfo/userDataPart/userDataPart";
import Header from "../header/Header";
import { fetchUserProfileData } from "../../utils/Fetch";

function UserInfoDisplay() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserProfileData("Soso");
      const dataToUse = [
        data.username,
        data.email,
        data.name?.split(" ")[0],
        data.name?.split(" ")[1],
      ];
      setUserData(dataToUse);
    };

    getUserData();
  }, []);

  if (userData.length === 0) {
    return <div className="loading-block">Loading...</div>;
  }

  return (
    <div className="user-info">
      <Header />
      <UserImagePart userData={userData} />
      <UserDataPart userData={userData} />
    </div>
  );
}

export default UserInfoDisplay;
