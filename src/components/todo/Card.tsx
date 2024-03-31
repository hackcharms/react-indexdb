import { Link } from "react-router-dom";
import { ITodo } from "../../types";
import { FormEvent, useState } from "react";
import { useTodo } from "../../hooks/todo";
import PrioritySelector from "./PrioritySelector";
import { TaskPriority } from "../../enums";
import Button from "../core/button";
function TodoCard({
  id,
  description,
  title,
  priority = TaskPriority.MEDIUM,
  expiredAt,
  createdAt,
  updatedAt,
}: ITodo) {
  const [_description, _setDescription] = useState(description),
    [_title, _setTitle] = useState(title),
    [_priority, _setPriority] = useState(priority);
  const { updateTodo } = useTodo();
  function setPriority(priority: TaskPriority) {
    _setPriority(priority);
    updateTodo(id, {
      priority,
    });
  }
  function updateCard(event: FormEvent) {
    event.preventDefault();
    const updatedTask: Partial<ITodo> = {
      title: _title,
      description: _description,
      priority: _priority,
    };
    updateTodo(id, updatedTask);
  }
  const handleChange = (callback: Function) => {
    return (event: any) => {
      callback((event.target as HTMLInputElement | HTMLTextAreaElement).value);
    };
  };
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between ">
        <PrioritySelector setPriority={setPriority} priority={_priority} />
      </div>
      <form onSubmit={updateCard} className="max-w-sm mx-auto">
        <input
          className="shadow-sm border border-transparent focus:bg-gray-100 text-gray-900 text-xl font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light "
          value={_title}
          onChange={handleChange(_setTitle)}
        />
        <hr />
        <textarea
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 focus:bg-gray-100 rounded-lg border border-transparent border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Task description here..."
          value={_description}
          onChange={handleChange(_setDescription)}
        />
        <div className="text-end my-2">
          <Button variant="solid" type="submit" onClick={updateCard}>
            Update
          </Button>
        </div>
      </form>
      <Link to={"/cards/" + id}>See more details</Link>
      <div className="flex justify-between mt-2 -mb-2">
        <span className="text-xs font-thin"> createdAt:{createdAt}</span>
        <span className="text-xs font-thin"> updatedAt:{updatedAt}</span>
        <span className="text-xs font-thin">expiredAt:{expiredAt}</span>
      </div>
    </div>
  );
}
export default TodoCard;
