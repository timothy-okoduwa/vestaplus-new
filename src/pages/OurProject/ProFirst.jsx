import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const ProFirst = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <Fade direction="down" triggerOnce="true">
            <div>
              <div className="designD">
                <span className="blacjd">We design Digital</span>{' '}
                <span className="bliure avee"> Impactful Products </span>{' '}
              </div>
            </div>
            <div>
              <div className="hearhear">
                We work with establish brands, businesses & startups across the
                world to create awesome products that impact users experience &
                also generate <br /> revenue for the business in return.{' '}
              </div>
              <div className="fjfujf">
                <button className="tenn sb">Start Building</button>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="tenn2 sb2">Contact Us</button>
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

export default ProFirst;
