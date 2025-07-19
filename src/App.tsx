import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [blink, setBlink] = useState(false);
  const [showContent, setShowContent] = useState(false); // paper-content 보이게
  const [hidePaper, setHidePaper] = useState(false);     // paper 숨기기

  useEffect(() => {
    const blinkTimer = setTimeout(() => {
      setBlink(true);
    }, 2500);
    return () => clearTimeout(blinkTimer);
  }, []);

const handleClick = () => {
  setBlink(false);        // 깜빡임 정지
  setShowContent(true);   // 새 이미지 서서히 보이기
  setTimeout(() => {
    setHidePaper(true);   // 기존 이미지 제거
  }, 10000);
};

  return (
    <div className="background" onClick={handleClick}>
{!hidePaper && (
  <div className={`paper ${blink ? "blink" : ""}`}></div>
)}

      <div
        className={`paper-content ${showContent ? "show" : ""}`}
      ></div>
    </div>
  );
}

export default App;
