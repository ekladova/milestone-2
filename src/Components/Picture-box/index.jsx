import React, { useState } from "react";
import tom_stop from "./pictures-milestone-2/tom-stop.png";
import tom_go from "./pictures-milestone-2/tom-go.png";

// import Timer from "../Timer";
import "./picture.css";

const Picture = ({ onClick }) => {
  const [PictureImg, SetPicture] = useState(false);

  const [text, setText] = useState(
    <p className="clickMe" id="clickText">
      Click me to start the timer
    </p>
  );

  const [off, setGo] = useState(false);
  const activatedTimer = () => setGo(!off);

  onClick = () => {
    SetPicture(!PictureImg);
    setText(
      <p className="clickMe" id="clickText">
        Click me to {PictureImg ? "start" : "stop"} the timer
      </p>
    );
  };

  return (
    <>
      <div className="pictureButton">
        <img
          className="picture"
          onClick={onClick}
          alt="tomato"
          activated={PictureImg.toString()}
          src={PictureImg ? tom_go : tom_stop}
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
