import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPencil, FaTrashCan, FaCheck } from "react-icons/fa6";
import type { Task } from "../types/task";
import { deleteTask, updateTask } from "../services/taskservices";
import Swal from "sweetalert2";

export const TaskItem = ({ task }: { task: Task }) => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      background: "#2a2d3a",
      color: "#ffffff",
      showCancelButton: true,
      confirmButtonColor: "#ff3ba0",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await deleteTask(task.id);

        await Swal.fire({
          title: "¡Eliminada!",
          text: "La tarea ha sido eliminada.",
          icon: "success",
          background: "#2a2d3a",
          color: "#ffffff",
          confirmButtonColor: "#ff3ba0",
          timer: 1500,
          showConfirmButton: false,
        });

        window.location.reload();
      } catch (error) {
        console.error("Error eliminando tarea:", error);
        Swal.fire({
          title: "Error",
          text: "No se pudo eliminar la tarea",
          icon: "error",
          background: "#2a2d3a",
          color: "#ffffff",
          confirmButtonColor: "#ff3ba0",
        });
      }
    }
  };

  const handleEdit = () => {
    navigate("/edit-task", { state: { task } });
  };

  const handleToggleComplete = async () => {
    try {
      const newCompletedState = !isCompleted;

      await updateTask({
        id: task.id,
        title: task.title,
        description: task.description,
        completed: newCompletedState,
        createdAt: task.createdAt,
      });

      setIsCompleted(newCompletedState);

      Swal.fire({
        title: newCompletedState ? "¡Completada!" : "Marcada como pendiente",
        icon: "success",
        background: "#2a2d3a",
        color: "#ffffff",
        confirmButtonColor: "#ff3ba0",
        timer: 1000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error actualizando tarea:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar la tarea",
        icon: "error",
        background: "#2a2d3a",
        color: "#ffffff",
        confirmButtonColor: "#ff3ba0",
      });
    }
  };

  return (
    <div className={`task-card ${isCompleted ? "completed" : ""}`}>
      <div className="task-content">
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleToggleComplete}
            className="task-checkbox"
          />
        </div>

        <div className="text-display">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <div className="buttons-box">
          <button onClick={handleEdit} className="btn-edit">
            <FaPencil />
          </button>

          <button onClick={handleDelete} className="btn-delete">
            <FaTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
