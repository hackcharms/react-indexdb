import { useState } from "react";
import { PriorityColor, TaskPriority } from "../../enums";
import { PRIORITY_LIST } from "../../constants";
type PropsType = {
  setPriority: (priority: TaskPriority) => void;
  priority: TaskPriority;
};
function PrioritySelector({
  setPriority,
  priority = TaskPriority.MEDIUM,
}: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const priorityColorMap: Record<TaskPriority, PriorityColor> = {
    [TaskPriority.LOW]: PriorityColor.LOW,
    [TaskPriority.MEDIUM]: PriorityColor.MEDIUM,
    [TaskPriority.HIGH]: PriorityColor.HIGH,
    [TaskPriority.URGENT]: PriorityColor.URGENT,
  };
  const priorityLabelMap: Record<TaskPriority, string> = {
    [TaskPriority.LOW]: "Low",
    [TaskPriority.MEDIUM]: "medium",
    [TaskPriority.HIGH]: "High",
    [TaskPriority.URGENT]: "Urgent",
  };
  function handleChange(value: TaskPriority) {
    setPriority(value);
    setIsOpen(false);
  }
  return (
    <div
      className={
        ` bg-${priorityColorMap[priority]}-200 ` +
        "relative inline-flex rounded-md shadow-sm"
      }
      role="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-s-lg border px-4 py-2  text-sm font-medium text-black hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        {priorityLabelMap[priority]}
        <svg
          className="ms-3 size-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        className={
          !isOpen
            ? " hidden "
            : "" +
              "absolute top-14 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
        }
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDelayButton"
        >
          {PRIORITY_LIST.map((_priority) => (
            <li key={_priority.id}>
              <button
                onClick={() => handleChange(_priority.id)}
                className={`w-full px-4 py-2 ${_priority.color}-100 hover:bg-${_priority.color}-200 dark:hover:bg-${_priority.color}-600 dark:hover:text-white`}
              >
                {_priority.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={priority === TaskPriority.URGENT}
        type="button"
        onClick={() => handleChange(priority + 1)}
        className="rounded-e-lg border border-gray-200 p-2  text-sm font-medium text-gray-900 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
export default PrioritySelector;
