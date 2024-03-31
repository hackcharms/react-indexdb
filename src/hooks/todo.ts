import { TaskPriority } from "../enums";
import { ITodo } from "./../types/index";
import { useState } from "react";
const STORAGE_KEY = "_todo_tasks";
function getDefaultTodo(): ITodo {
  return {
    id: Date.now(),
    title: "",
    description: "",
    priority: TaskPriority.MEDIUM,
    createdAt: Date.now(),
    updatedAt: undefined,
  } as ITodo;
}
export function useTodo(todos: ITodo[] = []) {
  const localTodos = JSON.parse(
    window.localStorage.getItem(STORAGE_KEY) || '""'
  );
  const [_todos, __setTodos] = useState<ITodo[]>([...localTodos, ...todos]);

  function _setTodos(data: ITodo[]) {
    __setTodos(data);
    console.log(
      "__setTodos",
      data,
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    );
  }
  function addTodo(todo: Partial<ITodo>) {
    const _defaultTodo = getDefaultTodo();
    _setTodos([..._todos, { ..._defaultTodo, ...todo }]);
  }
  function removeTodo(todoId: number) {
    _setTodos(_todos.filter((todo) => todo.id !== todoId));
  }
  function updateTodo(todoId: number, updatedTodo: Partial<ITodo>) {
    const matchedTodoIndex = _todos.findIndex((todo) => todo.id === todoId);
    if (matchedTodoIndex < 0)
      return console.error(`No todo found with id "${todoId}"`);
    const cloneTod = Object.assign({}, _todos[matchedTodoIndex], updatedTodo);
    _setTodos([
      ..._todos.slice(0, matchedTodoIndex),
      cloneTod,
      ..._todos.slice(matchedTodoIndex + 1),
    ]);
  }
  return {
    todos: _todos,
    addTodo,
    updateTodo,
    removeTodo,
  };
}
