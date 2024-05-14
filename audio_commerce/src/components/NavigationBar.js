import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import "../styles/NavigationBar.css";

import Logo from '../assets/logo/logo-2.svg';

// import link
import { Link } from "react-router-dom";
import AccountModal from './AccountModal';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="nav-bar-con bg-body-tertiary justify-content-center">
    <Container>
      <Navbar.Brand>
        <Link to="/" className='navbar-link-brand'>
                <img className='logo-img' src={Logo} alt='logo img'></img>
            </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid ">
          <div className='m-auto link-con' >
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
          </div>
         
          <Navbar.Text className="ml-auto">          
            <Link to="/cart" className='navbar-link-cart'>
              <Button className='cart-btn' variant="primary">Cart</Button>
            </Link>
          </Navbar.Text>
          

          <AccountModal className="navbar-link" />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;
