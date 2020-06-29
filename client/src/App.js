import React, { Fragment } from "react";
import "./App.css";
import AddDoc from "./components/AddDoc";

const App = () => {
  return (
    <div className="container app">
      <Fragment>
        <AddDoc />
      </Fragment>
    </div>
  );
};

export default App;
