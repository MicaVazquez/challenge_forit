// import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import Navigation from "./components/nav";

const Home = lazy(() => import("./pages/home"));
const NewTask = lazy(() => import("./pages/newTask"));
const TaskList = lazy(() => import("./pages/TaskList"));
function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="container mt-5">Loading...</div>}>
        <Routes>
          <Route path="/newTask" element={<NewTask />}></Route>
          <Route path="/" element={<TaskList />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
