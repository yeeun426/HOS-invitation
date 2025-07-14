import { useState } from "react";
import "./Invitation.css";

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={`envelope ${isOpen ? "open" : ""}`} onClick={handleOpen}>
      <div className="envelope-cover" />
      <div className="letter">
        <p className="letter-text">
          친애하는 예은님, <br />이 초대장을 받아주세요 💌
        </p>
      </div>
    </div>
  );
};

export default Invitation;
