import React, { Children } from "react";
import "./timer.css";
import { useState } from "react";
import { useEffect } from "react";

const Timer = ({ children, interval, active, time_min = 0, time_sec = 0 }) => {
  // const [time, setTime] = useState(0);

  // console.log(interval);

  return (
    <>
      <span>
        <p className="timer">{children}</p>
      </span>
    </>
  );
};

export default Timer;

//   setTimeout(() => active && setTime(time + interval), interval);
// }, [time, active, interval]);
