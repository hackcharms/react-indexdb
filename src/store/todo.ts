import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types";

const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos: [] satisfies ITodo[] as ITodo[],
  },
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      console.log(state, action);
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<ITodo["id"]>) {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    updateTodo(
      state,
      action: PayloadAction<{ id: ITodo["id"]; updatedTodo: Partial<ITodo> }>
    ) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) Object.assign(todo, action.payload.updatedTodo);
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
