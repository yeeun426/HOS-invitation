import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [blink, setBlink] = useState(false); // 깜빡이기 시작 여부

  useEffect(() => {
    // 흔들흔들 끝난 뒤 깜빡이기 시작
    const blinkTimer = setTimeout(() => {
      setBlink(true);
    }, 2000); // shake 1s * 2회 후

    return () => clearTimeout(blinkTimer);
  }, []);

  useEffect(() => {
    if (isClick) {
      const timer = setTimeout(() => setFadeIn(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isClick]);

  return (
    <div className="background" onClick={() => setIsClick(true)}>
      <div
        className={`container ${blink ? "blink" : ""} ${fadeIn ? "show" : ""}`}
      >
        {isClick && (
          <>
            <h2>SLOW CLUB</h2>
            <div className="text">
              <p>
                초대할게요
                <br />
                아트 소셜 클럽
              </p>
              <p>느리지만 깊은, 그러한 시간</p>
              <p>
                장소 : 후암동
                <br />
                날짜 : 2025.07.24
              </p>
              <p>그럼, 우리 곧 만나요!</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
