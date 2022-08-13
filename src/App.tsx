import { Route, Routes } from "react-router-dom";

import Home from "./components/home/home.component";
import Users from "./components/user/users.component";
import User from "./components/userItem/userItem.component";
import TodoComponent from "./components/todo/todo.component";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todo" element={<TodoComponent />} />
      <Route path="users">
        <Route index element={<Users />} />
        <Route path=":userId" element={<User />} />
      </Route>
    </Routes>
  );
};

export default App;
