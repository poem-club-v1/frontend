import { useState } from "react";
import "./SingleDataBlock.css";

function SingleDataBlock({ blockText, userData }) {
  return (
    <div className="whole-block">
      <div className="block-type">{blockText}:</div>
      <div className="block-user-info">{userData}</div>
    </div>
  );
}

export default SingleDataBlock;
