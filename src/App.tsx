import "./App.css";

import backgroundBlue from "./assets/background-blue.webp";
import backgroundChalk from "./assets/background-chalk.webp";
import fadedBlueFlowersFacingUp from "./assets/faded-blue-flowers-facing-up.webp";
import goldHexagonShapedRingsWithPurpleFlowers from "./assets/gold-hexagon-shaped=rings-with-purple-flowers.webp";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import vibrantBlueFlowersFacingDown from "./assets/vibrant-blue-flowers-facing-down.webp";
import vibrantBlueFlowersFacingUp from "./assets/vibrant-blue-flowers-facing-up.webp";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <img src={backgroundBlue} alt="background blue" />
      <img src={backgroundChalk} alt="background chalk" />
      <img src={fadedBlueFlowersFacingUp} alt="faded blue flowers facing up" />
      <img
        src={goldHexagonShapedRingsWithPurpleFlowers}
        alt="gold hexagon shaped rings with purple flowers"
      />
      <img
        src={vibrantBlueFlowersFacingDown}
        alt="vibrant blue flowers facing down"
      />
      <img
        src={vibrantBlueFlowersFacingUp}
        alt="vibrant blue flowers facing up"
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
