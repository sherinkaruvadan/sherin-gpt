import React from "react";
import "./Main.scss";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="main__nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" className="main__image" />
      </div>
    </div>
  );
};

export default Main;
