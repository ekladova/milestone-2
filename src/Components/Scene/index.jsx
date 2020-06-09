import React from "react";
import red_dot from "./Picture-box/pictures-milestone-2/recording-dot-png.png";
import "./scene.css";

const Scene = ({ children }) => {
  return (
    <div className="outerSquare">
      <div className="bigSquare">{children}</div>

      <div className="containers">
        <div className="container-right">
          <div className="smallSquare top right">
            <span>
              <p className="rec">
                REC{" "}
                <span>
                  <img className="blink" src={red_dot} alt="recording"></img>
                </span>
              </p>
            </span>
          </div>
          <div className="smallSquare bottom right"></div>
        </div>

        <div className="container-left">
          <div className="smallSquare top left"></div>
          <div className="smallSquare bottom left"></div>
        </div>
      </div>
    </div>
  );
};

export default Scene;
