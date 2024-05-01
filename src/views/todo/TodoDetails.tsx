import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../types";
// import { useSelector } from "react-redux";
// import { RootState } from "../store";
import { useTodo } from "../../hooks/todo";
export default function TodoDetails() {
  const [cardDetails, setCardDetails] = useState<ITodo>();
  const { id } = useParams();
  // const todos = useSelector<RootState, ITodo[]>((state) => state.todo.todos);
  const { todos } = useTodo();
  useEffect(() => {
    const todo = todos.find((el) => el.id === parseInt(id as string));
    if (!todo) return;
    // window.alert(`todo with id "${id}" not found`);
    setCardDetails(todo);
  }, []);
  return (
    <div className="w-full">
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {cardDetails?.title}
        </h5>
        <p className="text-base text-gray-700 dark:text-gray-100">
          {cardDetails?.description}
        </p>
        <div className="mb-5 mt-2.5 flex items-center">
          <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {cardDetails?.createdAt?.toString()}
          </span>
        </div>
        <div className="flex items-center justify-between">
          {cardDetails?.expiredAt ? (
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {cardDetails?.expiredAt?.toString()}
            </span>
          ) : (
            ""
          )}
          <a
            href="#"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
