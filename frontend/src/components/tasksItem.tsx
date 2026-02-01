import { useNavigate } from "react-router-dom";
import { FaPencil, FaTrashCan, FaCheck } from "react-icons/fa6";
import type { Task } from "../types/task";
import { deleteTask } from "../services/taskservices";
import Swal from "sweetalert2";

export const TaskItem = ({ task }: { task: Task }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await deleteTask(task.id);

        Swal.fire({
          title: "¡Eliminada!",
          text: "La tarea ha sido eliminada.",
          icon: "success",
          confirmButtonColor: "#10b981",
          timer: 1500,
        });

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        console.error("Error eliminando tarea:", error);
        Swal.fire({
          title: "Error",
          text: "No se pudo eliminar la tarea",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      }
    }
  };

  const handleEdit = () => {
    navigate("/edit-task", { state: { task } });
  };

  return (
    <div className="task-card">
      <div className="task-content">
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

          <button className="btn-complete">
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
