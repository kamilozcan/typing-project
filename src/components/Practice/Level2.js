import React from "react";
import { Level } from "../shared/Level";

export const Level2 = () => {
  const validLetters = ["h", "j", "k", "l", ";"];
  return <Level validLetters={validLetters} />;
};
