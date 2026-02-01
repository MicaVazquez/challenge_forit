import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { createTask, updateTask } from "../services/taskservices";
import type { Task } from "../types/task";
import "../styles/newTask.css";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const taskToEdit = location.state?.task as Task | undefined;
  const isEditing = !!taskToEdit;

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isEditing && taskToEdit) {
        await updateTask({
          id: taskToEdit.id,
          title,
          description,
          completed: taskToEdit.completed,
          createdAt: taskToEdit.createdAt,
        });
        console.log("Tarea actualizada");
      } else {
        await createTask({
          title,
          description,
          completed: false,
          createdAt: new Date(),
        });
        console.log("Tarea creada");
      }

      setTitle("");
      setDescription("");
      navigate("/tasks");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="header">
        <h1 className="icon-title">
          <MdAddTask />
          {isEditing ? "Editar tarea" : "Tarea nueva"}
        </h1>
        <h5>
          {isEditing
            ? "Modifica los campos para actualizar la tarea"
            : "Completa el formulario para crear una nueva tarea"}
        </h5>
      </div>

      <form className="container-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          placeholder="Escribe un titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          placeholder="Escribe una descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="btn-submit">
          {isEditing ? "Actualizar Tarea" : "Crear Tarea"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
