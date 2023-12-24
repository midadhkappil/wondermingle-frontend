import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import logo from "../../../Assets/Images/logo.jpg";
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import useAuth from 'hooks/useAuth';
import { toast } from 'react-toastify';
import { setToken } from 'utils/storage';
import { FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './header.css'
import Notification from 'Components/Notification';

const Heder = () => {
  const { setAuth } = useAuth();
  const logout = () => {
    setAuth({
      isLoggedIn: false,
      user: null,
    });
    setToken("");
    toast.success("Loggedout success");
  };


  return (
    <Navbar bg="light" expand="md" className="mb-4 border-bottom">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={logo} height={40} />
          WONDER MINGLE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link as={NavLink} to="/" className="nav-link px-2 link-secondary">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/message" className="nav-link px-2 link-secondary">
              Message
            </Nav.Link>
            <Nav.Link as={NavLink} to="/findaguide" className="nav-link px-2 link-dark">
              Find A Guide
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile" className="nav-link px-2 link-dark">
              Profile
            </Nav.Link>
          </Nav>

          <Dropdown as={NavItem} className="me-3" id="notification">
            <Dropdown.Toggle as={Link} to="#"  id="notification-dropdown">
              <FaBell />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Notification/>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heder;
