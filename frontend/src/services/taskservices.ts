import type { Task } from "../types/task";

const API_URL = "http://localhost:3000/api/tasks";

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error fetching tasks");
  }
  return response.json();
};

export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Error creating task");
  }
  return response.json();
};

export const updateTask = async (task: Partial<Task>): Promise<Task> => {
  const response = await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Error updating task");
  }
  return response.json();
};

export const deleteTask = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error deleting task");
  }
  return;
};
