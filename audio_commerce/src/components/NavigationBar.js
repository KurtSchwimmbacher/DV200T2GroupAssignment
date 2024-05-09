import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "../styles/NavigationBar.css";

// import link
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
    <Container>
      <Navbar.Brand>
        <Link to="/" className='navbar-link-brand'>
                Insert Logo
            </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link >
            <Link to="/" className='navbar-link'>
                Home
            </Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/products" className='navbar-link'>
                Products
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/community" className='navbar-link'>
                Community
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;
