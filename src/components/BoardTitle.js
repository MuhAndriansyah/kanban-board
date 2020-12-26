import React, { useState } from "react";
import menuIcon from "../assets/icons/menu.svg";
const BoardTitle = ({ title }) => {
  const [isClick, setIsClick] = useState(false);

  const setForm = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      {isClick ? (
        <form>
          <input autoFocus />
        </form>
      ) : (
        <h3 onClick={setForm}>{title}</h3>
      )}

      <img src={menuIcon} alt="icon" className="menu-icon" />
    </>
  );
};

export default BoardTitle;
