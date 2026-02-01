// import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import Navigation from "./components/nav";

const TaskList = lazy(() => import("./pages/TaskList"));
const TaskForm = lazy(() => import("./pages/TaskForm"));
function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="loading-container">Cargando...</div>}>
        <Routes>
          <Route path="/edit-task" element={<TaskForm />}></Route>
          <Route path="/new-task" element={<TaskForm />}></Route>
          <Route path="/tasks" element={<TaskList />}></Route>
          <Route path="/" element={<TaskList />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
