import React from 'react';
import { Link } from 'react-router-dom';
const ProFirst = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-8">
          
            <div>
              <div className="designD">
                <span className="blacjd">We design</span>{' '}
                <span className="bliure avee"> Impactful Products </span>{' '}
              </div>
            </div>
            <div>
              <div className="hearhear">
                We specialise in delivering exceptional user experience
                products that captivate, engage, and delight users,
                 elevating their digital interactions to new heights.
              </div>
              <div className="fjfujf">
                <a
                  href="https://calendly.com/vestarplus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="tenn sb">Book 30 Minutes Session</button>
                </a>

                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="tenn2 sb2">Contact Us</button>
                </Link>
              </div>
            </div>
         
        </div>
        <div className="col-12 col-lg-4"></div>
      </div>
    </div>
  );
};

export default ProFirst;
