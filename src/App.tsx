import "./App.css";

// import backgroundBlue from "./assets/background-blue.webp";
// import backgroundChalk from "./assets/background-chalk.webp";
// import fadedBlueFlowersFacingUp from "./assets/faded-blue-flowers-facing-up.webp";
// import goldHexagonShapedRingsWithPurpleFlowers from "./assets/gold-hexagon-shaped=rings-with-purple-flowers.webp";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
// import vibrantBlueFlowersFacingDown from "./assets/vibrant-blue-flowers-facing-down.webp";
// import vibrantBlueFlowersFacingUp from "./assets/vibrant-blue-flowers-facing-up.webp";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>SATURDAY 03 OCTOBER</h1>
      <h2>2026</h2>
      <h3>&pound;10,000</h3>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <img src="/images/background-blue.webp" alt="background blue" />
      <img src="/images/background-chalk.webp" alt="background chalk" />
      <img
        src="/images/faded-blue-flowers-facing-up.webp"
        alt="faded blue flowers facing up"
      />
      <img
        src="/images/gold-hexagon-shaped=rings-with-purple-flowers.webp"
        alt="gold hexagon shaped rings with purple flowers"
      />
      <img
        src="/images/vibrant-blue-flowers-facing-down.webp"
        alt="vibrant blue flowers facing down"
      />
      <img
        src="/images/vibrant-blue-flowers-facing-up.webp"
        alt="vibrant blue flowers facing up"
      />
      <img src="/images/purple-flowers.webp" alt="purple flowers" />
      <img
        src="/images/dark-purple-flowers-pointing-up.webp"
        alt="dark purple flowers pointing up"
      />
      <img
        src="/images/light-purple-flowers-pointing-down.webp"
        alt="light purple flowers pointing down"
      />
      <img
        src="/images/dark-purple-flowers-lying-on-back-ltr.webp"
        alt="dark purple flowers lying on back ltr"
      />
      <img
        src="/images/dark-purple-flowers-lying-on-back-rtl.webp"
        alt="dark purple flowers lying on back rtl"
      />
      <img
        src="/images/dark-purple-flowers-lying-on-front-ltr.webp"
        alt="dark purple flowers lying on front ltr"
      />
      <img
        src="/images/dark-purple-flowers-lying-on-front-rtl.webp"
        alt="dark purple flowers lying on front rtl"
      />
      <img
        src="/images/dark-purple-flowers-sprouting-down-left.webp"
        alt="dark purple flowers sprouting down left"
      />
      <img
        src="/images/dark-purple-flowers-sprouting-down-right.webp"
        alt="dark purple flowers sprouting down right"
      />
      <img
        src="/images/dark-purple-flowers-sprouting-up-left.webp"
        alt="dark purple flowers sprouting up left"
      />
      <img
        src="/images/dark-purple-flowers-sprouting-up-right.webp"
        alt="light purple flowers sprouting up right"
      />
      <img
        src="/images/light-purple-flowers-lying-on-back-ltr.webp"
        alt="light purple flowers lying on back ltr"
      />
      <img
        src="/images/light-purple-flowers-lying-on-back-rtl.webp"
        alt="light purple flowers lying on back rtl"
      />
      <img
        src="/images/light-purple-flowers-lying-on-front-ltr.webp"
        alt="light purple flowers lying on front ltr"
      />
      <img
        src="/images/light-purple-flowers-lying-on-front-rtl.webp"
        alt="light purple flowers lying on front rtl"
      />
      <img
        src="/images/light-purple-flowers-sprouting-down-left.webp"
        alt="light purple flowers sprouting down left"
      />
      <img
        src="/images/light-purple-flowers-sprouting-down-right.webp"
        alt="light purple flowers sprouting down right"
      />
      <img
        src="/images/light-purple-flowers-sprouting-up-left.webp"
        alt="light purple flowers sprouting up left"
      />
      <img
        src="/images/light-purple-flowers-sprouting-up-right.webp"
        alt="light purple flowers sprouting up right"
      />
      <img src="/images/hotel-review-star.svg" alt="hotel review star" />
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
