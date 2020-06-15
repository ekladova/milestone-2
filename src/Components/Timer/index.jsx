import React from "react";
import "./timer.css";
import { useState } from "react";
import { useEffect } from "react";

const Timer = ({ numbers, interval, active, time_min = 0, time_sec = 0 }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => active && setTime(time + interval), interval);
  }, [time, active, interval]);

  console.log(interval);

  return (
    <>
      <span>
        <p className="timer">{numbers}</p>
      </span>
    </>
  );
};

export default Timer;
