import { useState } from "react";
import "./App.css";
import Invitation from "./components/Invitation";

function App() {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="background">
      <div className="container">
        <h2>Welcome to SLOW CLUB</h2>
        <div className="text">
          안녕하세요.
          <p> HOOKOFSPACE의 SLOW CLUB에 당신을 초대합니다.</p>
          <p>
            SLOW CLUB은 예술을 기반으로, 사람들과 느리지만 깊게 스며둘수 있게
            하는 소셜클럽입니다.
          </p>
          <p>
            예술은 우리와 정말 가까이 있습니다.
            <br /> 하지만, 우리는 모르고 지나갑니다.
          </p>
          <p>
            HOOKOFSPACE는 일상속에서 예술을 느낄수 있게 신진작가와 함께 의미있고
            깊은 기획을 진행합니다.
          </p>
          그럼, 우리 HUAMDONG에서 만나요! <br /> THANK YOU
        </div>
      </div>
    </div>
  );
}

export default App;
