import React, { useState } from "react";

// import Timer from "../Timer";
import "./picture.css";
import { act } from "react-dom/test-utils";

const Picture = ({ onClick, active, list, src }) => {
  const [PictureImg, SetPicture] = useState(false);

  const [text, setText] = useState(
    <p className="clickMe" id="clickText">
      Click me to start the timer
    </p>
  );

  const onClickPicture = () => {
    if (list.length > 0) {
      SetPicture(!PictureImg);
      setText(
        <p className="clickMe" id="clickText">
          Click me to {active ? "start" : "stop"} the timer
        </p>
      );
    } else {
      alert("Add tasks to begin!");
    }
  };

  return (
    <>
      <div active={active} list={list} className="pictureButton">
        <img
          className="picture"
          onClick={() => {
            onClickPicture();
            onClick();
          }}
          alt="tomato"
          src={src}
        ></img>
        <span className="click-text">{text}</span>
        {/* <div>
          {PictureImg ? (
            <Timer numbers="0:00:01" start={activatedTimer} />
          ) : (
            <Timer numbers="0:00:00" start={activatedTimer} />
          )}
        </div> */}
      </div>
    </>
  );
};

export default Picture;
