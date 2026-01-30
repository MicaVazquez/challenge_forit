// import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
