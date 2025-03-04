import { useState } from "react";
import "./CustomCheckbox.css";

function CustomCheckbox({ options, selectedBox, setSelectedBox }) {
  const handleChange = (option) => {
    setSelectedBox(option);
  };

  return (
    <div>
      {options?.map((option, index) => (
        <label className="custom-checkbox" key={index}>
          <input
            type="checkbox"
            checked={selectedBox === option}
            onChange={() => handleChange(option)}
          />
          <span className="checkmark"></span>
          {option}
        </label>
      ))}
    </div>
  );
}

export default CustomCheckbox;
