import React from "react";
import "./App.css";
import ReactCRUD from "./packages/crud";
import { useDispatch } from "react-redux";
import { getList } from "./packages/crud/actions";
import { combineReducers } from "redux";

const resources = ["users", "tasks"];

// export interface Message {
//   user: string
//   message: string
//   timestamp: number
// }
//
// export interface ChatState {
//   messages: Message[]
// }
//
// const uiReducer = (state= {}, action: any) => state;
// const routeReducer = (state= {}, action: any) => state;
//
// const initState: ChatState = {
//   messages: []
// };
//
// function chatReducer (state = initState, action: any): ChatState {
//   return state;
// }
//
// const front = combineReducers({
//   ui: uiReducer,
//   routing: routeReducer,
// });
//
// const customReducers = {
//   front,
//   chat: chatReducer
// };

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
