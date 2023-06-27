import React from 'react';
import './Nothing.css';
import { Link } from 'react-router-dom';
const Nothing = () => {
  return (
    <div className="container mt-3">
      <div className="biud">
        {/* <div className="wyben">fhfhfh</div> */}
        <div className="four">404</div>
        <div className="borigi">
          <div className="ibe2">
            <Link to="/">
              <button className="cafmu">Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nothing;
