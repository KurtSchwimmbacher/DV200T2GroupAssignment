import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import UserContext from '../components/UserContext';
import { useContext, useEffect, useState } from 'react';

import axios from 'axios';

import "../styles/NavigationBar.css";

import Logo from '../assets/logo/Logo-3.svg';

// import link
import { Link } from "react-router-dom";
import AccountModal from './AccountModal';

function NavigationBar() {
  const { user } = useContext(UserContext);
  const [userAdmin, setUserAdmin] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userResponse = await axios.get('http://localhost:5000/api/users/');
        setUserAdmin(userResponse.data);
      } catch (error) {
        console.log("error fetching users");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const checkIsAdmin = () => {
      if (user && userAdmin.length > 0) {
        userAdmin.forEach((fetchedUser) => {
          if (fetchedUser.admin && fetchedUser.name === user.name) {
            setIsAdmin(true);
          }
        });
      }
    };

    checkIsAdmin();
  }, [user, userAdmin]);

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
          <Nav className="container-fluid">
            <div className='m-auto link-con'>
              <Nav.Link>
                <Link to="/" className='navbar-link'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/products" className='navbar-link'>
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/community" className='navbar-link'>
                  Community
                </Link>
              </Nav.Link>
              {isAdmin && (
                <Nav.Link>
                  <Link to="/checkouts" className='navbar-link'>
                    Deliveries
                  </Link>
                </Nav.Link>
              )}
            </div>
            <Navbar.Text className="ml-auto">
              <Link to="/cart" className='navbar-link-cart'>
                <Button className='cart-btn' variant="primary">Cart</Button>
              </Link>
            </Navbar.Text>
            <AccountModal className="navbar-link account-link" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
