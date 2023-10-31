import React from "react";
import { Level } from "../shared/Level";

export const Level8 = () => {
  const validLetters = ["n", "m", ",", ".", "/"];
  return <Level validLetters={validLetters} />;
};
