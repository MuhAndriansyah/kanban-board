import React from "react";
import { Draggable } from "react-beautiful-dnd";
import TextareaAutosize from "react-textarea-autosize";
import deleteIcon from "../assets/icons/delete.svg";
import "../assets/scss/CardList.scss";
import { useDataContext } from "../context/DataProvider";
import { deleteCard, editTitleCard } from "../features/Board/actions";
const CardList = ({ listId, data, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState(data.title);
  const { dispatch } = useDataContext();
  const { id: cardId } = data;
  const openForm = () => {
    setIsOpen(!isOpen);
  };

  const closeForm = () => {
    dispatch(editTitleCard(cardId, listId, text));
    setIsOpen(false);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const deleteCardOnBoard = () => {
    dispatch(deleteCard(cardId, listId));
  };

  return (
    <Draggable draggableId={cardId} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isOpen ? (
            <form>
              <TextareaAutosize
                autoFocus
                style={{ resize: "none" }}
                className="textarea"
                value={text}
                onChange={onChange}
                onBlur={closeForm}
              />
            </form>
          ) : (
            <p onClick={openForm}>{data.title}</p>
          )}

          <img src={deleteIcon} alt="delete card" onClick={deleteCardOnBoard} />
        </div>
      )}
    </Draggable>
  );
};

export default CardList;
