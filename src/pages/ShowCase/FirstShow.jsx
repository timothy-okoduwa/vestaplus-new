import React from 'react';
import { Link } from 'react-router-dom';
const FirstShow = ({ project }) => {
  return project ? (
    <div className="hands">
      <div className="row">
        <div className="col-12 col-lg-7">
          <div>
            <div className="designD">
              <span className="blacjd">We Design</span>{' '}
              <span
                className="bliure sch"
                style={{ color: project.projectNameColor }}
              >
                {' '}
                {project.projectName}
              </span>{' '}
            </div>
          </div>
          <div>
            <div className="hearhear">{project.projectLongText}</div>
            <div className="fjfujf">
                              <a
                  href="https://gsejoahb81c.typeform.com/to/wtht8QUx"
                  target="_blank"
                  rel="noreferrer"
                >
                   <button
                className="tenn surv"
                style={{ background: project.buttoncolor1 }}
              >
                Start Building
              </button>
                </a>
             
              <Link
                to="/contact"
                style={{
                  textDecoration: 'none',
                }}
              >
                <button
                  className="tenn2 surv2"
                  style={{
                    background: project.buttoncolor2,
                    color: project.buttonTextcolor2,
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5"></div>
      </div>
    </div>
  ) : null;
};

export default FirstShow;
