import React from 'react';
import { Link } from 'react-router-dom';
const HomeFirst = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <div>
            <div className="designD">
              <span className="blacjd">We are an</span>{' '}
              <span className="bliure change">Innovative Team </span>{' '}
            </div>
          </div>
          <div>
            <div className="hearhear">
              We are a forward thinking product design agency, that uses design,
              innovation and technology to bulid UX products, engaging websites
              and brands for clients world-wide.
            </div>
            <div className="fjfujf">
              <a
                href="https://calendly.com/vestarplus"
                target="_blank"
                rel="noreferrer"
              >
                <button className="tenn tenne">Book 30 Minutes Session</button>
              </a>

              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className="tenn2 stud">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5"></div>
      </div>
    </div>
  );
};

export default HomeFirst;
