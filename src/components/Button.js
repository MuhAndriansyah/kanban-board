import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import "../assets/scss/Button.scss";
const Button = ({ list }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openForm = () => {
    setIsOpen(!isOpen);
  };

  const showForm = () => {
    return (
      <form>
        <TextareaAutosize autoFocus />
      </form>
    );
  };
  const showButton = () => {
    const text = list ? "add new list" : "add new card";
    const btnOpacity = list ? 1 : 0.5;
    const btnColor = list ? "white" : "inherit";
    const btnBackground = list ? "rgba(0, 0, 0, 0.25)" : "inherit";

    return (
      <div
        className="add-btn"
        onClick={openForm}
        style={{
          opacity: btnOpacity,
          color: btnColor,
          background: btnBackground,
        }}
      >
        + {text}
      </div>
    );
  };

  return isOpen ? showForm() : showButton();
};

export default Button;
