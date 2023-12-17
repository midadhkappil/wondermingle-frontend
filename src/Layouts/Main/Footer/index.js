import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <footer className="py-3 my-4">
      <Nav className="justify-content-center border-bottom pb-3 mb-3">
        
        <Nav.Item>
          <Nav.Link href="#" className="nav-link px-2 text-muted">Features</Nav.Link>
        </Nav.Item>
         <Nav.Item>
          <Nav.Link href="#" className="nav-link px-2 text-muted">FAQs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
          as={NavLink}
          to="/about"
          className="nav-link px-2 text-muted">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="text-center text-muted">
        <p>© {new Date().getFullYear()} wonder mingle</p>
      </Container>
    </footer>
  );
}

export default Footer;
