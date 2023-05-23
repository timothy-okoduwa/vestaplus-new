import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import a from '../images/oxy.svg';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

const NavBar1 = ({ prod }) => {
  const location = useLocation();
  const projectNames = [];

  if (prod && prod.length) {
    for (let i = 0; i < prod.length; i++) {
      const project = prod[i];
      if (project && project.projectName) {
        projectNames.push(project.projectName);
      }
    }
  }

  const hideAll =
    location.pathname === '/project-upload' ||
    location.pathname === '/create-admin' ||
    location.pathname === '/admin';
  const hideInWhatPage =
    location.pathname === '/whatwedo' ||
    location.pathname === '/project' ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    projectNames.includes(location.pathname.substring(1)) ||
    location.pathname === '/about' ||
    location.pathname === '/contact';
  const hideInHomePage =
    location.pathname === '/' ||
    location.pathname === '/project' ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname === '/about' ||
    projectNames.includes(location.pathname.substring(1)) ||
    location.pathname === '/contact';
  const hideInWhatAndHomePage =
    location.pathname === '/' ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname === '/whatwedo' ||
    projectNames.includes(location.pathname.substring(1)) ||
    location.pathname === '/about' ||
    location.pathname === '/contact';
  const hideInWhatAndHomeAndProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    projectNames.includes(location.pathname.substring(1)) ||
    location.pathname === '/about' ||
    location.pathname === '/project';
  const hideInWhatAndHomeAndContactProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    projectNames.includes(location.pathname.substring(1)) ||
    location.pathname === '/contact' ||
    location.pathname === '/project';
  const hideInWhatAndHomeAndContactAndAboutProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    // location.pathname === `/${user?.projectNames}` ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/project';
  return (
    <>
      {hideAll ? null : (
        <div>
          <Navbar className="pt-3 pb-3" expand="xl">
            <Container>
              <div>
                <Link to="/">
                  <img src={a} alt="" className="ohohoh" />
                </Link>
              </div>
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
                          <Link to="contact">
                            <button className="cafmu">Start Building</button>
                          </Link>
                        )}
                        {hideInHomePage ? null : (
                          <Link to="contact">
                            <button className="cafmu whatwedo">
                              Start Building
                            </button>
                          </Link>
                        )}
                        {hideInWhatAndHomePage ? null : (
                          <Link to="contact">
                            <button className="cafmu project">
                              Start Building
                            </button>
                          </Link>
                        )}
                        {hideInWhatAndHomeAndProjectPage ? null : (
                          <Link to="contact">
                            <button className="cafmu contact">
                              Start Building
                            </button>
                          </Link>
                        )}
                        {hideInWhatAndHomeAndContactProjectPage ? null : (
                          <Link to="contact">
                            <button className="cafmu jaja">Start Building </button>
                          </Link>
                        )}
                        {hideInWhatAndHomeAndContactAndAboutProjectPage ? null : (
                          <Link to="contact">
                            <button className="cafmu daba">
                              Start Building
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default NavBar1;
