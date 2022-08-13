import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TodoType } from "./todo.types";

type TodoReducer = {
  todos: TodoType[];
};

const initialState: TodoReducer = {
  todos: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.unshift(action.payload);
    },

    addManyTodos: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = [...state.todos, ...action.payload];
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, addManyTodos, deleteTodo } = todoReducer.actions;

export default todoReducer.reducer;
