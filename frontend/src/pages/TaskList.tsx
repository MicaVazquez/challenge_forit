import { useEffect } from "react";
import { useState } from "react";
import type { Task } from "../types/task";
import { fetchTasks } from "../services/taskservices";

import "../styles/tasksList.css";
import TaskItem from "../components/tasksItem";

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error al cargar tareas:", error);
    }
  };
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <div>
      <h1 className="header">Tus tareas</h1>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
