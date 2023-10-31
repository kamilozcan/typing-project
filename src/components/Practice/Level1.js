import React from "react";
import { Level } from "../shared/Level";

export const Level1 = () => {
  const validLetters = ["a", "s", "d", "f", "g"];
  return <Level validLetters={validLetters} />;
};
