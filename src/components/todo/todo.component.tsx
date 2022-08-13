import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { TodoType } from "../../store/todo/todo.types";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import "../additional-styles/button-styles.css";
import "./todo.styles.css";

import {
  addTodo,
  addManyTodos,
  deleteTodo,
} from "../../store/todo/todo.reducer";
import TodoItem from "../todoItem/todoItem.component";

const TodoComponent: FC = () => {
  const [todo, setTodo] = useState<string>("");

  const dispatch = useAppDispatch();
  const allTodos = useAppSelector((state) => state.todo.todos);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClick = () => {
    if (todo !== "") {
      dispatch(addTodo(newTodo(todo)));
      setTodo("");
    }
  };

  const newTodo = (todo: string): TodoType => {
    return {
      id: Date.now(),
      title: todo,
      completed: false,
    };
  };

  async function handleAddManyTodos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      dispatch(addManyTodos(response.data));
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div className="todo">
        <Link to="/" className="home-button custom-button">
          HOME
        </Link>
        <div>
          <div className="todo-input-container">
            <input
              type="text"
              value={todo}
              onChange={(event) => handleChange(event)}
              placeholder=" "
              className="todo-input"
            />
            <label className="todo-label">NEW TODO</label>
            <button onClick={handleClick} className="todo-button-1">
              ADD TO TODOS
            </button>
          </div>
          <button
            onClick={handleAddManyTodos}
            className="home-button custom-button todo-button-2"
          >
            ADD MANY TODOS
          </button>
        </div>
      </div>
      {allTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteOneTodo={(id) => dispatch(deleteTodo(id))}
        />
      ))}
    </>
  );
};
3;

export default TodoComponent;
