// import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import Navigation from "./components/nav";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div className="container mt-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
