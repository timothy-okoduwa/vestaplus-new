import React from 'react';
import { Link } from 'react-router-dom';
const FirstCon = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-7">
          <div>
            <div className="designD">
              <span className="blacjd"> Ready to start a </span>{' '}
              <span className="bliure nomore">project? </span>{' '}
            </div>
          </div>
          <div>
            <div className="hearhear">
              Let's build something awesome together!
            </div>
            <div className="emilo mt-3">Email: project@vestarplus.com</div>
            <div className="emilo">Call: +234 802 286 1622 or</div>
            <div className="fjfujf">
              <button className="tenn sbc">Start Building</button>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <button className="tenn2 sbc2">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5"></div>
      </div>
    </div>
  );
};

export default FirstCon;
