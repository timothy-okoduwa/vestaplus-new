import React from 'react';
import './Footer.css';
import v from '../images/vp.svg';
import { Fade } from 'react-awesome-reveal';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Footer = ({ prod }) => {
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
    location.pathname === '/create-admin' ||
    location.pathname === '/project-upload' ||
    location.pathname === '/project-uploadx' ||
    location.pathname.startsWith('/404') ||
    location.pathname === '/admin';
  const hideInWhatPage =
    location.pathname === '/whatwedo' ||
    location.pathname === '/project' ||
    location.pathname === '/about' ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname.startsWith('/more') ||
    location.pathname === '/contact';
  const hideInHomePage =
    location.pathname === '/' ||
    location.pathname === '/project' ||
    location.pathname.startsWith('/404') ||
    location.pathname === '/about' ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname.startsWith('/more') ||
    location.pathname === '/contact';
  const hideInWhatAndHomePage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname.startsWith('/404') ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname === '/about' ||
    location.pathname.startsWith('/more') ||
    location.pathname === '/contact';
  const hideInWhatAndHomeAndProductPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname.startsWith('/404') ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname === '/about' ||
    location.pathname.startsWith('/more') ||
    location.pathname === '/project';
  const hideInWhatAndHomeAndContactProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname.startsWith('/404') ||
    location.pathname.startsWith('/more') ||
    location.pathname === '/contact' ||
    location.pathname === '/about' ||
    location.pathname === '/project';
  const hideInWhatAndHomeAndContactAndBlogProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname.startsWith('/more') ||
    location.pathname.startsWith('/404') ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname === '/contact' ||
    location.pathname === '/blog' ||
    location.pathname === '/project';
  const hideInWhatAndHomeAndContactAndAboutProjectPage =
    location.pathname === '/' ||
    location.pathname === '/whatwedo' ||
    location.pathname.startsWith('/404') ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog-read') ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/project';
  return (
    <>
      {hideAll ? null : (
        <div className="grey">
          <div className="container">
            <div className="promises">
              <div>
                <div className="row">
                  <div className="col-12 col-lg-7">
                    <Fade
                      //   duration="6000"
                      triggerOnce="true"
                      direction="up"
                    >
                      <div>
                        <div className="sched">
                          Schedule time to{' '}
                          {hideInWhatPage ? null : (
                            <span className="know">talk with us.</span>
                          )}
                          {hideInHomePage ? null : (
                            <span className="what">talk with us.</span>
                          )}
                          {hideInWhatAndHomePage ? null : (
                            <span className="what projrct">talk with us.</span>
                          )}
                          {hideInWhatAndHomeAndProductPage ? null : (
                            <span className="what contactcc">
                              talk with us.
                            </span>
                          )}
                          {hideInWhatAndHomeAndContactProjectPage ? null : (
                            <span className="know  ">talk with us.</span>
                          )}
                          {hideInWhatAndHomeAndContactAndBlogProjectPage ? null : (
                            <span className="know wiilo ">talk with us.</span>
                          )}
                          {hideInWhatAndHomeAndContactAndAboutProjectPage ? null : (
                            <span className="know dbhu">talk with us.</span>
                          )}
                        </div>
                        <div className="letss">Let’s talk about your goals</div>
                        <div className="reje">
                          {hideInWhatPage ? null : (
                            <a
                              href="https://calendly.com/vestarplus"
                              style={{ textDecoration: 'none', color: 'white' }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="magnify">
                                Book 30 Minutes Session
                              </button>
                            </a>
                          )}
                          {hideInHomePage ? null : (
                            <a
                              href="https://calendly.com/vestarplus"
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                              }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="magnify rehyy">
                                Book 30 Minutes Session
                              </button>
                            </a>
                          )}
                          {hideInWhatAndHomePage ? null : (
                            <a
                              href="https://calendly.com/vestarplus"
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                              }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="magnify whthome">
                                Book 30 Minutes Session
                              </button>
                            </a>
                          )}
                          {hideInWhatAndHomeAndProductPage ? null : (
                            <a
                              href="https://calendly.com/vestarplus"
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                              }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="magnify con">
                                Book 30 Minutes Session
                              </button>
                            </a>
                          )}
                          {hideInWhatAndHomeAndContactProjectPage ? null : (
                            <a
                              href="https://calendly.com/vestarplus"
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                              }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="magnify ">
                                Book 30 Minutes Session
                              </button>
                            </a>
                          )}
                          {hideInWhatAndHomeAndContactAndBlogProjectPage ? null : (
                            <a
                              href="https://calendly.com/vestarplus"
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                              }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="magnify tenne">
                                Book 30 Minutes Session
                              </button>
                            </a>
                          )}
                          {hideInWhatAndHomeAndContactAndAboutProjectPage ? null : (
                            <a
                              href="https://calendly.com/vestarplus"
                              style={{
                                textDecoration: 'none',
                                color: 'white',
                              }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <button className="magnify reda">
                                Book 30 Minutes Session
                              </button>
                            </a>
                          )}
                          {hideInWhatPage ? null : (
                            <Link
                              to="/contact"
                              style={{ textDecoration: 'none' }}
                            >
                              <button className="capmi">Contact Us</button>
                            </Link>
                          )}
                          {hideInHomePage ? null : (
                            <Link
                              to="/contact"
                              style={{ textDecoration: 'none' }}
                            >
                              <button className="capmi ong">Contact Us</button>
                            </Link>
                          )}
                          {hideInWhatAndHomePage ? null : (
                            <Link
                              to="/contact"
                              style={{ textDecoration: 'none' }}
                            >
                              <button className="capmi wathome2">
                                Contact Us
                              </button>
                            </Link>
                          )}
                          {hideInWhatAndHomeAndProductPage ? null : (
                            <Link
                              to="/contact"
                              style={{ textDecoration: 'none' }}
                            >
                              <button className="capmi con2">Contact Us</button>
                            </Link>
                          )}
                          {hideInWhatAndHomeAndContactProjectPage ? null : (
                            <Link
                              to="/contact"
                              style={{ textDecoration: 'none' }}
                            >
                              <button className="capmi ">Contact Us</button>
                            </Link>
                          )}
                          {hideInWhatAndHomeAndContactAndBlogProjectPage ? null : (
                            <Link
                              to="/contact"
                              style={{ textDecoration: 'none' }}
                            >
                              <button className="capmi stud">Contact Us</button>
                            </Link>
                          )}
                          {hideInWhatAndHomeAndContactAndAboutProjectPage ? null : (
                            <Link
                              to="/contact"
                              style={{ textDecoration: 'none' }}
                            >
                              <button className="capmi reda2">
                                Contact Us
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </Fade>
                  </div>
                  <div className="col-12 col-lg-5"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="wituyt">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div>
                      <div>
                        <div className="ijn">
                          <img src={v} alt="" className="my_kige" />
                        </div>

                        <div className="collab">
                          Let's collaborate! Hire our team to build
                          <br /> amazing, user friendly products for
                          <br /> your business.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div>
                      <div className="comppp">Company</div>
                      <Link to="/whatwedo" style={{ textDecoration: 'none' }}>
                        <div className="wghat">What we do</div>
                      </Link>
                      <Link to="/about" style={{ textDecoration: 'none' }}>
                        <div className="wghat">About Us</div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3">
                    <div>
                      <div className="comppp">Resources</div>
                      <Link to="/project" style={{ textDecoration: 'none' }}>
                        <div className="wghat">Projects</div>
                      </Link>

                      <div className="wghat">Products</div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-2">
                    <div>
                      <div className="comppp">Media</div>
                      <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <div className="wghat">Contact us</div>
                      </Link>
                      <Link to="/blog" style={{ textDecoration: 'none' }}>
                        <div className="wghat">Blog</div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <a
                      href="https://dribbble.com/vestarplus"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="dribb">Dribbble</div>
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.behance.net/vestarplus"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="dribb">Behance</div>
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.linkedin.com/company/vestarplus/mycompany/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="dribb">Linkedin</div>
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.instagram.com/vestarplus/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="dribb">Instagram</div>
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://web.facebook.com/vestarplusng"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="dribb">Facebook</div>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="f"></div>
                </div>
                <div className="going">2023 Copyright. Vestarplus</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
