import { Link } from "react-router-dom";
import { ITodo } from "../../types";
import { ChangeEvent, FormEvent, useState } from "react";
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
  const handleChange = (callback: (value: string) => void) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      callback(event.target.value);
    };
  };
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-between ">
        <PrioritySelector setPriority={setPriority} priority={_priority} />
      </div>
      <form onSubmit={updateCard} className="mx-auto max-w-sm">
        <input
          className="dark:shadow-sm-light block w-full rounded-lg border p-2.5 text-xl font-bold text-gray-900 shadow-sm focus:border-blue-500 focus:bg-gray-100 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
          value={_title}
          onChange={handleChange(_setTitle)}
        />
        <hr />
        <textarea
          rows={4}
          className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-gray-100 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Task description here..."
          value={_description}
          onChange={handleChange(_setDescription)}
        />
        <div className="my-2 text-end">
          <Button variant="solid" type="submit" onClick={updateCard}>
            Update
          </Button>
        </div>
      </form>
      <Link to={"/cards/" + id}>See more details</Link>
      <div className="-mb-2 mt-2 flex justify-between">
        <span className="text-xs font-thin"> createdAt:{createdAt}</span>
        <span className="text-xs font-thin"> updatedAt:{updatedAt}</span>
        <span className="text-xs font-thin">expiredAt:{expiredAt}</span>
      </div>
    </div>
  );
}
export default TodoCard;
