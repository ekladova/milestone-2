import React from "react";
import "./button.css";

const Button = ({ type, onClick, text }) => {
  return (
    <>
      <button type={type} className="button" text={text} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
