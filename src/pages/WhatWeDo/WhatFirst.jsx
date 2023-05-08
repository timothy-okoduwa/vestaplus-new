import React from 'react';
import { Link } from 'react-router-dom';
const WhatFirst = () => {
  return (
    <div className="hands">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div>
            <div className="designD">
              <span className="blacjd">We design </span>{' '}
              <span className="orange">Impactful Products</span>{' '}
            </div>
          </div>
          <div>
            <div className="hearhear">
              We work with establish brands, businesses & startups across the
              world to create awesome products that impact users experience &
              also generate <br /> revenue for the business in return.{' '}
            </div>
            <div className="fjfujf">
              <button className="tenn99">Start Building</button>
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
