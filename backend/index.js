import express from "express";
import cors from "cors";
import crypto from "crypto";

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  {
    id: "1",
    title: "tarea1",
    description: "bbb",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "tarea2",
    description: "ccc",
    completed: true,
    createdAt: new Date(),
  },
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ msj: "Faltan datos obligatorios" });
  }

  const newTask = {
    id: crypto.randomUUID(),
    title: title,
    description: description,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ msj: "tarea no encontrada" });
  }
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ msj: "tarea no encontrada" });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ msj: "tarea eliminada", task: req.params.id });
});

app.put("/api/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(404).json({ msj: "tarea no encontrada" });
  }
  const { title, description, completed } = req.body;

  if (title !== undefined) tasks[taskIndex].title = title;
  if (description !== undefined) tasks[taskIndex].description = description;
  if (completed !== undefined) tasks[taskIndex].completed = completed;
  res.json(tasks[taskIndex]);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000 :D");
});
