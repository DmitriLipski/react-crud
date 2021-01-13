import React from "react";
import "./App.css";
import ReactCRUD from "./packages/crud";
import { useDispatch } from "react-redux";
import { getList } from "./packages/crud/actions";

const resources = ["users", "tasks"];

function App(): JSX.Element {
  return (
    <ReactCRUD resources={resources}>
      <div className="App">
        <h1>React CRUD</h1>
        <Content />
      </div>
    </ReactCRUD>
  );
}

const Content = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(getList("users"));

  return <button onClick={handleClick}>Click</button>;
};

export default App;
