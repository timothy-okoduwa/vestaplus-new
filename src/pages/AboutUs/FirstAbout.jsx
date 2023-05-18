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
                <span className="blacjd">We are an</span>{' '}
                <span className="bliure">Innovative Team </span>{' '}
              </div>
            </div>
            <div>
              <div className="hearhear">
                We are a forward thinking product design agency, that uses
                design,
                <br /> innovation and technology to bulid UX products, engaging
                websites and <br />
                brands for clients world-wide
              </div>
              <div className="fjfujf">
                <a
                  href="https://gsejoahb81c.typeform.com/to/wtht8QUx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="tenn">Start Building</button>
                </a>

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
