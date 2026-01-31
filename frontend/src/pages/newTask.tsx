import { useForm, type SubmitHandler } from "react-hook-form";
import type { Task } from "../types/task";
import "../styles/newTask.css";
import { MdAddTask } from "react-icons/md";

export const newTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Task>();

  const onSubmit: SubmitHandler<Task> = (data) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      completed: false,
      createdAt: new Date(),
    };
    console.log(newTask);
    reset();
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
          {...register("title", { required: true })}
        />
        {errors.title && <span>Este campo es obligatorio</span>}
        <label htmlFor="description">Descripción:</label>
        <textarea
          placeholder="Escribe una descripcion"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>Este campo es obligatorio</span>}
        <button type="submit" className="btn-submit">
          Crear Tarea
        </button>
      </form>
    </div>
  );
};

export default newTask;
