import React from "react";
import "./input.css"

function InputBox({ id, label,type ,value, handleChange, placeholder , width }) {
  return (
    <div className={`input-box-container ${width}`}>
      <label for={id} className="input-label">{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onClick={handleChange}
        placeholder={placeholder}
         className="input-box"
      />
    </div>
  );
}

export default InputBox;