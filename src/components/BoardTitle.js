import React from "react";
import menuIcon from "../assets/icons/menu.svg";
import { useDataContext } from "../context/DataProvider";
import { editTitleBoard } from "../features/Board/actions";

const BoardTitle = ({ id, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState(title);
  const { dispatch } = useDataContext();

  const openForm = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const closeForm = () => {
    // changeTitle(id, text);
    dispatch(editTitleBoard(id, text));
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <form>
          <input
            autoFocus
            value={text}
            onChange={onChange}
            onBlur={closeForm}
          />
        </form>
      ) : (
        <h3 onClick={openForm}>{title}</h3>
      )}

      <img src={menuIcon} alt="icon" className="menu-icon" />
    </>
  );
};

export default BoardTitle;
