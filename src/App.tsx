import React, { useEffect } from "react";
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
        <Main />
      </div>
    </ReactCRUD>
  );
}

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "INIT_APP" });
  }, []);

  const handleLoadUsers = () => dispatch(getList("users"));
  const handleLoadTasks = () => dispatch(getList("tasks"));

  return (
    <>
      <button onClick={handleLoadUsers}>GET ALL USERS</button>
      <br />
      <br />
      <button onClick={handleLoadTasks}>GET ALL TASKS</button>
    </>
  );
};

export default App;
