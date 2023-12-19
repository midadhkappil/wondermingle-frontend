import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import logo from "../../../Assets/Images/logo.jpg";
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import AuthContext from 'context/AuthContext';
import useAuth from 'hooks/useAuth';
import { toast } from 'react-toastify';





const Heder = () => {
  const {setAuth} = useAuth()
  const logout = () => {
    setAuth({
      isLoggedIn: false,
      user: null
    })
    toast.success("Loggedout success")
  }
  return (
    <Navbar bg="light" expand="md" className="mb-4 border-bottom">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={logo} height={40} />
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
            <Nav.Link
              as={NavLink}
              to="/"
              className="nav-link px-2 link-secondary">Massage</Nav.Link>
            <Nav.Link
              as={NavLink}
              to=""
              className="nav-link px-2 link-dark">Find A Guide</Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/profile"
              className="nav-link px-2 link-dark">Profile</Nav.Link>

          </Nav>
        </Navbar.Collapse>

        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'blue' }}>
              Settings
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile Management</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Theme</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Privacy Management</Dropdown.Item>
              <Dropdown.Item onClick={logout }>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Heder;
