import React from "react";
import { Level } from "../shared/Level";

export const Level3 = () => {
  const validLetters = ["a", "s", "d", "f", "j", "k", "l", ";"];
  return <Level validLetters={validLetters} />;
};
