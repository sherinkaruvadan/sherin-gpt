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
      <div className="main__container">
        <div className="main__greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="main__cards">
          <div className="main__card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass-icon" />
          </div>
          <div className="main__card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="compass-icon" />
          </div>
          <div className="main__card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="compass-icon" />
          </div>
          <div className="main__card">
            <p>Improve the readability of following code</p>
            <img src={assets.code_icon} alt="compass-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
