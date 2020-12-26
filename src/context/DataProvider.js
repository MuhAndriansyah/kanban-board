import React, { createContext, useReducer } from "react";
import reducer from "../features/Board/reducer";

const initialState = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Product Backlog",
      cards: [
        {
          id: "card-1",
          title: "Membuat fitur Authentication",
        },
        {
          id: "card-2",
          title: "Membuat fitur Authorization",
        },
      ],
    },
    "list-2": {
      id: "list-2",
      title: "Develop",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2"],
};

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ store, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};
