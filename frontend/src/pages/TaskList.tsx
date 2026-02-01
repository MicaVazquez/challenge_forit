import React, { use, useEffect } from "react";
import { useState } from "react";
import type { Task } from "../types/task";

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
