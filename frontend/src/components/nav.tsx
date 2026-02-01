import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Lista de Tareas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className=" justify-between h-16  "
        >
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Tareas
            </Nav.Link>

            <Nav.Link as={Link} to="/new-task">
              Nueva Tarea
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
