import React from "react";
import { Navigation } from "../shared/Navigation";

import "../../css/Home.css";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="image-container">
        <img src="../images/touch-typinr.png" alt="" className="image" />
      </div>
      <div className="main-container">
        <div className="div-container">
          <h2 className="div-title">Learn Touch Typing</h2>
          <ul className="div-paragraph">
            <li>
              Touch typing is the essential skill of typing on a keyboard
              without looking at the keys.
            </li>
            <li>
              It involves using all ten fingers and relies on muscle memory to
              type accurately and quickly.
            </li>
            <li>
              Touch typing is indispensable for improving your typing speed,
              accuracy, and overall productivity in the digital age.
            </li>
          </ul>
        </div>

        <div className="div-container">
          <h2 className="div-title">Typing Practice</h2>
            <ul className="div-paragraph">
              <li>Learn the keyboard layout and finger placement.</li>
              <li>Practice regularly to build muscle memory.</li>
              <li>
                Use online resources and typing exercises to improve your
                skills.
              </li>
              <li>
                Be patient, as touch typing may feel slow at first but will
                become faster with practice.
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};
