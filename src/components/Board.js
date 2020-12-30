import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import BoardTitle from "./BoardTitle";
import Button from "./Button";
import CardList from "./CardList";
import "../assets/scss/Board.scss";

const Board = ({ data, index }) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          className="board"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="board__title">
            <BoardTitle id={data.id} title={data.title} />
          </div>

          <Droppable droppableId={data.id}>
            {(provided) => (
              <div
                className="board__card"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {data.cards.map((card, index) => {
                  return (
                    <CardList
                      listId={data.id}
                      data={card}
                      key={card.id}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Button listId={data.id} />
        </div>
      )}
    </Draggable>
  );
};

export default Board;
