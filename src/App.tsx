import { useState } from "react";
import "./App.css";

function App() {
  const [animationEnded, setAnimationEnded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (animationEnded || !clicked) {
      setAnimationEnded(true);
      setClicked(true);
    }
  };

  return (
    <div className="container" onClick={handleClick}>
      {/* paper */}
      <img
        src="/images/paper.png"
        alt="Paper"
        className={`paper ${!animationEnded ? "shake" : clicked ? "fade-out" : "blink"}`}
        onAnimationEnd={() => {
          if (!animationEnded) setAnimationEnded(true);
        }}
      />
      {/* paper-content: 항상 렌더링, 클릭 전엔 opacity 0 */}
      <img
        src="/images/paper-content.png"
        alt="Paper Content"
        className={`paper-content ${clicked ? "fade-in" : "hidden"}`}
      />

      <a
        href="https://hos.d-sket.io/notice/22d3947b-e60a-817f-bb23-ce9edddb5146"
        target="_blank"
        rel="noopener noreferrer"
        className={`bottom-left-button ${clicked ? "fade-in" : "hidden"}`}
      >
        <img src="/images/button.png" alt="Button" />
      </a>
    </div>
  );
}

export default App;
