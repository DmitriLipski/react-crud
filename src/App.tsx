import React from "react";
import "./App.css";
import ReactCRUD from "./packages/crud";
import { useDispatch } from "react-redux";
import { getList, getOne } from "./packages/crud/actions";
import { combineReducers } from "redux";
import { useListController } from "./packages/crud/controllers/useListController";
import type { Identifier } from "./packages/crud/types";

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

type UserType = {
  id: string | number;
  name: string;
  username: string;
  email: string;
};

const Main = () => {
  const dispatch = useDispatch();

  const controller = useListController<UserType>("users");
  console.log("controller", controller);

  const handleLoadUsers = () => dispatch(getList("users"));
  const handleLoadTasks = () => dispatch(getList("tasks"));
  const handleLoadUserOne = () => dispatch(getOne("users", 1));
  const handleLoadUserTwo = () => dispatch(getOne("users", 2));

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <UserList
        data={controller.data}
        ids={controller.ids}
        loading={controller.loading}
        loaded={controller.loaded}
        error={controller.error}
      />
      <div>
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
      </div>
    </div>
  );
};

interface UserListProps {
  data: Record<Identifier, UserType>;
  ids: Array<Identifier>;
  loading: boolean;
  loaded: boolean;
  error: null | string;
}

function UserList({ data, ids, loading, loaded, error }: UserListProps) {
  if (loading || !loaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <table className="user-list">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tbody>
        {ids.map((id) => (
          <User user={data[id]} />
        ))}
      </tbody>
    </table>
  );
}

function User({ user }: { user: UserType }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  );
}

export default App;
