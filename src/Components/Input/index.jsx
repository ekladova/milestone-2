import React from "react";
import "./input.css";

const Input = ({ type, onChange, id, placeholder, value }) => {
  return (
    <>
      <input
        className="input"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value || ""}
        required={true}
      ></input>
    </>
  );
};

export default Input;
