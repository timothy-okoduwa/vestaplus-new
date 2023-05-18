import React from 'react';
import { Link } from 'react-router-dom';
const WhatFirst = () => {
  return (
    <div className="hands">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div>
            <div className="designD">
              <span className="blacjd">We deliver amazing</span>{' '}
              <span className="orange"> User Experience Products</span>{' '}
            </div>
          </div>
          <div>
            <div className="hearhear">
              We do everything to the best of our ability by putting your
              <br /> needs first and striving for the most effective solutions
              to
              <br /> your pressing business needs.
            </div>
            <div className="fjfujf">
              <a
                href="https://gsejoahb81c.typeform.com/to/wtht8QUx"
                target="_blank"
                rel="noreferrer"
              >
                <button className="tenn99">Start Building</button>
              </a>

              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className="tenn299">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4"></div>
      </div>
    </div>
  );
};

export default WhatFirst;
