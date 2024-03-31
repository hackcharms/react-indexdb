import { TaskPriority } from "../enums";

export interface ITodo {
  id: number;
  title: string;
  description?: string;
  priority?: TaskPriority;
  createdAt: number;
  expiredAt?: number;
  updatedAt?: number;
}
