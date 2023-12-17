import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import logo from "../../../Assets/Images/logo.avif";
import { NavLink } from 'react-router-dom';


const Heder = () => {
  return (
    <Navbar bg="light" expand="md" className="mb-4 border-bottom">
      <Container>
      <Navbar.Brand href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={logo}height={40}/>
        WONDER MINGLE

      </Navbar.Brand >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            className="nav-link px-2 link-secondary">Home</Nav.Link>
          <Nav.Link 
          as={NavLink}
          to="/trips"
          className="nav-link px-2 link-dark">Trips</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>

      <div className="col-md-3 text-end">
        <Nav.Link
        as={NavLink}
        to="/login">
        <Button variant="outline-primary" className="me-2">Login</Button>
        </Nav.Link>

        <Nav.Link
        as={NavLink}
        to="/signup">
        <Button variant="primary">Sign-up</Button>
        </Nav.Link>

      </div>
      </Container>
    </Navbar>
  );
}

export default Heder;
