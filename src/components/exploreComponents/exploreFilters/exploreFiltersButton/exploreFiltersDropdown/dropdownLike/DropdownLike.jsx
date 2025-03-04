import { useState } from "react";
import "./DropdownLike.css";
import CustomCheckbox from "../customCheckbox/CustomCheckBox";

function DropdownLike({ selectedBox, setSelectedBox }) {
  const likeOptions = ["Ascending", "Descending"];

  const removeFilter = () => {
    setSelectedBox(undefined);
  };

  return (
    <div className="dropdown-like">
      <div>Likes</div>
      <hr className="separator" />
      <CustomCheckbox
        options={likeOptions}
        selectedBox={selectedBox}
        setSelectedBox={setSelectedBox}
      />
      <button className="remove-filter" onClick={() => removeFilter()}>
        Remove filter
      </button>
    </div>
  );
}

export default DropdownLike;
