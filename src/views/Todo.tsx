import { useMemo, useState } from "react";
import TodoCard from "../components/todo/Card";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../store";
import { ITodo } from "../types";
// import { addTodo } from "../store/todo";
import { useTodo } from "../hooks/todo";
// import { useDatabase } from "../hooks/database";

function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const todos = useSelector<RootState, ITodo[]>((state) => state.todo.todos);
  const { todos, addTodo } = useTodo();
  const sortedTodos = useMemo(() => {
    const _todos = [...todos];
    return _todos?.sort((first, second) => {
      return (
        (second?.updatedAt || second?.createdAt) -
        (first?.updatedAt || first.createdAt)
      );
    });
  }, [todos]);
  // const dispatch = useDispatch();
  function storeTodo() {
    const payload: ITodo = {
      id: Date.now(),
      title,
      description,
      createdAt: Date.now(),
    };
    addTodo(payload);
  }
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-4">
      <div className="pb-12 text-center">
        <h2 className="text-base font-bold text-indigo-600">
          We have the best equipment
        </h2>
        <h1 className="font-heading text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Check our Todo List
        </h1>
        {JSON.stringify(todos)}
      </div>
      <div className="text-end">
        <form className="w-full max-w-xl  rounded-lg px-4 pt-2">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <h2 className="px-4 pb-2 pt-3 text-lg text-gray-800">
              Add a new comment
            </h2>
            <div className="my-2 w-full px-3 md:w-full">
              <input
                value={title}
                onInput={(event) =>
                  setTitle((event?.target as HTMLInputElement)?.value)
                }
                placeholder="Type Your Title"
                className="w-full rounded border border-gray-400 bg-gray-300 px-3 py-2 font-medium leading-normal placeholder:text-gray-700 focus:bg-gray-400 focus:outline-none"
              />
              <textarea
                className="h-20 w-full resize-none rounded border border-gray-400 bg-gray-300 px-3 py-2 font-medium leading-normal placeholder:text-gray-700 focus:bg-gray-400 focus:outline-none"
                name="body"
                placeholder="Type Your Comment"
                value={description}
                onInput={(event) =>
                  setDescription((event?.target as HTMLInputElement)?.value)
                }
                required
              ></textarea>
            </div>
            <div className="flex w-full items-start px-3  md:w-full">
              <div className="mr-auto flex w-1/2 items-start px-2 text-gray-700">
                <svg
                  fill="none"
                  className="mr-1 size-5 text-gray-600"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="pt-px text-xs md:text-sm">Some HTML is okay.</p>
              </div>
              <div className="-mr-1">
                <button
                  type="button"
                  onClick={storeTodo}
                  className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#3b5998] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50 dark:focus:ring-[#3b5998]/55"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Todo
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {sortedTodos.map((todo) => (
          <TodoCard {...todo} key={todo.id} />
        ))}
      </div>
    </section>
  );
}

export default Todo;
