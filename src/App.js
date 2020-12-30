import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./assets/scss/App.scss";
import Board from "./components/Board";
import Button from "./components/Button";
import Header from "./components/Header";
import { useDataContext } from "./context/DataProvider";
import {
  updateBoard,
  updateDrag,
  updateDragBoard,
} from "./features/Board/actions";
function App() {
  const { store, dispatch } = useDataContext();

  const onDragEnd = React.useCallback(
    (result) => {
      const { destination, source, draggableId, type } = result;
      if (!destination) return;

      if (type === "list") {
        const lists = store.lists;
        const sourceIndex = source.index;
        const destinationIndex = destination.index;

        const [removed] = lists.splice(sourceIndex, 1);
        lists.splice(destinationIndex, 0, removed);

        console.log(lists);

        dispatch(updateDragBoard(lists));
      }

      const sourceList = store.lists.find(
        (board) => board.id === source.droppableId,
      );

      const destinationList = store.lists.find(
        (board) => board.id === destination.droppableId,
      );

      const draggingCard = sourceList?.cards.find(
        (card) => card.id === draggableId,
      );

      console.log("Card Drag", draggingCard);

      if (sourceList === destinationList) {
        sourceList?.cards.splice(source.index, 1);
        destinationList?.cards.splice(destination.index, 0, draggingCard);

        const newCard = destinationList;
        const listId = destinationList?.id;
        dispatch(updateDrag(listId, newCard));
      } else {
        sourceList?.cards.splice(source.index, 1);
        destinationList?.cards.splice(destination.index, 0, draggingCard);

        const newListSource = sourceList;
        const newListDestination = destinationList;
        const newList = [newListSource, newListDestination];

        dispatch(updateBoard(newList));
      }
    },
    [dispatch, store.lists],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="app" type="list" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="app"
          >
            <Header />

            <div className="container">
              {store.lists.map((list, index) => {
                return <Board key={list.id} data={list} index={index} />;
              })}
              {provided.placeholder}
              <Button list />
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
