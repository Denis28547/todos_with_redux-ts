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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        border: "3px solid lightgrey",
      }}
    >
      <h3 style={{ paddingRight: "10px" }}>{title}</h3>
      <button
        onClick={() => deleteOneTodo(id)}
        style={{
          backgroundColor: completed ? "#7FFF00" : "#696969",
          border: "none",
          borderRadius: "25%",
          position: "absolute",
          right: "100px",
          height: "75px",
          width: "75px",
          color: "white",
        }}
      >
        &#10006;
      </button>
    </div>
  );
};

export default TodoItem;
