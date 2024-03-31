import { PriorityColor, TaskPriority } from "../enums";
export const PRIORITY_LIST: {
  id: TaskPriority;
  name: string;
  color: string;
}[] = [
  {
    id: TaskPriority.LOW,
    color: PriorityColor.LOW,
    name: "Low",
  },
  {
    id: TaskPriority.MEDIUM,
    color: PriorityColor.MEDIUM,
    name: "Medium",
  },
  {
    id: TaskPriority.HIGH,
    color: PriorityColor.HIGH,
    name: "High",
  },
  {
    id: TaskPriority.URGENT,
    color: PriorityColor.URGENT,
    name: "Urgent",
  },
];
