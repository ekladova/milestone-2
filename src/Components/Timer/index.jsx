import React from "react";
import "./timer.css";

const Timer = ({ numbers, start }) => {
  return (
    <>
      <span>
        <p className="timer">{numbers}</p>
      </span>
    </>
  );
};

export default Timer;
