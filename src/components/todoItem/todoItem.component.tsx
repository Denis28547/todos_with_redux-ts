import { FC } from "react";

import { TodoType } from "../../store/todo/todo.types";

import "./todoItem.styles.css";

type TodoItemPayload = {
  todo: TodoType;
  deleteOneTodo: (id: number) => void;
};

const TodoItem: FC<TodoItemPayload> = ({ todo, deleteOneTodo }) => {
  const { id, title, completed } = todo;

  return (
    <div className="todoItem-container">
      <div
        className="todoItem-completed container-item"
        style={{
          backgroundColor: completed ? "#7FFF00" : "red",
        }}
      >
        {completed ? "✓" : "×"}
      </div>
      <p className="todoItem-title container-item">{title} </p>
      <button
        onClick={() => deleteOneTodo(id)}
        className="todoItem-delete-button container-item"
      >
        &#10006;
      </button>
    </div>
  );
};

export default TodoItem;
