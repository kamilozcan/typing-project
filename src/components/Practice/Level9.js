import React from 'react';
import { Level } from "../shared/Level";

export const Level9 = () => {
    const validLetters = ["a", "s", "d", "f","j", "k", "l", ";", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
    return <Level validLetters={validLetters} />;
  };
