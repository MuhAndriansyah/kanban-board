import React from "react";
import "./assets/scss/App.scss";
import Board from "./components/Board";
import Button from "./components/Button";
import Header from "./components/Header";
import { DataContext } from "./context/DataProvider";

function App() {
  const { store } = React.useContext(DataContext);
  console.log(store);
  return (
    <div>
      <Header />

      <div className="container">
        {store.listIds.map((listsIds, index) => {
          const data = store.lists[listsIds];
          return <Board data={data} key={data.id} />;
        })}
        <Button list />
      </div>
    </div>
  );
}

export default App;
