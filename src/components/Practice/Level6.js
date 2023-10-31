import React from "react";
import { Level } from "../shared/Level";

export const Level6 = () => {
  const validLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  return <Level validLetters={validLetters} />;
};
