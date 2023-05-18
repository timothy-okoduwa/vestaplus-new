import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const ProFirst = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-8">
          <Fade direction="down" triggerOnce="true">
            <div>
              <div className="designD">
                <span className="blacjd">We design</span>{' '}
                <span className="bliure avee"> Impactful Products </span>{' '}
              </div>
            </div>
            <div>
              <div className="hearhear">
                We specialise in delivering exceptional user experience<br/> products
                that captivate, engage, and delight users,<br/> elevating their
                digital interactions to new heights
              </div>
              <div className="fjfujf">
                                <a
                  href="https://gsejoahb81c.typeform.com/to/wtht8QUx"
                  target="_blank"
                  rel="noreferrer"
                >
                   <button className="tenn sb">Start Building</button>
                </a>
               
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="tenn2 sb2">Contact Us</button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-12 col-lg-4"></div>
      </div>
    </div>
  );
};

export default ProFirst;
