import React from "react";
import "./timer.css";

const Timer = ({ children }) => {
  return (
    <>
      <span>
        <p className="timer">{children}</p>
      </span>
    </>
  );
};

export default Timer;
