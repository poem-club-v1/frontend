import { useState, useEffect } from "react";
import "./userDataPart.css";
import SingleDataBlock from "./singleDataBlock/SingleDataBlock";
import { fetchUserProfileData } from "../../../../utils/Fetch";

function UserDataPart() {
  const [userData, setUserData] = useState([]);
  const blockText = ["Username", "E-mail", "Name", "Surname"];

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
    <div className="user-data-block">
      {blockText?.map((block, index) => (
        <SingleDataBlock
          key={index}
          blockText={block}
          userData={userData[index]}
        />
      ))}
    </div>
  );
}

export default UserDataPart;
