import React from 'react';
import './Footer.css';
import v from '../images/vp.svg';
import { Fade } from 'react-awesome-reveal';
import {  useLocation } from 'react-router-dom';
const Footer = () => {
      const location = useLocation();

      const hideInWhatPage = location.pathname === '/whatwedo';
      const hideInHomePage = location.pathname === '/';
  return (
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
                    </div>
                    <div className="letss">Let’s talk about your goals</div>
                    <div className="reje">
                      {hideInWhatPage ? null : (
                        <button className="magnify">
                          Book 30 Minutes Session
                        </button>
                      )}
                      {hideInHomePage ? null : (
                        <button className="magnify rehyy">
                          Book 30 Minutes Session
                        </button>
                      )}
                      {hideInWhatPage ? null : (
                        <button className="capmi">Contact Us</button>
                      )}
                      {hideInHomePage ? null : (
                        <button className="capmi ong">Contact Us</button>
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
                    <img src={v} alt="" />
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
                  <div className="wghat">What we do</div>
                  <div className="wghat">About Us</div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div>
                  <div className="comppp">Resources</div>
                  <div className="wghat">Projects</div>
                  <div className="wghat">Products</div>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div>
                  <div className="comppp">Media</div>
                  <div className="wghat">Contact us</div>
                  <div className="wghat">Blog</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="dribb">Dribbble</div>
              </div>
              <div className="col">
                <div className="dribb">Behance</div>
              </div>
              <div className="col">
                <div className="dribb">Linkedin</div>
              </div>
              <div className="col">
                <div className="dribb">Instagram</div>
              </div>
              <div className="col">
                <div className="dribb">Facebook</div>
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
  );
};

export default Footer;
