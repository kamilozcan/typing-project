import React from "react";
import { Home } from "./components/Pages/Home";
import { BasicPosition } from "./components/Pages/BasicPosition";
import { Introduction } from "./components/Pages/Introduction";
import { Level1 } from "./components/Practice/Level1";
import { Level2 } from "./components/Practice/Level2";
import { Level3 } from "./components/Practice/Level3";
import { Level4 } from "./components/Practice/Level4";
import { Level5 } from "./components/Practice/Level5";
import { Level6 } from "./components/Practice/Level6";
import { Level7 } from "./components/Practice/Level7";
import { Level8 } from "./components/Practice/Level8";
import { Level9 } from "./components/Practice/Level9";
import { Level10 } from "./components/Practice/Level10";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/basicposition" element={<BasicPosition />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/level3" element={<Level3 />} />
          <Route path="/level4" element={<Level4 />} />
          <Route path="/level5" element={<Level5 />} />
          <Route path="/level6" element={<Level6 />} />
          <Route path="/level7" element={<Level7 />} />
          <Route path="/level8" element={<Level8 />} />
          <Route path="/level9" element={<Level9 />} />
          <Route path="/level10" element={<Level10 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
