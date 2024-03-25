import { Link } from "react-router-dom";
interface CardProps{
    id:string|number,
    title:string,
    description:string
}
const defaultCard: CardProps = {
  id: Math.random() * 1000,
  title: `Here are the biggest enterprise technology acquisitions of 2021 so far`,
  description: `Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.`,
};
function TodoCard({ id, description, title }:CardProps) {
//   const { id, description, title } = defaultCard;
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
