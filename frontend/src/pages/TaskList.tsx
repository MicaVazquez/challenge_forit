import React, { use, useEffect } from "react";
import { useState } from "react";
import type { Task } from "../types/task";
import { fetchTasks } from "../services/taskservices";

import { Link } from "react-router-dom";
import { FaPencil, FaTrashCan, FaCheck } from "react-icons/fa6";
export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const editTodo = (item: Task) => {
    console.log("Editando tarea:", item);
  };
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
    <div className="task-list">
      {tasks.map((item) => (
        <div key={item.id} className="task-card">
          <div className="task-content">
            <div className="text-display">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="buttons-box">
              <button onClick={() => editTodo(item)} className="btn-edit">
                <Link to="/edit-task">
                  <FaPencil />
                </Link>
              </button>

              <button
                onClick={() => deleteTask(item.id)}
                className="btn-delete"
              >
                <FaTrashCan />
              </button>

              <button className="btn-complete">
                <Link to="/compleated-task">
                  <FaCheck />
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
