import { useState } from "react";
import "./userDataPart.css";
import SingleDataBlock from "./singleDataBlock/SingleDataBlock";

function UserDataPart({ userData }) {
  const blockText = ["Username", "E-mail", "Name", "Surname"];

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
