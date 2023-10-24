import React from "react";
import { Link } from "react-router-dom";

import "../../css/Navigation.css";

export const Navigation = () => {
  return (
    <div className="container-navigation">
      <Link to="/basicposition">Basic Position</Link>
      <Link to="/introduction">Introduction</Link>
      <Link to="/level1">Level1</Link>
      <Link to="/level2">Level2</Link>
      <Link to="/level3">Level3</Link>
      <Link to="/level4">Level4</Link>
      <Link to="/level5">Level5</Link>
      <Link to="/level6">Level6</Link>
      <Link to="/level7">Level7</Link>
      <Link to="/level8">Level8</Link>
    </div>
  );
};
