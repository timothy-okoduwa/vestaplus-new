import React from 'react';
import { Link } from 'react-router-dom';
const FirstShow = () => {
  return (
    <div className="hands">
      <div className="row">
        <div className="col-12 col-lg-7">
          <div>
            <div className="designD">
              <span className="blacjd">We Design</span>{' '}
              <span className="bliure sch"> Schoolgate</span>{' '}
            </div>
          </div>
          <div>
            <div className="hearhear">
              We work with establish brands, businesses & startups across the
              world to create awesome products that impact users experience &
              also generate <br /> revenue for the business in return.{' '}
            </div>
            <div className="fjfujf">
              <button className="tenn surv">Start Building</button>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className="tenn2 surv2">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5"></div>
      </div>
    </div>
  );
};

export default FirstShow;
