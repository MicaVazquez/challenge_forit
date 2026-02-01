import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import type { Task } from "../types/task";
import "../styles/newTask.css";
import { MdAddTask } from "react-icons/md";
import { createTask, updateTask } from "../services/taskservices";
import Swal from "sweetalert2";
const TaskForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const taskToEdit = location.state?.task as Task | undefined;
  const isEditing = !!taskToEdit;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Task>({
    mode: "onChange",
  });

  useEffect(() => {
    if (taskToEdit) {
      setValue("title", taskToEdit.title);
      setValue("description", taskToEdit.description);
    }
  }, [taskToEdit, setValue]);

  const onSubmit: SubmitHandler<Task> = async (data) => {
    try {
      if (isEditing && taskToEdit) {
        await updateTask({
          id: taskToEdit.id,
          title: data.title,
          description: data.description,
          completed: taskToEdit.completed,
          createdAt: taskToEdit.createdAt,
        });

        await Swal.fire({
          title: "¡Actualizada!",
          text: "La tarea ha sido actualizada.",
          icon: "success",
          background: "#2a2d3a",
          color: "#ffffff",
          confirmButtonColor: "#ff3ba0",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        const newTask = {
          title: data.title,
          description: data.description,
          completed: false,
          createdAt: new Date(),
        };
        await createTask(newTask);
        await Swal.fire({
          title: "¡Nueva tarea!",
          text: "La tarea ha sido creada.",
          icon: "success",
          background: "#2a2d3a",
          color: "#ffffff",
          confirmButtonColor: "#ff3ba0",
          timer: 1500,
          showConfirmButton: false,
        });
      }

      reset();
      navigate("/");
    } catch (error) {
      console.error("❌ Error:", error);
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

      <form className="container-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Título:</label>
        <input
          placeholder="Escribe un titulo"
          {...register("title", {
            required: "El título es obligatorio",
            validate: (value) =>
              !/^\d+$/.test(value) || "No puede ser solo números",
          })}
        />
        {errors.title && (
          <span className="error-span">{errors.title.message}</span>
        )}

        <label htmlFor="description">Descripción:</label>
        <textarea
          placeholder="Escribe una descripcion"
          {...register("description", {
            required: "La descripción es obligatoria",
            maxLength: {
              value: 500,
              message: "La descripción no puede exceder 500 caracteres",
            },
            minLength: {
              value: 10,
              message: "La descripción debe tener al menos 10 caracteres",
            },
            validate: (value) =>
              !/^\d+$/.test(value) || "No puede ser solo números",
          })}
        ></textarea>
        {errors.description && (
          <span className="error-span">{errors.description.message}</span>
        )}

        <button type="submit" className="btn-submit">
          {isEditing ? "Actualizar Tarea" : "Crear Tarea"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
