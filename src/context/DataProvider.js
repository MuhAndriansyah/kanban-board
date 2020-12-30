import React from "react";
import reducer from "../features/Board/reducer";

const initialState = {
  lists: [],
};

export const DataContext = React.createContext();

export const useDataContext = () => {
  return React.useContext(DataContext);
};

export const DataProvider = (props) => {
  const [store, dispatch] = React.useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem("store");
    return localData ? JSON.parse(localData) : initialState;
  });

  React.useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  return (
    <DataContext.Provider value={{ store, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};
