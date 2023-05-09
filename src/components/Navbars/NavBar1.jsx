import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import a from '../images/oxy.svg';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
const NavBar1 = () => {
  const location = useLocation();

  const hideInWhatPage =
    location.pathname === '/whatwedo' ||
    location.pathname === '/project' ||
    location.pathname === '/schoolgate' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';
  const hideInHomePage =
    location.pathname === '/' ||
    location.pathname === '/project' ||
    location.pathname === '/about' ||
    location.pathname === '/schoolgate' ||
    location.pathname === '/contact';
  const hideInWhatAndHomePage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname === '/schoolgate' ||
    location.pathname === '/about' ||
    location.pathname === '/contact';
  const hideInWhatAndHomeAndProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname === '/schoolgate' ||
    location.pathname === '/about' ||
    location.pathname === '/project';
  const hideInWhatAndHomeAndContactProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname === '/schoolgate' ||
    location.pathname === '/contact' ||
    location.pathname === '/project';
  const hideInWhatAndHomeAndContactAndAboutProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/project';
  return (
    <div>
      <Navbar className="pt-4 pb-4" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={a} alt="" className="ohohoh" />
          
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="sure">
              <Nav>
                <div className="story">
                  <div className="loik">
                    <Link to="/project" style={{ textDecoration: 'none' }}>
                      <div className="outfit">Our Project</div>
                    </Link>

                    <Link to="/whatwedo" style={{ textDecoration: 'none' }}>
                      <div className="outfit">What we do</div>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                      <div className="outfit">About Us</div>
                    </Link>

                    <Link to="contact" style={{ textDecoration: 'none' }}>
                      <div className="outfit">Contact Us</div>
                    </Link>
                  </div>

                  <div className="ibe">
                    {hideInWhatPage ? null : (
                      <button className="cafmu">Start Building</button>
                    )}
                    {hideInHomePage ? null : (
                      <button className="cafmu whatwedo">Start Building</button>
                    )}
                    {hideInWhatAndHomePage ? null : (
                      <button className="cafmu project">Start Building</button>
                    )}
                    {hideInWhatAndHomeAndProjectPage ? null : (
                      <button className="cafmu contact">Start Building</button>
                    )}
                    {hideInWhatAndHomeAndContactProjectPage ? null : (
                      <button className="cafmu">Start Building </button>
                    )}
                    {hideInWhatAndHomeAndContactAndAboutProjectPage ? null : (
                      <button className="cafmu daba">Start Building</button>
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
