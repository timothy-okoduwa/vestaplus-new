import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
const HomeFirst = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <Fade direction="down" triggerOnce="true">
            <div>
              <div className="designD">
                <span className="blacjd">We design Digital</span>{' '}
                <span className="bliure">Impactful Products </span>{' '}
              </div>
            </div>
            <div>
              <div className="hearhear">
                We work with establish brands, businesses & startups across the
                world to create awesome products that impact users experience &
                also generate <br /> revenue for the business in return.{' '}
              </div>
              <div className="fjfujf">
                <button className="tenn">Start Building</button>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="tenn2">Contact Us</button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-12 col-lg-5"></div>
      </div>
    </div>
  );
};

export default HomeFirst;
