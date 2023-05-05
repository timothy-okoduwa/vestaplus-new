import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import a from '../images/oxy.svg';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
const NavBar1 = () => {
  const location = useLocation();

  const hideInWhatPage = location.pathname === '/whatwedo';
  const hideInHomePage = location.pathname === '/';
  return (
    <div>
      <Navbar className="pt-4 pb-4" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
            <img src={a} alt="" className="ohohoh" />
            </Link>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="sure">
              <Nav>
                <div className="story">
                  <div className="loik">
                    <div className="outfit">Our Project</div>
                    <Link to="/whatwedo" style={{ textDecoration: 'none' }}>
                      <div className="outfit">What we do</div>
                    </Link>

                    <div className="outfit">About Us</div>
                    <div className="outfit">Contact Us</div>
                  </div>

                  <div className="ibe">
                    {hideInWhatPage ? null : (
                      <button className="cafmu">Start Building</button>
                    )}
                    {hideInHomePage ? null : (
                      <button className="cafmu whatwedo">Start Building</button>
                    )}
                  </div>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar1;
