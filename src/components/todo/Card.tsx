import { Link } from "react-router-dom";
import { ITodo } from "../../types";
function TodoCard({ id, description, title }: ITodo) {
  return (
    <Link
      to={"/cards/" + id}
      className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-gray-200 hover:bg-gray-50 dark:bg-gray-300 dark:border-gray-500 dark:hover:bg-gray-400"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-600">
        {description}
      </p>
    </Link>
  );
}
export default TodoCard;
