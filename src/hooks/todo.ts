import { useState } from "react";
function getDefaultTodo(): ITodo {
    return {
        id: Date.now(),
        title: '',
        description: '',
        createdAt: (new Date).toLocaleString(),
        updatedAt: '',
    }
}
export function useTodo(todos: ITodo[] = []) {
    const [_todos, _setTodos] = useState(todos);
    function addTodo(todo: Partial<ITodo>) {
        const _defaultTodo = getDefaultTodo();
        _setTodos([..._todos, { ..._defaultTodo, ...todo }])
    }
    function removeTodo(todoId: string | number) {
        _setTodos(_todos.filter(todo => todo.id !== todoId));
    }
    return {
        todos: _todos,
        addTodo,
        removeTodo
    }
}