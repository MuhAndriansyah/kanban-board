import React from "react";
import BoardTitle from "./BoardTitle";
import Button from "./Button";
import CardList from "./CardList";
import "../assets/scss/Board.scss";

const Board = ({ data }) => {
  return (
    <div className="board">
      <div className="board__title">
        <BoardTitle title={data.title} />
      </div>

      <div className="board__card">
        {data.cards.map((card, index) => {
          return <CardList data={card} key={card.id} />;
        })}
      </div>

      <Button />
    </div>
  );
};

export default Board;
