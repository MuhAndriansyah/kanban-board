import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import deleteIcon from "../assets/icons/delete.svg";
import "../assets/scss/CardList.scss";
const CardList = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      {isOpen ? (
        <form>
          <TextareaAutosize
            autoFocus
            style={{ resize: "none" }}
            className="textarea"
          />
        </form>
      ) : (
        <p onClick={setForm}>{data.title}</p>
      )}

      <img src={deleteIcon} alt="delete card" />
    </div>
  );
};

export default CardList;
