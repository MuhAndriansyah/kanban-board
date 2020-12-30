import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "../assets/scss/Button.scss";
import { useDataContext } from "../context/DataProvider";
import { addBoard, addCard } from "../features/Board/actions";
const Button = ({ list, listId }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const { dispatch } = useDataContext();

  const openForm = () => {
    setIsOpen(!isOpen);
  };

  const closeForm = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const addNewCard = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addCard(listId, text));
    }
    setText("");
    setIsOpen(!isOpen);
  };

  const addNewBoard = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addBoard(text));
    }
    setText("");
    setIsOpen(!isOpen);
  };

  const showForm = () => {
    return (
      <form className="form-board">
        <TextareaAutosize
          autoFocus
          className="text-area"
          value={text}
          onChange={onChange}
        />
        <div
          className="btn-group"
          onMouseDown={list ? addNewBoard : addNewCard}
        >
          <button className="add">ADD</button>
          <button className="close" onMouseDown={closeForm}>
            CANCEL
          </button>
        </div>
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
