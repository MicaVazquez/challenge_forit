import { useForm, type SubmitHandler } from "react-hook-form";
import type { Task } from "../types/task";
import "../styles/newTask.css";
import { MdAddTask } from "react-icons/md";
import { createTask } from "../services/taskservices";
import { useNavigate } from "react-router-dom";
export const newTask = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Task>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Task> = (data) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      completed: false,
      createdAt: new Date(),
    };
    console.log("Tarea a crear:", newTask);

    createTask(newTask)
      .then((response) => {
        console.log("✅ Tarea creada exitosamente:", response);
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.error("❌ Error al crear la tarea:", error);
        alert("Error: " + error.message);
      });
  };

  return (
    <div>
      <div className="header">
        <h1 className="icon-title">
          <MdAddTask />
          Tarea nueva
        </h1>
        <h5>Completa el formulario para crear una nueva tarea</h5>
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
          Crear Tarea
        </button>
      </form>
    </div>
  );
};

export default newTask;
