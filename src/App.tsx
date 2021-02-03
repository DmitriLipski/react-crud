import React, { useEffect } from "react";
import "./App.css";
import ReactCRUD from "./packages/crud";
import { useDispatch } from "react-redux";
import { getList, getOne } from "./packages/crud/actions";
import { combineReducers } from "redux";
import { apiClient } from "./packages/crud/services/ApiClient";

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
  console.log("import.meta.env.", import.meta.env);
  return (
    <ReactCRUD
      resources={resources}
      resourceMap={{
        users: "/users",
        tasks: "/tasks",
      }}
    >
      <div className="App">
        <h1>React CRUD</h1>
        <Main />
      </div>
    </ReactCRUD>
  );
}

const Main = () => {
  const dispatch = useDispatch();

  type UserType = {
    id: string | number;
    name: string;
    username: string;
    email: string;
  };

  useEffect(() => {
    dispatch({ type: "INIT_APP" });
    apiClient
      .getAll<{ status: number; statusText: string; data: UserType[] }>("users")
      .then((response) => console.log("response", response));
  }, []);

  const handleLoadUsers = () => dispatch(getList("users"));
  const handleLoadTasks = () => dispatch(getList("tasks"));
  const handleLoadUserOne = () => dispatch(getOne("users", 1));
  const handleLoadUserTwo = () => dispatch(getOne("users", 2));

  return (
    <>
      <button onClick={handleLoadUsers}>GET ALL USERS</button>
      <br />
      <br />
      <button onClick={handleLoadTasks}>GET ALL TASKS</button>
      <br />
      <br />
      <button onClick={handleLoadUserOne}>GET USER #1</button>
      <br />
      <br />
      <button onClick={handleLoadUserTwo}>GET USER #2</button>
    </>
  );
};

export default App;
