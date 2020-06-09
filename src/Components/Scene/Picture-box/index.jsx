import React, { useState } from "react";
import tom_stop from "./pictures-milestone-2/tom-stop.png";
import tom_go from "./pictures-milestone-2/tom-go.png";
import "./picture.css";

const Picture = ({ onClick }) => {
  const [PictureImg, SetPicture] = useState(false);

  const [text, setText] = useState(
    <p className="clickMe" id="clickText">
      Click me to start the timer
    </p>
  );

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
          src={PictureImg ? tom_go : tom_stop}
        ></img>
        <span className="click-text">{text}</span>
      </div>
    </>
  );
};

export default Picture;
