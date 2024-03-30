export interface ITodo {
  id: string | number;
  title: string;
  description?: string;
  priority: "high" | "low" | "urgent" | "medium";
  createdAt: number | Date;
  expiredAt?: number | Date;
  updatedAt?: number | Date;
}
