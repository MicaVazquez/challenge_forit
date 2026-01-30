import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  {
    id: "1",
    title: "aaa",
    description: "bbb",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "bbb",
    description: "ccc",
    completed: true,
    createdAt: new Date(),
  },
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
