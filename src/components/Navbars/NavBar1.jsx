import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import a from '../images/oxy.svg'
import Navbar from 'react-bootstrap/Navbar';

const NavBar1 = () => {
  return (
    <div>
      <Navbar className='pt-4 pb-4' expand="lg">
        <Container>
          <Navbar.Brand >
            <img src={a} alt="" className='ohohoh' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="sure">
              <Nav>
                <div className="story">
                  <div className="loik">
                    <div className="outfit">Our Project</div>
                    <div className="outfit">What we do</div>
                    <div className="outfit">About Us</div>
                    <div className="outfit">Contact Us</div>
                  </div>

                  <div className="ibe">
                    <button className="cafmu">Start Building</button>
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
