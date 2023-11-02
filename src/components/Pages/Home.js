import React from "react";
import { Navigation } from "../shared/Navigation";

import "../../css/Home.css";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="main-container">
        <div className="div-container" style={{ width: "50%" }}>
          <img src="../images/touch-typinr.png" alt="" className="image" />
        </div>

        <div className="div-container" style={{ width: "50%" }}>
          <h2 className="div-title">Basic Position</h2>
          <ul className="div-paragraph">
            <li>
              <strong>Position Your Fingers:</strong> Begin by positioning your
              fingers on the keyboard. Feel the raised <strong>bumps</strong> on
              the <strong>"F"</strong> and <strong>"J"</strong> keys, which are
              designed to help you find the correct hand placement without
              looking.
            </li>
            <li>
              <strong>Home Row Keys:</strong> Place your index fingers on the{" "}
              <strong>"F"</strong> and <strong>"J"</strong> keys, respectively.
              The remaining fingers should be positioned on the keys adjacent to
              them, as shown in the figure.
            </li>
            <li>
              <strong>Light Touch:</strong> Maintain a light touch on the keys.
              Your fingers should gently rest on the home row keys, allowing you
              to type effortlessly without applying excessive force.
            </li>
            <li>
              <strong>Basic Position:</strong> The initial finger placement is
              referred to as the "Basic Position." After typing a key or when
              not actively typing, your fingers should always return to this
              position.
            </li>
            <li>
              <strong>Ten-Finger Typing:</strong> The essence of ten-finger
              touch typing can be summed up as follows: "basic position, press a
              key, return to basic position." This cycle repeats as you type,
              allowing for efficient and accurate typing.
            </li>
          </ul>
        </div>
      </div>

      <div className="main-container">
        <div className="div-container" style={{ width: "50%" }}>
          <h2 className="div-title">Touch Typing</h2>
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

        <div className="div-container" style={{ width: "50%" }}>
          <h2 className="div-title">Typing Practice</h2>
          <ul className="div-paragraph">
            <li>Learn the keyboard layout and finger placement.</li>
            <li>Practice regularly to build muscle memory.</li>
            <li>
              Use online resources and typing exercises to improve your skills.
            </li>
            <li>
              Be patient, as touch typing may feel slow at first but will become
              faster with practice.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
