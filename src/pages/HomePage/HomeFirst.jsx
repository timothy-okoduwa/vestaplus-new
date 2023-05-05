import React from 'react';
import v from '../images/vestar.mp4';
const HomeFirst = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <div>
            <div className="designD">
              <span className="blacjd">We design Digital</span>{' '}
              <span className="bliure"> Human Centered Products</span>{' '}
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
              <button className="tenn2">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5"></div>
      </div>
      <div className="heart">
        <div className="heartofGod">
          <div className="ashes">
            <video src={v} className="ashes" loop autoPlay muted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;
